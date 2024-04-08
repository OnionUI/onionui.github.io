"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1569],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={slug:"/emulators/pico-8"},a="Pico-8 \u2714",l={unversionedId:"emulators/miscellaneous/pico-8",id:"version-4.2/emulators/miscellaneous/pico-8",title:"Pico-8 \u2714",description:"- Emulator: fake-08",source:"@site/versioned_docs/version-4.2/04-emulators/05-miscellaneous/04-pico-8.md",sourceDirName:"04-emulators/05-miscellaneous",slug:"/emulators/pico-8",permalink:"/docs/4.2/emulators/pico-8",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/versioned_docs/version-4.2/04-emulators/05-miscellaneous/04-pico-8.md",tags:[],version:"4.2",sidebarPosition:4,frontMatter:{slug:"/emulators/pico-8"},sidebar:"tutorialSidebar",previous:{title:"OpenBOR \u26a0",permalink:"/docs/4.2/emulators/openbor"},next:{title:"ScummVM \u2714",permalink:"/docs/4.2/emulators/scummvm"}},c={},s=[],m={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pico-8-"},"Pico-8 \u2714"),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/188293050-691f7376-544e-4275-a612-bb042576dbe3.png",align:"right",width:"240"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Emulator: ",(0,o.kt)("strong",{parentName:"li"},"fake-08")),(0,o.kt)("li",{parentName:"ul"},"Rom Folder: ",(0,o.kt)("inlineCode",{parentName:"li"},"PICO")),(0,o.kt)("li",{parentName:"ul"},"Extensions: ",(0,o.kt)("inlineCode",{parentName:"li"},".p8")," ",(0,o.kt)("inlineCode",{parentName:"li"},".png")),(0,o.kt)("li",{parentName:"ul"},"Bios: None")),(0,o.kt)("p",null,"Many games will play fine, compatibility is not perfect but is improving.\nFor multi-cart games (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"POOM"),"), place all 'cart' game files in ",(0,o.kt)("inlineCode",{parentName:"p"},"Roms/PICO")," (you may use subfolders, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"Roms/PICO/POOM"),") and launch the game from the first file (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"poom_0.p8"),").  "),(0,o.kt)("p",null,"To download games from the ",(0,o.kt)("a",{parentName:"p",href:"https://www.lexaloffle.com/bbs/?cat=7#sub=2&mode=carts&orderby=featured"},"Lexaloffle BBS"),", right-click the ",(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/98862735/190835494-ec611ceb-5ec1-4b96-924d-7ec969fc83e1.png",align:"center",width:"52"}),"\nbutton in the bottom left corner of the play window and choose \u2018save link as\u2019.  "),(0,o.kt)("div",{className:"remark-oembed-inline remark-oembed-you-tube","data-oembed":""},(0,o.kt)("iframe",{parentName:"div",width:200,height:113,src:"https://www.youtube.com/embed/ZGd5vmwnAPA?feature=oembed",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0,title:"Pico-8 on Miyoo Mini Retro Handheld | Full tutorial | Find games for free and a BONUS Boxart hack!"})))}u.isMDXComponent=!0}}]);