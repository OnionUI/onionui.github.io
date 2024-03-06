"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),p=n,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},15783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={slug:"/emulators/arcade/default"},i="Arcade (Default) \u2714",l={unversionedId:"emulators/arcade/arcade-default",id:"emulators/arcade/arcade-default",title:"Arcade (Default) \u2714",description:"- Alias: MAME",source:"@site/docs/04-emulators/01-arcade/01-arcade-default.md",sourceDirName:"04-emulators/01-arcade",slug:"/emulators/arcade/default",permalink:"/docs/emulators/arcade/default",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/04-emulators/01-arcade/01-arcade-default.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/emulators/arcade/default"},sidebar:"tutorialSidebar",previous:{title:"Arcade systems",permalink:"/docs/emulators/arcade"},next:{title:"Arcade (Alternatives) \u26a0",permalink:"/docs/emulators/arcade/alt"}},s={},c=[],u={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"arcade-default-"},"Arcade (Default) \u2714"),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/188292473-5ce7149e-2d90-441f-9c17-fc259c674387.png",align:"right",width:"240"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Alias: MAME"),(0,n.kt)("li",{parentName:"ul"},"Emulator: ",(0,n.kt)("strong",{parentName:"li"},"lr-mame2003plus")," "),(0,n.kt)("li",{parentName:"ul"},"Rom Folder: ",(0,n.kt)("inlineCode",{parentName:"li"},"ARCADE")," "),(0,n.kt)("li",{parentName:"ul"},"Extensions: ",(0,n.kt)("inlineCode",{parentName:"li"},".zip")),(0,n.kt)("li",{parentName:"ul"},"Bios: ",(0,n.kt)("inlineCode",{parentName:"li"},"pgm.zip")," (for PGM games only like ",(0,n.kt)("em",{parentName:"li"},"Knights of Valour")," and ",(0,n.kt)("em",{parentName:"li"},"DoDonPachi"),")"),(0,n.kt)("li",{parentName:"ul"},"Required rom set version: ",(0,n.kt)("inlineCode",{parentName:"li"},"MAME 2003-Plus Reference: Full Non-Merged Romsets")),(0,n.kt)("li",{parentName:"ul"},"Samples: Audio Samples for Mame2003Plus should be placed in the ",(0,n.kt)("inlineCode",{parentName:"li"},"/BIOS/mame2003-plus/samples")," folder")),(0,n.kt)("p",null,"MAME does not play well with save states this is a core issue and cannot be fixed. It is recommended to disable 'auto-loading of save states' in the Retroarch menu (and save core overrides)."),(0,n.kt)("p",null,"An onscreen message saying \u2018This Game Will Not Work\u2019 is MAME letting you know that the game is not emulated in the MAME version and you will not find a compatible/playable rom for that game."),(0,n.kt)("p",null,"Current/modern versions of MAME are not compatible with the Miyoo Minis limited hardware specification which is why MAME 2003Plus has been chosen as the default.  "),(0,n.kt)("div",{className:"remark-oembed-inline remark-oembed-you-tube","data-oembed":""},(0,n.kt)("iframe",{parentName:"div",width:200,height:113,src:"https://www.youtube.com/embed/-0riylHkJis?feature=oembed",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,title:"Arcade Games on the Miyoo Mini | MAME 2003 Plus Tutorial | Cheats, Tate Mode, Control Customisation"})))}m.isMDXComponent=!0}}]);