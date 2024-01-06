"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||c;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),a=r(86010),c=r(53438),o=r(39960),i=r(13919),l=r(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s.cardContainer)},r)}function m(e){let{href:t,icon:r,title:c,description:o}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:c},r," ",c),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:o},o))}function u(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,c.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const o=(0,c.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},93990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),c=r(52991);const o={slug:"/emulators/handhelds"},i="Handheld systems",l={unversionedId:"emulators/handhelds/index",id:"emulators/handhelds/index",title:"Handheld systems",description:"",source:"@site/docs/04-emulators/03-handhelds/index.mdx",sourceDirName:"04-emulators/03-handhelds",slug:"/emulators/handhelds",permalink:"/docs/next/emulators/handhelds",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/04-emulators/03-handhelds/index.mdx",tags:[],version:"current",frontMatter:{slug:"/emulators/handhelds"},sidebar:"tutorialSidebar",previous:{title:"Uzebox \u26a0",permalink:"/docs/next/emulators/uzebox"},next:{title:"Atari - Lynx \u2714",permalink:"/docs/next/emulators/lynx"}},s={},d=[],m={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"handheld-systems"},"Handheld systems"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("img",{parentName:"em",src:"https://user-images.githubusercontent.com/98862735/177056405-7ccd6fb5-0a49-4ec8-b8da-5dcb280c17f4.png",alt:null}))),(0,a.kt)(c.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);