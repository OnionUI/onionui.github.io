"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,b=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(b,i(i({ref:t},m),{},{components:n})):r.createElement(b,i({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={slug:"/emulators/gba"},i="Nintendo - Game Boy Advance \u2714",l={unversionedId:"emulators/handhelds/nintendo-gba",id:"emulators/handhelds/nintendo-gba",title:"Nintendo - Game Boy Advance \u2714",description:"- Emulator: lr-gpsp, lr-mgba, lr-meteor, lr-mednafen-gba, lr-vba_next",source:"@site/docs/04-emulators/03-handhelds/05-nintendo-gba.md",sourceDirName:"04-emulators/03-handhelds",slug:"/emulators/gba",permalink:"/docs/emulators/gba",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/04-emulators/03-handhelds/05-nintendo-gba.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/emulators/gba"},sidebar:"tutorialSidebar",previous:{title:"Nintendo - Game Boy \u2714",permalink:"/docs/emulators/gb"},next:{title:"Nintendo - Game Boy Color \u2714",permalink:"/docs/emulators/gbc"}},p={},s=[],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nintendo---game-boy-advance-"},"Nintendo - Game Boy Advance \u2714"),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/188292863-3858a9b9-b26b-418f-9256-7ed41d3dcee6.png",align:"right",width:"320"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Emulator: lr-gpsp, ",(0,a.kt)("strong",{parentName:"li"},"lr-mgba"),", lr-meteor, lr-mednafen-gba, lr-vba_next"),(0,a.kt)("li",{parentName:"ul"},"Rom Folder: ",(0,a.kt)("inlineCode",{parentName:"li"},"GBA")),(0,a.kt)("li",{parentName:"ul"},"Extensions: ",(0,a.kt)("inlineCode",{parentName:"li"},".bin")," ",(0,a.kt)("inlineCode",{parentName:"li"},".gba")," ",(0,a.kt)("inlineCode",{parentName:"li"},".zip")," ",(0,a.kt)("inlineCode",{parentName:"li"},".7z")),(0,a.kt)("li",{parentName:"ul"},"Bios: ",(0,a.kt)("inlineCode",{parentName:"li"},"gba_bios.bin")," (required for lr-gpsp, optional for other cores), ",(0,a.kt)("inlineCode",{parentName:"li"},"gb_bios.bin")," (optional), ",(0,a.kt)("inlineCode",{parentName:"li"},"gbc_bios.bin")," (optional), ",(0,a.kt)("inlineCode",{parentName:"li"},"sgb_bios.bin")," (optional)")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The default GBA emulator on Onion is currently mGBA. It has long provided optimum compatibility with the entire GBA game library. "),(0,a.kt)("p",{parentName:"admonition"},"However, as gpSP continues to improve, it's preferable for the most demanding, slow or games requiring a better Fast Forward."),(0,a.kt)("p",{parentName:"admonition"},"To use gpSP instead of mGBA, 2 possibilities:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"../apps/game-list-options"},"GLO menu")," to change the core for your selected game."),(0,a.kt)("li",{parentName:"ul"},"Install gpSP emulator in expert section from ",(0,a.kt)("a",{parentName:"li",href:"../apps/package-manager"},"Package Manager"),"."))))}u.isMDXComponent=!0}}]);