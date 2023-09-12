"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4485],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(a),k=i,g=u["".concat(o,".").concat(k)]||u[k]||c[k]||r;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(3117),i=(a(7294),a(3905));const r={slug:"release-notes/4.1.0",authors:["aemiii91","schmurtz"],tags:["release-notes","stable"]},l="Release notes: Onion V4.1",s={permalink:"/blog/release-notes/4.1.0",source:"@site/blog/release-notes/2023-03-21-release-notes-4.1.0.md",title:"Release notes: Onion V4.1",description:"Official release notes for Onion V4.1.0",date:"2023-03-21T00:00:00.000Z",formattedDate:"March 21, 2023",tags:[{label:"release-notes",permalink:"/blog/tags/release-notes"},{label:"stable",permalink:"/blog/tags/stable"}],hasTruncateMarker:!0,authors:[{name:"Aemiii91",title:"Onion Core Team",url:"https://github.com/Aemiii91",imageURL:"https://github.com/Aemiii91.png",key:"aemiii91"},{name:"Schmurtz",title:"Onion Core Team",url:"https://github.com/schmurtzm",imageURL:"https://github.com/schmurtzm.png",key:"schmurtz"}],frontMatter:{slug:"release-notes/4.1.0",authors:["aemiii91","schmurtz"],tags:["release-notes","stable"]},nextItem:{title:"Release notes: Onion V4",permalink:"/blog/release-notes/4.0.0"}},o={authorsImageUrls:[void 0,void 0]},m=[{value:"Features",id:"features",level:2},{value:"Game List Options (GLO)",id:"game-list-options-glo",level:3},{value:"Icon switching",id:"icon-switching",level:3},{value:"Ports Collection",id:"ports-collection",level:2},{value:"New apps",id:"new-apps",level:3},{value:"Other exciting features",id:"other-exciting-features",level:3},{value:"Core updates",id:"core-updates",level:2},{value:"New core additions",id:"new-core-additions",level:3},{value:"Added languages",id:"added-languages",level:2},{value:"Breaking changes",id:"breaking-changes",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Official release notes for Onion V4.1.0")),(0,i.kt)("p",null,"This release features a new menu, ",(0,i.kt)("em",{parentName:"p"},"GLO"),", with game and list specific options (for example, you can now change core per game and load without save state); automatic icon switching and customization, a whole new ports collection, random game app, on-screen overlays, AdvanceMENU (an alternative frontend), and so much more!"),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("h3",{id:"game-list-options-glo"},"Game List Options (GLO)"),(0,i.kt)("sup",null,(0,i.kt)("p",null,"by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Aemiii91",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"Aemiii91")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Press Y in a game list to get specific options for the selected game and the entire list")),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("th",{colspan:"3"},(0,i.kt)("b",null,"Game List Options"))),(0,i.kt)("tr",null,(0,i.kt)("td",{width:"33%",align:"center",valign:"top"},(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/226447277-a9452ecc-92ad-407f-a629-307491a652b4.png"})),(0,i.kt)("td",{width:"33%",align:"center",valign:"top"},(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/226447388-8c9c95f1-536a-4946-8b0f-f4b8ead0e97e.png"})),(0,i.kt)("td",{width:"33%",align:"center",valign:"top"},(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/226447466-71d4f5c1-7675-4355-9b60-20dbd1a03eae.png"}))),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center",valign:"top"},(0,i.kt)("p",null,(0,i.kt)("i",null,"When in a game list, press ",(0,i.kt)("kbd",null,"Y")," to open GLO (this action can be reassigned in Tweaks)"))),(0,i.kt)("td",{align:"center",valign:"top"},(0,i.kt)("p",null,(0,i.kt)("i",null,"GLO - specific options for the selected game or the entire list"))),(0,i.kt)("td",{align:"center",valign:"top"},(0,i.kt)("p",null,(0,i.kt)("i",null,'Use the "Game core" option to change core per game'))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reset game")," - ",(0,i.kt)("em",{parentName:"li"},"load game without save state")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Game core")," - ",(0,i.kt)("em",{parentName:"li"},"set custom core per game")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Filter list")," - ",(0,i.kt)("em",{parentName:"li"},"use a keyword to filter the list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Refresh roms")," - ",(0,i.kt)("em",{parentName:"li"},"refresh the list\u2019s game cache")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Custom scripts:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Random game")," - ",(0,i.kt)("em",{parentName:"li"},"added by Random Game app - launches a random game from the list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Set time")," - ",(0,i.kt)("em",{parentName:"li"},"added by Clock app - quick access to setting date and time"))))),(0,i.kt)("h3",{id:"icon-switching"},"Icon switching"),(0,i.kt)("sup",null,(0,i.kt)("p",null,"by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Aemiii91",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"Aemiii91")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ThemeSwitcher now supports themes with icon packs - ",(0,i.kt)("em",{parentName:"li"},"remember to visit our ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/OnionUI/Themes/blob/main/README.md"},"themes repository")," for additional themes and icon packs!")),(0,i.kt)("li",{parentName:"ul"},"Change icon pack and edit individual icons in Tweaks")),(0,i.kt)("table",{align:"center"},(0,i.kt)("thead",null,(0,i.kt)("th",{colspan:"2"},"Icon Switching")),(0,i.kt)("tr",null,(0,i.kt)("td",{width:"65%",align:"center",rowspan:"2"},(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/226450380-2d6ec505-c65d-4b67-bbc5-7104e39cd7ee.gif"})),(0,i.kt)("td",null,(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/226451178-3d11e9f4-0c7f-4213-af24-ad1209b36350.png"}))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/226451190-2529bb42-f5b3-4a9e-acfd-6cf65e2d4d33.png"}))),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("i",null,"Showcase: Applying themes with icon packs"))),(0,i.kt)("td",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("i",null,"Use Tweaks to change icon pack or edit individual icons"))))),(0,i.kt)("h2",{id:"ports-collection"},"Ports Collection"),(0,i.kt)("sup",null,(0,i.kt)("p",null,"by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,i.kt)("p",null,"Onion's Ports Collection has been completely redone and now includes 61 game ports!",(0,i.kt)("br",{parentName:"p"}),"\n","All the necessary files (except licensed game files) are now hosted on the:  "),(0,i.kt)("p",{align:"center"},(0,i.kt)("a",{href:"https://github.com/OnionUI/Ports-Collection"},"Ports Collection repository")),(0,i.kt)("table",{align:"center"},(0,i.kt)("thead",null,(0,i.kt)("th",null,"Ports Collection")),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},(0,i.kt)("a",{href:"https://user-images.githubusercontent.com/44569252/226474430-0123c521-e96f-4603-bdf3-725ad8d2f3bc.png"},(0,i.kt)("img",{width:"65%",src:"https://user-images.githubusercontent.com/44569252/226474515-7750fb79-9bda-4339-ac08-457dc63da5c6.png"})))),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center",valign:"top"},(0,i.kt)("p",null,(0,i.kt)("i",null,"Click the image to view it in full size"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"24 free game ports are offered as complete packs"),(0,i.kt)("li",{parentName:"ul"},"37 game ports are available through the collection of game engines, and you are only required to supply the licensed data files from the original game"),(0,i.kt)("li",{parentName:"ul"},"Pre-configured config files are included - which gives you the best settings and uniform key mapping for FPS games (",(0,i.kt)("em",{parentName:"li"},"credit: axcelon"),")"),(0,i.kt)("li",{parentName:"ul"},"Box art is also included")),(0,i.kt)("h3",{id:"new-apps"},"New apps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Random Game")," - ",(0,i.kt)("em",{parentName:"li"},"launch a random game from any cached system - credit: ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/marchiore",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"marchiore")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Video Player")," (FFplay) - ",(0,i.kt)("em",{parentName:"li"},"watch your favorite 4:3 or 16:9 video content - credit: Steward-Fu , ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/bobotrax",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"bobotrax")),"  , ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"PDF Reader")," (Green) - ",(0,i.kt)("em",{parentName:"li"},"ideal for looking up clues in game manuals  - credit: Steward-Fu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ebook Reader")," (Pixel Reader) - ",(0,i.kt)("em",{parentName:"li"},"well suited for reading walkthroughs on the go  - credit: ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/ealang/pixel-reader"},"ealang")))),(0,i.kt)("p",{align:"center"},(0,i.kt)("em",null,(0,i.kt)("img",{title:"Random Game",src:"https://user-images.githubusercontent.com/44569252/226454336-c2425e57-e507-4b32-aa30-8e1b3884f4ef.png"}),(0,i.kt)("img",{title:"Video Player",src:"https://user-images.githubusercontent.com/44569252/226454472-7e4e6769-a86c-469f-b735-e85473094b0e.png"}),(0,i.kt)("img",{title:"PDF Reader",src:"https://user-images.githubusercontent.com/44569252/226454495-bd086c74-61fe-4709-9e97-bebb3febbe75.png"}),(0,i.kt)("img",{title:"Ebook Reader",src:"https://user-images.githubusercontent.com/44569252/226454509-1815c543-8001-4b7d-b7d9-2d3be5795140.png"}))),(0,i.kt)("h3",{id:"other-exciting-features"},"Other exciting features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Automatic import of ScummVM games"),":  games are now automatically imported in Onion thanks to a new script created - no more manual shortcuts to create! (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")),")"),(0,i.kt)("li",{parentName:"ul"},'A new core option has been added to ScummVM: "Target FPS for stutter reduction" allows to run some heavy games with less audio stuttering - unique to Onion! (',(0,i.kt)("a",{parentName:"li",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")),")"),(0,i.kt)("li",{parentName:"ul"},"Improved ",(0,i.kt)("strong",{parentName:"li"},"color palette organization")," for GB: an organization by palette style (Essentials, Subtle, Single_Color, Multicolor, Hardware, Nintendo_Official, Extras, Others) unique to Onion ! (Jeltron & ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")),")"),(0,i.kt)("li",{parentName:"ul"},"mGBA ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/schmurtzm/mgba/commit/99387c04ae2879692ee9ff199dc68b6c162f0a8a"},"one-key fast forward button"))," - ",(0,i.kt)("kbd",null,"R2")," by default (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")),")"),(0,i.kt)("li",{parentName:"ul"},"Added support for ",(0,i.kt)("strong",{parentName:"li"},"On-Screen Overlays")," in RetroArch (Eggs)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hotkey for video scaling:")," ",(0,i.kt)("kbd",null,"MENU"),"+",(0,i.kt)("kbd",null,"START")," (Eggs) (",(0,i.kt)("em",{parentName:"li"},"remember to save overrides to make it stick"),") "),(0,i.kt)("li",{parentName:"ul"},"File explorer for PDF Reader and Video Player apps  (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm"))," & ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Aemiii91",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"Aemiii91")),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tutorials:")," video tutorial for arcade saves, video tutorial for Video Player shortcuts, pdf tutorial for PDF Reader  (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")),")"),(0,i.kt)("li",{parentName:"ul"},"Package Manager UI update (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Aemiii91",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"Aemiii91")),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AdvanceMAME with AdvanceMENU")," - browse your arcade games with video previews! (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Onion easter egg")," (\u30b3\u30ca\u30df\u30b3\u30de\u30f3\u30c9) (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Sichroteph",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"Sichroteph")),")")),(0,i.kt)("table",{align:"center"},(0,i.kt)("thead",null,(0,i.kt)("th",null,(0,i.kt)("i",null,"Highlight:")," Package Manager (UI update)"),(0,i.kt)("th",null,(0,i.kt)("i",null,"Highlight:")," On-Screen Overlays"),(0,i.kt)("th",null,(0,i.kt)("i",null,"Highlight:")," AdvanceMENU")),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center",width:"33%"},(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/226452451-cd05258a-8da7-4f1e-bec1-bc41844b1dd4.gif"})),(0,i.kt)("td",{align:"center",width:"33%"},(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/226492100-f51306ee-9178-47b0-ae87-07f6de6eb7e5.png"})),(0,i.kt)("td",{align:"center",width:"33%"},(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/226492306-03c1e2f4-902f-4ba2-8d85-13044882ad0d.png"})))),(0,i.kt)("h2",{id:"core-updates"},"Core updates"),(0,i.kt)("sup",null,(0,i.kt)("p",null,"by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",{parentName:"li"},"GBA"),"]"," Default core changed: ",(0,i.kt)("inlineCode",{parentName:"li"},"gpSP")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"mGBA")),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",{parentName:"li"},"Scumm"),"]"," Updated: ",(0,i.kt)("inlineCode",{parentName:"li"},"ScummVM 2.7")),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",{parentName:"li"},"PS"),"]"," Updated: ",(0,i.kt)("inlineCode",{parentName:"li"},"PCSX-ReARMed")),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",{parentName:"li"},"GB/GBC"),"]"," Updated: ",(0,i.kt)("inlineCode",{parentName:"li"},"Gambatte")),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",{parentName:"li"},"Commodore 64"),"]"," Updated: ",(0,i.kt)("inlineCode",{parentName:"li"},"vice x64")),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",{parentName:"li"},"ZX Spectrum"),"]"," Updated: ",(0,i.kt)("inlineCode",{parentName:"li"},"fuse")),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",{parentName:"li"},"Arcade"),"]"," Updated: ",(0,i.kt)("inlineCode",{parentName:"li"},"MAME 2003-Plus")),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",{parentName:"li"},"Virtual Boy"),"]"," Updated: ",(0,i.kt)("inlineCode",{parentName:"li"},"Beetle VB v1.31.0")),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",{parentName:"li"},"Ports"),"]"," Updated: ",(0,i.kt)("inlineCode",{parentName:"li"},"ecwolf (Wolfenstein 3D)")),(0,i.kt)("li",{parentName:"ul"},"[Expert/",(0,i.kt)("strong",{parentName:"li"},"PICO-8"),"]"," Updated: ",(0,i.kt)("inlineCode",{parentName:"li"},"fake-08 standalone")),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",{parentName:"li"},"SNES"),"]"," Updated: ",(0,i.kt)("inlineCode",{parentName:"li"},"Beetle Supafaust")," (",(0,i.kt)("em",{parentName:"li"},"~10% increase in FPS"),")"),(0,i.kt)("li",{parentName:"ul"},"[Expert/",(0,i.kt)("strong",{parentName:"li"},"SNES"),"]"," Updated: ",(0,i.kt)("inlineCode",{parentName:"li"},"Snes9x")),(0,i.kt)("li",{parentName:"ul"},"[Expert/",(0,i.kt)("strong",{parentName:"li"},"SNES"),"]"," Updated: ",(0,i.kt)("inlineCode",{parentName:"li"},"Snes9x 2005")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"2005 Plus")),(0,i.kt)("li",{parentName:"ul"},"[Expert/",(0,i.kt)("strong",{parentName:"li"},"SNES"),"]"," Updated: ",(0,i.kt)("inlineCode",{parentName:"li"},"Snes9x 2010"))),(0,i.kt)("h3",{id:"new-core-additions"},"New core additions"),(0,i.kt)("sup",null,(0,i.kt)("p",null,"by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"schmurtzm")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",{parentName:"li"},"Amiga"),"]"," Added: ",(0,i.kt)("inlineCode",{parentName:"li"},"puae 2021 v2.6.1")),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",{parentName:"li"},"PICO-8"),"]"," Added ",(0,i.kt)("inlineCode",{parentName:"li"},"fake-08 libretro core")," (",(0,i.kt)("em",{parentName:"li"},"supports save states"),")"),(0,i.kt)("li",{parentName:"ul"},"[Expert/",(0,i.kt)("strong",{parentName:"li"},"OpenBOR"),"]"," Added Steward-Fu's ",(0,i.kt)("inlineCode",{parentName:"li"},"OpenBOR")),(0,i.kt)("li",{parentName:"ul"},"[Expert/",(0,i.kt)("strong",{parentName:"li"},"DOS"),"]"," Added: ",(0,i.kt)("inlineCode",{parentName:"li"},"DOSBox Pure 0.9.7")," (the old 0.21 is still default)"),(0,i.kt)("li",{parentName:"ul"},"[Expert/",(0,i.kt)("strong",{parentName:"li"},"PS"),"]"," Added: ",(0,i.kt)("inlineCode",{parentName:"li"},"PCSX-ReARMed standalone")," emulator (",(0,i.kt)("em",{parentName:"li"},"no GameSwitcher integration, but much improved performance - allows for using enhanced resolution"),")"),(0,i.kt)("li",{parentName:"ul"},"[Expert/",(0,i.kt)("strong",{parentName:"li"},"Arcade"),"]"," Added: ",(0,i.kt)("inlineCode",{parentName:"li"},"M.B.A-mini")," (",(0,i.kt)("em",{parentName:"li"},"M.B.A = MAME's skeleton + FBA's romsets"),")"),(0,i.kt)("li",{parentName:"ul"},"[Expert/",(0,i.kt)("strong",{parentName:"li"},"Arcade"),"]"," Added: ",(0,i.kt)("inlineCode",{parentName:"li"},"AdvanceMenu"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"AdvanceMame"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"AdvanceMess")),(0,i.kt)("li",{parentName:"ul"},"[Expert/",(0,i.kt)("strong",{parentName:"li"},"NEC PC-98"),"]"," Added: ",(0,i.kt)("inlineCode",{parentName:"li"},"Neko Project II Kai")),(0,i.kt)("li",{parentName:"ul"},"[Expert/",(0,i.kt)("strong",{parentName:"li"},"Music"),"]"," Added: ",(0,i.kt)("inlineCode",{parentName:"li"},"Game Music Emu (GME)"))),(0,i.kt)("h2",{id:"added-languages"},"Added languages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Portugu\xeas do Brasil")," (Brazilian Portuguese) - ",(0,i.kt)("em",{parentName:"li"},"credit: ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/anibaldeboni",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"anibaldeboni")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Nederlands")," (Dutch) - ",(0,i.kt)("em",{parentName:"li"},"credit: ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/ronvandegraaf",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"ronvandegraaf")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Svenska")," (Swedish) - ",(0,i.kt)("em",{parentName:"li"},"credit: ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/Megamannen",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"Megamannen")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Turkce")," (Turkish) - ",(0,i.kt)("em",{parentName:"li"},"credit: ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/tcgumus",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"tcgumus")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430")," (Ukrainian) - ",(0,i.kt)("em",{parentName:"li"},"credit: ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/semioys",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"semioys")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f")," (Belarusian) - ",(0,i.kt)("em",{parentName:"li"},"credit: ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/introkun",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"introkun")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ti\u1ebfng Vi\u1ec7t")," (Vietnamese) - ",(0,i.kt)("em",{parentName:"li"},"credit: Vi\xean V\u0129 Khang")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\ud55c\uad6d\uc5b4")," (Korean) - ",(0,i.kt)("em",{parentName:"li"},"updated by: ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/DDinghoya",rel:"nofollow",className:"ping ping-link"},"@",(0,i.kt)("span",{parentName:"a",className:"ping-username"},"DDinghoya"))))),(0,i.kt)("h2",{id:"breaking-changes"},"Breaking changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The new V4.1 ",(0,i.kt)("em",{parentName:"li"},"Ports Collection")," is not compatible with files from earlier versions (V4.0.4 and below) - ",(0,i.kt)("em",{parentName:"li"},"download the new ports files from our ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/OnionUI/Ports-Collection"},"Ports Collection repository"),", and add the necessary game files in ",(0,i.kt)("inlineCode",{parentName:"em"},"Roms/PORTS/Games"),".")),(0,i.kt)("li",{parentName:"ul"},"PS roms of type ",(0,i.kt)("inlineCode",{parentName:"li"},".bin")," now requires accompanying ",(0,i.kt)("inlineCode",{parentName:"li"},".cue")," files (you can use ",(0,i.kt)("a",{parentName:"li",href:"https://www.duckstation.org/cue-maker/"},"this tool")," to generate them) - ",(0,i.kt)("em",{parentName:"li"},"this improves game compatibility, fixes some audio issues, and allows for indexing games consisting of multiple ",(0,i.kt)("inlineCode",{parentName:"em"},".bin")," files!"))),(0,i.kt)("hr",null),(0,i.kt)("p",{align:"center"},(0,i.kt)("a",{href:"https://github.com/OnionUI/Onion/releases/tag/v4.1.4",class:"button button--primary button--lg"},"Download Onion V4.1.4"),(0,i.kt)("br",null),(0,i.kt)("small",null,(0,i.kt)("i",null,"you'll find the download at the bottom of the page"))))}c.isMDXComponent=!0}}]);