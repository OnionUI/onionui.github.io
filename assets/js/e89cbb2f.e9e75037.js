"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(3117),i=(n(7294),n(3905));const r={sidebar_position:1,slug:"/installation",description:"Official installation guide"},o=void 0,l={unversionedId:"Getting Started/Installation",id:"version-4.0/Getting Started/Installation",title:"Installation",description:"Official installation guide",source:"@site/versioned_docs/version-4.0/Getting Started/Installation.md",sourceDirName:"Getting Started",slug:"/installation",permalink:"/docs/4.0/installation",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/versioned_docs/version-4.0/Getting Started/Installation.md",tags:[],version:"4.0",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/installation",description:"Official installation guide"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/4.0/"},next:{title:"Features",permalink:"/docs/4.0/features"}},s={},p=[{value:'<sup><img align="left" src="https://user-images.githubusercontent.com/44569252/189428439-d70d00ac-3b1b-416f-a8fb-b47c8c6cead2.png" width="54" /></sup>Check your firmware',id:"check-your-firmware",level:2},{value:'<sup><img align="left" src="https://user-images.githubusercontent.com/44569252/179302769-4169e57a-860f-4c0e-8792-007e7557ba48.png" width="54" /></sup>Download the installation files',id:"download-the-installation-files",level:2},{value:'<sup><img align="left" src="https://user-images.githubusercontent.com/44569252/179306127-e8a2c99c-a078-46b0-9561-47abf5c16208.png" width="54" /></sup>Installing (on an empty SD card)',id:"installing-on-an-empty-sd-card",level:2},{value:"Step 1: Preparing the SD card (only necessary for first use)",id:"step-1-preparing-the-sd-card-only-necessary-for-first-use",level:3},{value:"Step 2: Copy the installation files and boot up your device to begin the installation",id:"step-2-copy-the-installation-files-and-boot-up-your-device-to-begin-the-installation",level:3},{value:"Step 3: Copy over your bios and rom files",id:"step-3-copy-over-your-bios-and-rom-files",level:3},{value:'<sup><img align="left" src="https://user-images.githubusercontent.com/44569252/179321292-8198613d-380c-4022-8ce6-ea020cc9b347.png" width="54" /></sup>Upgrading (from stock or Onion)',id:"upgrading-from-stock-or-onion",level:2},{value:"Step 1: Copy the installation files",id:"step-1-copy-the-installation-files",level:3},{value:"Step 2: Boot up your device to begin the installation",id:"step-2-boot-up-your-device-to-begin-the-installation",level:3},{value:"Step 3: Check that your files are in the correct folders",id:"step-3-check-that-your-files-are-in-the-correct-folders",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/98862735/179318051-39abe99e-79eb-43da-9778-aa9b4f6d1b28.png",alt:"Onions5"})),(0,i.kt)("h2",{id:"check-your-firmware"},(0,i.kt)("sup",null,(0,i.kt)("img",{align:"left",src:"https://user-images.githubusercontent.com/44569252/189428439-d70d00ac-3b1b-416f-a8fb-b47c8c6cead2.png",width:"54"})),"Check your firmware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Important:")," The April 2022 firmware from Miyoo (version ",(0,i.kt)("inlineCode",{parentName:"li"},"202204******"),") is needed for Onion v3.10 and above."),(0,i.kt)("li",{parentName:"ul"},"You can check your current version in ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," \u203a ",(0,i.kt)("inlineCode",{parentName:"li"},"Device Info")," \u203a ",(0,i.kt)("inlineCode",{parentName:"li"},"Version"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Most devices produced after July 2022 will already have the latest firmware."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"*Info:")," The firmware is the backend part of the OS, which lives inside your device. Onion on the other hand is a frontend that will stay fresh on your SD card.*")))))),(0,i.kt)("table",{align:"center"},(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/189426364-9984efe1-08f1-4c85-94aa-d48546ca0c45.png",width:"40"})),(0,i.kt)("td",null,(0,i.kt)("p",null,"We can't take responsibility if your device is bricked in the process of",(0,i.kt)("br",{parentName:"p"}),"\n","upgrading the firmware. Take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/16885275/170205258-8add4be7-1a1e-4ae5-a8f2-cb13c6703e06.png"},(0,i.kt)("em",{parentName:"a"},"firmware upgrade guide")),"."),(0,i.kt)("p",null,"If you can't or don't want to update the firmware, there are other alternatives",(0,i.kt)("br",{parentName:"p"}),"\n","like installing an older version of Onion or MiniUI.")))),(0,i.kt)("h2",{id:"download-the-installation-files"},(0,i.kt)("sup",null,(0,i.kt)("img",{align:"left",src:"https://user-images.githubusercontent.com/44569252/179302769-4169e57a-860f-4c0e-8792-007e7557ba48.png",width:"54"})),"Download the installation files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OnionUI/Onion/releases/latest"},"latest version of Onion")," from the release page.")),(0,i.kt)("h2",{id:"installing-on-an-empty-sd-card"},(0,i.kt)("sup",null,(0,i.kt)("img",{align:"left",src:"https://user-images.githubusercontent.com/44569252/179306127-e8a2c99c-a078-46b0-9561-47abf5c16208.png",width:"54"})),"Installing (on an empty SD card)"),(0,i.kt)("h3",{id:"step-1-preparing-the-sd-card-only-necessary-for-first-use"},"Step 1: Preparing the SD card (only necessary for first use)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Stick to using SD cards from reputable brands (e.g. SanDisk or Samsung).",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"The SD card included with your Miyoo Mini is known to be slow, and will likely ruin your experience and/or data.")))),(0,i.kt)("li",{parentName:"ul"},"Format your SD card as ",(0,i.kt)("inlineCode",{parentName:"li"},"FAT32"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," This is not the same format as ",(0,i.kt)("inlineCode",{parentName:"p"},"exFAT"),".\nIf your SD card is larger than 32 GB, we recommended using a tool like ",(0,i.kt)("a",{parentName:"p",href:"http://ridgecrop.co.uk/index.htm?guiformat.htm"},"guiformat")," or ",(0,i.kt)("a",{parentName:"p",href:"https://rufus.ie/"},"rufus"),".")))),(0,i.kt)("h3",{id:"step-2-copy-the-installation-files-and-boot-up-your-device-to-begin-the-installation"},"Step 2: Copy the installation files and boot up your device to begin the installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Extract the contents of the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OnionUI/Onion/releases/latest"},(0,i.kt)("inlineCode",{parentName:"a"},"Onion-v4.x.x.zip"))," file and copy everything to your SD card."),(0,i.kt)("li",{parentName:"ul"},"The installation will begin when you boot up your Miyoo Mini."),(0,i.kt)("li",{parentName:"ul"},"When the installation is done, press any button and the device will turn off.")),(0,i.kt)("h3",{id:"step-3-copy-over-your-bios-and-rom-files"},"Step 3: Copy over your bios and rom files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy your bios files into the ",(0,i.kt)("inlineCode",{parentName:"li"},"BIOS")," folder (from ",(0,i.kt)("inlineCode",{parentName:"li"},"\\RetroArch\\.retroarch\\system")," on the Miyoo SD card).  "),(0,i.kt)("li",{parentName:"ul"},"Copy your roms into their respective folder in ",(0,i.kt)("inlineCode",{parentName:"li"},"Roms")," (see the ",(0,i.kt)("em",{parentName:"li"},"[","[Emulators]","]")," page for more information).  "),(0,i.kt)("li",{parentName:"ul"},"Do NOT delete the ",(0,i.kt)("inlineCode",{parentName:"li"},".tmp_update")," folder, despite its name this must stay on your SD card.  ")),(0,i.kt)("h2",{id:"upgrading-from-stock-or-onion"},(0,i.kt)("sup",null,(0,i.kt)("img",{align:"left",src:"https://user-images.githubusercontent.com/44569252/179321292-8198613d-380c-4022-8ce6-ea020cc9b347.png",width:"54"})),"Upgrading (from stock or Onion)"),(0,i.kt)("table",{align:"center"},(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/189432421-c3dba93b-c8c3-4456-b244-c252563ae829.png",width:"40"})),(0,i.kt)("td",null,(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"When upgrading, your save states, in-game saves, roms, bios files, and",(0,i.kt)("br",{parentName:"strong"}),"configs will carry over to the updated system.")),(0,i.kt)("p",null,"For some systems, ex. ",(0,i.kt)("em",{parentName:"p"},"gpSP"),", save states won't always work after upgrading,",(0,i.kt)("br",{parentName:"p"}),"\n","please ",(0,i.kt)("strong",{parentName:"p"},"make sure to create in-game saves")," before upgrading, then you can",(0,i.kt)("br",{parentName:"p"}),"\n","delete any non-working save states after upgrading.")))),(0,i.kt)("h3",{id:"step-1-copy-the-installation-files"},"Step 1: Copy the installation files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Extract the contents of the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OnionUI/Onion/releases/latest"},(0,i.kt)("inlineCode",{parentName:"a"},"Onion-v4.x.x.zip"))," file and copy everything to your SD card.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Click "Yes" when prompted to overwrite (or "Merge" if you\'re on Mac).')))),(0,i.kt)("h3",{id:"step-2-boot-up-your-device-to-begin-the-installation"},"Step 2: Boot up your device to begin the installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The installation will begin when you boot up your Miyoo Mini."),(0,i.kt)("li",{parentName:"ul"},"If you've already got Onion installed, you'll get prompted with 3 choices:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Update (keep settings):")," This will update Onion, RetroArch, emulators, and apps."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reinstall (reset settings):")," Will install everything as above, but will additionally reset all settings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Update OS/RetroArch only:")," Only update Onion system files and RetroArch.",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"*Emulators, apps, and configs will stay untouched.")," This can possibly yield some incompatibilities, depending on which version you're upgrading from.*"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"*Note:"),' If you\'re upgrading from v3.9 or below, we recommend you choose "Reinstall".*'),(0,i.kt)("li",{parentName:"ul"},"When the installation is done, press any button and the device will turn off.")),(0,i.kt)("h3",{id:"step-3-check-that-your-files-are-in-the-correct-folders"},"Step 3: Check that your files are in the correct folders"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If they're not already in place, make sure to put your bios files in the ",(0,i.kt)("inlineCode",{parentName:"li"},"BIOS")," folder and roms in their respective subfolder inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"Roms")," folder (see the ",(0,i.kt)("em",{parentName:"li"},"[","[Emulators]","]")," page for more information, here you'll find the ",(0,i.kt)("a",{parentName:"li",href:"emulators#rom-folders---quick-reference"},"Rom Folders")," table)."),(0,i.kt)("li",{parentName:"ul"},"Despite its name, the ",(0,i.kt)("inlineCode",{parentName:"li"},".tmp_update")," folder must stay on your SD card.")),(0,i.kt)("table",{align:"center"},(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/189427507-27e87caf-2331-485c-a1f4-0f6b250712c8.png",width:"40"})),(0,i.kt)("td",null,(0,i.kt)("p",null,"If you experience any issues during the install, try copying over the installation",(0,i.kt)("br",{parentName:"p"}),"\n","files again and use another upgrade option (you can skip copying the ",(0,i.kt)("inlineCode",{parentName:"p"},"BIOS"),",",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Icons"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Themes")," folders)."),(0,i.kt)("p",null,"If you still have issues after trying the reinstall option, you may have to reformat",(0,i.kt)("br",{parentName:"p"}),"\n","your SD card (remember to backup the ",(0,i.kt)("inlineCode",{parentName:"p"},"Roms")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Saves")," folders).")))))}d.isMDXComponent=!0}}]);