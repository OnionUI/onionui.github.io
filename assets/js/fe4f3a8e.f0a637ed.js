"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={slug:"/apps/activity-tracker",description:"Track your play activity"},l="Activity Tracker",o={unversionedId:"apps/included-in-onion/activity-tracker",id:"apps/included-in-onion/activity-tracker",title:"Activity Tracker",description:"Track your play activity",source:"@site/docs/07-apps/01-included-in-onion/activity-tracker.md",sourceDirName:"07-apps/01-included-in-onion",slug:"/apps/activity-tracker",permalink:"/docs/apps/activity-tracker",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/07-apps/01-included-in-onion/activity-tracker.md",tags:[],version:"current",frontMatter:{slug:"/apps/activity-tracker",description:"Track your play activity"},sidebar:"tutorialSidebar",previous:{title:"Included apps",permalink:"/docs/included-apps"},next:{title:"AdvanceMENU",permalink:"/docs/apps/advancemenu"}},c={},p=[{value:"Presentation",id:"presentation",level:2},{value:"Usage",id:"usage",level:2},{value:"Controls",id:"controls",level:3},{value:"Advanced",id:"advanced",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"activity-tracker"},"Activity Tracker"),(0,a.kt)("p",null,(0,a.kt)("i",null,i.description)),(0,a.kt)("h2",{id:"presentation"},"Presentation"),(0,a.kt)("p",null,"Activity Tracker tracks your game time for all the games you play! Also shows your overall play time in the top bar."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8053).Z,width:"640",height:"480"})),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("inlineCode",{parentName:"p"},"Activity Tracker")," app you can : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Track your game playtimes."),(0,a.kt)("li",{parentName:"ul"},"View your total playtime in the top bar."),(0,a.kt)("li",{parentName:"ul"},"Share your playtimes by taking a screenshot (press ",(0,a.kt)("kbd",null,"MENU"),"+",(0,a.kt)("kbd",null,"POWER")," - screenshot is saved in ",(0,a.kt)("inlineCode",{parentName:"li"},"Screenshots")," folder).")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Activity Tracker is installed by default in Onion."),(0,a.kt)("p",null,"For each game you'll see :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TOTAL")," = total playtime on this game."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AVG")," = average session time on this game"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PLAY")," = number of times you have launched the game")),(0,a.kt)("h3",{id:"controls"},"Controls"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Button"),(0,a.kt)("th",{parentName:"tr",align:null},"Function"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("kbd",null,"Y")),(0,a.kt)("td",{parentName:"tr",align:null},"Toggle between full and short game names")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("kbd",null,"B")),(0,a.kt)("td",{parentName:"tr",align:null},"Exit")))),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OnionUI/Onion/tree/main/src/playActivityUI"},"Activity Tracker source code"),"."))}d.isMDXComponent=!0},8053:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/activity-tracker-a0f891ebad6653a64e445bdf2d045ac0.webp"}}]);