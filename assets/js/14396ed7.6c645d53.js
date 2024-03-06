"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,p=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(p,i(i({ref:t},m),{},{components:n})):r.createElement(p,i({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));n(3901),n(54244),n(32492);const o={slug:"release-notes/4.3.0",authors:["aemiii91","schmurtz","totofaki","xk","tgecko"],tags:["release-notes","stable"],image:"./assets/banner-release-4.3.png"},i="Release notes: Onion V4.3",l={permalink:"/blog/release-notes/4.3.0",source:"@site/blog/release-notes/2024-02-24-release-notes-4.3.0/index.mdx",title:"Release notes: Onion V4.3",description:"Official release notes for Onion V4.3.0",date:"2024-02-24T00:00:00.000Z",formattedDate:"February 24, 2024",tags:[{label:"release-notes",permalink:"/blog/tags/release-notes"},{label:"stable",permalink:"/blog/tags/stable"}],hasTruncateMarker:!0,authors:[{name:"Aemiii91",title:"Onion Core Team",url:"https://github.com/Aemiii91",imageURL:"https://github.com/Aemiii91.png",key:"aemiii91"},{name:"Schmurtz",title:"Onion Core Team",url:"https://github.com/schmurtzm",imageURL:"https://github.com/schmurtzm.png",key:"schmurtz"},{name:"Totofaki",title:"Onion Core Team",url:"https://github.com/Sichroteph",imageURL:"https://github.com/Sichroteph.png",key:"totofaki"},{name:"XK",title:"Onion Core Team",url:"https://github.com/XK9274",imageURL:"https://github.com/XK9274.png",key:"xk"},{name:"tGecko",title:"Onion Core Team",url:"https://github.com/tGecko",imageURL:"https://github.com/tGecko.png",key:"tgecko"}],frontMatter:{slug:"release-notes/4.3.0",authors:["aemiii91","schmurtz","totofaki","xk","tgecko"],tags:["release-notes","stable"],image:"./assets/banner-release-4.3.png"},nextItem:{title:"Celebrating FOSS and the Onion community",permalink:"/blog/celebrating"}},s={image:n(92119).Z,authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},c=[],m={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:s.image}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Official release notes for Onion V4.3.0")),(0,a.kt)("p",null,"This release includes new systems, such as Nintendo DS and PICO-8, a lot of new and updated apps such as the Battery Monitor and the Blue light filter,\nsupport for the v4 Miyoo Mini's 560p screen as well as lots of other new features and fixes."))}d.isMDXComponent=!0},3901:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(75054);const o={tableOfContentsInline:"tableOfContentsInline_prmo"};function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return r.createElement("div",{className:o.tableOfContentsInline},r.createElement(a.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},54244:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(39960);function o(e){let{readMore:t,children:n}=e;return r.createElement("article",null,r.createElement("div",{className:"card margin-bottom--md"},r.createElement("div",{className:"card__body"},n),t&&r.createElement("div",{className:"card__footer text--right"},r.createElement(a.Z,{href:t},"Read More"))))}},32492:(e,t,n)=>{n(67294),n(39960)},75054:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(67294),o=n(86668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):r.push(a)})),r}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>s(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,a.useRef)(void 0),n=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let a=t;a<=n;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),s=c(l,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:r,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value.replace(/<img[^>]*>/g,"")}}),a.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const f=a.memo(d);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:d,...p}=e;const g=(0,o.L)(),h=m??g.tableOfContents.minHeadingLevel,v=d??g.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return u((0,a.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:v}}),[s,c,h,v])),a.createElement(f,(0,r.Z)({toc:b,className:n,linkClassName:s},p))}},92119:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/banner-release-4.3-c2e4d879c1e4c3a66067d3a68606c38e.png"}}]);