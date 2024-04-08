"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8016],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(o),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return o?r.createElement(f,a(a({ref:t},u),{},{components:o})):r.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},53487:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const i={slug:"/emulators/neogeo"},a="SNK - Neo Geo \u2714",l={unversionedId:"emulators/consoles/snk-neo-geo",id:"emulators/consoles/snk-neo-geo",title:"SNK - Neo Geo \u2714",description:"- Emulator: lr_fbalpha2012_neogeo, GnGeo",source:"@site/docs/04-emulators/02-consoles/35-snk-neo-geo.md",sourceDirName:"04-emulators/02-consoles",slug:"/emulators/neogeo",permalink:"/docs/emulators/neogeo",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/04-emulators/02-consoles/35-snk-neo-geo.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{slug:"/emulators/neogeo"},sidebar:"tutorialSidebar",previous:{title:"Sinclair - ZX-81 \u26a0",permalink:"/docs/emulators/zx-81"},next:{title:"SNK - Neo Geo CD \u2714",permalink:"/docs/emulators/neogeocd"}},s={},c=[{value:"Notes on GnGeo",id:"notes-on-gngeo",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"snk---neo-geo-"},"SNK - Neo Geo \u2714"),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/188292808-3addb46b-9939-4461-bc17-c7323911900f.png",align:"right",width:"220"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Emulator: ",(0,n.kt)("strong",{parentName:"li"},"lr_fbalpha2012_neogeo"),", GnGeo"),(0,n.kt)("li",{parentName:"ul"},"Required ROM Version: ",(0,n.kt)("inlineCode",{parentName:"li"},'"FBA Arcade Set v0.2.97.29 for FBA 2012 libretro"')," (search with quotes for exact match)"),(0,n.kt)("li",{parentName:"ul"},"Alternative ROM Pack: ",(0,n.kt)("inlineCode",{parentName:"li"},'"Neo-Geo Rom Collection By Ghostware"')," (search with quotes for exact match)"),(0,n.kt)("li",{parentName:"ul"},"Rom Folder: ",(0,n.kt)("inlineCode",{parentName:"li"},"NEOGEO")),(0,n.kt)("li",{parentName:"ul"},"Extensions: ",(0,n.kt)("inlineCode",{parentName:"li"},".zip")," (must be lowercase)"),(0,n.kt)("li",{parentName:"ul"},"Bios: ",(0,n.kt)("inlineCode",{parentName:"li"},"neogeo.zip"))),(0,n.kt)("p",null,"UniBIOS can be used but v4.0 can lead to missing or corrupted audio when used with save states. Earlier UniBIOS version are OK. "),(0,n.kt)("p",null,"Because Neo Geo roms can come in different formats (split or non-merged), it's recommended to keep the ",(0,n.kt)("inlineCode",{parentName:"p"},"neogeo.zip")," bios in both the ",(0,n.kt)("inlineCode",{parentName:"p"},"/BIOS")," folder and the ",(0,n.kt)("inlineCode",{parentName:"p"},"/Roms/NEOGEO")," folder to ensure best compatibility."),(0,n.kt)("p",null,"For best game compatibility, seek out the recommended romset above. Alternative romsets for Final Burn cores may be largely compatible (i.e. v0.2.97.24, v0.2.97.39, v0.2.97.40, v0.2.97.44)."),(0,n.kt)("div",{className:"remark-oembed-inline remark-oembed-you-tube","data-oembed":""},(0,n.kt)("iframe",{parentName:"div",width:200,height:113,src:"https://www.youtube.com/embed/CGKX6yPG2nE?feature=oembed",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0,title:"NEO GEO on the Miyoo Mini | UniBios, MVS, AES, Cheats | Full Setup guide and tutorial!"})),(0,n.kt)("h2",{id:"notes-on-gngeo"},"Notes on GnGeo"),(0,n.kt)("p",null,"The GnGeo is an AES/MVS Neo Geo emulator (without NG-CD support) based of MAME ROMsets.\nThis emulator is a standalone emulator (not Retroarch core) which natively supporte GNO files.\nGnGeo is interesting because of loading times. Tested a few big games like kof2000 and it starts just a few seconds instead of 45 seconds. The framerate is also very good."),(0,n.kt)("p",null,"Interesting information about GnGeo ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/TriForceX/MiyooCFW/discussions/369"},"here")," (with compatibility list)."))}p.isMDXComponent=!0}}]);