"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4597],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},35373:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:2,slug:"/scraping"},o=void 0,l={unversionedId:"Resources/Advanced Guides/Scraping artwork for games",id:"version-4.1/Resources/Advanced Guides/Scraping artwork for games",title:"Scraping artwork for games",description:"(Credit: f8less & Julian)",source:"@site/versioned_docs/version-4.1/Resources/Advanced Guides/Scraping artwork for games.md",sourceDirName:"Resources/Advanced Guides",slug:"/scraping",permalink:"/docs/4.1/scraping",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/versioned_docs/version-4.1/Resources/Advanced Guides/Scraping artwork for games.md",tags:[],version:"4.1",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/scraping"},sidebar:"tutorialSidebar",previous:{title:"AdvanceMENU",permalink:"/docs/4.1/advancemenu"},next:{title:"Combining different systems or cores",permalink:"/docs/4.1/advanced/combine-systems"}},s={},m=[{value:"File Type and Placement:",id:"file-type-and-placement",level:2},{value:"Box Art/Screenshot Scraping Process:",id:"box-artscreenshot-scraping-process",level:2},{value:"Software Install:",id:"software-install",level:3},{value:"Initial Setup:",id:"initial-setup",level:3},{value:"Media Selection:",id:"media-selection",level:3},{value:"Output Settings:",id:"output-settings",level:3},{value:"YouTube Tutorials:",id:"youtube-tutorials",level:3}],p={toc:m},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("sup",null,"(Credit: f8less & Julian)"),(0,r.kt)("h2",{id:"file-type-and-placement"},"File Type and Placement:"),(0,r.kt)("p",null,"The image file format for scraped artwork is ",(0,r.kt)("em",{parentName:"p"},".PNG"),", with a max size of 250px (H) X 360px (W). The images need to be placed into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Roms/<gamesystem>/Imgs")," folder. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Imgs")," folder name is case sensitive (must have a capital ",(0,r.kt)("inlineCode",{parentName:"p"},"I"),"). Examples would be like the following:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Roms/FC/Imgs"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Roms/SFC/Imgs"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Roms/GB/Imgs"),"  "),(0,r.kt)("h2",{id:"box-artscreenshot-scraping-process"},"Box Art/Screenshot Scraping Process:"),(0,r.kt)("h3",{id:"software-install"},"Software Install:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download & Extract ",(0,r.kt)("em",{parentName:"li"},"Skraper")," from: ",(0,r.kt)("a",{parentName:"li",href:"https://www.skraper.net/"},"https://www.skraper.net/"),"   "),(0,r.kt)("li",{parentName:"ul"},"Log in to Skraper")),(0,r.kt)("h3",{id:"initial-setup"},"Initial Setup:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Select "',(0,r.kt)("em",{parentName:"li"},"Recalbox"),'"   '),(0,r.kt)("li",{parentName:"ul"},'Tick "',(0,r.kt)("em",{parentName:"li"},"Include non-Recalbox rom folders"),'"   ',(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"(Some systems aren't recognized because their folder-names are non-standard. To add those systems, press the ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),' symbol on the bottom left, select the systems that are missing & hit "OK". Then, click the added systems in the bar on the left, and correct the system\'s folders via the "',(0,r.kt)("em",{parentName:"p"},"GAMES & FRONT END"),'" tab -> "',(0,r.kt)("em",{parentName:"p"},"Games/Roms folder:"),'" field -or- by clicking the folder-icon to the right of it.\n',(0,r.kt)("a",{parentName:"p",href:"emulators"},"You can find a list of all Rom folder names here"))))),(0,r.kt)("h3",{id:"media-selection"},"Media Selection:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use a (",(0,r.kt)("em",{parentName:"strong"},"Great!"),") Custom Image Template Designed for OnionOS:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Examples:")),(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/56418567/212767886-753a83ae-2f56-4255-a22d-f658ba656690.png",alt:"image"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/56418567/212768343-a1d7d47b-1384-45a2-8f35-3d80b10fff5c.png",alt:"image"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/56418567/212769101-5d5d5c77-bc23-43a2-83fd-859d938a0466.png",alt:"image"}),(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Live Example:")),(0,r.kt)("br",null),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/56418567/212769542-49a3e1f4-971b-4fd4-bf79-36d589aee97a.png",alt:"image"}),(0,r.kt)("br",null)),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download template from the Retro Game Handhelds Discord:",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://cdn.discordapp.com/attachments/979073647685795880/1061416580380119081/Skraper_Mix_-_Miyoo_Mini_Big_Zoom_by_AchillesPDX.zip"},"Skraper",(0,r.kt)("em",{parentName:"a"},"Mix"),"-_Miyoo_Mini_Big_Zoom_by_AchillesPDX.zip")," - ",(0,r.kt)("em",{parentName:"li"},"Template by: AchillesPDX")),(0,r.kt)("li",{parentName:"ul"},"Extract the ",(0,r.kt)("em",{parentName:"li"},".ZIP")," file into the following ",(0,r.kt)("em",{parentName:"li"},"Skraper")," folder: ",(0,r.kt)("inlineCode",{parentName:"li"},".\\Skraper-#.#.#\\Mixes\\")),(0,r.kt)("li",{parentName:"ul"},'Via the "ALL SYSTEMS"selection on the left, go to the "',(0,r.kt)("em",{parentName:"li"},"MEDIA"),'" tab -> Clear the "',(0,r.kt)("em",{parentName:"li"},"Fetched Media List"),'" of all but one image type by pressing the "',(0,r.kt)("em",{parentName:"li"},"minus"),'" button.'),(0,r.kt)("li",{parentName:"ul"},'Change the "',(0,r.kt)("em",{parentName:"li"},"Media type:"),'" to: "',(0,r.kt)("em",{parentName:"li"},"USER PROVIDED MIX"),'" and click on the file icon to the right'),(0,r.kt)("li",{parentName:"ul"},"Select the extracted: ",(0,r.kt)("inlineCode",{parentName:"li"},"Miyoo Mini Big Zoom.xml")),(0,r.kt)("li",{parentName:"ul"},'Disable settings "',(0,r.kt)("em",{parentName:"li"},"Resize width to"),'" , "',(0,r.kt)("em",{parentName:"li"},"Resize height to"),'" , "',(0,r.kt)("em",{parentName:"li"},"Keep Image Ratio"),'" ')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"- OR -")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Customize Image:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Via "ALL SYSTEMS" on the left, go to the "',(0,r.kt)("em",{parentName:"li"},"MEDIA"),'" tab -> Enable & set "',(0,r.kt)("em",{parentName:"li"},"Resize width to"),'" to 250 and enable "',(0,r.kt)("em",{parentName:"li"},"Keep Image Ratio"),'"    '),(0,r.kt)("li",{parentName:"ul"},"Select the image type you don't want in the \"",(0,r.kt)("em",{parentName:"li"},"Fetched Media List"),'" and press the "',(0,r.kt)("em",{parentName:"li"},"minus"),"\" button, so there's only one picture.   ",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},'You can change how the image mix looks with the two buttons under "',(0,r.kt)("em",{parentName:"p"},"Media type"),'",  I recommend changing "',(0,r.kt)("em",{parentName:"p"},"4 IMAGES MIX"),'" to "',(0,r.kt)("em",{parentName:"p"},"Screenscraper's Recalbox Mix V2"),"\", but use whatever you prefer.\nIf you choose a picture that's taller than it's wide, like the boxart, set \"",(0,r.kt)("em",{parentName:"p"},"Resize height to"),'" to 360 and disable "',(0,r.kt)("em",{parentName:"p"},"Keep Image Ratio"),'"')))),(0,r.kt)("h3",{id:"output-settings"},"Output Settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Change "',(0,r.kt)("em",{parentName:"li"},"Output folder"),'" to ',(0,r.kt)("inlineCode",{parentName:"li"},"%ROMROOTFOLDER%\\Imgs"),", with a capital ",(0,r.kt)("inlineCode",{parentName:"li"},"I"),"."),(0,r.kt)("li",{parentName:"ul"},"Under 'Gamelist Link' ensure that \"",(0,r.kt)("em",{parentName:"li"},"Link from node '","<","thumbnail",">","'"),"\" is ticked as well as '",(0,r.kt)("em",{parentName:"li"},"Optimize media storage"),"' (these are important if you wish to use the generated gamelist.xml to create a miyoogamelist.xml for use in Onion (more info on this below on this page).    "),(0,r.kt)("li",{parentName:"ul"},'Now click the system you want to scrape for on the left side, or "all system", and press the play button in the bottom right corner.    ')),(0,r.kt)("p",null,"This will automatically scrape images to the correct folders for Miyoo Mini."),(0,r.kt)("h3",{id:"youtube-tutorials"},"YouTube Tutorials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=RFu2DKRDq7o"},"Add Stunning Boxart To Your Miyoo Mini In Two Easy Ways | Complete Tutorial")," ",(0,r.kt)("em",{parentName:"li"},"by RetroBreeze")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=DguILcIyZQE&ab_channel=TechDweeb"},"EASY Scraping art for retro games (MiYoo Mini Skraper tutorial on Onion OS)")," ",(0,r.kt)("em",{parentName:"li"},"by TechDweeb"))))}u.isMDXComponent=!0}}]);