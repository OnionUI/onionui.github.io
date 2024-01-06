"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const l={slug:"/dev/install"},a="Installing a build",o={unversionedId:"guides/dev/installing-a-build",id:"guides/dev/installing-a-build",title:"Installing a build",description:"First install",source:"@site/docs/08-guides/03-dev/02-installing-a-build.md",sourceDirName:"08-guides/03-dev",slug:"/dev/install",permalink:"/docs/next/dev/install",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/08-guides/03-dev/02-installing-a-build.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/dev/install"},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/next/dev/setup"},next:{title:"Contributing",permalink:"/docs/next/dev/contribute"}},s={},u=[{value:"First install",id:"first-install",level:2},{value:"Updating the core",id:"updating-the-core",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-a-build"},"Installing a build"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7110113/184558441-dc2783c1-0447-489d-9bde-b99d63b6d4b7.png",alt:null})),(0,i.kt)("h2",{id:"first-install"},"First install"),(0,i.kt)("p",null,"You have to copy the files from ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," to your SD card. You can just overwrite existing files, no need to clean any folders anymore."),(0,i.kt)("h2",{id:"updating-the-core"},"Updating the core"),(0,i.kt)("p",null,"When you've installed the ",(0,i.kt)("em",{parentName:"p"},"fresh Onion"),", you can just copy the files from the ",(0,i.kt)("inlineCode",{parentName:"p"},"build/.tmp_update")," folder for testing subsequent builds."))}p.isMDXComponent=!0}}]);