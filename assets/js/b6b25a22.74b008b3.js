"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),y=r,d=u["".concat(p,".").concat(y)]||u[y]||m[y]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7294),r=n(6010),o=n(3438),l=n(9960),i=n(3919),p=n(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function c(e){let{href:t,children:n}=e;return a.createElement(l.Z,{href:t,className:(0,r.Z)("card padding--lg",s.cardContainer)},n)}function u(e){let{href:t,icon:n,title:o,description:l}=e;return a.createElement(c,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",s.cardTitle),title:o},n," ",o),l&&a.createElement("p",{className:(0,r.Z)("text--truncate",s.cardDescription),title:l},l))}function m(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?a.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return a.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function d(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(y,{item:t});case"category":return a.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.jA)();return a.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return a.createElement(f,e);const l=(0,o.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},l.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(d,{item:e})))))}},8753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(2991);const l={slug:"/multiplayer"},i="Multiplayer",p={unversionedId:"multiplayer-netplay/index",id:"multiplayer-netplay/index",title:"Multiplayer",description:"The entry point to play Multiplayer / Netplay is the GLO menu. It will allow you to switch into an optimized version of Retroarch for Netplay without any manual configuration.",source:"@site/docs/06-multiplayer-netplay/index.mdx",sourceDirName:"06-multiplayer-netplay",slug:"/multiplayer",permalink:"/docs/multiplayer",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/06-multiplayer-netplay/index.mdx",tags:[],version:"current",frontMatter:{slug:"/multiplayer"},sidebar:"tutorialSidebar",previous:{title:"Ports collection",permalink:"/docs/ports"},next:{title:"Standard Netplay",permalink:"/docs/multiplayer/standardnetplay"}},s={},c=[{value:"How to use Netplay GLO menu",id:"how-to-use-netplay-glo-menu",level:2},{value:"The naviation map of GLO Netplay :",id:"the-naviation-map-of-glo-netplay-",level:4},{value:"Once Netplay option selected, then let the GLO menu guide you :",id:"once-netplay-option-selected-then-let-the-glo-menu-guide-you-",level:4},{value:"Then select the type of Netplay session you want to start :",id:"then-select-the-type-of-netplay-session-you-want-to-start-",level:4},{value:"Tips :",id:"tips-",level:2}],u={toc:c},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multiplayer"},"Multiplayer"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("img",{parentName:"em",src:"https://github.com/OnionUI/Onion/assets/47260768/031e60fa-e6dd-4059-9982-3ec397a3d0cd",alt:null}))),(0,r.kt)("p",null,"The entry point to play Multiplayer / Netplay is the GLO menu. It will allow you to switch into an optimized version of Retroarch for Netplay without any manual configuration."),(0,r.kt)("h2",{id:"how-to-use-netplay-glo-menu"},"How to use Netplay GLO menu"),(0,r.kt)("p",null,'Select a game and then press Y to display the GLO menu and find the "Netplay" option in the list.\nYou will note that Onion now select automatically the best core for your Netplay session.'),(0,r.kt)("p",null,'If "No Netplay" is mentioned in GLO menu, it means that there are no Netplay cores available for the selected platform (for example GBA).'),(0,r.kt)("h4",{id:"the-naviation-map-of-glo-netplay-"},"The naviation map of GLO Netplay :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                       \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                                       \u2502  \u2502Standard Netplay\u2502\n                    \u2502  \u250c\u2500\u2500\u2500\u2500\u2510          \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502  \u2502Host\u2502          \u2502\n                    \u2502  \u2514\u2500\u2500\u2500\u2500\u2518          \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510          \u2502                  \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502Netplay \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba \u2502          \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502  \u2502Easy Netplay\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518          \u2502                  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502  \u250c\u2500\u2500\u2500\u2500\u2510          \u2502\n                    \u2502  \u2502Join\u2502          \u2502\n                    \u2502  \u2514\u2500\u2500\u2500\u2500\u2518          \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                                       \u2502  \u2502Easy Netplay - Pokemon Trade\u2502  (only in GB/GBC systems)\n                                       \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h4",{id:"once-netplay-option-selected-then-let-the-glo-menu-guide-you-"},"Once Netplay option selected, then let the GLO menu guide you :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Select "',(0,r.kt)("strong",{parentName:"li"},"Host"),'" if you want to the the server of a new Netplay session.'),(0,r.kt)("li",{parentName:"ul"},'Select "',(0,r.kt)("strong",{parentName:"li"},"Join"),'" if you want to join an existing Netplay session.')),(0,r.kt)("h4",{id:"then-select-the-type-of-netplay-session-you-want-to-start-"},"Then select the type of Netplay session you want to start :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"multiplayer/standardnetplay"},"Standard Netplay"))),(0,r.kt)("p",{parentName:"li"},"This mode will use your current wifi connection to create a session on internet and on you local network.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"multiplayer/easynetplay"},"Easy Netplay"))," "),(0,r.kt)("p",{parentName:"li"},' When you have two Miyoo Mini Plus in the same room, "Easy Netplay" lets you play a multiplayer game without any configuration, as it requires no prior wifi setup.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"multiplayer/easynetplay-pokemon"},"Easy Netplay - Pokemon Trade/Battle"))),(0,r.kt)("p",{parentName:"li"},' This option in only available on GB/GBC, similar to the previous "Easy Netplay" but allows to trade pokemon with local friends without any configuration !'))),(0,r.kt)("h2",{id:"tips-"},"Tips :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Always use GLO to run your Netplay sessions, GLO run Retroarch with a specific configuration which avoid many crashs / Freezes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The default Netplay cores for Onion are stored in ",(0,r.kt)("inlineCode",{parentName:"p"},".tmp_update/config/netplay_cores.conf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As Netplay consumes more CPU than usual an overclock option is available in ",(0,r.kt)("inlineCode",{parentName:"p"},"netplay_cores.cfg"),"."),(0,r.kt)("p",{parentName:"li"},"For example : "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-Rom_Folder_Name;Core_Filename;Core_Config_Folder;CPUspeed;"},"GB;tgbdual_libretro.so;\nSFC;snes9x2005_libretro.so;Snes9x 2005;1600;```\n")))),(0,r.kt)(o.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);