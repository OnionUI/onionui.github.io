"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=o,b=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const a={slug:"/emulators/gb"},i="Nintendo - Game Boy \u2714",l={unversionedId:"emulators/handhelds/nintendo-game-boy",id:"emulators/handhelds/nintendo-game-boy",title:"Nintendo - Game Boy \u2714",description:"- Emulator: lr-gambatte, lr-gearboy, lr-tgbdual",source:"@site/docs/04-emulators/03-handhelds/04-nintendo-game-boy.md",sourceDirName:"04-emulators/03-handhelds",slug:"/emulators/gb",permalink:"/docs/next/emulators/gb",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/04-emulators/03-handhelds/04-nintendo-game-boy.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/emulators/gb"},sidebar:"tutorialSidebar",previous:{title:"Nintendo - Game & Watch \u2714",permalink:"/docs/next/emulators/gw"},next:{title:"Nintendo - Game Boy Advance \u2714",permalink:"/docs/next/emulators/gba"}},s={},m=[],c={toc:m},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nintendo---game-boy-"},"Nintendo - Game Boy \u2714"),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/188292860-7a8d651b-77f7-4b91-bc63-528cdf8580e8.png",align:"right",width:"240"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Emulator: ",(0,o.kt)("strong",{parentName:"li"},"lr-gambatte"),", lr-gearboy, lr-tgbdual"),(0,o.kt)("li",{parentName:"ul"},"Rom Folder: ",(0,o.kt)("inlineCode",{parentName:"li"},"GB")),(0,o.kt)("li",{parentName:"ul"},"Extensions: ",(0,o.kt)("inlineCode",{parentName:"li"},".gb")," ",(0,o.kt)("inlineCode",{parentName:"li"},".gbc")," ",(0,o.kt)("inlineCode",{parentName:"li"},".dmg")," ",(0,o.kt)("inlineCode",{parentName:"li"},".zip")," ",(0,o.kt)("inlineCode",{parentName:"li"},".7z")),(0,o.kt)("li",{parentName:"ul"},"Bios: ",(0,o.kt)("inlineCode",{parentName:"li"},"gb_bios.bin")," (optional)")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Onion benefits to an exceptional version of Gambatte where the colored palettes are ordered by theme. You'l find more information on it ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm/gambatte-libretro/tree/advanced-color-organisation#gambatte---libretro-core---with-palette-style-color-organisation"},"on the dedicated repository"),". "),(0,o.kt)("p",{parentName:"admonition"},"And some explanations about ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/schmurtzm/gambatte-libretro/tree/advanced-color-organisation#how-to-use-this-new-palette-organization-"},"how to use it here"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you like overlays and filters, to get as close as possible to the original Game Boy experience, you can follow ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OnionUI/Onion/discussions/708"},"Jeltron's guide here"),". ",(0,o.kt)("sub",null,"(No need to download the packs anymore, they are integrated since Onion 4.2.0)."))))}d.isMDXComponent=!0}}]);