"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={slug:"/apps/game-list-options"},l="Game List Options (GLO)",o={unversionedId:"apps/included-in-onion/game-list-options",id:"apps/included-in-onion/game-list-options",title:"Game List Options (GLO)",description:"Make actions on your game list",source:"@site/docs/07-apps/01-included-in-onion/game-list-options.md",sourceDirName:"07-apps/01-included-in-onion",slug:"/apps/game-list-options",permalink:"/docs/apps/game-list-options",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/07-apps/01-included-in-onion/game-list-options.md",tags:[],version:"current",frontMatter:{slug:"/apps/game-list-options"},sidebar:"tutorialSidebar",previous:{title:"Gallery",permalink:"/docs/apps/gallery"},next:{title:"GameSwitcher",permalink:"/docs/apps/game-switcher"}},s={},p=[{value:"Presentation",id:"presentation",level:2},{value:"Usage",id:"usage",level:2},{value:"Scripts available in Onion",id:"scripts-available-in-onion",level:3},{value:"Advanced",id:"advanced",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"game-list-options-glo"},"Game List Options (GLO)"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Make actions on your game list")),(0,i.kt)("h2",{id:"presentation"},"Presentation"),(0,i.kt)("p",null,"Game List Options (GLO menu) is a tool for performing actions for the selected game or for the entire list. ",(0,i.kt)("br",null),"\nPress ",(0,i.kt)("kbd",null,"Y")," in a game list then from this menu you can choose the Retroarch core, download the image cover of your game (wifi/MMP required), launch a Netplay session, reset your game (to skip the last save state), filter the list of games with a keyword,..."),(0,i.kt)("p",null,"Thanks to GLO menu flexibility, you can even add your own scripts here !*"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"GLO Menu is a native application of Onion, it is installed by default."),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",{width:"33%",align:"center",valign:"top"},(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/226447277-a9452ecc-92ad-407f-a629-307491a652b4.png"})),(0,i.kt)("td",{width:"33%",align:"center",valign:"top"},(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/226447388-8c9c95f1-536a-4946-8b0f-f4b8ead0e97e.png"})),(0,i.kt)("td",{width:"33%",align:"center",valign:"top"},(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/226447466-71d4f5c1-7675-4355-9b60-20dbd1a03eae.png"}))),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center",valign:"top"},(0,i.kt)("p",null,(0,i.kt)("i",null,"When in a game list, press ",(0,i.kt)("kbd",null,"Y")," to open GLO (this action can be reassigned in Tweaks)"))),(0,i.kt)("td",{align:"center",valign:"top"},(0,i.kt)("p",null,(0,i.kt)("i",null,"GLO - specific options for the selected game or the entire list"))),(0,i.kt)("td",{align:"center",valign:"top"},(0,i.kt)("p",null,(0,i.kt)("i",null,'Use the "Game core" option to change core per game'))))),(0,i.kt)("h3",{id:"scripts-available-in-onion"},"Scripts available in Onion"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reset game")," - ",(0,i.kt)("em",{parentName:"li"},"load game without save state, useful to start a game from beginning")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Game core")," - ",(0,i.kt)("em",{parentName:"li"},"set custom Retroarch core per game, useful to switch from mGBA to gPSP for example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Filter list")," - ",(0,i.kt)("em",{parentName:"li"},"use a keyword to filter the list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Refresh roms")," - ",(0,i.kt)("em",{parentName:"li"},"refresh the list\u2019s game cache, useful when you have added some games")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Custom scripts:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Random game")," - ",(0,i.kt)("em",{parentName:"li"},"added by Random Game app - launches a random game from the list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Set time")," - ",(0,i.kt)("em",{parentName:"li"},"added by Clock app - quick access to setting date and time")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Wifi scripts ",(0,i.kt)("sub",null,"(Miyoo Mini Plus only)")," :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scraper")," - ",(0,i.kt)("em",{parentName:"li"},"Download image covers for your games. ",(0,i.kt)("a",{href:"scraper"},"More details here"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Netplay")," - ",(0,i.kt)("em",{parentName:"li"},"Launch or join a multiplayer game. ",(0,i.kt)("a",{href:"../multiplayer"},"More details here")))))),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)("p",null,"GLO Menu allows you to create your own scripts.\nThe GLO scripts are located in ",(0,i.kt)("inlineCode",{parentName:"p"},"sdcard/App/romscripts"),". "),(0,i.kt)("p",null,"The existing scripts are a great source of inspiration for your future script. Here some examples : "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OnionUI/Onion/blob/main/static/build/App/romscripts/emu/Scraper.sh"},"Scraper script")," (Good example to use rom path)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OnionUI/Onion/blob/main/static/packages/App/Random%20Game/App/romscripts/Random%20game.sh"},"Random game script")," (good example to get the current section)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/OnionUI/Onion/blob/main/static/build/App/romscripts/emu/Netplay.sh"},"Netplay script")," (good example for dynamic labels entry in GLO menu)")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Some useful variables: ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"require_networking=1")," will show this GLO entry only on the MMP which is equiped of wifi."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"%LIST%")," is the name of the current system (for example GENESIS)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$1")," will contain the full path of the selected rom "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$2")," will contain the full path of the current emulator")))}u.isMDXComponent=!0}}]);