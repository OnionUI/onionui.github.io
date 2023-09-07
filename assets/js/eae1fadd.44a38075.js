"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9013],{2991:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7294),i=n(6010),r=n(3438),l=n(9960),o=n(3919),s=n(5999);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function c(e){let{href:t,children:n}=e;return a.createElement(l.Z,{href:t,className:(0,i.Z)("card padding--lg",u.cardContainer)},n)}function d(e){let{href:t,icon:n,title:r,description:l}=e;return a.createElement(c,{href:t},a.createElement("h2",{className:(0,i.Z)("text--truncate",u.cardTitle),title:r},n," ",r),l&&a.createElement("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:l},l))}function m(e){let{item:t}=e;const n=(0,r.Wl)(t);return n?a.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(t.docId??void 0);return a.createElement(d,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(p,{item:t});case"category":return a.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,r.jA)();return a.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return a.createElement(f,e);const l=(0,r.MN)(t);return a.createElement("section",{className:(0,i.Z)("row",n)},l.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(h,{item:e})))))}},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),i=n(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(3117),i=n(7294),r=n(6010),l=n(2466),o=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function m(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),k=(()=>{const e=s??d;return p({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var k=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(d(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,r.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},i.createElement(g,(0,a.Z)({},e,t)),i.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return i.createElement(v,(0,a.Z)({key:String(t)},e))}},9359:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),i=n(9960),r=n(5769);function l(e){let{children:t,href:n,icon:l}=e;return a.createElement(i.Z,{href:n},a.createElement(r.Z,null,l),a.createElement("span",null,t))}},2168:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(9960);function r(e){let{url:t,label:n,className:r,showDownloads:l}=e;const[o,s]=(0,a.useState)({});(0,a.useEffect)((()=>{fetch(t).then((e=>e.ok?e.json():null)).then(s)}),[]);const u=(o.name||"Loading...")+(n&&` (${n})`||"");return a.createElement(a.Fragment,null,o&&a.createElement("div",null,a.createElement(i.Z,{className:r,href:o.html_url},u),l&&o.assets&&a.createElement("div",null,a.createElement("small",null,a.createElement("i",null,o.assets[0].download_count.toLocaleString()," downloads")))))}},6340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var a=n(3117),i=(n(7294),n(3905)),r=n(4866),l=n(5162),o=n(2991),s=n(2168),u=n(9359);const c={sidebar_position:1,slug:"/installation",description:"Official installation guide"},d="Installation",m={unversionedId:"getting-started/installation/index",id:"getting-started/installation/index",title:"Installation",description:"Official installation guide",source:"@site/docs/01-getting-started/01-installation/index.mdx",sourceDirName:"01-getting-started/01-installation",slug:"/installation",permalink:"/docs/installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/installation",description:"Official installation guide"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/"},next:{title:"Fresh install",permalink:"/docs/installation/fresh"}},p={},h=[{value:'<sup><img align="left" src="https://user-images.githubusercontent.com/44569252/189428439-d70d00ac-3b1b-416f-a8fb-b47c8c6cead2.png" width="54" /></sup> Check your firmware',id:"-check-your-firmware",level:2},{value:'<sup><img align="left" src="https://user-images.githubusercontent.com/44569252/179302769-4169e57a-860f-4c0e-8792-007e7557ba48.png" width="54" /></sup> Download the installation files',id:"-download-the-installation-files",level:2},{value:'<sup><img align="left" src="https://user-images.githubusercontent.com/44569252/179306127-e8a2c99c-a078-46b0-9561-47abf5c16208.png" width="54" /></sup> Install or upgrade',id:"-install-or-upgrade",level:2}],f={toc:h},k="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/98862735/179318051-39abe99e-79eb-43da-9778-aa9b4f6d1b28.png",alt:null})),(0,i.kt)("h2",{id:"-check-your-firmware"},(0,i.kt)("sup",null,(0,i.kt)("img",{align:"left",src:"https://user-images.githubusercontent.com/44569252/189428439-d70d00ac-3b1b-416f-a8fb-b47c8c6cead2.png",width:"54"}))," Check your firmware"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The firmware is the backend part of the OS, which lives inside your device. Onion on the other hand is a frontend that will stay fresh on your SD card.")),(0,i.kt)("admonition",{title:"Risk of bricking",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"We can't take responsibility if your device is bricked in the process of upgrading the firmware."),(0,i.kt)("p",{parentName:"admonition"},"Take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/16885275/170205258-8add4be7-1a1e-4ae5-a8f2-cb13c6703e06.png"},(0,i.kt)("em",{parentName:"a"},"firmware upgrade guide"))," - beware, the guide contains an outdated link to lemiyoo.cn, we provide an alternative download link above.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can check your current version in ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," \u203a ",(0,i.kt)("inlineCode",{parentName:"li"},"Device Info")," \u203a ",(0,i.kt)("inlineCode",{parentName:"li"},"Version"),(0,i.kt)("br",{parentName:"li"}),"or if you already have Onion installed: ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings")," \u203a ",(0,i.kt)("inlineCode",{parentName:"li"},"About device")," \u203a ",(0,i.kt)("inlineCode",{parentName:"li"},"Firmware version")),(0,i.kt)("li",{parentName:"ol"},"Select your device in the tabs below, then check that you have the appropriate firmware version.")),(0,i.kt)(r.Z,{groupId:"device",queryString:!0,mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"mm",label:"Miyoo Mini (MM)",mdxType:"TabItem"},(0,i.kt)("admonition",{title:"'The Boya Incident'",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A bad firmware was found on devices bought in late December (version ",(0,i.kt)("inlineCode",{parentName:"p"},"20221216****")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"20221224****"),").\nPlease apply the community patch found below. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/e/2PACX-1vQCTMHDUz2jJBPx3XbvXGVukRJ0t96JKe1gchuV9i5eo3RqY1mIwFx8H1Ja-3sQtFXcHh3U72O8DNcY/pub"},"Read more"))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You need at least firmware version ",(0,i.kt)("inlineCode",{parentName:"p"},"20220419****")," (for Onion v3.10 and above)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"Most devices produced after July 2022 will already have this firmware version.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2021 12 11 0956")," \u26a0\ufe0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2022 01 08 2152")," \u26a0\ufe0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2022 04 19 0828")," \u2714\ufe0f (recommended)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2022 12 16 0314")," \u26a0\ufe0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2022 12 24 0121")," \u26a0\ufe0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2023 01 04 1337")," \u2714\ufe0f (community patch)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2023 06 11 1426")," \u2714\ufe0f")))),(0,i.kt)("admonition",{title:"Firmware downloads (MM)",type:"note"},(0,i.kt)(u.Z,{href:"https://drive.google.com/drive/folders/1VtfcBCoIcpMIBY2FIyAtjV-Dg02JUvhG",icon:"cloud_download",mdxType:"IconLink"},"Firmware 20220409")," (recommended version)",(0,i.kt)("br",null),(0,i.kt)(u.Z,{href:"https://www.reddit.com/r/MiyooMini/comments/104qbak/community_firmware_patch_for_new_devices/",icon:"description",mdxType:"IconLink"},"Community patch")," (use only on firmware 20221216/24)")),(0,i.kt)(l.Z,{value:"mmp",label:"Miyoo Mini+ (MMP)",mdxType:"TabItem"},(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You need at least firmware version ",(0,i.kt)("inlineCode",{parentName:"p"},"20230505****"),", if you have an older version please download the recommended firmware linked below."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2023 02 18 1113")," \u26a0\ufe0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2023 03 02 1817")," \u26a0\ufe0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2023 03 12 1739")," \u26a0\ufe0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2023 03 26 2339")," \u26a0\ufe0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2023 03 29 2051")," \u26a0\ufe0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2023 05 05 2130")," \u2714\ufe0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2023 06 09 2122")," \u2714\ufe0f (recommended)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2023 06 28 2128")," \u2714\ufe0f")))),(0,i.kt)("admonition",{title:"Firmware downloads (MMP)",type:"note"},(0,i.kt)(u.Z,{href:"https://app.sugarsync.com/iris/wf/D4978471_09235444_029620",icon:"cloud_download",mdxType:"IconLink"},"Firmware 20230609")," (recommended version)"))),(0,i.kt)("h2",{id:"-download-the-installation-files"},(0,i.kt)("sup",null,(0,i.kt)("img",{align:"left",src:"https://user-images.githubusercontent.com/44569252/179302769-4169e57a-860f-4c0e-8792-007e7557ba48.png",width:"54"}))," Download the installation files"),(0,i.kt)("admonition",{title:"MMP support",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You need to install ",(0,i.kt)("strong",{parentName:"p"},"Onion V4.2")," for MMP, as earlier versions doesn't support the new hardware.")),(0,i.kt)("p",null,"Download the latest version of Onion:"),(0,i.kt)("div",{className:"release-links"},(0,i.kt)(s.Z,{label:"Stable",showDownloads:!0,className:"button button--primary button--lg",url:"https://api.github.com/repos/OnionUI/Onion/releases/latest",mdxType:"ReleaseLink"}),(0,i.kt)(s.Z,{label:"Beta",showDownloads:!0,className:"button button--secondary button--lg",url:"https://api.github.com/repos/OnionUI/Onion/releases/tags/latest",mdxType:"ReleaseLink"})),(0,i.kt)("p",null,"The Onion installation zip is found under ",(0,i.kt)("strong",{parentName:"p"},"Assets")," at the bottom of the release notes.",(0,i.kt)("br",{parentName:"p"}),"\n","Look for ",(0,i.kt)("inlineCode",{parentName:"p"},"Onion-v4.x.x.zip")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Onion-v4.x.x-snapshot-[tag].zip"),"."),(0,i.kt)("h2",{id:"-install-or-upgrade"},(0,i.kt)("sup",null,(0,i.kt)("img",{align:"left",src:"https://user-images.githubusercontent.com/44569252/179306127-e8a2c99c-a078-46b0-9561-47abf5c16208.png",width:"54"}))," Install or upgrade"),(0,i.kt)("p",null,"Depending on your situation, choose an option below:"),(0,i.kt)(o.Z,{mdxType:"DocCardList"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you experience any issues during the install, try copying over the installation\nfiles again and re-run the installation (you can skip copying the ",(0,i.kt)("inlineCode",{parentName:"p"},"BIOS"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"Icons"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Themes")," folders)."),(0,i.kt)("p",{parentName:"admonition"},"If you still have issues after trying a reinstall, you may need to reformat\nyour SD card (remember to backup the ",(0,i.kt)("inlineCode",{parentName:"p"},"Roms")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Saves")," folders).")))}b.isMDXComponent=!0}}]);