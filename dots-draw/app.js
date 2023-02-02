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

let undo_history = [];
let undo_reverse_index = 0;

let current_filename = "";


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
        else if (event.ctrlKey && event.key == 'a') {
            event.preventDefault();
            switchTool(SELECT_TOOL);
            draw_type = 0;
            boxSelection(canvas.children[0], canvas.children[canvas.children.length - 1]);
        }
        else if (!isTextInput(event.target) && event.key == '1') {
            event.preventDefault();
            switchTool(PEN_TOOL);
        }
        else if (!isTextInput(event.target) && event.key == '2') {
            event.preventDefault();
            switchTool(SELECT_TOOL);
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

    document.getElementById("bg_opacity").value = sessionStorage.getItem("bg-opacity") || "20";
    document.getElementById("int_scalar").value = sessionStorage.getItem("int-scalar") || "1";
    document.getElementById("bg_offset_x").value = sessionStorage.getItem("bg-offset-x") || "0";
    document.getElementById("bg_offset_y").value = sessionStorage.getItem("bg-offset-y") || "0";

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
    return target.tagName == "INPUT";
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
    if (!skip_confirm && !confirm('Create new canvas?'))
        return;

    updateActiveFilename(DEFAULT_FILENAME);
    resetUndoHistory();
    clearCanvas();
    canvas_addState();
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
    resetUndoHistory();
    canvas_setState(state);
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

async function saveFile() {
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

    updateActiveFilename(fileHandle.name);
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

    const bg_image = document.getElementById("bg_image");
    const ctx = bg_image.getContext("2d");
    const img = document.createElement("img");

    img.onload = () => {
        bg_image.width = img.width;
        bg_image.height = img.height;
        
        ctx.clearRect(0, 0, bg_image.width, bg_image.height);
        ctx.drawImage(img, 0, 0);

        bg_image.style.setProperty("--scale", bg_image.width / canvas_width);
        document.body.classList.add("has-bg-image");

        if (cache) {
            let int_scalar = Math.floor(img.height / canvas_height);
            document.getElementById("int_scalar").value = int_scalar;
            updateIntScalar(int_scalar);

            sessionStorage.setItem("bg-image-uri", bg_image.toDataURL("image/png"));
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
    const bg_image = document.getElementById("bg_image");
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
    const bg_image = document.getElementById("bg_image");
    const ctx = bg_image.getContext("2d");
    ctx.clearRect(0, 0, bg_image.width, bg_image.height);
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
    for (dot_el of canvas.children)
        s += dot_el.classList.contains("selected") ? dot_el.classList.contains("active") ? '1' : '0' : '2';
    return s;
}

function canvas_setState(state) {
    if (!state)
        state = `${canvas_width}:${canvas_height}:`;

    const [ w, h, b ] = state.split(":");

    if (canvas_width != w || canvas_height != h) {
        canvas_width = w;
        canvas_height = h;
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

    if (!state)
        state = history_currentState();
    
    if (!state)
        state = `${canvas_width}:${canvas_height}:`;
    
    const [ w, h, b ] = state.split(":");
    const total_size = dot_size + dot_gap;

    preview.width = w * total_size;
    preview.height = h * total_size;

    const ctx = preview.getContext("2d");

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            if (b[y * w + x] == '0')
                continue;

            ctx.beginPath();
            ctx.fillStyle = export_color;
            ctx.fillRect(x * total_size, y * total_size, dot_size, dot_size);
        }
    }

    localStorage.setItem("export-color", export_color);
    localStorage.setItem("dot-size", dot_size);
    localStorage.setItem("dot-gap", dot_gap);

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


function initNumberPickers() {
    const pickers = document.querySelectorAll("input[type=number]");

    for (let picker of pickers) {
        const wrapper = picker.parentElement;

        const minus_btn = document.createElement("button");
        minus_btn.innerHTML = "&minus;";
        minus_btn.tabIndex = "-1";
        minus_btn.addEventListener("click", () => {
            const value = parseInt(picker.value);
            const min_value = picker.min != '' ? parseInt(picker.min) : -1;
            if (min_value != -1 && value <= min_value)
                return;
            picker.value = value - 1;
            picker.onchange();
        })
        wrapper.appendChild(minus_btn);

        const plus_btn = document.createElement("button");
        plus_btn.innerHTML = "&plus;";
        plus_btn.tabIndex = "-1";
        plus_btn.addEventListener("click", () => {
            const value = parseInt(picker.value);
            const max_value = picker.max != '' ? parseInt(picker.max) : -1;
            if (max_value != -1 && value >= max_value)
                return;
            picker.value = value + 1;
            picker.onchange();
        })
        wrapper.appendChild(plus_btn);
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
        merge += src[i] != '2' ? '0' : dst[i];
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
}

function applyMove(state, selected_state, move_x, move_y) {
    if (!state)
        state = `${canvas_width}:${canvas_height}:`;

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

            let selected = '2';

            if (pos_x >= 0 && pos_x < w && pos_y >= 0 && pos_y < h)
                selected = src[pos_y * w + pos_x];

            if (selected == '2') {
                canvas.children[i].classList.toggle("active", current == '1');
                canvas.children[i].classList.remove("selected");
            }
            else {
                canvas.children[i].classList.toggle("active", selected == '1');
                canvas.children[i].classList.add("selected");
            }
        }
    }

    sessionStorage.setItem("current_state", state);
}