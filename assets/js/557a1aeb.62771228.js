"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1437],{3905:(A,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>d});var r=t(67294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function n(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function l(A,e){if(null==A)return{};var t,r,a=function(A,e){if(null==A)return{};var t,r,a={},n=Object.keys(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var i=r.createContext({}),g=function(A){var e=r.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},s=function(A){var e=g(A.components);return r.createElement(i.Provider,{value:e},A.children)},c="mdxType",v={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(A,e){var t=A.components,a=A.mdxType,n=A.originalType,i=A.parentName,s=l(A,["components","mdxType","originalType","parentName"]),c=g(t),p=a,d=c["".concat(i,".").concat(p)]||c[p]||v[p]||n;return t?r.createElement(d,o(o({ref:e},s),{},{components:t})):r.createElement(d,o({ref:e},s))}));function d(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var n=t.length,o=new Array(n);o[0]=p;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=A,l[c]="string"==typeof A?A:a,o[1]=l;for(var g=2;g<n;g++)o[g]=t[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},81800:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>v,frontMatter:()=>n,metadata:()=>l,toc:()=>g});var r=t(87462),a=(t(67294),t(3905));const n={slug:"/apps/scraper",description:"Download your box arts using WiFi"},o="Scraper",l={unversionedId:"apps/included-in-onion/scraper",id:"version-4.2/apps/included-in-onion/scraper",title:"Scraper",description:"Download your box arts using WiFi",source:"@site/versioned_docs/version-4.2/07-apps/01-included-in-onion/scraper.md",sourceDirName:"07-apps/01-included-in-onion",slug:"/apps/scraper",permalink:"/docs/4.2/apps/scraper",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/versioned_docs/version-4.2/07-apps/01-included-in-onion/scraper.md",tags:[],version:"4.2",frontMatter:{slug:"/apps/scraper",description:"Download your box arts using WiFi"},sidebar:"tutorialSidebar",previous:{title:"RetroArch",permalink:"/docs/4.2/apps/retroarch"},next:{title:"Search",permalink:"/docs/4.2/apps/search"}},i={},g=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Media Preference",id:"media-preference",level:3},{value:"Region selection",id:"region-selection",level:3},{value:"Scraping source",id:"scraping-source",level:3},{value:"Screenscraper: account settings",id:"screenscraper-account-settings",level:3},{value:"Toggle background Scraping",id:"toggle-background-scraping",level:3}],s={toc:g},c="wrapper";function v(A){let{components:e,...n}=A;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scraper"},"Scraper"),(0,a.kt)("p",null,"A missing illustration in your game list ? Onion Scraper can solve that !\nUsing WiFi (so Miyoo Mini Plus only), this app allows you to download game covers without even touching your SD card or a computer.  "),(0,a.kt)("div",{className:"remark-oembed-inline remark-oembed-you-tube","data-oembed":""},(0,a.kt)("iframe",{parentName:"div",width:200,height:113,src:"https://www.youtube.com/embed/lOMP0ozb0I0?feature=oembed",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,title:"Onion - Scraper Presentation"})),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Automatically download covers from 3 different sources (ScreenScraper, Retroarch and Launchbox)"),(0,a.kt)("li",{parentName:"ul"},"Media type selection (Boxart, 3D, Screenshot, Title Screen, Marquee, Mix)"),(0,a.kt)("li",{parentName:"ul"},"Prefered region selection (will give a priority to the covers from your own region)"),(0,a.kt)("li",{parentName:"ul"},"Manage ScreenScraper accounts (less errors and faster when registered / logged in)"),(0,a.kt)("li",{parentName:"ul"},"Download one covers or all the missing covers of the current console"),(0,a.kt)("li",{parentName:"ul"},"Auto converstion and resize of images for the Miyoo Mini"),(0,a.kt)("li",{parentName:"ul"},"Find game match even if your rom is not well named thanks to ScreenScraper CRC search")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(26213).Z,width:"640",height:"480"}),(0,a.kt)("br",null)," ",(0,a.kt)("em",{parentName:"p"},"Summary screen at end of the scraping")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select a rom in the Games submenu")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Press ",(0,a.kt)("kbd",null,"Y")," to open GLO")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose Scraper"))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"media-preference"},"Media Preference"),(0,a.kt)("p",null,"Choose the desired kind of media."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"preview example"),(0,a.kt)("th",{parentName:"tr",align:null},"available on"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Box Art"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:t(37320).Z,width:"191",height:"190"})),(0,a.kt)("td",{parentName:"tr",align:null},"SS,LB,RA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Screenshot - Title Screen"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:t(29615).Z,width:"240",height:"160"})),(0,a.kt)("td",{parentName:"tr",align:null},"SS,LB,RA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Screenshot - In Game"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:t(54044).Z,width:"240",height:"160"})),(0,a.kt)("td",{parentName:"tr",align:null},"SS,LB,RA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Box Art - 3D"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:t(21236).Z,width:"147",height:"190"})),(0,a.kt)("td",{parentName:"tr",align:null},"SS,LB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Wheel"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:t(20706).Z,width:"338",height:"85"})),(0,a.kt)("td",{parentName:"tr",align:null},"SS,LB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Marquee"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:t(18587).Z,width:"338",height:"85"})),(0,a.kt)("td",{parentName:"tr",align:null},"SS,LB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Screenscraper Mix V1"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:t(65297).Z,width:"190",height:"190"})),(0,a.kt)("td",{parentName:"tr",align:null},"SS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Screenscraper Mix V2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:t(7277).Z,width:"190",height:"190"})),(0,a.kt)("td",{parentName:"tr",align:null},"SS")))),(0,a.kt)("sup",null,"SS = Screenscraper, LB = Launchbox, RA = Retroarch"),(0,a.kt)("h3",{id:"region-selection"},"Region selection"),(0,a.kt)("p",null,"Choose your prefered region. If no media is found for your country code, other countries will be searched as fallback."),(0,a.kt)("h3",{id:"scraping-source"},"Scraping source"),(0,a.kt)("p",null,"Select where the covers will be searched."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ScreenScraper is probably the best supplied, it supports all the media types proposed in Scraper and it also allows to search by CRC which provide a lot of additional matches."),(0,a.kt)("li",{parentName:"ul"},"Launchbox offers a fast alternative to ScreenScraper."),(0,a.kt)("li",{parentName:"ul"},"Retroarch is quite fast the the match level is low.")),(0,a.kt)("h3",{id:"screenscraper-account-settings"},"Screenscraper: account settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Screenscraper information: technical information about ScreenScraper (a retrogaming project to support)."),(0,a.kt)("li",{parentName:"ul"},"Username & password: to set your ScreenScraper credentials."),(0,a.kt)("li",{parentName:"ul"},"Account state and stats: will show your screenscraper account state  (useful to check if your account credentials are well configured and if you don't exceed quotas).")),(0,a.kt)("h3",{id:"toggle-background-scraping"},"Toggle background Scraping"),(0,a.kt)("p",null,"Allows to download covers in background, which means that you can use your Miyoo Mini Plus while it is downloading your covers."))}v.isMDXComponent=!0},26213:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,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"},37320:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/scraper_2dbox-63a70d0266f216e7d9d4138d43e0ee5f.png"},21236:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/scraper_3dbox-cafef02be1a221d2a17c07186aab478c.png"},18587:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/scraper_marquee-9e1e8685e33df1e9a21ae3b05d61633e.png"},65297:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/scraper_mix1-1202c08c46a22e305f4b00799af75cb5.png"},7277:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/scraper_mix2-90488752a639964e05646f3d3cb6a3c3.png"},54044:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/scraper_screenshot-0a591c243c06262b0eedf382c9f5f6a7.png"},29615:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/scraper_screentitle-539dace2d56d36dff759df1043576167.png"},20706:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVIAAABVCAMAAAAseZzRAAAC/VBMVEUAAAAAAAD////+/v7////+/v7////+/v7+/v7////+/v7////+/v7////////+/v7////+/v7+/v7////+/v7////////+/v7+/v7////////+/v7+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////////+/v7////+/v7////+/v7+/v7////+/v7////////+/v7+/v7////+/v7////////+/v7+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////////+/v7+/v7////+/v7////+/v7////////+/v7////+/v7////+/v7////////+/v7////+/v7+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////////+/v7////+/v7+/v7////+/v7////+/v7////+/v7////+/v7////////+/v7+/v7////+/v7////+/v7////////+/v7+/v7////////+/v7+/v7////+/v7////+/v7////////+/v7+/v7////+/v7////+/v7////+/v7////////+/v7+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////////+/v7+/v7////+/v7////+/v7////////+/v7+/v7////+/v7////////+/v7////+/v7+/v7////+/v7////+/v7////+/v7////////+/v7+/v7////+/v7////+/v7////////+/v7+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////////+/v7////+/v7+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////+/v7////////+/v7+/v7////+/v7////6ZGYfAAAA/XRSTlMAAgICBAQGBggICgoMDA4OEBASEhQUFhYYGBoaHBweHiAgIiIkJCYmKCgqKiwsLi4wMDIyNDQ2Njg4Ojo8PD4+QEBCQkRERkZISEpKTExOTlBQ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"}}]);