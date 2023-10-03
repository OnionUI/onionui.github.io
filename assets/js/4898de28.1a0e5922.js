"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8244],{9359:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(7294),a=t(9960),s=t(5769);function r(e){let{children:n,href:t,icon:r}=e;return o.createElement(a.Z,{href:t},o.createElement(s.Z,null,r),o.createElement("span",null,n))}},7577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(3117),a=(t(7294),t(3905)),s=t(9359);const r={slug:"/advanced/combining-systems"},i="Combining systems or cores",c={unversionedId:"guides/advanced-guides/combining-systems",id:"guides/advanced-guides/combining-systems",title:"Combining systems or cores",description:"combined-systems-example.zip",source:"@site/docs/08-guides/01-advanced-guides/02-combining-systems.mdx",sourceDirName:"08-guides/01-advanced-guides",slug:"/advanced/combining-systems",permalink:"/docs/advanced/combining-systems",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/08-guides/01-advanced-guides/02-combining-systems.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/advanced/combining-systems"},sidebar:"tutorialSidebar",previous:{title:"Scraping artwork for games",permalink:"/docs/advanced/scraping"},next:{title:"CHDMAN",permalink:"/docs/advanced/chdman"}},l={},d=[{value:"Step 1: Set the default core",id:"step-1-set-the-default-core",level:2},{value:"Step 2.a: Select core based on file extension",id:"step-2a-select-core-based-on-file-extension",level:2},{value:"Step 2.b: Select core based on subfolders",id:"step-2b-select-core-based-on-subfolders",level:2},{value:"Step 2.c: Select core based on keywords",id:"step-2c-select-core-based-on-keywords",level:2},{value:"Step 3: Launch RetroArch with the selected core",id:"step-3-launch-retroarch-with-the-selected-core",level:2}],p={toc:d},m="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"combining-systems-or-cores"},"Combining systems or cores"),(0,a.kt)("admonition",{title:"Example files",type:"note"},(0,a.kt)(s.Z,{href:"https://github.com/OnionUI/Onion/files/9717818/combined-systems-example.zip",icon:"folder_zip",mdxType:"IconLink"},"combined-systems-example.zip")),(0,a.kt)("p",null,"Below is an example ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.sh")," script for combining different systems or cores inside one Emu/Roms folder. To get started you can copy any of the subfolders inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Emu"),", as long as it contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.sh")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," file, or you can download the zip provided below."),(0,a.kt)("p",null,"To set the name of the system/collection edit the label inside ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json"),", replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"My Label")," with the name you want. You also need to make sure the rom and image paths are pointing to the right folder in ",(0,a.kt)("inlineCode",{parentName:"p"},"Roms"),". You can change the names of the folders ",(0,a.kt)("inlineCode",{parentName:"p"},"Emu/EXAMPLE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Roms/EXAMPLE"),", replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"EXAMPLE")," with whatever name you want (the name shouldn't contain any spaces, preferably you should only use the characters ",(0,a.kt)("inlineCode",{parentName:"p"},"A-Z")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"0-9"),")."),(0,a.kt)("p",null,"The example is made up of three different core selection methods, you can include one or more of them depending on your needs. To find the correct core names, you can lookup the filename in ",(0,a.kt)("inlineCode",{parentName:"p"},"RetroArch/.retroarch/cores"),"."),(0,a.kt)("h2",{id:"step-1-set-the-default-core"},"Step 1: Set the default core"),(0,a.kt)("p",null,"Edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.sh")," to contain the following (changing out the core names and keywords to fit your specific use-case):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",1:!0,className:"language-sh",metastring:'title="Emu/EXAMPLE/launch.sh (part 1 of 5)"',title:'"Emu/EXAMPLE/launch.sh',"(part":!0,of:!0,'5)"':!0},'#!/bin/sh\necho $0 $*\nprogdir=`dirname "$0"`\nhomedir=`dirname "$1"`\n\n# Set the default core\ncore="mednafen_supafaust_libretro.so"\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," variable is initialized with the default core name, which will be used for unknown file extensions. Remember to either clear the ",(0,a.kt)("inlineCode",{parentName:"p"},"extlist")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," file, or add all the supported extensions (be sure to add the lower- and uppercase versions)."),(0,a.kt)("h2",{id:"step-2a-select-core-based-on-file-extension"},"Step 2.a: Select core based on file extension"),(0,a.kt)("p",null,"Below is the first method of choosing a core for the rom you want to launch. It's purely based on the file extension of the rom, and will only work if the cores you are choosing between use different file extensions. E.g. here we're creating a games folder that can contain PSX, SNES, and PC-Engine games."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",2:!0,className:"language-sh",metastring:'title="Emu/EXAMPLE/launch.sh (part 2 of 5)"',title:'"Emu/EXAMPLE/launch.sh',"(part":!0,of:!0,'5)"':!0},'# Select core based on file extension\ncase `echo "$(basename "$1")" | awk -F. \'{print tolower($NF)}\'` in\n    iso|cue|img|mdf|pbp|toc|cbn|m3u|ccd|chd)\n        core="pcsx_rearmed_libretro.so"\n        ;;\n    sfc|smc)\n        core="mednafen_supafaust_libretro.so"\n        ;;\n    pce)\n        core="mednafen_pce_fast_libretro.so"\n        ;;\n    *)\n        ;;\nesac\n')),(0,a.kt)("h2",{id:"step-2b-select-core-based-on-subfolders"},"Step 2.b: Select core based on subfolders"),(0,a.kt)("p",null,"Another way to select cores is by checking the name of the subfolder it is in. This will solve the problem of different cores accepting the same files. In our example we can know detect which core to use for games located in different subfolders. The PlayStation core will be used for roms located in ",(0,a.kt)("inlineCode",{parentName:"p"},"Roms/EXAMPLE/PS")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Roms/EXAMPLE/PSX"),", and the SNES core will be used for the ",(0,a.kt)("inlineCode",{parentName:"p"},"SFC")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"SNES")," subfolders, etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",3:!0,className:"language-sh",metastring:'title="Emu/EXAMPLE/launch.sh (part 3 of 5)"',title:'"Emu/EXAMPLE/launch.sh',"(part":!0,of:!0,'5)"':!0},'# Select core based on name of containing folder\ncase `echo "$(basename "$homedir")" | awk \'{print toupper($0)}\'` in\n    PS|PSX)\n        core="pcsx_rearmed_libretro.so"\n        ;;\n    SFC|SNES)\n        core="mednafen_supafaust_libretro.so"\n        ;;\n    PCE|PCECD)\n        core="mednafen_pce_fast_libretro.so"\n        ;;\n    *)\n        ;;\nesac\n')),(0,a.kt)("h2",{id:"step-2c-select-core-based-on-keywords"},"Step 2.c: Select core based on keywords"),(0,a.kt)("p",null,"A third way to select a core, is to check for keywords in the filename. Below I've made a switch case that selects a core based on different abbreviations in parentheses. To add more abbreviations be sure to add ",(0,a.kt)("inlineCode",{parentName:"p"},'*"([ABBR])"*')," with a ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," as separator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",4:!0,className:"language-sh",metastring:'title="Emu/EXAMPLE/launch.sh (part 4 of 5)"',title:'"Emu/EXAMPLE/launch.sh',"(part":!0,of:!0,'5)"':!0},'# Select core based on parentheses in filename\ncase `echo "$(basename "$1")" | awk \'{print toupper($0)}\'` in\n    *"(PS)"*|*"(PSX)"*)\n        core="pcsx_rearmed_libretro.so"\n        ;;\n    *"(SFC)"*|*"(SNES)"*)\n        core="mednafen_supafaust_libretro.so"\n        ;;\n    *"(PCE)"*|*"(PCECD)"*)\n        core="mednafen_pce_fast_libretro.so"\n        ;;\n    *)\n        ;;\nesac\n')),(0,a.kt)("h2",{id:"step-3-launch-retroarch-with-the-selected-core"},"Step 3: Launch RetroArch with the selected core"),(0,a.kt)("p",null,"Lastly, we need to launch RetroArch with the selected core."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",5:!0,className:"language-sh",metastring:'title="Emu/EXAMPLE/launch.sh (part 5 of 5)"',title:'"Emu/EXAMPLE/launch.sh',"(part":!0,of:!0,'5)"':!0},'cd /mnt/SDCARD/RetroArch/\nHOME=/mnt/SDCARD/RetroArch/ ./retroarch -v -L ".retroarch/cores/$core" "$1"\n')))}h.isMDXComponent=!0}}]);