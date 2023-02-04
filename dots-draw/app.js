let canvas_width = 32;
let canvas_height = 32;
let canvas_content = [];

let draw_active = false;
let draw_start_element = null;
let state_before_selection = null;

const PEN_TOOL = 0,
      SELECT_TOOL = 1;
let tool_active = PEN_TOOL;

/**
 * @type HTMLDivElement
 */
let canvas = null;

let bg_image = null;
let bg_image_ctx = null;

let undo_history = [];
let undo_reverse_index = 0;

let current_filename = "";
let current_file_handle = null;

let bg_image_cache = null;


const DEFAULT_FILENAME = "Untitled.dots";


window.onload = () => {
    canvas = document.getElementById("app_canvas");

    window.addEventListener("contextmenu", event => {
        event.preventDefault();
    })

    window.addEventListener("keydown", event => {
        if (event.ctrlKey && event.key == 'z') {
            event.preventDefault();
            history_undo();
        }
        else if (event.ctrlKey && event.key == 'y') {
            event.preventDefault();
            history_redo();
        }
        else if (event.ctrlKey && event.key == 's') {
            event.preventDefault();
            saveFile();
        }
        else if (event.ctrlKey && event.key == 'o') {
            event.preventDefault();
            openFile();
        }
        else if (event.ctrlKey && event.key == 'e') {
            event.preventDefault();
            exportImage();
        }
        
        if (!isTextInput(event.target)) {
            if (event.ctrlKey && event.key == 'a') {
                event.preventDefault();
                switchTool(SELECT_TOOL);
                draw_type = 0;
                boxSelection(canvas.children[0], canvas.children[canvas.children.length - 1]);
            }
            else if (event.key == '1') {
                event.preventDefault();
                switchTool(PEN_TOOL);
            }
            else if (event.key == '2') {
                event.preventDefault();
                switchTool(SELECT_TOOL);
            }
        }

        if (tool_active == SELECT_TOOL && hasSelection() && !isTextInput(event.target)) {
            if (event.key == 'Escape') {
                event.preventDefault();
                switchTool(PEN_TOOL);
            }
            else if (event.key == 'Delete') {
                event.preventDefault();
                deleteSelection();
                switchTool(PEN_TOOL);
            }
            else if (event.key == 'ArrowRight') {
                event.preventDefault();
                stepMoveSelection(1, 0);
            }
            else if (event.key == 'ArrowLeft') {
                event.preventDefault();
                stepMoveSelection(-1, 0);
            }
            else if (event.key == 'ArrowDown') {
                event.preventDefault();
                stepMoveSelection(0, 1);
            }
            else if (event.key == 'ArrowUp') {
                event.preventDefault();
                stepMoveSelection(0, -1);
            }
        }
    })

    window.onbeforeunload = () => {
        if (undo_history.length <= 1)
            return;

        return false;
    };

    document.body.addEventListener("pointerup", event => {
        if (!draw_active) return;
        draw_active = false;
        canvas_addState();
    })

    const drop_area = document.getElementById("drop_area");

    ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        document.body.addEventListener(eventName, preventDefaults, false);
    })

    ;['dragenter', 'dragover'].forEach(eventName => {
        document.body.addEventListener(eventName, dropArea_active, false);
    })

    ;['dragleave', 'drop'].forEach(eventName => {
        drop_area.addEventListener(eventName, dropArea_inactive, false);
    })

    document.body.addEventListener('drop', openDroppedFile, false)

    let current_state = sessionStorage.getItem("current_state") || "";
    let session_filename = sessionStorage.getItem("current-filename") || DEFAULT_FILENAME;

    document.getElementById("export_color").value = localStorage.getItem("export-color") || "#ffffff";
    document.getElementById("dot_size").value = localStorage.getItem("dot-size") || "3";
    document.getElementById("dot_gap").value = localStorage.getItem("dot-gap") || "0";
    document.getElementById("preview_offset_x").value = localStorage.getItem("preview-offset-x") || "0";
    document.getElementById("preview_offset_y").value = localStorage.getItem("preview-offset-y") || "0";

    document.getElementById("bg_opacity").value = sessionStorage.getItem("bg-opacity") || "20";
    document.getElementById("int_scalar").value = sessionStorage.getItem("int-scalar") || "1";
    document.getElementById("bg_offset_x").value = sessionStorage.getItem("bg-offset-x") || "0";
    document.getElementById("bg_offset_y").value = sessionStorage.getItem("bg-offset-y") || "0";

    document.body.classList.toggle("autofill-mode-light", sessionStorage.getItem("autofill-mode-light") == "true");
    document.getElementById("autofill_cutoff").value = sessionStorage.getItem("autofill-cutoff") || "5";
    document.getElementById("autofill_cutoff").oninput();

    loadBackgroundImage(sessionStorage.getItem("bg-image-uri"), false);
    
    clearCanvas();
    canvas_setState(current_state);
    canvas_addState(current_state);

    initNumberPickers();

    setTimeout(() => {
        updateActiveFilename(session_filename);
    }, 150)

    if ('launchQueue' in window && 'files' in LaunchParams.prototype) {
        launchQueue.setConsumer(async launchParams => {
            if (!launchParams.files.length)
                return;

            const [ fileHandle ] = launchParams.files;
            current_file_handle = fileHandle;
            save_button.disabled = false;

            const file = await fileHandle.getFile();
            const state = await file.text();
            
            loadState(state);
            updateActiveFilename(fileHandle.name);
        });
    }

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js", { scope: '/dots-draw/' });
    }
};


function isTextInput(target) {
    return target.tagName == "INPUT" && (target.type == "text" || target.type == "number" || target.type == "");
}


function preventDefaults(event) {
    event.preventDefault()
    event.stopPropagation()
}

function dropArea_active() {
    document.body.classList.add('drop-area-highlight');
}

function dropArea_inactive() {
    document.body.classList.remove('drop-area-highlight');
}


function newFile(skip_confirm) {
    if (!skip_confirm) {
        const w = prompt('Create new canvas? Width:', canvas_width);
        if (w == null) return;
        const h = prompt('Height:', w);
        if (h == null) return;
        setCanvasDimensions(w, h);
    }

    current_file_handle = null;
    save_button.disabled = true;
    updateActiveFilename(DEFAULT_FILENAME);
    clearCanvas();
    resetUndoHistory();
    canvas_addState();
}


function setCanvasDimensions(w, h) {
    canvas_width = parseInt(w);
    canvas_height = parseInt(h);
    document.body.style.setProperty("--canvas-width", canvas_width);
    document.body.style.setProperty("--canvas-height", canvas_height);
}


function resetUndoHistory() {
    undo_history = [];
    undo_reverse_index = 0;
    history_updateButtons();
}


function updateActiveFilename(filename) {
    current_filename = filename;
    sessionStorage.setItem("current-filename", current_filename);
    document.title = `${current_filename.replace(/\.[^/.]+$/, "")} - Dots-draw`;
}


function clearCanvas() {
    canvas.innerHTML = "";

    canvas.style.setProperty("--canvas-width", canvas_width);
    canvas.style.setProperty("--canvas-height", canvas_height);

    for (let y = 0; y < canvas_height; y++) {
        for (let x = 0; x < canvas_width; x++) {
            const dot_el = document.createElement("div");
            dot_el.title = `x: ${x}, y: ${y}`;
            dot_el.classList.add("dot-item");
            dot_el.dataset.x = x;
            dot_el.dataset.y = y;
            canvas.appendChild(dot_el);

            dot_el.addEventListener("pointerdown", event => {
                draw_type = event.button;
                draw_active = true;
                draw_start_element = dot_el;
                switch (tool_active) {
                    case PEN_TOOL:
                        dot_el.classList.toggle("active", draw_type == 0);
                        break;
                    case SELECT_TOOL:
                        if (draw_type == 0 && dot_el.classList.contains("selected")) {
                            moveSelection(event, dot_el);
                            draw_active = false;
                            break;
                        }
                        state_before_selection = getStateBeforeSelection();
                        dot_el.classList.toggle("selected", draw_type == 0);
                        break;
                }
            })

            dot_el.addEventListener("mousemove", event => {
                if (!draw_active) return;
                if (event.pressure == 0) {
                    draw_active = false;
                    canvas_addState();
                    return;
                }
                switch (tool_active) {
                    case PEN_TOOL:
                        dot_el.classList.toggle("active", draw_type == 0);
                        break;
                    case SELECT_TOOL:
                        boxSelection(draw_start_element, dot_el);
                        break;
                }
            })

            dot_el.addEventListener("pointerenter", () => {
                updateStatus(dot_el.title);
            })

            dot_el.addEventListener("pointerleave", () => {
                updateStatus();
            })
        }
    }
}


function loadState(state) {
    clearCanvas();
    canvas_setState(state);
    resetUndoHistory();
    canvas_addState(state);
}


async function openFile() {
    const [fileHandle] = await window.showOpenFilePicker({
        types: [{
            description: 'Dots-draw File',
            accept: { 'text/plain': ['.dots'] },
        }],
    }).catch(e => {});

    if (!fileHandle)
        return;

    current_file_handle = fileHandle;
    save_button.disabled = false;

    const file = await fileHandle.getFile();
    const state = await file.text();
    loadState(state);
    updateActiveFilename(fileHandle.name);
}

function openDroppedFile(event) {
    let [file, ...rest] = event.dataTransfer.files;
    const last_dot = file.name.lastIndexOf('.');
    const ext = last_dot > 0 ? file.name.substr(last_dot).toLowerCase() : "";
    
    if (ext == ".dots") {
        const reader = new FileReader();
        reader.onload = event => {
            const state = event.target.result;
            loadState(state);
            updateActiveFilename(file.name);
        }
        reader.readAsText(file);
    }
    else if (ext == ".png" || ext == ".jpg" || ext == ".jpeg" || ext == ".bmp" || ext == ".gif") {
        const data_uri = URL.createObjectURL(file);
        loadBackgroundImage(data_uri, true);
    }
}

async function saveAs() {
    const fileHandle = await window.showSaveFilePicker({
        suggestedName: current_filename,
        types: [{
            description: 'Dots-draw File',
            accept: { 'text/plain': ['.dots'] }
        }]
    }).catch(e => {});

    if (!fileHandle)
        return;

    const fileStream = await fileHandle.createWritable();
    await fileStream.write(new Blob([canvas_getState()], {type: "text/plain"}));
    await fileStream.close();

    resetUndoHistory();

    updateActiveFilename(fileHandle.name);
}

async function saveFile() {
    if (!current_file_handle) {
        saveAs();
        return;
    }
    
    const fileStream = await current_file_handle.createWritable();
    await fileStream.write(new Blob([canvas_getState()], {type: "text/plain"}));
    await fileStream.close();

    resetUndoHistory();
}


let backgroundImage = null;


async function importImage() {
    const [fileHandle] = await window.showOpenFilePicker({
        types: [{
            description: 'Image Files',
            accept: { 'text/plain': ['.png', '.jpg', '.jpeg', '.bmp', '.gif'] },
        }],
    }).catch(e => {});

    if (!fileHandle)
        return;

    const file = await fileHandle.getFile();
    const data_uri = URL.createObjectURL(file);
    
    loadBackgroundImage(data_uri, true);
}

function loadBackgroundImage(data_uri, cache) {
    if (!data_uri) {
        clearBackground();
        return;
    }

    bg_image = document.getElementById("bg_image");
    bg_image_ctx = bg_image.getContext("2d", {willReadFrequently: true});

    const img = document.createElement("img");

    img.onload = () => {
        let [w, h] = [img.width, img.height];

        bg_image.width = w;
        bg_image.height = h;
        
        bg_image_ctx.clearRect(0, 0, w, h);
        bg_image_ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);

        bg_image.style.setProperty("--scale", w / canvas_width);
        document.body.classList.add("has-bg-image");

        bg_image_cache = data_uri;

        if (cache) {
            let int_scalar = Math.floor(h / canvas_height);
            
            if (int_scalar <= 0) int_scalar = 1;

            document.getElementById("int_scalar").value = int_scalar;
            updateIntScalar(int_scalar);

            try {
                sessionStorage.setItem("bg-image-uri", bg_image.toDataURL("image/png"));
            }
            catch (_e) {
                sessionStorage.removeItem("bg-image-uri");
            }
        }
        else {
            updateBackgroundImage();
        }
    }

    img.src = data_uri;
    backgroundImage = img;
}


function updateIntScalar(int_scalar) {
    const [ w, h ] = [canvas_width * int_scalar, canvas_height * int_scalar];
    let [ offset_x, offset_y ] = [
        Math.floor((w - bg_image.width) / 2),
        Math.floor((h - bg_image.height) / 2)
    ];
    document.getElementById("bg_offset_x").value = offset_x;
    document.getElementById("bg_offset_y").value = offset_y;
    updateBackgroundImage();
}

function updateBackgroundImage() {
    const opacity = parseInt(document.getElementById("bg_opacity").value) / 100;
    const int_scalar = parseInt(document.getElementById("int_scalar").value);
    const offset_x = parseInt(document.getElementById("bg_offset_x").value);
    const offset_y = parseInt(document.getElementById("bg_offset_y").value);
    bg_image.style.opacity = opacity;
    bg_image.style.setProperty("--int-scalar", int_scalar);
    bg_image.style.setProperty("--offset-x", offset_x);
    bg_image.style.setProperty("--offset-y", offset_y);
    sessionStorage.setItem("bg-opacity", opacity * 100);
    sessionStorage.setItem("int-scalar", int_scalar);
    sessionStorage.setItem("bg-offset-x", offset_x);
    sessionStorage.setItem("bg-offset-y", offset_y);
}

function clearBackground() {
    if (bg_image_ctx)
        bg_image_ctx.clearRect(0, 0, bg_image.width, bg_image.height);
    document.body.classList.remove("has-bg-image");
    backgroundImage = null;
    sessionStorage.removeItem("bg-image-uri");
    sessionStorage.removeItem("int-scalar");
    sessionStorage.removeItem("bg-offset-x");
    sessionStorage.removeItem("bg-offset-y");
}


function canvas_addState(state) {
    if (!state)
        state = canvas_getState();

    prev_state = history_currentState();

    if (prev_state == state)
        return;

    history_add(state);
    updatePreview(state);
    sessionStorage.setItem("current_state", state);
}

function canvas_updateState() {
    const state = history_currentState();
    canvas_setState(state);
    updatePreview(state);
    history_updateButtons();
    removeSelection();
}

function canvas_getState() {
    let s = `${canvas_width}:${canvas_height}:`;
    for (dot_el of canvas.children)
        s += dot_el.classList.contains("active") ? '1' : '0';
    return s;
}

function canvas_getSelectedState() {
    let s = `${canvas_width}:${canvas_height}:`;
    for (dot_el of canvas.children) {
        const active = dot_el.classList.contains("active");
        const selected = dot_el.classList.contains("selected");
        s += !selected ? (!active ? '0' : '1') : (!active ? '2' : '3');
    }
    return s;
}

function canvas_setState(state) {
    if (!state)
        state = `${canvas_width}:${canvas_height}:`;

    const [ w, h, b ] = state.split(":");

    if (canvas_width != w || canvas_height != h) {
        setCanvasDimensions(w, h);
        clearCanvas();
    }

    for (let i = 0; i < canvas.children.length; i++)
        canvas.children[i].classList.toggle("active", i < b.length ? b[i] == '1' : false);

    sessionStorage.setItem("current_state", state);
}

function history_currentState() {
    return undo_history[undo_history.length - 1 - undo_reverse_index]
}

function history_add(state) {
    if (undo_reverse_index > 0 && undo_history.length >= undo_reverse_index) {
        undo_history.splice(undo_history.length - undo_reverse_index, undo_reverse_index);
        undo_reverse_index = 0;
    }
    undo_history.push(state);
    history_updateButtons();
}

function history_undo(only_check) {
    if (undo_history.length - 1 <= undo_reverse_index)
        return false;

    if (only_check) return true;

    undo_reverse_index++;
    canvas_updateState();

    return true;
}

function history_redo(only_check) {
    if (undo_reverse_index == 0)
        return false;

    if (only_check) return true;

    undo_reverse_index--;
    canvas_updateState();

    return true;
}

function history_updateButtons() {
    const button_undo = document.getElementById("button_undo");
    const button_redo = document.getElementById("button_redo");
    button_undo.disabled = !history_undo(true);
    button_redo.disabled = !history_redo(true);
    save_button.disabled = undo_history.length <= 1 || current_file_handle == null;
}


function updateStatus(text) {
    const status_el = document.getElementById("status");
    status_el.innerHTML = text || "";
    status_el.classList.toggle("has-content", !!text);
}


function updatePreview(state) {
    const preview = document.getElementById("preview");
    const export_color = document.getElementById("export_color").value;
    const dot_size = parseInt(document.getElementById("dot_size").value);
    const dot_gap = parseInt(document.getElementById("dot_gap").value);
    const offset_x = parseInt(document.getElementById("preview_offset_x").value);
    const offset_y = parseInt(document.getElementById("preview_offset_y").value);

    if (!state)
        state = history_currentState();
    
    if (!state)
        state = `${canvas_width}:${canvas_height}:`;
    
    const [ w, h, b ] = state.split(":");
    const total_size = dot_size + dot_gap;

    preview.parentElement.style.setProperty("--preview-outer-width", w * total_size + 48);
    preview.parentElement.style.setProperty("--preview-outer-height", h * total_size + 48);

    preview.width = w * total_size + Math.abs(offset_x) * 2;
    preview.height = h * total_size + Math.abs(offset_y) * 2;

    let [sx, sy] = [0, 0];

    if (offset_x > 0) sx = offset_x * 2;
    if (offset_y > 0) sy = offset_y * 2;

    const ctx = preview.getContext("2d");

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            if (b[y * w + x] == '0')
                continue;

            ctx.beginPath();
            ctx.fillStyle = export_color;
            ctx.fillRect(x * total_size + sx, y * total_size + sy, dot_size, dot_size);
        }
    }

    localStorage.setItem("export-color", export_color);
    localStorage.setItem("dot-size", dot_size);
    localStorage.setItem("dot-gap", dot_gap);
    localStorage.setItem("preview-offset-x", offset_x);
    localStorage.setItem("preview-offset-y", offset_y);

    document.getElementById("preview_status").innerHTML = `${preview.width} &times; ${preview.height}`;
}


async function exportImage() {
    const preview = document.getElementById("preview");

    const fileHandle = await window.showSaveFilePicker({
        suggestedName: current_filename.replace(/\.[^/.]+$/, ""),
        types: [{
            description: 'PNG Image',
            accept: { 'image/png': ['.png'] }
        }]
    }).catch(e => {});

    if (!fileHandle)
        return;

    const fileStream = await fileHandle.createWritable();

    preview.toBlob(async blob => {
        await fileStream.write(blob);
        await fileStream.close();
    })
}


let intervalId;

function initNumberPickers() {
    const pickers = document.querySelectorAll("input[type=number]");

    const parse_minmax_property = value => value != '' ? parseInt(value) : -1;

    for (let picker of pickers) {
        const wrapper = picker.parentElement;
        const createButton = (content, value_add, can_add_to) => {
            const btn = document.createElement("button");
            const btn_click = () => {
                const value = parseInt(picker.value);
                if (!can_add_to(value))
                    return;
                picker.value = value + value_add;
                picker.onchange();
            }

            btn.innerHTML = content;
            btn.tabIndex = "-1";
            btn.addEventListener("click", btn_click);
            btn.addEventListener("mousedown", () => {
                intervalId = setTimeout(() => {
                    intervalId = setInterval(btn_click, 100);
                }, 300);
            });
            btn.addEventListener("mouseup", () => {
                clearInterval(intervalId);
            });
            wrapper.appendChild(btn);
        }

        createButton("&minus;", -1, value => {
            const min_value = parse_minmax_property(picker.min);
            if (min_value != -1 && value <= min_value)
                return false;
            return true;
        })

        createButton("&plus;", 1, value => {
            const max_value = parse_minmax_property(picker.max);
            if (max_value != -1 && value >= max_value)
                return false;
            return true;
        })
    }
}


function switchTool(tool) {
    switch (tool) {
        case PEN_TOOL:
            break;
        case SELECT_TOOL:
            break;
        default:
            return;
    }

    removeSelection();
    document.getElementById(`tool_${tool_active}`).classList.remove("active");

    tool_active = tool;

    document.getElementById(`tool_${tool_active}`).classList.add("active");
}


function hasSelection() {
    return document.querySelectorAll(".dot-item.selected").length != 0;
}


function removeSelection() {
    const selected_dots = document.querySelectorAll(".dot-item.selected");

    for (dot of selected_dots)
        dot.classList.remove("selected");
}


function deleteSelection() {
    const selected_dots = document.querySelectorAll(".dot-item.selected");

    for (dot of selected_dots)
        dot.classList.remove("active");

    canvas_addState();

    removeSelection();
}


function boxSelection(src_el, dest_el) {
    const { x: src_x, y: src_y } = src_el.dataset;
    const { x: dest_x, y: dest_y } = dest_el.dataset;
    
    const [ start_x, start_y ] = [Math.min(src_x, dest_x), Math.min(src_y, dest_y)];
    const [ end_x, end_y ] = [Math.max(src_x, dest_x), Math.max(src_y, dest_y)];

    for (let y = start_y; y <= end_y; y++) {
        for (let x = start_x; x <= end_x; x++) {
            canvas.children[y * canvas_width + x].classList.toggle("selected", draw_type == 0);
        }
    }
    
    state_before_selection = getStateBeforeSelection();
}

function getStateBeforeSelection() {
    return removeSelectionFromState(canvas_getState(), canvas_getSelectedState());
}

function removeSelectionFromState(state, selected_state) {
    const [w, h, dst] = state.split(":");
    const [, , src] = selected_state.split(":");

    if (dst.length != src.length)
        return state;

    let merge = "";

    for (let i = 0; i < dst.length; i++) {
        merge += src[i] == '2' || src[i] == '3' ? '0' : dst[i];
    }

    return `${w}:${h}:${merge}`;
}

function moveSelection(event, dot_el) {
    const { x: start_x, y: start_y } = event;
    const selected_state = canvas_getSelectedState();
    const { clientWidth: dot_w, clientHeight: dot_h } = dot_el;
    const state = state_before_selection;

    const move_func = move_event => {
        const { x, y } = move_event;
        const [ move_x, move_y ] = [
            Math.round((x - start_x) / dot_w),
            Math.round((y - start_y) / dot_h)
        ];
        
        applyMove(state, selected_state, move_x, move_y);
    };
    
    dot_el.classList.add("drag-active");
    dot_el.setPointerCapture(event.pointerId);
    dot_el.addEventListener("pointermove", move_func)
    dot_el.addEventListener("pointerup", () => {
        canvas_addState();
        dot_el.classList.remove("drag-active");
        dot_el.removeEventListener("pointermove", move_func);
    })
}

function stepMoveSelection(move_x, move_y) {
    const state = state_before_selection;
    const selected_state = canvas_getSelectedState();
    applyMove(state, selected_state, move_x, move_y);
    canvas_addState();
}

function applyMove(state, selected_state, move_x, move_y) {
    const [w, h, dst] = state.split(":");
    const [, , src] = selected_state.split(":");

    if (canvas_width != w || canvas_height != h)
        return;

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const i = y * w + x;
            const current = dst[i];

            const pos_x = x - move_x;
            const pos_y = y - move_y;

            let selected = current;

            if (pos_x >= 0 && pos_x < w && pos_y >= 0 && pos_y < h)
                selected = src[pos_y * w + pos_x];

            if (selected == '0' || selected == '1') {
                canvas.children[i].classList.toggle("active", current == '1');
                canvas.children[i].classList.remove("selected");
            }
            else {
                canvas.children[i].classList.toggle("active", selected == '3');
                canvas.children[i].classList.add("selected");
            }
        }
    }

    sessionStorage.setItem("current_state", state);
}


let auto_fill_dots = [];

function autoFill_showPreview() {
    if (bg_image_ctx == null)
        return;

    const int_scalar = parseInt(sessionStorage.getItem("int-scalar"));
    const offset_x = parseInt(sessionStorage.getItem("bg-offset-x"));
    const offset_y = parseInt(sessionStorage.getItem("bg-offset-y"));
    const autofill_mode_light = document.body.classList.contains("autofill-mode-light");
    const autofill_cutoff = parseInt(document.getElementById("autofill_cutoff").value);

    sessionStorage.setItem("autofill-mode-light", autofill_mode_light);
    sessionStorage.setItem("autofill-cutoff", autofill_cutoff);
    autoFill_hidePreview();

    const cutoff = autofill_cutoff / 100;

    const [sx, sy, sw, sh] = [-offset_x, -offset_y, canvas_width * int_scalar, canvas_height * int_scalar];
    const image_data = bg_image_ctx.getImageData(sx, sy, sw, sh);

    for (let y = 0; y < canvas_height; y++) {
        for (let x = 0; x < canvas_width; x++) {
            const [xi, yi] = [x * int_scalar, y * int_scalar];
            const {average, brightness} = getAverageBrightness(image_data, xi, yi, int_scalar);
            const alpha = average[3];

            if (alpha < 10 ) continue;
            if ((autofill_mode_light && brightness < cutoff) || (!autofill_mode_light && brightness > cutoff)) continue;

            const i = y * canvas_width + x;
    
            if (canvas.children[i])
                canvas.children[i].classList.add("autofill-preview");
        }
    }
}

function getAverageBrightness(image_data, x, y, int_scalar) {
    let avg = new Uint32Array([0, 0, 0, 0]);
    let count = 0;

    for (let yo = 0; yo < int_scalar; yo++) {
        for (let xo = 0; xo < int_scalar; xo++) {
            const c = colorAtCoords(image_data, x + xo, y + yo);
            avg = [avg[0] + c[0], avg[1] + c[1], avg[2] + c[2], avg[3] + c[3]];
            count++;
        }
    }

    if (count > 1)
        avg = avg.map(value => value / count);

        
    let [r, g, b, a] = avg;
        
    a /= 255;
    r *= a;
    g *= a;
    b *= a;
        
    const brightness = (r * 299 + g * 587 + b * 114) / 1000 / 255;
        
    return {average: avg, brightness};
}

function colorAtCoords(image_data, x, y) {
    const i = (y * image_data.width + x) * 4;
    return image_data.data.slice(i, i + 4);
}

function averageRGB([r1, g1, b1, a1], [r2, g2, b2, a2]) {
    return [Math.sqrt((r1**2 + r2**2) / 2), Math.sqrt((g1**2 + g2**2) / 2), Math.sqrt((b1**2 + b2**2) / 2), Math.sqrt((a1**2 + a2**2) / 2)];
}

function autoFill_hidePreview() {
    const autofill_dots = document.querySelectorAll(".dot-item.autofill-preview");

    for (dot of autofill_dots)
        dot.classList.remove("autofill-preview");
}

function autoFill_apply() {
    const autofill_dots = document.querySelectorAll(".dot-item.autofill-preview");

    for (dot of autofill_dots) {
        dot.classList.remove("autofill-preview");
        dot.classList.add("active");
    }

    canvas_addState();
}
