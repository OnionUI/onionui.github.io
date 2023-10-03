"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(3117),o=(n(7294),n(3905));const a={slug:"/ports"},i="Ports collection",l={unversionedId:"ports-collection/index",id:"ports-collection/index",title:"Ports collection",description:"The Ports Collection in Onion V4.1 has been completely redone and now includes 61 game ports!",source:"@site/docs/05-ports-collection/index.md",sourceDirName:"05-ports-collection",slug:"/ports",permalink:"/docs/ports",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/05-ports-collection/index.md",tags:[],version:"current",frontMatter:{slug:"/ports"},sidebar:"tutorialSidebar",previous:{title:"Rom folders - Quick reference",permalink:"/docs/emulators/folders"},next:{title:"Multiplayer",permalink:"/docs/multiplayer"}},s={},p=[{value:"Installing a port",id:"installing-a-port",level:3},{value:"Common file structure",id:"common-file-structure",level:4},{value:"Migrating ports from Onion versions prior to 4.1.0",id:"migrating-ports-from-onion-versions-prior-to-410",level:3},{value:"How to add your own ports (for advanced users)",id:"how-to-add-your-own-ports-for-advanced-users",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ports-collection"},"Ports collection"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("img",{parentName:"em",src:"https://user-images.githubusercontent.com/98862735/177056415-02a5f05e-7e95-4184-900a-c0e7945d9207.png",alt:null}))),(0,o.kt)("p",null,"The Ports Collection in Onion V4.1 has been completely redone and now includes 61 game ports!",(0,o.kt)("br",{parentName:"p"}),"\n","All the necessary files (except licensed game files) are now hosted in its own repository."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OnionUI/Ports-Collection"},"Go to Ports Collection \u279c")),(0,o.kt)("table",{align:"center"},(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},(0,o.kt)("a",{href:"https://user-images.githubusercontent.com/44569252/227540219-bf2734a3-9686-45d9-a32e-6ad20aa56d07.png"},(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/227540283-5551c998-7bc9-4a89-af96-ac7a3de7db98.png"})))),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center",valign:"top"},(0,o.kt)("p",null,(0,o.kt)("i",null,"Click the image to view it in full size"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"24 free game ports are offered as complete packs"),(0,o.kt)("li",{parentName:"ul"},"37 game ports are available through the collection of game engines, and you are only required to supply the licensed data files from the original game"),(0,o.kt)("li",{parentName:"ul"},"Box arts are also included"),(0,o.kt)("li",{parentName:"ul"},"Pre-configured config files are included - which gives you the best settings and uniform key mapping for FPS games (",(0,o.kt)("em",{parentName:"li"},"credit: axcelon"),")")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("i",null,(0,o.kt)("b",null,"Click to see FPS key mapping")),(0,o.kt)("sub",null," (By axcelon)")),(0,o.kt)("table",null,(0,o.kt)("td",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Generic Layout:\n===============\nL1                                    R1\nStrafe left                           Strafe right                           \nL2                                    R2\nPrevious weapon                           Next weapon\n\n\n            \u2191                                    X\n       Move forward                           Interact\n\n   \u2190                  \u2192                  Y                  A\nTurn left         Turn right         Shoot          Jump/Strafe/etc.\n\n            \u2193                                    B\n        Move backward                            Run\n\n\n         Select                              Start\n         Map/other                           Pause\n\n                           Menu\n                           Quick switcher\n\n\n-------------------------------------------------------------------------------------\n\n\nQuake Layout:\n=============\nL1                                    R1\nStrafe left                           Strafe right                           \nL2                                    R2\nLook up                                    Look down\n\n\n            \u2191                                    X\n        Move forward                           Freelook\n\n    \u2190                  \u2192                Y                  A\n Turn left         Turn right         Shoot           Change weapon\n\n            \u2193                                    B\n       Move backward                            Jump\n\n\n         Select                                    Start\n         Walk toggle                               Pause\n\n                           Menu\n                       Quick switcher\n\n-------------------------------------------------------------------------------------\n\n\nDuke3D Layout:\n==============\nL1                                    R1\nStrafe left                           Strafe right                           \nALT\nMap\nL2                                    R2\nLast weapon used                  Quick kick\n\nALT\nUse inventory\n\n            \u2191                                    X\n         Move forward                           Interact\n         ALT                                    ALT\n         Inventory right                        Aim up\n   \u2190                  \u2192                  Y                  A\n   Turn left         Turn right         Shoot                  Crouch\n   ALT                  ALT             ALT                  \n   Prev. weapon         Next weapon     Center view\n            \u2193                                    B\n        Move backward                           Jump\n        ALT                                     ALT\n        Inventory left                          Aim down\n\n\n        Select                                    Start\n       Modifier (ALT)                           Quickturn\n\n                           Menu\n                           Pause\n\n")),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/189995592-9d9e4702-e237-40a2-a0b7-b5e4578f0d7d.png"})))),(0,o.kt)("h3",{id:"installing-a-port"},"Installing a port"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OnionUI/Ports-Collection"},"The ports repository")," contains individual ",(0,o.kt)("inlineCode",{parentName:"p"},"7z")," files for each port, as well as one ",(0,o.kt)("inlineCode",{parentName:"p"},"7z")," file containing all ports."),(0,o.kt)("p",null,"To install these you just have to extract the contents of the archive to the root of your SD card (merging the folders)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Licensed game files are not included for the game engines, you will need to supply the necessary game files yourself. These are detailed (along with any necessary subfolder structure) in the ",(0,o.kt)("inlineCode",{parentName:"li"},"_required_files.txt")," file, within each ",(0,o.kt)("inlineCode",{parentName:"li"},"Roms/PORTS/Games/[Game folder]/")," .  "),(0,o.kt)("li",{parentName:"ul"},"For freely available (unlicensed) ports, all files required to run the game are included (these will not have a ",(0,o.kt)("inlineCode",{parentName:"li"},"_required_files.txt")," file).  ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Notes"),(0,o.kt)("br",{parentName:"p"}),"\n","Ensure you have enabled Ports Collection in ",(0,o.kt)("inlineCode",{parentName:"p"},"Apps")," \u203a ",(0,o.kt)("inlineCode",{parentName:"p"},"Package Manager")," \u203a ",(0,o.kt)("inlineCode",{parentName:"p"},"Verified"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Also see ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ifBQ-1KC570"},"this helpful video tutorial")," by ",(0,o.kt)("em",{parentName:"p"},"Retro Breeze"),"  ")),(0,o.kt)("h4",{id:"common-file-structure"},"Common file structure"),(0,o.kt)("table",null,(0,o.kt)("td",null,(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcc1",(0,o.kt)("inlineCode",{parentName:"li"},"Roms/PORTS/"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcc1",(0,o.kt)("inlineCode",{parentName:"li"},"Games/"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcc1",(0,o.kt)("inlineCode",{parentName:"li"},"[Game folder]/"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcc4",(0,o.kt)("inlineCode",{parentName:"li"},"_required_files.txt")),(0,o.kt)("li",{parentName:"ul"},"\ud83c\udf81",(0,o.kt)("inlineCode",{parentName:"li"},"[Port files]")," ",(0,o.kt)("sub",null,(0,o.kt)("sup",null,"(required)"))),(0,o.kt)("li",{parentName:"ul"},"..."),(0,o.kt)("li",{parentName:"ul"},"\u2795",(0,o.kt)("inlineCode",{parentName:"li"},"[Add files specified in _required_files.txt here]")," ",(0,o.kt)("sub",null,(0,o.kt)("sup",null,"(required)"))))))),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcc1",(0,o.kt)("inlineCode",{parentName:"li"},"Imgs/"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ud83d\uddbc\ufe0f",(0,o.kt)("inlineCode",{parentName:"li"},"[Game name].png")," ",(0,o.kt)("sub",null,(0,o.kt)("sup",null,"(optional)"))))),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcc1",(0,o.kt)("inlineCode",{parentName:"li"},"Manuals/"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcd6",(0,o.kt)("inlineCode",{parentName:"li"},"[Game name].pdf")," ",(0,o.kt)("sub",null,(0,o.kt)("sup",null,"(optional)"))))),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcc1",(0,o.kt)("inlineCode",{parentName:"li"},"Shortcuts/"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcc1",(0,o.kt)("inlineCode",{parentName:"li"},"[Category]/"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcc4",(0,o.kt)("inlineCode",{parentName:"li"},"[Game name].notfound")," ",(0,o.kt)("sub",null,(0,o.kt)("sup",null,"(required)")))))))))))),(0,o.kt)("h3",{id:"migrating-ports-from-onion-versions-prior-to-410"},"Migrating ports from Onion versions prior to 4.1.0"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Rename your existing "Roms/PORTS" folder into something like Roms/PORTS_OLD  '),(0,o.kt)("li",{parentName:"ol"},"Update Onion to version 4.1.0 or later (the latest release is recommended) (see ",(0,o.kt)("a",{parentName:"li",href:"installation#upgrading-from-stock-or-onion"},"upgrade guide"),").  "),(0,o.kt)("li",{parentName:"ol"},'Enable "Ports Collection" in ',(0,o.kt)("inlineCode",{parentName:"li"},"Apps")," \u203a ",(0,o.kt)("inlineCode",{parentName:"li"},"Package Manager")," \u203a ",(0,o.kt)("inlineCode",{parentName:"li"},"Verified"),".  "),(0,o.kt)("li",{parentName:"ol"},'Download the "the full Ports-Collection" from ',(0,o.kt)("a",{parentName:"li",href:"https://github.com/OnionUI/Ports-Collection"},"the official repository")," (first link in the description).  "),(0,o.kt)("li",{parentName:"ol"},"Extract the archive to the root of your SD card.  "),(0,o.kt)("li",{parentName:"ol"},"Manually populate each ",(0,o.kt)("inlineCode",{parentName:"li"},"Roms/PORTS/Games/[Game folder]/")," with your old assets, as detailed in the ",(0,o.kt)("inlineCode",{parentName:"li"},"_required_files.txt")," file for each.  "),(0,o.kt)("li",{parentName:"ol"},"We have pre-configured many things, so during your copy paste of your assets, do not overwrite the existing files.  "),(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("inlineCode",{parentName:"li"},"~import ports")," script from the ports games list : it will refresh the list of ports which are present.  ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Notes:"),(0,o.kt)("br",{parentName:"p"}),"\n","Also see ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ifBQ-1KC570"},"this helpful video tutorial")," by ",(0,o.kt)("em",{parentName:"p"},"Retro Breeze"),(0,o.kt)("br",{parentName:"p"}),"\n","Once you have verified all of your Ports are launching correctly, you may remove your old, renamed Ports folder from step 1   ")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"how-to-add-your-own-ports-for-advanced-users"},"How to add your own ports (for advanced users)"),(0,o.kt)("p",null,"Ports are now launched with the script included in their own shortcut.\nThese shortcut scripts are standardized in 3 different kind : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Standalone port launcher (for example ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OnionUI/Ports-Collection/blob/main/Hocoslamfy/Roms/PORTS/Shortcuts/Reflex/Hocoslamfy.notfound"},"Hocoslamfy"),")"),(0,o.kt)("li",{parentName:"ul"},"Retroarch port launcher (for example ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OnionUI/Ports-Collection/blob/main/Dinothawr/Roms/PORTS/Shortcuts/Puzzle%20games/Dinothawr.notfound"},"Dinothawr"),")"),(0,o.kt)("li",{parentName:"ul"},"Python port launcher (for example ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OnionUI/Ports-Collection/blob/main/Double%20Cross%20v.2.0%20(PyGame)/Roms/PORTS/Shortcuts/Puzzle%20games/Double%20Cross%20v.2.0%20(PyGame).notfound"},"Double Cross"),")")),(0,o.kt)("p",null,"Please always use one of these 3 scripts as a template to add your own port."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Descriptions of the scripts settings :")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GameName")," : the name that will displayed in the Onion Time Tracker app  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GameDir")," : the name of the directory which contains your game assets ",(0,o.kt)("inlineCode",{parentName:"li"},"Roms/PORTS/Games/[Game folder]/"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GameExecutable")," : the filename of the binary that will be launched from the GameDir directory  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GameDataFile")," : the file in the GameDir directory which will be used to detect the presence of the game when running ",(0,o.kt)("inlineCode",{parentName:"li"},"~Import ports")," script from the rom list. If it is not specified then ",(0,o.kt)("inlineCode",{parentName:"li"},"GameExecutable")," will be used for port detection.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"KillAudioserver")," set it to 1 if your port requires to kill audioserver (it will be restored automatically when you close your port after)  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PerformanceMode")," set it to 1 if you use a demanding port  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Arguments")," : use this field to parameter additional args to the launch command line. (See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OnionUI/Ports-Collection/blob/main/Duke%20nukem%203D%20(eduke32)/Roms/PORTS/Shortcuts/FPS%20-%20Duke%20Collection%20(eduke32)/Duke%20nukem%203D%20(eduke32).notfound"},"Duke Nukem")," as example)  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"touch /tmp/disable_menu_button")," : use this flag only if you want to disable the monitoring of menu button pressing but Onion keymon, the you can remap the menu button in your port. (Useful in games which requires many buttons). Don't forget to insert ",(0,o.kt)("inlineCode",{parentName:"li"},"rm -f /tmp/disable_menu_button")," at the end of your script.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"running command line")," : Do not modify this (it is standardized)   ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Specific to retroarch script :")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Core")," : then name of the core that will be used without ",(0,o.kt)("inlineCode",{parentName:"li"},"_libretro.so"),", for example ",(0,o.kt)("inlineCode",{parentName:"li"},"ecwolf")," for Wolfenstein  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RomDir")," : similar to ",(0,o.kt)("inlineCode",{parentName:"li"},"GameDir")," : it is the path where your rom is located in ",(0,o.kt)("inlineCode",{parentName:"li"},"Roms/PORTS/Games/[Game folder]/"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RomFile")," : it is the name of the rom that will be passed as a parameter to the retroarch core, will be also used to detect the presence of the game when running ",(0,o.kt)("inlineCode",{parentName:"li"},"~Import ports")," script from the rom list. (the ",(0,o.kt)("inlineCode",{parentName:"li"},"Core")," will be used for detection if not specified).  ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Notes about the ",(0,o.kt)("inlineCode",{parentName:"strong"},"~Import ports")," script :"),(0,o.kt)("br",{parentName:"p"}),"\n","The import script reads the content of each shortcut (",(0,o.kt)("inlineCode",{parentName:"p"},".port")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".notfound"),") files to find the field ",(0,o.kt)("inlineCode",{parentName:"p"},"GameDataFile"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},'GameDataFile="CP01.MAP"')," for example. If the file ",(0,o.kt)("inlineCode",{parentName:"p"},"CP01.MAP")," exists in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Roms/PORTS/Games/[Game folder]/")," directory, then the shortcut is renamed with ",(0,o.kt)("inlineCode",{parentName:"p"},".port")," extension and will be displayed in the roms list otherwise it will be named with ",(0,o.kt)("inlineCode",{parentName:"p"},".notfound"),".")))}c.isMDXComponent=!0}}]);