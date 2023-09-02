"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,h=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={slug:"/dev/setup",sidebar_position:1},i=void 0,l={unversionedId:"For Developers/Setup",id:"For Developers/Setup",title:"Setup",description:"development",source:"@site/docs/For Developers/Setup.md",sourceDirName:"For Developers",slug:"/dev/setup",permalink:"/docs/next/dev/setup",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/dev/setup",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"For Developers",permalink:"/docs/next/category/for-developers"},next:{title:"Installing a build",permalink:"/docs/next/dev/install"}},p={},u=[{value:"Environment",id:"environment",level:2},{value:"Building",id:"building",level:2},{value:"Toolchain",id:"toolchain",level:2}],c={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7110113/184558441-dc2783c1-0447-489d-9bde-b99d63b6d4b7.png",alt:"development"})),(0,o.kt)("h2",{id:"environment"},"Environment"),(0,o.kt)("p",null,"The build environment is based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/shauninman/union-miyoomini-toolchain"},"Shaun Inman's docker image"),"."),(0,o.kt)("p",null,"We recommend to use a Linux VM with Docker installed. For example you can use ",(0,o.kt)("a",{parentName:"p",href:"https://www.vmware.com/fr/products/workstation-player.html"},"VMware Workstation Player")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/Downloads"},"VirtualBox"),"."),(0,o.kt)("p",null,"You can find pre-installed Linux images on ",(0,o.kt)("a",{parentName:"p",href:"https://www.linuxvmimages.com/"},"linuxvmimages.com")),(0,o.kt)("h2",{id:"building"},"Building"),(0,o.kt)("p",null,"Docker must be installed and running. "),(0,o.kt)("p",null,"The following command lines will install the required Docker image to get the preconfigured Toolchain for compilation (credits: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/shauninman/union-miyoomini-toolchain"},"Shaun Inman"),"), compile all the sources and make a release."),(0,o.kt)("p",null,"Open a Terminal and type : "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/OnionUI/Onion.git")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cd Onion/")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"make git-submodules")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"make with-toolchain")," or",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"make with-toolchain CMD=dev")," (to enable debug logging )"),(0,o.kt)("p",null,"Done!"),(0,o.kt)("h2",{id:"toolchain"},"Toolchain"),(0,o.kt)("p",null,"You can also use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"make toolchain")," to get access to the toolchain docker image, here to can run any commands, like ",(0,o.kt)("inlineCode",{parentName:"p"},"make dev"),"."))}m.isMDXComponent=!0}}]);