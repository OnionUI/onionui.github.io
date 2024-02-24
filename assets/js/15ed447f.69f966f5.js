"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6334],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4432:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={slug:"/apps/screen-recorder"},i="Screen Recorder",c={unversionedId:"apps/included-in-onion/screen-recorder",id:"apps/included-in-onion/screen-recorder",title:"Screen Recorder",description:"by XK",source:"@site/docs/07-apps/01-included-in-onion/screen-recorder.md",sourceDirName:"07-apps/01-included-in-onion",slug:"/apps/screen-recorder",permalink:"/docs/apps/screen-recorder",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/07-apps/01-included-in-onion/screen-recorder.md",tags:[],version:"current",frontMatter:{slug:"/apps/screen-recorder"},sidebar:"tutorialSidebar",previous:{title:"Scraper",permalink:"/docs/apps/scraper"},next:{title:"Search",permalink:"/docs/apps/search"}},l={},s=[{value:"Presentation",id:"presentation",level:2},{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Hotkeys",id:"hotkeys",level:3}],d={toc:s},p="wrapper";function u(e){let{components:r,...a}=e;return(0,o.kt)(p,(0,n.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"screen-recorder"},"Screen Recorder"),(0,o.kt)("sup",null,"by XK"),(0,o.kt)("h2",{id:"presentation"},"Presentation"),(0,o.kt)("p",null,"Screen Recorder adds screen record ability for demoing apps/content/features/bugs."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(50419).Z,width:"640",height:"480"})),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Record your current screen."),(0,o.kt)("li",{parentName:"ul"},"Recording indicator icon."),(0,o.kt)("li",{parentName:"ul"},"Customizable countdown before starting recording"),(0,o.kt)("li",{parentName:"ul"},"Hotkey to launch/stop a record from anywhere")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Not really suitable to record games in current build as it's CPU encoding and the framerate is too low for a game.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"You'll find it in Tweaks app: ",(0,o.kt)("a",{parentName:"p",href:"/docs/apps/tweaks#screen-recorder"},(0,o.kt)("inlineCode",{parentName:"a"},"Tools")," -\u203a ",(0,o.kt)("inlineCode",{parentName:"a"},"Screen recorder..."))," and you'll get these options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Start/stop recorder - launch or stop a record\n- Countdown (seconds) - Countdown when starting recording. The screen will pulse white n times to signify recording has started/stopped.\n- Toggle indicator icon - Flashes/shows an icon to remind you you're recording\n- Toggle hotkey - Enables or disables the hotkey to start/stop recording (Hold MENU+A for 2 seconds)\n- Reset screen recorder - Hardkills ffmpeg, removes all flags and stops any recording\n- Delete all recordings - a quick way to delete all recordings in the directory\n")),(0,o.kt)("p",null,"Recorded videos are located in ",(0,o.kt)("inlineCode",{parentName:"p"},"Media\\Videos\\Recorded")," and can be viewed with ",(0,o.kt)("a",{parentName:"p",href:"video-player"},"Onion Video Player")),(0,o.kt)("h3",{id:"hotkeys"},"Hotkeys"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Button"),(0,o.kt)("th",{parentName:"tr",align:null},"Function"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("kbd",null,"Menu"),"+",(0,o.kt)("kbd",null,"A")," ",(0,o.kt)("sup",null,"hold 2s")),(0,o.kt)("td",{parentName:"tr",align:null},"Force enable/disable screen recorder")))))}u.isMDXComponent=!0},50419:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/screen-recorder-54c195da2ec4c542566ee701e15bcad9.webp"}}]);