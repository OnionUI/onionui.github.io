"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4777],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,k=c["".concat(i,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},62982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(3901),l=a(54244);a(32492);const s={slug:"release-notes/4.3.0",authors:["aemiii91","schmurtz","totofaki","xk","tgecko"],tags:["release-notes","stable"],image:"./assets/banner-release-4.3.png"},i="Release notes: Onion V4.3",p={permalink:"/blog/release-notes/4.3.0",source:"@site/blog/release-notes/2024-02-24-release-notes-4.3.0/index.mdx",title:"Release notes: Onion V4.3",description:"Official release notes for Onion V4.3.0",date:"2024-02-24T00:00:00.000Z",formattedDate:"February 24, 2024",tags:[{label:"release-notes",permalink:"/blog/tags/release-notes"},{label:"stable",permalink:"/blog/tags/stable"}],hasTruncateMarker:!0,authors:[{name:"Aemiii91",title:"Onion Core Team",url:"https://github.com/Aemiii91",imageURL:"https://github.com/Aemiii91.png",key:"aemiii91"},{name:"Schmurtz",title:"Onion Core Team",url:"https://github.com/schmurtzm",imageURL:"https://github.com/schmurtzm.png",key:"schmurtz"},{name:"Totofaki",title:"Onion Core Team",url:"https://github.com/Sichroteph",imageURL:"https://github.com/Sichroteph.png",key:"totofaki"},{name:"XK",title:"Onion Core Team",url:"https://github.com/XK9274",imageURL:"https://github.com/XK9274.png",key:"xk"},{name:"tGecko",title:"Onion Core Team",url:"https://github.com/tGecko",imageURL:"https://github.com/tGecko.png",key:"tgecko"}],frontMatter:{slug:"release-notes/4.3.0",authors:["aemiii91","schmurtz","totofaki","xk","tgecko"],tags:["release-notes","stable"],image:"./assets/banner-release-4.3.png"},nextItem:{title:"Celebrating FOSS and the Onion community",permalink:"/blog/celebrating"}},m={image:a(92119).Z,authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},c=[{value:"Features",id:"features",level:2},{value:"Core Onion features &amp; apps",id:"core-onion-features--apps",level:3},{value:"Miyoo Mini v4 560p support",id:"miyoo-mini-v4-560p-support",level:4},{value:"Screen recorder",id:"screen-recorder",level:4},{value:"VNC server",id:"vnc-server",level:4},{value:"Blue light filter",id:"blue-light-filter",level:4},{value:"PWM frequency adjustment",id:"pwm-frequency-adjustment",level:4},{value:"Battery Monitor",id:"battery-monitor",level:4},{value:"M3U playlist generator",id:"m3u-playlist-generator",level:4},{value:"App list sorting tool",id:"app-list-sorting-tool",level:4},{value:"Automatic selection of emulators in Package Manager",id:"automatic-selection-of-emulators-in-package-manager",level:4},{value:"Mute background music option",id:"mute-background-music-option",level:4},{value:"Disable automatic time restore",id:"disable-automatic-time-restore",level:4},{value:"Updated Filebrowser to 2.26",id:"updated-filebrowser-to-226",level:4},{value:"Profile-specific Themes, Favorites and Recent lists",id:"profile-specific-themes-favorites-and-recent-lists",level:4},{value:"Startup and checkoff scripts",id:"startup-and-checkoff-scripts",level:4},{value:"Emulators and cores",id:"emulators-and-cores",level:3},{value:"Nintendo DS / DraStic (new standalone emulator)",id:"nintendo-ds--drastic-new-standalone-emulator",level:4},{value:"Pico-8 Wrapper (new standalone emulator)",id:"pico-8-wrapper-new-standalone-emulator",level:4},{value:"GnGeo (new standalone emulator)",id:"gngeo-new-standalone-emulator",level:4},{value:"ScummVM 2.9.0 Standalone (updated version of ScummVM project)",id:"scummvm-290-standalone-updated-version-of-scummvm-project",level:4},{value:"DuckStation Xtreme Amped by KMFD (new core)",id:"duckstation-xtreme-amped-by-kmfd-new-core",level:4},{value:"Super Bros War / Super Cat Wars core (new core)",id:"super-bros-war--super-cat-wars-core-new-core",level:4},{value:"LowRes NX (new core)",id:"lowres-nx-new-core",level:4},{value:"PuzzleScript (new core)",id:"puzzlescript-new-core",level:4},{value:"PUAE Xtreme Amped (New core)",id:"puae-xtreme-amped-new-core",level:4},{value:"Caprice32 (new core)",id:"caprice32-new-core",level:4},{value:"Gong / Pong (new core)",id:"gong--pong-new-core",level:4},{value:"Frodo (new core)",id:"frodo-new-core",level:4},{value:"Beetle PCE (new core)",id:"beetle-pce-new-core",level:4},{value:"Fix vice x64 loading time",id:"fix-vice-x64-loading-time",level:4},{value:"Update CrocoDS core (f1b4b91) (+keyboard fix)",id:"update-crocods-core-f1b4b91-keyboard-fix",level:4},{value:"Update chailove core (69000df)",id:"update-chailove-core-69000df",level:4},{value:"Update Lutro core (09a134e)",id:"update-lutro-core-09a134e",level:4},{value:"Fixes and minor improvements",id:"fixes-and-minor-improvements",level:2},{value:"Updated/added languages",id:"updatedadded-languages",level:2},{value:"Added",id:"added",level:3},{value:"Updated",id:"updated",level:3}],u=(d="Truncate",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const k={toc:c},g="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:m.image}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Official release notes for Onion V4.3.0")),(0,r.kt)("p",null,"This release includes new systems, such as Nintendo DS and PICO-8, a lot of new and updated apps such as the Battery Monitor and the Blue light filter,\nsupport for the v4 Miyoo Mini's 560p screen as well as lots of other new features and fixes."),(0,r.kt)(u,{mdxType:"Truncate"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)(o.Z,{toc:c,maxHeadingLevel:4,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("h3",{id:"core-onion-features--apps"},"Core Onion features & apps"),(0,r.kt)(l.Z,{mdxType:"Card"},(0,r.kt)("h4",{id:"miyoo-mini-v4-560p-support"},"Miyoo Mini v4 560p support"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tGecko",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"tGecko")))),(0,r.kt)("p",null,"Support for the Miyoo Mini v4 with its 560p screen has been added.",(0,r.kt)("br",{parentName:"p"}),"\n","The resolution is now automatically and 560p is the default resolution for RetroArch and NDS/Drastic on the Miyoo Mini v4.\nA system to allow ports to use the new resolution is also in place, but has to be added to the ports manually.")),(0,r.kt)(l.Z,{readMore:"../../docs/apps/screen-recorder",mdxType:"Card"},(0,r.kt)("h4",{id:"screen-recorder"},"Screen recorder"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XK9274",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"XK9274")))),(0,r.kt)("p",null,"A tool to record the screen, this tool will not offer perfect performance in games, but can be used to record/demonstrate apps and features.")),(0,r.kt)(l.Z,{readMore:"../../docs/network/vnc",mdxType:"Card"},(0,r.kt)("h4",{id:"vnc-server"},"VNC server"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XK9274",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"XK9274")))),(0,r.kt)("p",null,"Remote display and remote control of your Miyoo Mini Plus from your computer thanks to VNC.")),(0,r.kt)(l.Z,{readMore:"../../docs/apps/blue-light-filter",mdxType:"Card"},(0,r.kt)("h4",{id:"blue-light-filter"},"Blue light filter"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XK9274",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"XK9274")))),(0,r.kt)("p",null,"Control the blue light filter schedule, intensity, or state.")),(0,r.kt)(l.Z,{readMore:"../../docs/apps/tweaks#pwm-frequency",mdxType:"Card"},(0,r.kt)("h4",{id:"pwm-frequency-adjustment"},"PWM frequency adjustment"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tGecko",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"tGecko")))),(0,r.kt)("p",null,"Added an option in Tweaks app to control the backlights PWM frequency. This can help reduce the buzzing sound coming from the speaker.")),(0,r.kt)(l.Z,{readMore:"../../docs/apps/battery-tool",mdxType:"Card"},(0,r.kt)("h4",{id:"battery-monitor"},"Battery Monitor"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sichroteph",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"Sichroteph")))),(0,r.kt)("p",null,"Onion Battery Tool enables to track and monitor historical battery charge while also providing an estimate of the remaining gaming time.")),(0,r.kt)(l.Z,{readMore:"../../docs/faq#what-is-the-optimal-way-to-organize-multi-disk-games",mdxType:"Card"},(0,r.kt)("h4",{id:"m3u-playlist-generator"},"M3U playlist generator"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"This Tweaks app tool will generate automatically the m3u playlist files for multi-disc games.")),(0,r.kt)(l.Z,{readMore:"../../docs/apps/tweaks#sort-applist-a-z",mdxType:"Card"},(0,r.kt)("h4",{id:"app-list-sorting-tool"},"App list sorting tool"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XK9274",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"XK9274")))),(0,r.kt)("p",null,"This new tool included in Tweaks app will sort your Onion app list A-Z or Z-A.")),(0,r.kt)(l.Z,{readMore:"../../docs/apps/package-manager",mdxType:"Card"},(0,r.kt)("h4",{id:"automatic-selection-of-emulators-in-package-manager"},"Automatic selection of emulators in Package Manager"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aemiii91",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"aemiii91")))),(0,r.kt)("p",null,"Package Manager allows to auto select emulators that has roms present.")),(0,r.kt)(l.Z,{readMore:"../../docs/apps/tweaks#mute-background-music",mdxType:"Card"},(0,r.kt)("h4",{id:"mute-background-music-option"},"Mute background music option"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/theUnBurn",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"theUnBurn")))),(0,r.kt)("p",null,"Mute background music for themes.")),(0,r.kt)(l.Z,{mdxType:"Card"},(0,r.kt)("h4",{id:"disable-automatic-time-restore"},"Disable automatic time restore"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tGecko",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"tGecko")))),(0,r.kt)("p",null,"Normally, Onion saves the system time at shutdown and restores it on bootup. This new option disables the restore part.\nTo use it, create the file ",(0,r.kt)("inlineCode",{parentName:"p"},"SD/.tmp_update/config/.noTimeRestore"))),(0,r.kt)(l.Z,{readMore:"https://github.com/OnionUI/Onion/pull/1309",mdxType:"Card"},(0,r.kt)("h4",{id:"updated-filebrowser-to-226"},"Updated Filebrowser to 2.26"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/edmunek",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"edmunek"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XK9274",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"XK9274")))),(0,r.kt)("p",null,"Update Filebrowser to 2.26 to fix CSS issue.")),(0,r.kt)(l.Z,{readMore:"",mdxType:"Card"},(0,r.kt)("h4",{id:"profile-specific-themes-favorites-and-recent-lists"},"Profile-specific Themes, Favorites and Recent lists"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sichroteph",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"Sichroteph")))),(0,r.kt)("p",null,"Themes favorites and rencent lists are now associated to the current profile only (This was already the case for saves only). It allows to have your own configuration between your main profile and the guest profile.")),(0,r.kt)(l.Z,{mdxType:"Card"},(0,r.kt)("h4",{id:"startup-and-checkoff-scripts"},"Startup and checkoff scripts"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dragoonDorise",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"dragoonDorise")))),(0,r.kt)("p",null,"An easy way to run scripts at Onion's startup and just before powering off. ")),(0,r.kt)("h3",{id:"emulators-and-cores"},"Emulators and cores"),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/nds",mdxType:"Card"},(0,r.kt)("h4",{id:"nintendo-ds--drastic-new-standalone-emulator"},"Nintendo DS / DraStic (new standalone emulator)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by Steward-Fu, integration by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sichroteph",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"Sichroteph"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"A very awaited emulator, integrated in Onion with attention : we made it compatible with Game Switcher, auto save states, auto resume at boot ...")),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/pico-8-standalone",mdxType:"Card"},(0,r.kt)("h4",{id:"pico-8-wrapper-new-standalone-emulator"},"Pico-8 Wrapper (new standalone emulator)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XK9274",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"XK9274")))),(0,r.kt)("p",null,'An awesome port of the official Pico-8 engine. It offers an optimal compatibility and the native Pico-8 online store called "Splore". (In order to use the wrapper, you need to have previously purchased PICO-8)')),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/neogeo#notes-on-gngeo",mdxType:"Card"},(0,r.kt)("h4",{id:"gngeo-new-standalone-emulator"},"GnGeo (new standalone emulator)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"By bankbank , ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"GnGeo is an Neo-Geo MVS and Neo-Geo AES standalone emulator. It supports GNO files and has the particularity of starting very quickly with great performances.")),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/scummvm",mdxType:"Card"},(0,r.kt)("h4",{id:"scummvm-290-standalone-updated-version-of-scummvm-project"},"ScummVM 2.9.0 Standalone (updated version of ScummVM project)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/XK9274",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"XK9274"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"This version of ScummVM 2.9.0 standalone offers awesome performances compared to the RetroArch core performances.")),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/psx#notes-on-duckstationswanstation",mdxType:"Card"},(0,r.kt)("h4",{id:"duckstation-xtreme-amped-by-kmfd-new-core"},"DuckStation Xtreme Amped by KMFD (new core)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"Duckstation is slower than PCSX, however it allows to run some games like ",(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/MiyooMini/comments/190avun/swanstation_fromage/"},"Fromage"),". Could be interesting on rhythm games too.")),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/superbroswar",mdxType:"Card"},(0,r.kt)("h4",{id:"super-bros-war--super-cat-wars-core-new-core"},"Super Bros War / Super Cat Wars core (new core)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"Super Mario War / Super Cat Wars is a fan-made multiplayer Super Mario Bros. ")),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/lowresnx",mdxType:"Card"},(0,r.kt)("h4",{id:"lowres-nx-new-core"},"LowRes NX (new core)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"A great 2D game engine with many free games available.")),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/puzzlescript",mdxType:"Card"},(0,r.kt)("h4",{id:"puzzlescript-new-core"},"PuzzleScript (new core)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"A great core to run many retro puzzles games. Many puzzles available from the PuzzleScript community !")),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/amiga",mdxType:"Card"},(0,r.kt)("h4",{id:"puae-xtreme-amped-new-core"},"PUAE Xtreme Amped (New core)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"A new alternative PUAE core made by KMFD. This Commodore core is Available in Expert section of Package Manager.")),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/cpc",mdxType:"Card"},(0,r.kt)("h4",{id:"caprice32-new-core"},"Caprice32 (new core)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"Captice32 is a core for Amstrad CPC, note that it offers better performances and compatibility than crocods core. Available in Expert section of Package Manager.")),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/pong",mdxType:"Card"},(0,r.kt)("h4",{id:"gong--pong-new-core"},"Gong / Pong (new core)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"Gong is a port of Pong game to libretro. This core is included in Ports section of Onion and doesn't require any bios or any additional rom to work.")),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/c64",mdxType:"Card"},(0,r.kt)("h4",{id:"frodo-new-core"},"Frodo (new core)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"Frodo is an alternative core for Commodore 64.")),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/turbografx",mdxType:"Card"},(0,r.kt)("h4",{id:"beetle-pce-new-core"},"Beetle PCE (new core)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,'"Beetle PCE" is a PC Engine core slower than "Beetle PCE Fast" but more accurate.')),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/c64",mdxType:"Card"},(0,r.kt)("h4",{id:"fix-vice-x64-loading-time"},"Fix vice x64 loading time"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"If vice x64 was long to load, this fix could help. Note that using .crt files is also recommanded for fast boot.")),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/cpc",mdxType:"Card"},(0,r.kt)("h4",{id:"update-crocods-core-f1b4b91-keyboard-fix"},"Update CrocoDS core (f1b4b91) (+keyboard fix)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"This CPC core has two modifications for Onion :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretro/libretro-crocods/issues/18"},"Fix keyboard to QWERTY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretro/libretro-crocods/blob/f1b4b91291ba1e8e7c0be02269cd0d75c7fa71b9/crocods-core/platform.c#L1399"},"Change default internal config path to BIOS folder instead of Retroarch folder.")))),(0,r.kt)(l.Z,{readMore:"../../docs/emulators/chailove",mdxType:"Card"},(0,r.kt)("h4",{id:"update-chailove-core-69000df"},"Update chailove core (69000df)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"Chailove is a game engine emulator inspired by L\xd6VE engine. This update improve game compatibility.")),(0,r.kt)(l.Z,{readMore:"/docs/emulators/Lutro",mdxType:"Card"},(0,r.kt)("h4",{id:"update-lutro-core-09a134e"},"Update Lutro core (09a134e)"),(0,r.kt)("sup",null,(0,r.kt)("p",null,"by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("p",null,"Lutro is a game engine emulator . This update fix the compatibility with Tetris.")),(0,r.kt)("h2",{id:"fixes-and-minor-improvements"},"Fixes and minor improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix MainUI's sighandler - ",(0,r.kt)("em",{parentName:"li"},"by ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/tGecko",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"tGecko")))),(0,r.kt)("li",{parentName:"ul"},"Fix network check - ",(0,r.kt)("em",{parentName:"li"},"by ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/codeudan",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"codeudan")))),(0,r.kt)("li",{parentName:"ul"},"Fix hint no screenshoot images after back from first image - ",(0,r.kt)("em",{parentName:"li"},"by ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/codeudan",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"codeudan")))),(0,r.kt)("li",{parentName:"ul"},"OTA: format release date and size info of new version zip - ",(0,r.kt)("em",{parentName:"li"},"by ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/codeudan",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"codeudan")))),(0,r.kt)("li",{parentName:"ul"},"Fixed low battery warning overlapping other battery icons - ",(0,r.kt)("em",{parentName:"li"},"by ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("li",{parentName:"ul"},"Fix lockups entering apps or games - ",(0,r.kt)("em",{parentName:"li"},"by ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/XK9274",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"XK9274"))))),(0,r.kt)("h2",{id:"updatedadded-languages"},"Updated/added languages"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Magyar")," (Hungarian) - ",(0,r.kt)("em",{parentName:"li"},"credit: ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/dszollosinagy",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"dszollosinagy")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Norsk")," (Norwegian) - ",(0,r.kt)("em",{parentName:"li"},"credit: ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/kasperlosa",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"kasperlosa"))," and ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/jakobkg",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"jakobkg")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rom\xe2n\u0103")," (Romanian) - ",(0,r.kt)("em",{parentName:"li"},"credit: ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/rcarausu",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"rcarausu"))))),(0,r.kt)("h3",{id:"updated"},"Updated"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ud55c\uad6d\uc5b4")," (Korean) - ",(0,r.kt)("em",{parentName:"li"},"credit: ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/DDinghoya",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"DDinghoya")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Portugu\xeas")," (Portuguese) - ",(0,r.kt)("em",{parentName:"li"},"credit: ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/BlueKore",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"BlueKore")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fran\xe7ais")," (French) - ",(0,r.kt)("em",{parentName:"li"},"credit: ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Espa\xf1ol")," (Spanish) - ",(0,r.kt)("em",{parentName:"li"},"credit: ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/svera",rel:"nofollow",className:"ping ping-link"},"@",(0,r.kt)("span",{parentName:"a",className:"ping-username"},"svera"))))))}h.isMDXComponent=!0},3901:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(75054);const o={tableOfContentsInline:"tableOfContentsInline_prmo"};function l(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:l}=e;return n.createElement("div",{className:o.tableOfContentsInline},n.createElement(r.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},54244:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(39960);function o(e){let{readMore:t,children:a}=e;return n.createElement("article",null,n.createElement("div",{className:"card margin-bottom--md"},n.createElement("div",{className:"card__body"},a),t&&n.createElement("div",{className:"card__footer text--right"},n.createElement(r.Z,{href:t},"Read More"))))}},32492:(e,t,a)=>{a(67294),a(39960)},75054:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(87462),r=a(67294),o=a(86668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...r}=e;a>=0?t[a].children.push(r):n.push(r)})),n}function s(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function p(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>i(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function c(e){const t=(0,r.useRef)(void 0),a=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:l}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let r=t;r<=a;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),i=p(s,{anchorTopOffset:a.current}),m=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}function u(e){let{toc:t,className:a,linkClassName:n,isChild:o}=e;return t.length?r.createElement("ul",{className:o?void 0:a},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value.replace(/<img[^>]*>/g,"")}}),r.createElement(u,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const d=r.memo(u);function k(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:p,minHeadingLevel:m,maxHeadingLevel:u,...k}=e;const g=(0,o.L)(),h=m??g.tableOfContents.minHeadingLevel,f=u??g.tableOfContents.maxHeadingLevel,N=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,r.useMemo)((()=>s({toc:l(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:h,maxHeadingLevel:f});return c((0,r.useMemo)((()=>{if(i&&p)return{linkClassName:i,linkActiveClassName:p,minHeadingLevel:h,maxHeadingLevel:f}}),[i,p,h,f])),r.createElement(d,(0,n.Z)({toc:N,className:a,linkClassName:i},k))}},92119:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-release-4.3-c2e4d879c1e4c3a66067d3a68606c38e.png"}}]);