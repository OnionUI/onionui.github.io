"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7165],{3905:(A,e,t)=>{t.d(e,{Zo:()=>C,kt:()=>c});var n=t(7294);function E(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function g(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function I(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(Object(t),!0).forEach((function(e){E(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function r(A,e){if(null==A)return{};var t,n,E=function(A,e){if(null==A)return{};var t,n,E={},g=Object.keys(A);for(n=0;n<g.length;n++)t=g[n],e.indexOf(t)>=0||(E[t]=A[t]);return E}(A,e);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(A);for(n=0;n<g.length;n++)t=g[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(E[t]=A[t])}return E}var i=n.createContext({}),B=function(A){var e=n.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):I(I({},e),A)),t},C=function(A){var e=B(A.components);return n.createElement(i.Provider,{value:e},A.children)},o="mdxType",a={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},Q=n.forwardRef((function(A,e){var t=A.components,E=A.mdxType,g=A.originalType,i=A.parentName,C=r(A,["components","mdxType","originalType","parentName"]),o=B(t),Q=E,c=o["".concat(i,".").concat(Q)]||o[Q]||a[Q]||g;return t?n.createElement(c,I(I({ref:e},C),{},{components:t})):n.createElement(c,I({ref:e},C))}));function c(A,e){var t=arguments,E=e&&e.mdxType;if("string"==typeof A||E){var g=t.length,I=new Array(g);I[0]=Q;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=A,r[o]="string"==typeof A?A:E,I[1]=r;for(var B=2;B<g;B++)I[B]=t[B];return n.createElement.apply(null,I)}return n.createElement.apply(null,t)}Q.displayName="MDXCreateElement"},7196:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>I,default:()=>a,frontMatter:()=>g,metadata:()=>r,toc:()=>B});var n=t(7462),E=(t(7294),t(3905));const g={slug:"/apps/clock",description:"Set your Onions time"},I="Clock",r={unversionedId:"apps/included-in-onion/clock",id:"apps/included-in-onion/clock",title:"Clock",description:"Set your Onions time",source:"@site/docs/07-apps/01-included-in-onion/clock.md",sourceDirName:"07-apps/01-included-in-onion",slug:"/apps/clock",permalink:"/docs/apps/clock",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/07-apps/01-included-in-onion/clock.md",tags:[],version:"current",frontMatter:{slug:"/apps/clock",description:"Set your Onions time"},sidebar:"tutorialSidebar",previous:{title:"AdvanceMENU",permalink:"/docs/apps/advancemenu"},next:{title:"Display Calibration",permalink:"/docs/apps/display-calibration"}},i={},B=[{value:"Presentation",id:"presentation",level:2},{value:"Usage",id:"usage",level:2},{value:"Advanced",id:"advanced",level:2}],C={toc:B},o="wrapper";function a(A){let{components:e,...I}=A;return(0,E.kt)(o,(0,n.Z)({},C,I,{components:e,mdxType:"MDXLayout"}),(0,E.kt)("h1",{id:"clock"},"Clock"),(0,E.kt)("p",null,(0,E.kt)("i",null,g.description)),(0,E.kt)("h2",{id:"presentation"},"Presentation"),(0,E.kt)("p",null,"Simple clock app which allows you to manually set the clock of your device. Especially usefull for the Miyoo Mini which doesn't have an internal RTC (which means that the time is reset at each boot). By default, the stop time is saved and increased of 4 hours on next boot."),(0,E.kt)("p",null,(0,E.kt)("img",{src:t(4210).Z,width:"640",height:"480"})),(0,E.kt)("admonition",{type:"note"},(0,E.kt)("p",{parentName:"admonition"},"On the Miyoo Mini Plus, Onion can use the wifi connection to set the time at each boot. Configure it from ",(0,E.kt)("a",{parentName:"p",href:"tweaks#set-automatically-via-the-internet"},"Tweaks app"),".")),(0,E.kt)("h2",{id:"usage"},"Usage"),(0,E.kt)("p",null,"Clock is available in ",(0,E.kt)("a",{parentName:"p",href:"package-manager"},"Package Manager"),"."),(0,E.kt)("p",null,"Use the D-pad to set the current date. "),(0,E.kt)("h2",{id:"advanced"},"Advanced"),(0,E.kt)("p",null,(0,E.kt)("a",{parentName:"p",href:"https://github.com/OnionUI/Onion/tree/main/src/clock"},"Clock source code")))}a.isMDXComponent=!0},4210:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);