"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l=n.p+"assets/medias/game-switcher-36f196afcec7fc348d4e5ef37b15a5e8.mp4",i={slug:"/apps/game-switcher"},o="GameSwitcher",s={unversionedId:"apps/included-in-onion/game-switcher",id:"apps/included-in-onion/game-switcher",title:"GameSwitcher",description:"Stay on top of your games!",source:"@site/docs/07-apps/01-included-in-onion/game-switcher.md",sourceDirName:"07-apps/01-included-in-onion",slug:"/apps/game-switcher",permalink:"/docs/apps/game-switcher",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/07-apps/01-included-in-onion/game-switcher.md",tags:[],version:"current",frontMatter:{slug:"/apps/game-switcher"},sidebar:"tutorialSidebar",previous:{title:"Game List Options (GLO)",permalink:"/docs/apps/game-list-options"},next:{title:"Guest Mode",permalink:"/docs/apps/guest-mode"}},p={},u=[{value:"Presentation",id:"presentation",level:2},{value:"Usage",id:"usage",level:2},{value:"Netplay usage demo",id:"netplay-usage-demo",level:3},{value:"Controls",id:"controls",level:3},{value:"Advanced",id:"advanced",level:2}],c={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gameswitcher"},"GameSwitcher"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Stay on top of your games!")),(0,r.kt)("h2",{id:"presentation"},"Presentation"),(0,r.kt)("p",null,"The GameSwitcher is designed to be the central user interface of Onion. It allows to scroll between the save states of the last game played in a fast and efficient way."),(0,r.kt)("p",{align:"center"},(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",{width:"33%",align:"center",valign:"top"},(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/189434217-72ef0daf-c630-4ec9-b96a-30fd76cb709f.png"})),(0,r.kt)("td",{width:"33%",align:"center",valign:"top"},(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/44569252/189434224-aeba7b8f-c881-4784-ba2f-65c60d41d20c.png"}))),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center",valign:"top"},(0,r.kt)("p",null,(0,r.kt)("i",null,"Game Switcher, detailed view with current game playtime / total playtime "))),(0,r.kt)("td",{align:"center",valign:"top"},(0,r.kt)("p",null,(0,r.kt)("i",null,"Game Switcher, fullscreen mode after pressing ",(0,r.kt)("kbd",null,"Y"))))))),(0,r.kt)("p",null,"It also allows you to quickly change games and many other features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quick boot your last played game."),(0,r.kt)("li",{parentName:"ul"},"Quickly switch games from your history."),(0,r.kt)("li",{parentName:"ul"},"Full overlay with accurate brightness, battery readings and playtimes."),(0,r.kt)("li",{parentName:"ul"},"Display playtime (current game playtime / Total games playtime)."),(0,r.kt)("li",{parentName:"ul"},"Minimal view mode: beautiful full screen mode"),(0,r.kt)("li",{parentName:"ul"},"Improved ",(0,r.kt)("em",{parentName:"li"},"Sleep Mode")," with full game suspension (press ",(0,r.kt)("kbd",null,"POWER"),")."),(0,r.kt)("li",{parentName:"ul"},"Low battery indicator: Red frame when <15% (can be adjusted in Tweaks)."),(0,r.kt)("li",{parentName:"ul"},"When the battery goes below 4%, the device will automatically save and exit to prevent losing progress.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Launch the GameSwitcher by pressing the ",(0,r.kt)("kbd",null,"MENU")," button.\nThe last game played will be resumed in a few seconds, and with the simple press of a button, save your progress and turn off the console.  "),(0,r.kt)("h3",{id:"netplay-usage-demo"},"Netplay usage demo"),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{controls:!0},(0,r.kt)("source",{src:l}))),(0,r.kt)("h3",{id:"controls"},"Controls"),(0,r.kt)("p",{align:"center"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Button"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("kbd",null,"Left/Right")),(0,r.kt)("td",{parentName:"tr",align:null},"Navigate between last played games")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("kbd",null,"Up/Down")),(0,r.kt)("td",{parentName:"tr",align:null},"Set brightness")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("kbd",null,"A")," or ",(0,r.kt)("kbd",null,"Menu")),(0,r.kt)("td",{parentName:"tr",align:null},"Resume selected game")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("kbd",null,"B")),(0,r.kt)("td",{parentName:"tr",align:null},"quit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("kbd",null,"X")),(0,r.kt)("td",{parentName:"tr",align:null},"Remove from Game Switcher ",(0,r.kt)("br",null),(0,r.kt)("sub",null,"(it will keep the save state)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("kbd",null,"Y")),(0,r.kt)("td",{parentName:"tr",align:null},"Toggle fullscreen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("kbd",null,"Select")),(0,r.kt)("td",{parentName:"tr",align:null},"toggle playtime display"))))),(0,r.kt)("h2",{id:"advanced"},"Advanced"),(0,r.kt)("admonition",{title:"Tips:",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In game you can double click on menu button to quickly switch to the previous game played.")),(0,r.kt)("admonition",{title:"standalone emulators are not compatible",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Game Switcher builds on Retroarch's Save State functionality so it's not compatible with standalone emulators.")))}m.isMDXComponent=!0}}]);