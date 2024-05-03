"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6629],{3905:(A,e,t)=>{t.d(e,{Zo:()=>C,kt:()=>l});var n=t(67294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function i(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function g(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},i=Object.keys(A);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var E=n.createContext({}),I=function(A){var e=n.useContext(E),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},C=function(A){var e=I(A.components);return n.createElement(E.Provider,{value:e},A.children)},Q="mdxType",o={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},B=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,i=A.originalType,E=A.parentName,C=g(A,["components","mdxType","originalType","parentName"]),Q=I(t),B=r,l=Q["".concat(E,".").concat(B)]||Q[B]||o[B]||i;return t?n.createElement(l,a(a({ref:e},C),{},{components:t})):n.createElement(l,a({ref:e},C))}));function l(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var i=t.length,a=new Array(i);a[0]=B;var g={};for(var E in e)hasOwnProperty.call(e,E)&&(g[E]=e[E]);g.originalType=A,g[Q]="string"==typeof A?A:r,a[1]=g;for(var I=2;I<i;I++)a[I]=t[I];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}B.displayName="MDXCreateElement"},98766:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>E,contentTitle:()=>a,default:()=>o,frontMatter:()=>i,metadata:()=>g,toc:()=>I});var n=t(87462),r=(t(67294),t(3905));const i={slug:"/apps/ota-update",description:"Update your Onion using WiFi"},a="Onion OTA update",g={unversionedId:"apps/included-in-onion/ota-update",id:"apps/included-in-onion/ota-update",title:"Onion OTA update",description:"Update your Onion using WiFi",source:"@site/docs/07-apps/01-included-in-onion/ota-update.md",sourceDirName:"07-apps/01-included-in-onion",slug:"/apps/ota-update",permalink:"/docs/apps/ota-update",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/07-apps/01-included-in-onion/ota-update.md",tags:[],version:"current",frontMatter:{slug:"/apps/ota-update",description:"Update your Onion using WiFi"},sidebar:"tutorialSidebar",previous:{title:"Music Player",permalink:"/docs/apps/music-player"},next:{title:"Package Manager",permalink:"/docs/apps/package-manager"}},E={},I=[{value:"Presentation",id:"presentation",level:2},{value:"Usage",id:"usage",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Detailed features",id:"detailed-features",level:3}],C={toc:I},Q="wrapper";function o(A){let{components:e,...i}=A;return(0,r.kt)(Q,(0,n.Z)({},C,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"onion-ota-update"},"Onion OTA update"),(0,r.kt)("sup",null,"Keep your Onion up-to-date, effortlessly!"),(0,r.kt)("h2",{id:"presentation"},"Presentation"),(0,r.kt)("p",null,"Using WiFi, this app allows you to update your Onion without even touching your SD card or a computer.",(0,r.kt)("br",{parentName:"p"}),"\n","Allows you to select stable or beta channel."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(21070).Z,width:"640",height:"480"})),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Onion OTA update is available in ",(0,r.kt)("a",{parentName:"p",href:"package-manager"},"Package Manager"),". It will work only with WiFi/Miyoo Mini+."),(0,r.kt)("p",null,"Once installed run it from Apps section."),(0,r.kt)("h2",{id:"advanced"},"Advanced"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OnionUI/Onion/blob/main/static/build/.tmp_update/script/ota_update.sh"},"Onion OTA update script"),"."),(0,r.kt)("h3",{id:"detailed-features"},"Detailed features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"stable or beta channel available (set on beta currently)"),(0,r.kt)("li",{parentName:"ul"},"check and enable WiFi connection if necessary"),(0,r.kt)("li",{parentName:"ul"},"compare current Onion version vs last released version on Github"),(0,r.kt)("li",{parentName:"ul"},"displays the size of the release before downloading"),(0,r.kt)("li",{parentName:"ul"},"verify the size of the downloaded file before applying"),(0,r.kt)("li",{parentName:"ul"},"check the current space available before applying update (currently 1GB is required)"),(0,r.kt)("li",{parentName:"ul"},"check disk integrity with fsck.fat, important to avoid SD card FAT file system corruption"),(0,r.kt)("li",{parentName:"ul"},"generate different exit error codes")))}o.isMDXComponent=!0},21070:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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IABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAGAEIABAjAAEAYgQgAECMAAQAiBGAAAAxAhAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACIEYAAADECEAAgRgACAMQIQACAmF/zG77++frrAz5/f162M+9kdJzOOj7z7f/047735737cXdtj2vc/To5L4BXZQIIABDzrwng3PyK9XFF+7h978Rw6wRt6/NcNclcuqKfH5+j29/6vHNXT7ZGP+9dk+S9E7+j9186/5/9ei0939792br9u86Dsz6Hzvq8Wvv7S9sfbefqv4EAfj4TQACAmMUJ4FZbJ4bz29dOGM++Un8VS8dp7uqJ5FZ7J4J7n2fu6IRy6/3Per1G5//V7j5/7pqYr93e3s+r0f237tfRz7dnnz/A+zIBBACIWZwAHv0W29L9l65YR1fMo/3aev+jzp5svYtnTxrWrjF7dVdN2N7luPzUSdVdr8Pa88e3kYE5E0AAgJiPaZq+//eGrVeKZ/07bKPHv8q3f0fbv3rN1FVric5+/rWPW3r8q5wXz9r/qyYzZ38ree+3pO/6+fbuz9E1fVv35+z7H/22M9BhAggAEPOvCSDw/t792/AAXMsEEAAgxgQQACDGBBAAIEYAAgDECEAAgBgBCAAQIwABAGIEIABAjAAEAIgRgAAAMQIQACBGAAIAxAhAAIAYAQgAECMAAQBiBCAAQIwABACI+S96iyQN1r6ZIAAAAABJRU5ErkJggg=="}}]);