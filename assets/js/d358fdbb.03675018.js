"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7191],{3905:(A,e,t)=>{t.d(e,{Zo:()=>B,kt:()=>c});var n=t(67294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function E(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function g(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?E(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function I(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},E=Object.keys(A);for(n=0;n<E.length;n++)t=E[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(A);for(n=0;n<E.length;n++)t=E[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var i=n.createContext({}),o=function(A){var e=n.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):g(g({},e),A)),t},B=function(A){var e=o(A.components);return n.createElement(i.Provider,{value:e},A.children)},C="mdxType",a={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},Q=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,E=A.originalType,i=A.parentName,B=I(A,["components","mdxType","originalType","parentName"]),C=o(t),Q=r,c=C["".concat(i,".").concat(Q)]||C[Q]||a[Q]||E;return t?n.createElement(c,g(g({ref:e},B),{},{components:t})):n.createElement(c,g({ref:e},B))}));function c(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var E=t.length,g=new Array(E);g[0]=Q;var I={};for(var i in e)hasOwnProperty.call(e,i)&&(I[i]=e[i]);I.originalType=A,I[C]="string"==typeof A?A:r,g[1]=I;for(var o=2;o<E;o++)g[o]=t[o];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}Q.displayName="MDXCreateElement"},57196:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>g,default:()=>a,frontMatter:()=>E,metadata:()=>I,toc:()=>o});var n=t(87462),r=(t(67294),t(3905));const E={slug:"/apps/clock",description:"Set your Onion's time"},g="Clock",I={unversionedId:"apps/included-in-onion/clock",id:"apps/included-in-onion/clock",title:"Clock",description:"Set your Onion's time",source:"@site/docs/07-apps/01-included-in-onion/clock.md",sourceDirName:"07-apps/01-included-in-onion",slug:"/apps/clock",permalink:"/docs/apps/clock",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/07-apps/01-included-in-onion/clock.md",tags:[],version:"current",frontMatter:{slug:"/apps/clock",description:"Set your Onion's time"},sidebar:"tutorialSidebar",previous:{title:"Blue Light Filter",permalink:"/docs/apps/blue-light-filter"},next:{title:"Display Calibration",permalink:"/docs/apps/display-calibration"}},i={},o=[{value:"Presentation",id:"presentation",level:2},{value:"Usage",id:"usage",level:2},{value:"Advanced",id:"advanced",level:2}],B={toc:o},C="wrapper";function a(A){let{components:e,...g}=A;return(0,r.kt)(C,(0,n.Z)({},B,g,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clock"},"Clock"),(0,r.kt)("p",null,(0,r.kt)("i",null,E.description)),(0,r.kt)("h2",{id:"presentation"},"Presentation"),(0,r.kt)("p",null,"Simple clock app which allows you to manually set the clock of your device. Especially useful for the Miyoo Mini which doesn't have an internal RTC (which means that the time is reset at each boot). By default, Onion preserves the current time during shutdown, and upon the subsequent boot, it is restored with 4 hours added.\nIf RTC is present, which is the case with newer Miyoo Mini+, or if it is modded in, the time is not restored or advanced but will instead be set by RTC."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(84210).Z,width:"640",height:"480"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"On the Miyoo Mini Plus, Onion can use the WiFi connection to set the time at each boot. Configure it from ",(0,r.kt)("a",{parentName:"p",href:"tweaks#set-automatically-via-the-internet"},"Tweaks app"),".")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Clock is available in ",(0,r.kt)("a",{parentName:"p",href:"package-manager"},"Package Manager"),"."),(0,r.kt)("p",null,"Use the D-pad to set the current date. "),(0,r.kt)("h2",{id:"advanced"},"Advanced"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OnionUI/Onion/tree/main/src/clock"},"Clock source code")))}a.isMDXComponent=!0},84210:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);