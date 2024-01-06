"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),d=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return l.createElement(u.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,f=s["".concat(u,".").concat(c)]||s[c]||k[c]||a;return n?l.createElement(f,i(i({ref:t},p),{},{components:n})):l.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var l=n(87462),r=(n(67294),n(3905));const a={slug:"/apps/video-player",description:"A fully featured video player for Onion."},i="Video Player",o={unversionedId:"apps/included-in-onion/video-player",id:"apps/included-in-onion/video-player",title:"Video Player",description:"A fully featured video player for Onion.",source:"@site/docs/07-apps/01-included-in-onion/video-player.md",sourceDirName:"07-apps/01-included-in-onion",slug:"/apps/video-player",permalink:"/docs/next/apps/video-player",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/07-apps/01-included-in-onion/video-player.md",tags:[],version:"current",frontMatter:{slug:"/apps/video-player",description:"A fully featured video player for Onion."},sidebar:"tutorialSidebar",previous:{title:"Tweaks",permalink:"/docs/next/apps/tweaks"},next:{title:"Community apps",permalink:"/docs/next/community-apps"}},u={},d=[{value:"Presentation",id:"presentation",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Advanced",id:"advanced",level:2},{value:"How to force 16:9 startup",id:"how-to-force-169-startup",level:4},{value:"Original repositories",id:"original-repositories",level:4}],p={toc:d},s="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"video-player"},"Video Player"),(0,r.kt)("sup",null,"by Steward Fu & BoboTraX"),(0,r.kt)("h2",{id:"presentation"},"Presentation"),(0,r.kt)("p",null,"A fully featured video player for Onion based on FFplay."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/17168896/193084909-ec97ca37-3b0f-4433-a240-2ccc62421671.gif",alt:"animated"})),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run Package Manager from apps section and install the Video Player"),(0,r.kt)("li",{parentName:"ul"},"Place your videos in ",(0,r.kt)("inlineCode",{parentName:"li"},"Media/Videos")," folder of your SD card, using Subfolders is possible.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Many formats are supported, after a few tests a little everything below 1080p is supported. The easiest way is to test!"),(0,r.kt)("table",{align:"center"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Buttons"),(0,r.kt)("th",null,"Action"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"UP")),(0,r.kt)("td",null,"+60 seconds")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"DOWN")),(0,r.kt)("td",null,"-60 seconds")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"LEFT")),(0,r.kt)("td",null,"-10 seconds")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"RIGHT")),(0,r.kt)("td",null,"+10 seconds")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"A")),(0,r.kt)("td",null,"Pause")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"B")),(0,r.kt)("td",null,"Next frame ",(0,r.kt)("sub",null,"(frame by frame)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"X")),(0,r.kt)("td",null,"+10 minutes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"Y")),(0,r.kt)("td",null,"-10 minutes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"L1")),(0,r.kt)("td",null,"Cycle audio channel")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"L2")),(0,r.kt)("td",null,"Cycle video channel")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"R1")),(0,r.kt)("td",null,"Cycle audio, video and subtitle channel")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"R2")),(0,r.kt)("td",null,"Cycle subtitle channel")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"START")),(0,r.kt)("td",null,"Full screen / 16:9")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"SELECT")),(0,r.kt)("td",null,"Display effect")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("kbd",null,"MENU")),(0,r.kt)("td",null,"Save and leave")))),(0,r.kt)("h2",{id:"advanced"},"Advanced"),(0,r.kt)("h4",{id:"how-to-force-169-startup"},"How to force 16:9 startup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On your SD card, go to the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"Emu/ffplay/bin"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Rename the file ",(0,r.kt)("inlineCode",{parentName:"p"},"ffplay")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"ffplay_4_3"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Rename the file ",(0,r.kt)("inlineCode",{parentName:"p"},"ffplay_16_9")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"ffplay")))),(0,r.kt)("h4",{id:"original-repositories"},"Original repositories"),(0,r.kt)("p",null,"Improving on the ",(0,r.kt)("a",{parentName:"p",href:"https://steward-fu.github.io/website/handheld/miyoo-mini/parasyte_build_ffplay.htm"},"Steward-fu release"),", the dependency on Parasyte is now removed with only necessary libraries included.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://steward-fu.github.io/website/handheld/miyoo-mini/parasyte_build_ffplay.htm"},"Original compilation by Steward Fu"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/bobotrax/ffplay_Miyoo"},"Edited by BoboTraX")))))}k.isMDXComponent=!0}}]);