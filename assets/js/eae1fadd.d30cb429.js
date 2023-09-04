"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(7294),a=n(6010),i=n(3438),o=n(9960),l=n(3919),s=n(5999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",c.cardContainer)},n)}function d(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",c.cardTitle),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",c.cardDescription),title:o},o))}function m(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(p,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const o=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},6989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>x,default:()=>P,frontMatter:()=>T,metadata:()=>D,toc:()=>V});var r=n(7462),a=n(7294),i=n(3905),o=n(6010),l=n(2466),s=n(6550),c=n(1980),u=n(7392),d=n(12);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:n,groupId:r}),[u,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=s??u;return f({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),m(e)}),[c,m,i]),tabValues:i}}var g=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==i&&(d(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function E(e){const t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}const N={tabItem:"tabItem_Ymn6"};function O(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(N.tabItem,r),hidden:n},t)}var I=n(2991);const T={sidebar_position:1,slug:"/installation",description:"Official installation guide"},x="Installation",D={unversionedId:"getting-started/installation/index",id:"getting-started/installation/index",title:"Installation",description:"Official installation guide",source:"@site/docs/01-getting-started/01-installation/index.mdx",sourceDirName:"01-getting-started/01-installation",slug:"/installation",permalink:"/docs/next/installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/installation",description:"Official installation guide"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/next/"},next:{title:"Fresh install",permalink:"/docs/next/installation/fresh"}},C={},V=[{value:'<sup><img align="left" src="https://user-images.githubusercontent.com/44569252/189428439-d70d00ac-3b1b-416f-a8fb-b47c8c6cead2.png" width="54" /></sup> Check your firmware',id:"-check-your-firmware",level:2},{value:"Downloads",id:"downloads",level:3},{value:'<sup><img align="left" src="https://user-images.githubusercontent.com/44569252/179302769-4169e57a-860f-4c0e-8792-007e7557ba48.png" width="54" /></sup> Download the installation files',id:"-download-the-installation-files",level:2},{value:'<sup><img align="left" src="https://user-images.githubusercontent.com/44569252/179306127-e8a2c99c-a078-46b0-9561-47abf5c16208.png" width="54" /></sup> Install or upgrade',id:"-install-or-upgrade",level:2}],S={toc:V},j="wrapper";function P(e){let{components:t,...n}=e;return(0,i.kt)(j,(0,r.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/98862735/179318051-39abe99e-79eb-43da-9778-aa9b4f6d1b28.png",alt:"Onions5"})),(0,i.kt)("h2",{id:"-check-your-firmware"},(0,i.kt)("sup",null,(0,i.kt)("img",{align:"left",src:"https://user-images.githubusercontent.com/44569252/189428439-d70d00ac-3b1b-416f-a8fb-b47c8c6cead2.png",width:"54"}))," Check your firmware"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The firmware is the backend part of the OS, which lives inside your device. Onion on the other hand is a frontend that will stay fresh on your SD card.")),(0,i.kt)("p",null,"You can check your current version in ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," \u203a ",(0,i.kt)("inlineCode",{parentName:"p"},"Device Info")," \u203a ",(0,i.kt)("inlineCode",{parentName:"p"},"Version"),"."),(0,i.kt)(E,{groupId:"miyoo-version",queryString:!0,mdxType:"Tabs"},(0,i.kt)(O,{value:"mm",label:"Miyoo Mini",mdxType:"TabItem"},(0,i.kt)("p",null,"The April 2022 firmware from Miyoo (version ",(0,i.kt)("inlineCode",{parentName:"p"},"20220419****"),") is the minimum requirement for Onion v3.10 and above.\nMost devices produced after July 2022 will already have this firmware version."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"A bad firmware was found on devices bought in late December (version ",(0,i.kt)("inlineCode",{parentName:"p"},"20221216****")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"20221224****"),").\nPlease apply the community patch found below.")),(0,i.kt)("h3",{id:"downloads"},"Downloads"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://drive.google.com/drive/folders/1VtfcBCoIcpMIBY2FIyAtjV-Dg02JUvhG"},"Firmware 20220409")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/MiyooMini/comments/104qbak/community_firmware_patch_for_new_devices/"},"Community patch (use only on firmware 20221216/24)")))),(0,i.kt)(O,{value:"mmp",label:"Miyoo Mini+ (Plus)",mdxType:"TabItem"},(0,i.kt)("p",null,"[WIP]"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"We can't take responsibility if your device is bricked in the process of upgrading the firmware."),(0,i.kt)("p",{parentName:"admonition"},"Take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/16885275/170205258-8add4be7-1a1e-4ae5-a8f2-cb13c6703e06.png"},(0,i.kt)("em",{parentName:"a"},"firmware upgrade guide"))," - beware, the guide contains an outdated link to lemiyoo.cn, we provide an alternative download link above.")),(0,i.kt)("h2",{id:"-download-the-installation-files"},(0,i.kt)("sup",null,(0,i.kt)("img",{align:"left",src:"https://user-images.githubusercontent.com/44569252/179302769-4169e57a-860f-4c0e-8792-007e7557ba48.png",width:"54"}))," Download the installation files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OnionUI/Onion/releases/latest"},"latest version of Onion")," from the release page.")),(0,i.kt)("h2",{id:"-install-or-upgrade"},(0,i.kt)("sup",null,(0,i.kt)("img",{align:"left",src:"https://user-images.githubusercontent.com/44569252/179306127-e8a2c99c-a078-46b0-9561-47abf5c16208.png",width:"54"}))," Install or upgrade"),(0,i.kt)("p",null,"Depending on your situation, choose an option below:"),(0,i.kt)(I.Z,{mdxType:"DocCardList"}))}P.isMDXComponent=!0}}]);