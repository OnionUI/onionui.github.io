"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(3117),o=(n(7294),n(3905));const i={slug:"/emulators/neogeocd"},a="SNK - Neo Geo CD \u2714",l={unversionedId:"getting-started/emulators/consoles/snk-neo-geo-cd",id:"getting-started/emulators/consoles/snk-neo-geo-cd",title:"SNK - Neo Geo CD \u2714",description:"- Emulator: lr-neocd",source:"@site/docs/01-getting-started/04-emulators/02-consoles/36-snk-neo-geo-cd.md",sourceDirName:"01-getting-started/04-emulators/02-consoles",slug:"/emulators/neogeocd",permalink:"/docs/emulators/neogeocd",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/01-getting-started/04-emulators/02-consoles/36-snk-neo-geo-cd.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{slug:"/emulators/neogeocd"},sidebar:"tutorialSidebar",previous:{title:"SNK - Neo Geo \u2714",permalink:"/docs/emulators/neogeo"},next:{title:"Sony - PlayStation \u2714",permalink:"/docs/emulators/psx"}},s={},c=[],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"snk---neo-geo-cd-"},"SNK - Neo Geo CD \u2714"),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/98862735/190532551-7b1c2f3e-9d48-4dd9-8ccb-2b10cfb6ce26.png",align:"right",width:"240"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Emulator: ",(0,o.kt)("strong",{parentName:"li"},"lr-neocd")),(0,o.kt)("li",{parentName:"ul"},"Rom Folder: ",(0,o.kt)("inlineCode",{parentName:"li"},"NEOCD")),(0,o.kt)("li",{parentName:"ul"},"Extensions: ",(0,o.kt)("inlineCode",{parentName:"li"},".bin/.cue")," ",(0,o.kt)("inlineCode",{parentName:"li"},".chd")," ",(0,o.kt)("inlineCode",{parentName:"li"},".m3u")),(0,o.kt)("li",{parentName:"ul"},"Bios: (",(0,o.kt)("inlineCode",{parentName:"li"},"000-lo.lo")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"ng-lo.rom"),") and (",(0,o.kt)("inlineCode",{parentName:"li"},"neocd_f.rom")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"neocd.bin")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"uni-bioscd.rom"),") placed in a folder named neocd within the bios folder")),(0,o.kt)("p",null,"UniBIOS can be used but v4.0 can lead to missing or corrupted audio when used with save states. Earlier UniBIOS version are OK.  "),(0,o.kt)("p",null,"Because Neo Geo roms can come in different formats (split or non-merged), it's recommended to keep the 'neogeo.zip' bios in both the ",(0,o.kt)("inlineCode",{parentName:"p"},"/BIOS")," folder and the ",(0,o.kt)("inlineCode",{parentName:"p"},"/Roms/NEOGEO")," folder to ensure best compatibility."))}p.isMDXComponent=!0}}]);