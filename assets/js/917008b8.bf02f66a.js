"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={slug:"/theme-design"},o="Theme design",l={unversionedId:"guides/theme-design/index",id:"guides/theme-design/index",title:"Theme design",description:"Theme Repository",source:"@site/docs/08-guides/02-theme-design/index.md",sourceDirName:"08-guides/02-theme-design",slug:"/theme-design",permalink:"/docs/theme-design",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/08-guides/02-theme-design/index.md",tags:[],version:"current",frontMatter:{slug:"/theme-design"},sidebar:"tutorialSidebar",previous:{title:"CHDMAN",permalink:"/docs/advanced/chdman"},next:{title:"For developers",permalink:"/docs/dev"}},p={},s=[{value:"Theme Repository",id:"theme-repository",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Template",id:"template",level:2},{value:"Blueprint Theme <sub><sup>(Credit: Aemiii91)</sup></sub>",id:"blueprint-theme-credit-aemiii91",level:3},{value:"Default Fonts <sub><sup>(Credit: Aemiii91)</sup></sub>",id:"default-fonts-credit-aemiii91",level:3},{value:"Theme Overrides",id:"theme-overrides",level:2},{value:"Theme Development Tools",id:"theme-development-tools",level:2},{value:"Onion Theme Viewer",id:"onion-theme-viewer",level:3},{value:"HTML Preview page",id:"html-preview-page",level:3}],m={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"theme-design"},"Theme design"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("img",{parentName:"em",src:"https://user-images.githubusercontent.com/98862735/178886298-516ac53b-a7da-4568-a788-f97ece6b6c67.png",alt:null}))),(0,a.kt)("h2",{id:"theme-repository"},"Theme Repository"),(0,a.kt)("p",null,"The Onion Theme Repository has moved to its own ",(0,a.kt)("em",{parentName:"p"},"repository"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OnionUI/Themes/blob/main/README.md"},"Go to Themes \u279c")),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"Do you want to share your own custom themes with the community? ",(0,a.kt)("sup",null,(0,a.kt)("sub",null,"\u2764\ufe0f"))," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OnionUI/Themes/blob/main/CONTRIBUTING.md"},"Click here!")),(0,a.kt)("h2",{id:"template"},"Template"),(0,a.kt)("h3",{id:"blueprint-theme-credit-aemiii91"},"Blueprint Theme ",(0,a.kt)("sub",null,(0,a.kt)("sup",null,"(Credit: Aemiii91)"))),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Blueprint")," theme can be used as theming layout template for starting any new theme:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("a",{href:"https://github.com/OnionUI/Themes/blob/main/release/Blueprint%20by%20Aemiii91.zip?raw=true"},(0,a.kt)("img",{title:"Blueprint by Aemiii91",width:"280px",src:"https://github.com/OnionUI/Themes/raw/main/themes/Blueprint%20by%20Aemiii91/preview.png?raw=true"}),(0,a.kt)("br",null),"Download the Blueprint theme")),(0,a.kt)("p",null,"Since Onion v4 you have additional assets in ",(0,a.kt)("inlineCode",{parentName:"p"},"skin/extra")," folder: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bootScreen.png"),": Custom boot screen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Screen_Off.png"),": Shutting down screen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Screen_Off_Save.png"),": Saving + Shutting down screen"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chargingState0.png")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"chargingState23.png"),": 24 images for charging animation, and you can add ",(0,a.kt)("inlineCode",{parentName:"li"},"chargingState.json")," containing a frame delay value (default: 80 milliseconds - values over 10,000 will be parsed as microseconds):",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ "frame_delay": 80 }\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lum0.png")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"lum10.png"),": 11 images for brightness slider"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"toggle-on")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"toggle-off")," -> little toggle which are present in Package Manager and Tweaks for example.")),(0,a.kt)("h3",{id:"default-fonts-credit-aemiii91"},"Default Fonts ",(0,a.kt)("sub",null,(0,a.kt)("sup",null,"(Credit: Aemiii91)"))),(0,a.kt)("p",null,"It is no longer necessary to include the following fonts in your theme, just point the font paths in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt/SDCARD/miyoo/app/[FONT FILE]"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("i",null,"See the list of included fonts")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BPreplay Bold"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt/SDCARD/miyoo/app/BPreplayBold.otf")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44569252/180784703-d18c8522-9ced-4edb-807e-bcc0f3cbf6c5.png",alt:"BPreplayBold.otf"}))),(0,a.kt)("sup",null,(0,a.kt)("a",{href:"https://www.fontsquirrel.com/fonts/download/BPreplay"},"Download BPreplay")," \u2022 ",(0,a.kt)("a",{href:"https://www.fontsquirrel.com/license/BPreplay"},"OFL License")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Exo 2 Bold Italic"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt/SDCARD/miyoo/app/Exo-2-Bold-Italic.ttf")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44569252/180785009-27df242d-6b42-4a09-9291-2694026abda3.png",alt:"Exo-2-Bold-Italic.ttf"}))),(0,a.kt)("sup",null,(0,a.kt)("a",{href:"https://www.ndiscover.com/exo-2-0/"},"Download Exo 2")," \u2022 ",(0,a.kt)("a",{href:"https://www.fontsquirrel.com/license/exo-2"},"OFL License")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Helvetica Neue"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt/SDCARD/miyoo/app/Helvetica-Neue-2.ttf")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44569252/180785120-e3af9ea8-63d0-413a-ab11-712de82f81d3.png",alt:"Helvetica-Neue-2.ttf"}))),(0,a.kt)("sup",null,"Free for personal use"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Helvetica Neue Bold"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt/SDCARD/miyoo/app/HENB.ttf")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44569252/180785278-1aeb528e-2c86-4a4e-827a-ea14cd5e4fff.png",alt:"HENB.ttf"}))),(0,a.kt)("sup",null,"Free for personal use"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WenQuanYi Micro Hei"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt/SDCARD/miyoo/app/wqy-microhei.ttc")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44569252/180785427-496b49df-037c-4d3b-897b-ac20881aef44.png",alt:"wqy-microhei.ttc"}))),(0,a.kt)("sup",null,(0,a.kt)("a",{href:"http://wenq.org/wqy2/index.cgi?MicroHei(en)"},"Download Micro Hei")," \u2022 GPL License"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Adobe Blank"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt/SDCARD/miyoo/app/AdobeBlank.ttc")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Use this font to hide specific text elements in your theme.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"Adobe Blank is a special-purpose OpenType font that is intended to render all Unicode code points using non-spacing and non-marking glyphs"')),(0,a.kt)("sup",null,(0,a.kt)("a",{href:"https://github.com/adobe-fonts/adobe-blank"},"Download Adobe Blank")," \u2022 ",(0,a.kt)("a",{href:"https://github.com/adobe-fonts/adobe-blank/blob/master/LICENSE.txt"},"OFL License"))),(0,a.kt)("h2",{id:"theme-overrides"},"Theme Overrides"),(0,a.kt)("p",null,"Since Onion v4 you can override some aspects of themes. This allows you to have elements which stay the same after updating and no matter which theme is applied."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," To apply your own charging animation, just put the files ",(0,a.kt)("inlineCode",{parentName:"p"},"chargingState0.png")," ... ",(0,a.kt)("inlineCode",{parentName:"p"},"chargingState23.png")," in this folder: ",(0,a.kt)("inlineCode",{parentName:"p"},"Saves/CurrentProfile/theme/skin/extra"),"."),(0,a.kt)("h2",{id:"theme-development-tools"},"Theme Development Tools"),(0,a.kt)("h3",{id:"onion-theme-viewer"},"Onion Theme Viewer"),(0,a.kt)("sup",null,"(Credit: ruidacosta)"),(0,a.kt)("p",null,"A theme viewer desktop application, available for both Mac and Windows."),(0,a.kt)("p",{align:"center"},(0,a.kt)("a",{href:"https://github.com/syphen/onion-theme-viewer/releases"},(0,a.kt)("img",{title:"Theme Viewer",width:"280px",src:"https://user-images.githubusercontent.com/98862735/179321252-235d31ba-579a-46dd-a266-8cca32b8f4fd.png?raw=true"}),(0,a.kt)("br",null),"Get Onion Theme Viewer")),(0,a.kt)("h3",{id:"html-preview-page"},"HTML Preview page"),(0,a.kt)("sup",null,"(Credit: Weston Campbell)"),(0,a.kt)("p",null,"Drop the html file in the theme folder and launch it."),(0,a.kt)("p",{align:"center"},(0,a.kt)("a",{href:"https://github.com/OnionUI/Onion/files/9037560/Theme_Preview_2022MAY07.1.zip"},(0,a.kt)("img",{title:"Theme preview",width:"280px",src:"https://user-images.githubusercontent.com/16885275/167720395-196d8fd3-9cdc-4295-b49d-6d617feee8d0.png?raw=true"}),(0,a.kt)("br",null),"Download the Preview page")))}c.isMDXComponent=!0}}]);