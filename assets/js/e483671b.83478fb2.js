"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),u=a(67392),p=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var k=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==l&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},24594:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={slug:"/installation/fresh",description:"Installing on an empty SD card"},s="Fresh install",u={unversionedId:"installation/fresh-install",id:"installation/fresh-install",title:"Fresh install",description:"Installing on an empty SD card",source:"@site/docs/02-installation/01-fresh-install.mdx",sourceDirName:"02-installation",slug:"/installation/fresh",permalink:"/docs/installation/fresh",draft:!1,editUrl:"https://github.com/OnionUI/Onion/edit/main/website/docs/02-installation/01-fresh-install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/installation/fresh",description:"Installing on an empty SD card"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Upgrading",permalink:"/docs/installation/update"}},p={},c=[{value:"Step 1: Preparing the SD card (only necessary first time)",id:"step-1-preparing-the-sd-card-only-necessary-first-time",level:2},{value:"Format your SD card as <code>FAT32</code> (not <code>exFAT</code>!)",id:"format-your-sd-card-as-fat32-not-exfat",level:3},{value:"Step 2: Copy the installation files and boot up your device to begin the installation",id:"step-2-copy-the-installation-files-and-boot-up-your-device-to-begin-the-installation",level:2},{value:"Step 3: Copy over your bios and rom files",id:"step-3-copy-over-your-bios-and-rom-files",level:2}],m={toc:c},d="wrapper";function h(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fresh-install"},"Fresh install"),(0,r.kt)("h2",{id:"step-1-preparing-the-sd-card-only-necessary-first-time"},"Step 1: Preparing the SD card (only necessary first time)"),(0,r.kt)("admonition",{title:"Beware",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The SD card included with the Miyoo Mini is known to be slow, and will likely ruin your experience and/or data.\nStick to using SD cards from reputable brands (e.g. SanDisk or Samsung).")),(0,r.kt)("h3",{id:"format-your-sd-card-as-fat32-not-exfat"},"Format your SD card as ",(0,r.kt)("inlineCode",{parentName:"h3"},"FAT32")," (not ",(0,r.kt)("inlineCode",{parentName:"h3"},"exFAT"),"!)"),(0,r.kt)(o.Z,{groupId:"os",queryString:!0,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"If your SD card is larger than 32 GB, you need to use a third-party tool like ",(0,r.kt)("a",{parentName:"p",href:"https://rufus.ie/"},"Rufus"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Rufus, select the device that corresponds with the SD card you want to format"),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("strong",{parentName:"li"},"Boot selection")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Non bootable")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Partition scheme")," should already be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"MBR")),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("strong",{parentName:"li"},"File system")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Large FAT32")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Cluster size")," at ",(0,r.kt)("inlineCode",{parentName:"li"},"32 kilobytes")," should be fine (",(0,r.kt)("inlineCode",{parentName:"li"},"16 kilobytes")," might extend the life of your SD card)"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"START")," to format the card, when it's done you can close the window")),(0,r.kt)("admonition",{title:"GUIFormat / fat32format",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We do not recommend using ",(0,r.kt)("em",{parentName:"p"},"GUIFormat / fat32format"),", since many users are reporting file system errors on cards above 128 GB"))),(0,r.kt)(i.Z,{value:"mac",label:"Mac",mdxType:"TabItem"},(0,r.kt)("p",null,"On Mac, you can format your SD card with the built-in ",(0,r.kt)("strong",{parentName:"p"},"Disk Utilities"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Application")," \u203a ",(0,r.kt)("strong",{parentName:"li"},"Utilities")," \u203a ",(0,r.kt)("strong",{parentName:"li"},"Disk Utilities")),(0,r.kt)("li",{parentName:"ol"},"From the sidebar, select the USB drive that corresponds with the SD card you want to format (Choose to format the root element ",(0,r.kt)("a",{target:"_blank",href:a(62013).Z},"as on this picture"),")"),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("strong",{parentName:"li"},"Erase")," from the toolbar"),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("strong",{parentName:"li"},"Format")," \u203a ",(0,r.kt)("inlineCode",{parentName:"li"},"MS-DOS (FAT)")),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("strong",{parentName:"li"},"Scheme")," (if it exists) \u203a ",(0,r.kt)("inlineCode",{parentName:"li"},"Master Boot Record")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Erase")," and wait for the process to finish"))),(0,r.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,"There are lots of ways to format an SD card on Linux. 3 methods are presented in ",(0,r.kt)("a",{parentName:"p",href:"https://www.golinuxcloud.com/steps-to-format-sd-card-in-linux/"},"this blog post"),"."),(0,r.kt)("p",null,"Make sure you choose: ",(0,r.kt)("inlineCode",{parentName:"p"},"For use with all systems and devices (FAT)"))),(0,r.kt)(i.Z,{value:"chromeos",label:"Chrome OS",mdxType:"TabItem"},(0,r.kt)("p",null,"Chrome already has a tool to format an SD card. Insert the card into your Chromebook, right-click it and click ",(0,r.kt)("strong",{parentName:"p"},"Format Device"),", make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"FAT32")," is selected under ",(0,r.kt)("strong",{parentName:"p"},"Format")," and click or tap ",(0,r.kt)("strong",{parentName:"p"},"Erase & Format"),". "))),(0,r.kt)("h2",{id:"step-2-copy-the-installation-files-and-boot-up-your-device-to-begin-the-installation"},"Step 2: Copy the installation files and boot up your device to begin the installation"),(0,r.kt)(o.Z,{groupId:"os",queryString:!0,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Right click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Onion-v4.x.x.zip")," file and select ",(0,r.kt)("strong",{parentName:"li"},"Extract all")," \u203a ",(0,r.kt)("strong",{parentName:"li"},"Extract")),(0,r.kt)("li",{parentName:"ol"},"Select and copy the 7 folders to the root of your SD card"))),(0,r.kt)(i.Z,{value:"mac",label:"Mac",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Unzip (expand) the ",(0,r.kt)("inlineCode",{parentName:"li"},"Onion-v4.x.x.zip")," file: Double-click the ",(0,r.kt)("inlineCode",{parentName:"li"},".zip")," file.",(0,r.kt)("br",{parentName:"li"}),"The unzipped item will appear in the same folder as the ",(0,r.kt)("inlineCode",{parentName:"li"},".zip")," file.",(0,r.kt)("br",{parentName:"li"}),"If you want to, you can delete the ",(0,r.kt)("inlineCode",{parentName:"li"},".zip")," file."),(0,r.kt)("li",{parentName:"ol"},"Select and copy the 7 folders to the root of your SD card",(0,r.kt)("br",{parentName:"li"}),"Make sure hidden files are shown (press ",(0,r.kt)("kbd",null,"Command"),"+",(0,r.kt)("kbd",null,"Shift"),"+",(0,r.kt)("kbd",null,".")," in Finder)"))),(0,r.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unzip the ",(0,r.kt)("inlineCode",{parentName:"p"},"Onion-v4.x.x.zip")," file using the following command (replace ",(0,r.kt)("inlineCode",{parentName:"p"},"Onion-v4.2.0")," with the filename of the zip you downloaded):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"unzip Onion-v4.2.0.zip -d Onion-v4.2.0\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the 7 folders to your SD card, using the following command (replace ",(0,r.kt)("inlineCode",{parentName:"p"},"/run/media/mmcblk0p1")," with the path to your SD card):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cp -r Onion-v4.2.0/* /run/media/mmcblk0p1\n"))))),(0,r.kt)(i.Z,{value:"chromeos",label:"Chrome OS",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Double-click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Onion-v4.x.x.zip")," file and make sure hidden files are visible by clicking or tapping the top-right corner 3-dots icon and making sure ",(0,r.kt)("inlineCode",{parentName:"li"},"Show Hidden Files")," is toggled on."),(0,r.kt)("li",{parentName:"ol"},"Copy the 7 folders to your SD card, dragging them into your SD card drive icon on the left panel.")))),(0,r.kt)("admonition",{title:"Installation files",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Onion installation files consists of the following folders:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:"showLineNumbers",showLineNumbers:!0},".tmp_update/  # Might be hidden\nBIOS/\nMedia/\nmiyoo/\nmiyoo354/\nRetroArch/\nThemes/\n"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Insert the SD card into the Miyoo device, and turn it on to begin the installation."),(0,r.kt)("li",{parentName:"ol"},"When the installation is done, you'll be prompted with the ",(0,r.kt)("strong",{parentName:"li"},"Quick Guide")," - ",(0,r.kt)("em",{parentName:"li"},"a quick overview of Onion")),(0,r.kt)("li",{parentName:"ol"},"Then you'll be presented with the ",(0,r.kt)("strong",{parentName:"li"},"Package Manager"),", choose the systems and apps you want enabled, then press ",(0,r.kt)("kbd",null,"START")," twice"),(0,r.kt)("li",{parentName:"ol"},"When the installation is done, press the ",(0,r.kt)("kbd",null,"A")," button and the device will turn off (MM) or reboot (MMP).")),(0,r.kt)("h2",{id:"step-3-copy-over-your-bios-and-rom-files"},"Step 3: Copy over your bios and rom files"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Copy your bios files to the ",(0,r.kt)("inlineCode",{parentName:"li"},"BIOS")," folder (stock bios files are available at ",(0,r.kt)("inlineCode",{parentName:"li"},"RetroArch/.retroarch/system")," on the stock SD card).  "),(0,r.kt)("li",{parentName:"ol"},"Copy your roms into their respective subfolders in ",(0,r.kt)("inlineCode",{parentName:"li"},"Roms")," (see the ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"../emulators"},"Emulators"))," page for more information - here you'll find the ",(0,r.kt)("a",{parentName:"li",href:"../emulators/folders"},"Rom Folders")," table).")),(0,r.kt)("admonition",{title:"Part of the system",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Despite its name, the ",(0,r.kt)("inlineCode",{parentName:"p"},".tmp_update")," folder must stay on your SD card.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Insert your SD card, boot up your Mini and press ",(0,r.kt)("kbd",null,"SELECT")," \u203a ",(0,r.kt)("strong",{parentName:"li"},"Refresh all roms")," from the ",(0,r.kt)("strong",{parentName:"li"},"Games")," tab in the main menu to refresh roms (forcing a reindex of your games).")))}h.isMDXComponent=!0},62013:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/format-usb-to-fat32-on-mac-6244645c5513220bacdeec4aaa541bc8.webp"}}]);