"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?l.createElement(h,i(i({ref:t},s),{},{components:n})):l.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=n(87462),r=(n(67294),n(3905));const a={slug:"/apps/blue-light-filter"},i="Blue Light Filter",o={unversionedId:"apps/included-in-onion/blue-light-filter",id:"apps/included-in-onion/blue-light-filter",title:"Blue Light Filter",description:"by XK",source:"@site/docs/07-apps/01-included-in-onion/blue-light-filter.md",sourceDirName:"07-apps/01-included-in-onion",slug:"/apps/blue-light-filter",permalink:"/docs/apps/blue-light-filter",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/07-apps/01-included-in-onion/blue-light-filter.md",tags:[],version:"current",frontMatter:{slug:"/apps/blue-light-filter"},sidebar:"tutorialSidebar",previous:{title:"Battery Tool",permalink:"/docs/apps/battery-tool"},next:{title:"Clock",permalink:"/docs/apps/clock"}},p={},u=[{value:"Presentation",id:"presentation",level:2},{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Hotkeys",id:"hotkeys",level:3}],s={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blue-light-filter"},"Blue Light Filter"),(0,r.kt)("sup",null,"by XK"),(0,r.kt)("h2",{id:"presentation"},"Presentation"),(0,r.kt)("p",null,'Blue Light Filter is a tool included in Tweaks app which allows you to change the colortemp of the screen to have more eye confort in low-light environments.\nIt can be compared to "f.lux", "Night shit" on IOS or "Night Light" on Windows.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(88831).Z,width:"640",height:"480"})),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gradually change of the colortemp of the screen"),(0,r.kt)("li",{parentName:"ul"},"Time scheduling"),(0,r.kt)("li",{parentName:"ul"},"5 presets available :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Subtle"),(0,r.kt)("li",{parentName:"ul"},"Moderate"),(0,r.kt)("li",{parentName:"ul"},"Balanced"),(0,r.kt)("li",{parentName:"ul"},"Strong"),(0,r.kt)("li",{parentName:"ul"},"Intense")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"You'll find it in Tweaks app: ",(0,r.kt)("a",{parentName:"p",href:"/docs/apps/tweaks#blue-light-filter"},(0,r.kt)("inlineCode",{parentName:"a"},"Appearance")," -\u203a ",(0,r.kt)("inlineCode",{parentName:"a"},"Blue light filter..."))," and you'll get 5 options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"State")," - Shows the current state of Blue Light Filter, can be used too to enable/disable Blue Light Filter now."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Schedule")," - Allow to enable Blue Light Filter automatically during the time interval defined below."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Strength")," - Choose one of the 5 presets available here."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Time (On)")," - Time Blue light filter will be activated"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Time (Off)")," - Time Blue light filter will be disabled")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To use Schedule you'll need a Miyoo Mini Plus with \"",(0,r.kt)("a",{parentName:"p",href:"/docs/apps/tweaks#set-automatically-via-the-internet"},"Set time automatically via internet"),'" enabled.')),(0,r.kt)("h3",{id:"hotkeys"},"Hotkeys"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Button"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("kbd",null,"Menu"),"+",(0,r.kt)("kbd",null,"B")," ",(0,r.kt)("sup",null,"hold 2s")),(0,r.kt)("td",{parentName:"tr",align:null},"Force enable/disable Blue light filter")))))}d.isMDXComponent=!0},88831:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/blue-light-filter-2e3067ab7137c8d5c1dee1fd1716b68a.webp"}}]);