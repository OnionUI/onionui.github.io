"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=m(n),d=a,y=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),a=n(86010),i=n(53438),o=n(39960),p=n(13919),c=n(95999);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",m.cardContainer)},n)}function s(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(l,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",m.cardTitle),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",m.cardDescription),title:o},o))}function u(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(s,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const n=(0,p.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(s,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return r.createElement(f,e);const o=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},49969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905)),i=n(52991);const o={slug:"/community-apps"},p="Community apps",c={unversionedId:"apps/community-apps/index",id:"apps/community-apps/index",title:"Community apps",description:"Here you will find a selection of third party applications and tools compatible with Onion.",source:"@site/docs/07-apps/02-community-apps/index.mdx",sourceDirName:"07-apps/02-community-apps",slug:"/community-apps",permalink:"/docs/next/community-apps",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/07-apps/02-community-apps/index.mdx",tags:[],version:"current",frontMatter:{slug:"/community-apps"},sidebar:"tutorialSidebar",previous:{title:"Video Player",permalink:"/docs/next/apps/video-player"},next:{title:"Cloud Saves",permalink:"/docs/next/apps/cloud-saves"}},m={},l=[{value:"MMP only (Wi-Fi required)",id:"mmp-only-wi-fi-required",level:2}],s={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"community-apps"},"Community apps"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("img",{parentName:"em",src:"https://user-images.githubusercontent.com/98862735/178884500-8188e34c-b140-4c8e-83d1-44ec4c3b5112.png",alt:null}))),(0,a.kt)("p",null,"Here you will find a selection of third party applications and tools compatible with Onion."),(0,a.kt)(i.Z,{mdxType:"DocCardList"}),(0,a.kt)("h2",{id:"mmp-only-wi-fi-required"},"MMP only (Wi-Fi required)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/XK9274/better-wifi-miyoo"},(0,a.kt)("strong",{parentName:"a"},"Better Wifi Tools"))," by XK9274",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Better WiFi management for the MMP (OnionOS)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/hotcereal/cloud-saves-miyoo-mini-plus"},(0,a.kt)("strong",{parentName:"a"},"Cloud Saves"))," by hotcereal",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Utilizing rclone, upload and download saves to and from your Miyoo Mini Plus."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/XK9274/screencap-toolkit-miyoo"},(0,a.kt)("strong",{parentName:"a"},"Screen Capture Toolkit"))," by XK9274",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"A Screencapturing toolkit for the Miyoo Mini + (Twitch/VNC/RTMP/Outputfile)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/josegonzalez/miyoo-speedtest"},(0,a.kt)("strong",{parentName:"a"},"Speed Test"))," by josegonzalez",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"An app to allow testing internet speed on the miyoo mini plus"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/XK9274/ncspotcli-compile-miyoo"},(0,a.kt)("strong",{parentName:"a"},"Spotify Client"))," by XK9274",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Builds ncspot for the Miyoo Mini + (contains appfolder)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/XK9274/syncthing-app-miyoo"},(0,a.kt)("strong",{parentName:"a"},"syncthing"))," by XK9274",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Sets up Syncthing and injects into Onion 4.2.0 beta runtime.sh"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/hotcereal/time-quick-fix"},(0,a.kt)("strong",{parentName:"a"},"Time Quick Fix"))," by hotcereal",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Using NTP and CloudFlare, fix your system time."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/XK9274/vncserver-miyoo"},(0,a.kt)("strong",{parentName:"a"},"VNC Server"))," by XK9274",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"VNC Server (upside down fixed)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/funkykovalski/WIFI"},(0,a.kt)("strong",{parentName:"a"},"Wi-Fi Password Saver"))," by funkykovalski",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"Script to save WIFI password")))))}d.isMDXComponent=!0}}]);