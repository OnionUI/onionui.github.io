"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={slug:"release-notes/3.12.3",authors:["totofaki"],tags:["release-notes","stable"]},i="Release notes: Onion V3.12.3",s={permalink:"/blog/release-notes/3.12.3",source:"@site/blog/release-notes/2022-07-05-release-notes-3.12.3.md",title:"Release notes: Onion V3.12.3",description:"Official release notes for Onion V3.12.3",date:"2022-07-05T00:00:00.000Z",formattedDate:"July 5, 2022",tags:[{label:"release-notes",permalink:"/blog/tags/release-notes"},{label:"stable",permalink:"/blog/tags/stable"}],hasTruncateMarker:!0,authors:[{name:"Totofaki",title:"Onion Core Team",url:"https://github.com/Sichroteph",imageURL:"https://github.com/Sichroteph.png",key:"totofaki"}],frontMatter:{slug:"release-notes/3.12.3",authors:["totofaki"],tags:["release-notes","stable"]},prevItem:{title:"Release notes: Onion V4",permalink:"/blog/release-notes/4.0.0"}},l={authorsImageUrls:[void 0]},p=[{value:"Eggs keymon integration",id:"eggs-keymon-integration",level:3},{value:"Game switcher / Main UI tight integration",id:"game-switcher--main-ui-tight-integration",level:3},{value:"New ports in the port collection (Credits : r0b0-tr0n, Schmurtz)",id:"new-ports-in-the-port-collection-credits--r0b0-tr0n-schmurtz",level:3},{value:"Revamped Wiki (Credits : Olywa123)",id:"revamped-wiki-credits--olywa123",level:3},{value:"Gamelists are accepted in every console by default (Olywa123)",id:"gamelists-are-accepted-in-every-console-by-default-olywa123",level:3}],u=(c="Truncate",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const m={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Official release notes for Onion V3.12.3")),(0,a.kt)(u,{mdxType:"Truncate"}),(0,a.kt)("h3",{id:"eggs-keymon-integration"},"Eggs keymon integration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Low battery red frame warning in game.  \n")),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/16885275/177217769-32533d60-d052-45f2-b108-ecd187124733.png",width:"350"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Light sleep mode on power tap.     \nDeep sleep mode on long power press.   \nSave and show the game switcher on a menu button tap.   \nSave and exit game on menu button long press.   \n\nThe hibernation is properly implemented (The device will save and goes to sleep after X minutes without touching a button) \nThe mainUI binary is repatched to be able to change this feature in the main menu settings, and set to 3mn on a fresh onion install.   \nScreenshot everywhere. (Menu+power)     \n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"More keymon informations here"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POWER button:"),(0,a.kt)("br",{parentName:"p"}),"\n","Suspend by press for one second or less.\nPress and hold for 5 seconds to force close the current foreground application.\nPress and hold for 10 seconds to force shutdown."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Unlike stock, suspend actually stops the foreground application.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Both close/shutdown will auto-save if retroarch is running and AutoSaveState setting is enabled. (also for Hibernate below)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Shutdown when MainUI/onionLauncher is running.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"DeepSleep when retroarch is running and AutoSave setting is ON.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Otherwise, nothing happens."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hibernate function:"),(0,a.kt)("br",{parentName:"p"}),"\n","Suspend after the time set in Setting > Hibernate has elapsed without any buttons being pressed.\nShutdown after 5 minutes of suspended state and no USB power connected."),(0,a.kt)("p",null,"The current onion disables Hibernate during installation and does not allow configuration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you want to enable, you can change it by booting without SD, configure in Setting, and then boot with onion again."),(0,a.kt)("li",{parentName:"ul"},'It can also be set on a minute-by-minute basis by editing /appconfigs/system.json using Commander. ("hibernate" line)')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Low battery warning:"),(0,a.kt)("br",{parentName:"p"}),"\n","If battery falls below about 17%, a warning will appear in the screen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Stock displays an icon in the upper right corner, but custom displays a red frame across the entire screen.")),(0,a.kt)("p",null,"If battery falls below about 4%, AutoSave & Exit when retroarch is running and AutoSave setting is ON."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SELECT button:"),(0,a.kt)("br",{parentName:"p"}),"\n","Adjust the brightness by pressing L2/R2 while holding down."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Extended functions:")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"During suspend - MENU button:"),(0,a.kt)("br",{parentName:"p"}),"\n","Take a screenshot. a png file will be saved in /Screenshots in SD. (Same function as scrshot app)")),(0,a.kt)("h3",{id:"game-switcher--main-ui-tight-integration"},"Game switcher / Main UI tight integration"),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/16885275/177045714-bc6ab713-4fbf-49b8-b34c-f8ac1ce5e034.png",width:"350"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Change brightness with the up and down key.    \nMainUI and the game switcher are merged and they use the same launch script.     \nThe game screens are now compressed. (from 1mo to 20-100ko)    \nBootup script rewritten.     \n")),(0,a.kt)("h3",{id:"new-ports-in-the-port-collection-credits--r0b0-tr0n-schmurtz"},"New ports in the port collection (Credits : r0b0-tr0n, Schmurtz)"),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/16885275/177214139-b874b0e6-df84-4c9c-a12c-c827ae82747e.png",width:"500"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"New entries :  \nQuake   \nCannonBall   \nFlashback   \nPowder   \nRick dangerous   \nMrBoom   \nSpear of Destiny   \nSuper 3d Noahs Ark   \nDinothawr   \nWolfenstein 3d   \n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OnionUI/Onion/files/9044872/Ports.Help.pdf"},"Ports Help (Credits : r0b0-tr0n)")),(0,a.kt)("h3",{id:"revamped-wiki-credits--olywa123"},"Revamped Wiki (Credits : Olywa123)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sichroteph/Onion/wiki/2.-Onion-Emulators-&-Ports"},(0,a.kt)("img",{title:"GBMini by Kitsuvi",width:"350px",src:"https://user-images.githubusercontent.com/16885275/177215817-21a20392-3cd3-4b37-a667-ee42dbc93450.jpg?raw=true"}))," ","\xa0"," "),(0,a.kt)("h3",{id:"gamelists-are-accepted-in-every-console-by-default-olywa123"},"Gamelists are accepted in every console by default (Olywa123)"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(v3.12.0) \nInitial release\n\n(v3.12.1) \nPower button long press delay reduced from 1s to 0.5s for more snappiness. \nThe main menu shutdown panel is not displayed anymore.\nThe short pulse rumble (Main menu tap, power button tap..) is lowered by 20%\nThe default DiMo Onion theme is updated to v1.2\n\n(v3.12.2)\nOption to turn off button vibrations feedback. (Add a .noVibration file in the .tmp_update folder)\nSave states / auto save states times reduced : Faster exit time to the menu.\nOnion timers integration in the Keymon, boot script and play activity UI.\n(The RetroArch ones had a bug that added hundreds of hours erratically)\nThe activity time is properly paused when the device is in sleep mode, even if it is not a RetroArch game.\n\n(v3.12.3) (Files updated : onionLauncher, keymon_onion, menuBar.png)     \n")),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/16885275/178365221-0af0b012-0e6a-45cf-b341-823a5dfa98cc.png",width:"350"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Game switcher changes :      \n    Total time display.    \n    Game launch / No game screen freeze fix.    \nKeymon :      \n    Start button waking up the device fix.\n")))}h.isMDXComponent=!0}}]);