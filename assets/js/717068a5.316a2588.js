"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),a=n(6010),i=n(3438),o=n(9960),s=n(3919),l=n(5999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",c.cardContainer)},n)}function d(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",c.cardTitle),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",c.cardDescription),title:o},o))}function p(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(u,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const o=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},5367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),i=n(2991);const o={sidebar_position:4,slug:"/emulators"},s="Emulators",l={unversionedId:"getting-started/emulators/index",id:"getting-started/emulators/index",title:"Emulators",description:"All Systems",source:"@site/docs/01-getting-started/04-emulators/index.mdx",sourceDirName:"01-getting-started/04-emulators",slug:"/emulators",permalink:"/docs/emulators",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/emulators"},sidebar:"tutorialSidebar",previous:{title:"Frequently Asked Questions (FAQ)",permalink:"/docs/faq"},next:{title:"Arcade systems",permalink:"/docs/emulators/arcade"}},c={},m=[{value:"Important information",id:"important-information",level:2},{value:"Verified vs. experimental systems",id:"verified-vs-experimental-systems",level:3},{value:"Bios files",id:"bios-files",level:3},{value:"Rom files",id:"rom-files",level:3}],d={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"emulators"},"Emulators"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/98862735/177056342-dbdd3c7f-30de-4669-945a-d5e5d330b7ab.png",alt:"All Systems"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This category contains information on all supported emulators and rom formats for each system.")),(0,a.kt)("h2",{id:"important-information"},"Important information"),(0,a.kt)("h3",{id:"verified-vs-experimental-systems"},"Verified vs. experimental systems"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Verified systems")," are marked with \u2714"),(0,a.kt)("p",{parentName:"li"},'These are found in the "Verified" section of Package Manager, and will be installed in the ',(0,a.kt)("inlineCode",{parentName:"p"},"Games")," tab.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Experimental systems")," are marked with \u26a0"),(0,a.kt)("p",{parentName:"li"},'These are found in the "Expert" section of Package Manager and will be installed in the ',(0,a.kt)("inlineCode",{parentName:"p"},"Expert")," tab (hidden by default). The ",(0,a.kt)("inlineCode",{parentName:"p"},"Expert")," tab can be accessed by installing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Expert")," shortcut or by enabling it via ",(0,a.kt)("inlineCode",{parentName:"p"},"Apps")," \u203a ",(0,a.kt)("inlineCode",{parentName:"p"},"Tweaks")," \u203a ",(0,a.kt)("inlineCode",{parentName:"p"},"User interface")," \u203a ",(0,a.kt)("inlineCode",{parentName:"p"},"Show expert mode"),"."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," These may require additional learning, files and configuration by the user to get working. Some may have performance or compatibility issues, please research and refer to the libretro core documentation.")))),(0,a.kt)("h3",{id:"bios-files"},"Bios files"),(0,a.kt)("p",null,"Bios files are essential for some systems, should be named exactly as stated below and placed in the root ",(0,a.kt)("inlineCode",{parentName:"p"},"/BIOS")," folder, unless otherwise indicated in a specific systems notes further below. Bios file names and extensions are case sensitive!"),(0,a.kt)("h3",{id:"rom-files"},"Rom files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The roms on the included Miyoo Mini SD card are a mixed bag which can lead to incompatibility with some emulators. It is highly recommended to source your own roms to get the most out of the device."),(0,a.kt)("li",{parentName:"ul"},"Rom folder names are case sensitive and differ in Onion vs the stock Miyoo SD card, copy your roms from system to system if coming from stock (copying the \u2018Roms\u2019 folder wholesale from the Miyoo SD card will not work)."),(0,a.kt)("li",{parentName:"ul"},"Subfolders can be used inside your rom folders but ONLY one level deep (i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"Roms/GB/Hacks"),"). "),(0,a.kt)("li",{parentName:"ul"},"Subfolders cannot have an apostrophe (",(0,a.kt)("inlineCode",{parentName:"li"},"'"),") in the name and browsing subfolders is not compatible with miyoogamelist.xml (all games will appear as one flat list). "),(0,a.kt)("li",{parentName:"ul"},"If you add new roms to a system, highlight the system in the Games tab and press ",(0,a.kt)("kbd",null,"SELECT")," \u203a ",(0,a.kt)("inlineCode",{parentName:"li"},"Refresh all roms"),". "),(0,a.kt)("li",{parentName:"ul"},"To add a game to your Favorites list, highlight the game in the game list and press ",(0,a.kt)("kbd",null,"SELECT")," \u203a ",(0,a.kt)("inlineCode",{parentName:"li"},"Add to favorites"),".")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The details provided in the pages below are for guidance and not every emulator included in Onion has been documented.")),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);