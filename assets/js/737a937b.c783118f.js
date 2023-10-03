"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8016],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?o.createElement(b,i(i({ref:t},u),{},{components:r})):o.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(3117),n=(r(7294),r(3905));const a={slug:"/emulators/neogeo"},i="SNK - Neo Geo \u2714",l={unversionedId:"emulators/consoles/snk-neo-geo",id:"emulators/consoles/snk-neo-geo",title:"SNK - Neo Geo \u2714",description:"- Emulator: lr_fbalpha2012_neogeo",source:"@site/docs/04-emulators/02-consoles/35-snk-neo-geo.md",sourceDirName:"04-emulators/02-consoles",slug:"/emulators/neogeo",permalink:"/docs/emulators/neogeo",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/04-emulators/02-consoles/35-snk-neo-geo.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{slug:"/emulators/neogeo"},sidebar:"tutorialSidebar",previous:{title:"Sinclair - ZX-81 \u26a0",permalink:"/docs/emulators/zx-81"},next:{title:"SNK - Neo Geo CD \u2714",permalink:"/docs/emulators/neogeocd"}},s={},c=[],u={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"snk---neo-geo-"},"SNK - Neo Geo \u2714"),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/188292808-3addb46b-9939-4461-bc17-c7323911900f.png",align:"right",width:"220"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Emulator: ",(0,n.kt)("strong",{parentName:"li"},"lr_fbalpha2012_neogeo")),(0,n.kt)("li",{parentName:"ul"},"Required ROM Version: ",(0,n.kt)("inlineCode",{parentName:"li"},'"FBA Arcade Set v0.2.97.29 for FBA 2012 libretro"')," (search with quotes for exact match)"),(0,n.kt)("li",{parentName:"ul"},"Alternative ROM Pack: ",(0,n.kt)("inlineCode",{parentName:"li"},'"Neo-Geo Rom Collection By Ghostware"')," (search with quotes for exact match)"),(0,n.kt)("li",{parentName:"ul"},"Rom Folder: ",(0,n.kt)("inlineCode",{parentName:"li"},"NEOGEO")),(0,n.kt)("li",{parentName:"ul"},"Extensions: ",(0,n.kt)("inlineCode",{parentName:"li"},".zip")," (must be lowercase)"),(0,n.kt)("li",{parentName:"ul"},"Bios: ",(0,n.kt)("inlineCode",{parentName:"li"},"neogeo.zip"))),(0,n.kt)("p",null,"UniBIOS can be used but v4.0 can lead to missing or corrupted audio when used with save states. Earlier UniBIOS version are OK. "),(0,n.kt)("p",null,"Because Neo Geo roms can come in different formats (split or non-merged), it's recommended to keep the ",(0,n.kt)("inlineCode",{parentName:"p"},"neogeo.zip")," bios in both the ",(0,n.kt)("inlineCode",{parentName:"p"},"/BIOS")," folder and the ",(0,n.kt)("inlineCode",{parentName:"p"},"/Roms/NEOGEO")," folder to ensure best compatibility."),(0,n.kt)("p",null,"For best game compatibility, seek out the recommended romset above. Alternative romsets for Final Burn cores may be largely compatible (i.e. v0.2.97.24, v0.2.97.39, v0.2.97.40, v0.2.97.44)."),(0,n.kt)("div",{className:"remark-oembed-inline remark-oembed-you-tube","data-oembed":""},(0,n.kt)("iframe",{parentName:"div",width:200,height:113,src:"https://www.youtube.com/embed/CGKX6yPG2nE?feature=oembed",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,title:"NEO GEO on the Miyoo Mini | UniBios, MVS, AES, Cheats | Full Setup guide and tutorial!"})))}p.isMDXComponent=!0}}]);