"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={slug:"/apps/guest-mode"},i="Guest Mode",l={unversionedId:"apps/included-in-onion/guest-mode",id:"apps/included-in-onion/guest-mode",title:"Guest Mode",description:"A separate profile for your Onion",source:"@site/docs/07-apps/01-included-in-onion/guest-mode.md",sourceDirName:"07-apps/01-included-in-onion",slug:"/apps/guest-mode",permalink:"/docs/next/apps/guest-mode",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/07-apps/01-included-in-onion/guest-mode.md",tags:[],version:"current",frontMatter:{slug:"/apps/guest-mode"},sidebar:"tutorialSidebar",previous:{title:"GameSwitcher",permalink:"/docs/next/apps/game-switcher"},next:{title:"Music Player",permalink:"/docs/next/apps/music-player"}},s={},p=[{value:"Presentation",id:"presentation",level:2},{value:"Usage",id:"usage",level:2},{value:"Advanced",id:"advanced",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"guest-mode"},"Guest Mode"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"A separate profile for your Onion")),(0,a.kt)("h2",{id:"presentation"},"Presentation"),(0,a.kt)("p",null,"Guest mode is a separate profile so you can safely lend your device to your kid or your friend.\nThe Guest profile will have its own save and save states. Guest mode makes the Onion experience perfect when 2 persons are using the same Miyoo Mini."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,'Go in Apps section and run "Guest mode", the icon will change to show the current state :'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(36476).Z,width:"640",height:"480"})),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(32224).Z,width:"640",height:"480"})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("center",null,(0,a.kt)("sup",null,"Guest mode disabled"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("center",null,(0,a.kt)("sup",null,"Guest mode enabled")))))),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"The profile contains the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Saves"),(0,a.kt)("li",{parentName:"ul"},"States"),(0,a.kt)("li",{parentName:"ul"},"Video filter and scaling options"),(0,a.kt)("li",{parentName:"ul"},"Core options"),(0,a.kt)("li",{parentName:"ul"},"Custom button remapping layouts"),(0,a.kt)("li",{parentName:"ul"},"RetroArch history  ",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"The Game Switcher list will be different to reflect this"))),(0,a.kt)("li",{parentName:"ul"},"RetroArch playlists and favorites"),(0,a.kt)("li",{parentName:"ul"},"Timers for your games  ",(0,a.kt)("sup",null,"Play Activity app")),(0,a.kt)("li",{parentName:"ul"},"RGUI config  ",(0,a.kt)("sup",null,"RetroArch Graphic User Interface"))))}d.isMDXComponent=!0},36476:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/guest-mode-off-69c117622dee5114647982674d445d50.webp"},32224:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/guest-mode-on-50757af0983325ec51f45e5d9ed71d87.webp"}}]);