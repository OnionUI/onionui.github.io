"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={slug:"/network/ftp"},i="FTP",s={unversionedId:"apps/network-features/ftp",id:"apps/network-features/ftp",title:"FTP",description:"Much like the HTTP server, FTP provides a method of transferring files between your Miyoo Mini+ and other devices such as a PC/Phone/Tablet. You'll need an FTP client installed on the second device.",source:"@site/docs/07-apps/03-network-features/04-ftp.md",sourceDirName:"07-apps/03-network-features",slug:"/network/ftp",permalink:"/docs/next/network/ftp",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/07-apps/03-network-features/04-ftp.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/network/ftp"},sidebar:"tutorialSidebar",previous:{title:"SSH / SFTP",permalink:"/docs/next/network/ssh"},next:{title:"Telnet",permalink:"/docs/next/network/telnet"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Enabling FTP access",id:"enabling-ftp-access",level:2},{value:"Logging in",id:"logging-in",level:2},{value:"Disabling authentication",id:"disabling-authentication",level:2},{value:"Security",id:"security",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ftp"},"FTP"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OnionUI/Onion/assets/47260768/7bfac01d-bfaa-4565-b10b-b2b2a0ea7f9c",alt:null})),(0,a.kt)("p",null,"Much like the HTTP server, FTP provides a method of transferring files between your Miyoo Mini+ and other devices such as a PC/Phone/Tablet. You'll need an FTP client installed on the second device."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"File transfer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Debugging and troubleshooting"))),(0,a.kt)("h2",{id:"enabling-ftp-access"},"Enabling FTP access"),(0,a.kt)("p",null,"You can either use the master toggle to turn the FTP server on with your Right/Left arrows, or press A to enter the submenu."),(0,a.kt)("p",null,"You'll find it in ",(0,a.kt)("strong",{parentName:"p"},"Apps")," \u203a ",(0,a.kt)("strong",{parentName:"p"},"Tweaks")," \u203a ",(0,a.kt)("strong",{parentName:"p"},"Network")," \u203a ",(0,a.kt)("strong",{parentName:"p"},"FTP: File server")," and you'll get 2 options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Enable")," - Activate FTP access")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Enable authentication")," - Activate authentication (username/password)"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OnionUI/Onion/assets/47260768/38aa375d-c2a1-40d5-9037-36a998858d9b",alt:null})),(0,a.kt)("h2",{id:"logging-in"},"Logging in"),(0,a.kt)("admonition",{title:"Default credentials",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Username:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"onion"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Password:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"onion"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"We're using a new auth system, user defined passwords will come in a future update."))),(0,a.kt)("p",null,"Once you've activated your FTP server in Tweaks you'll now be able to connect using software such as FileZilla, CuteFTP, WinSCP, FireFTP. You'll also be able to use an SFTP client to transfer files securely if SSH is also enabled."),(0,a.kt)("p",null,"You'll need the IP of the device, found below (",(0,a.kt)("strong",{parentName:"p"},"Tweaks")," \u203a ",(0,a.kt)("strong",{parentName:"p"},"Network"),")"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OnionUI/Onion/assets/47260768/23ee6dbf-48c8-4484-b98b-9a8642b8fd49",alt:null})),(0,a.kt)("p",null,"Exit tweaks to apply & start the FTP server"),(0,a.kt)("h2",{id:"disabling-authentication"},"Disabling authentication"),(0,a.kt)("p",null,"Although this is not recommended on other peoples Wi-Fi, when you're at home on your own Wi-Fi this is absolutely fine."),(0,a.kt)("p",null,"Head over to ",(0,a.kt)("strong",{parentName:"p"},"Tweaks")," \u203a ",(0,a.kt)("strong",{parentName:"p"},"Network")," \u203a ",(0,a.kt)("strong",{parentName:"p"},"FTP"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/OnionUI/Onion/assets/47260768/0cf75a65-654a-4b9a-815c-7c37d6d3f649",alt:null})),(0,a.kt)("admonition",{title:"File corruption",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"On some FTP clients you may need to alter settings or binary files will become damaged when they're transferred, FileZilla for example may need to change the setting shown below (",(0,a.kt)("strong",{parentName:"p"},"Transfer")," \u203a ",(0,a.kt)("strong",{parentName:"p"},"Transfer type")," \u203a ",(0,a.kt)("strong",{parentName:"p"},"Binary"),")"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{parentName:"p",src:"https://github.com/OnionUI/Onion/assets/47260768/62d13812-883c-466d-954a-5ce00b8306f4",alt:null}))),(0,a.kt)("p",null,"If you have authentication turned on, anonymous connections will fail."),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)("admonition",{title:"Network security",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Although we've taken every precaution to offer as much security as possible, remember to keep your Onion safe. It is not recommended you use FTP on an insecure Wi-Fi network that is open or public as traffic is unencrypted, for this reason we strongly recommend you toggle FTP off when you're on the move!")))}m.isMDXComponent=!0}}]);