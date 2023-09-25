"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3438],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(r),p=c,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,i=new Array(a);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:c,i[1]=o;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),c=r(6010),a=r(3438),i=r(9960),o=r(3919),s=r(5999);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",d.cardContainer)},r)}function u(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(l,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",d.cardTitle),title:a},r," ",a),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",d.cardDescription),title:i},i))}function m(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??c?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},6832:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(3117),c=(r(7294),r(3905)),a=r(2991);const i={slug:"/advanced"},o="Advanced guides",s={unversionedId:"resources/advanced-guides/index",id:"resources/advanced-guides/index",title:"Advanced guides",description:"",source:"@site/docs/02-resources/04-advanced-guides/index.mdx",sourceDirName:"02-resources/04-advanced-guides",slug:"/advanced",permalink:"/docs/advanced",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/02-resources/04-advanced-guides/index.mdx",tags:[],version:"current",frontMatter:{slug:"/advanced"},sidebar:"tutorialSidebar",previous:{title:"Theme design",permalink:"/docs/theme-design"},next:{title:"AdvanceMENU",permalink:"/docs/advanced/advancemenu"}},d={},l=[],u={toc:l},m="wrapper";function p(e){let{components:t,...r}=e;return(0,c.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"advanced-guides"},"Advanced guides"),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},(0,c.kt)("img",{parentName:"em",src:"https://user-images.githubusercontent.com/98862735/178853223-10d53d46-3d80-4d44-95d6-3cd345a730e1.png",alt:null}))),(0,c.kt)(a.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);