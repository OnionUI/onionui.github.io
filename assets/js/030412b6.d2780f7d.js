"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8488],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={slug:"/dev/install",sidebar_position:2},a=void 0,l={unversionedId:"For Developers/Installing a build",id:"For Developers/Installing a build",title:"Installing a build",description:"development",source:"@site/docs/For Developers/Installing a build.md",sourceDirName:"For Developers",slug:"/dev/install",permalink:"/docs/next/dev/install",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/dev/install",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/next/dev/setup"},next:{title:"Contributing",permalink:"/docs/next/dev/contribute"}},s={},c=[{value:"First install",id:"first-install",level:2},{value:"Updating the core",id:"updating-the-core",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7110113/184558441-dc2783c1-0447-489d-9bde-b99d63b6d4b7.png",alt:"development"})),(0,o.kt)("h2",{id:"first-install"},"First install"),(0,o.kt)("p",null,"You have to copy the files from ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," to your SD card. You can just overwrite existing files, no need to clean any folders anymore."),(0,o.kt)("h2",{id:"updating-the-core"},"Updating the core"),(0,o.kt)("p",null,"When you've installed the ",(0,o.kt)("em",{parentName:"p"},"fresh Onion"),", you can just copy the files from the ",(0,o.kt)("inlineCode",{parentName:"p"},"build/.tmp_update")," folder for testing subsequent builds."))}d.isMDXComponent=!0}}]);