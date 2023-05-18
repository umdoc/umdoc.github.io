"use strict";(self.webpackChunkumdoc=self.webpackChunkumdoc||[]).push([[872],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(1163),o=(r(9496),r(9613));const a={sidebar_position:1},i="um-rodeo",l={unversionedId:"Scripts/um-rodeo",id:"Scripts/um-rodeo",title:"um-rodeo",description:"Install",source:"@site/docs/Scripts/um-rodeo.md",sourceDirName:"Scripts",slug:"/Scripts/um-rodeo",permalink:"/Scripts/um-rodeo",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Scripts",permalink:"/category/scripts"},next:{title:"um-punchmachine",permalink:"/Scripts/um-punchmachine"}},u={},c=[{value:"Install",id:"install",level:2},{value:"Server.cfg",id:"servercfg",level:3},{value:"Customize",id:"customize",level:2},{value:"Requirements",id:"requirements",level:2}],s={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"um-rodeo"},"um-rodeo"),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, import the ",(0,o.kt)("inlineCode",{parentName:"li"},"umrodeo_leaderboard.sql")," file"),(0,o.kt)("li",{parentName:"ul"},"Then, go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"config.lua")," file and configure it according to your preferences."),(0,o.kt)("li",{parentName:"ul"},"If you're using a custom framework, you can modify the client and server scripts in the ",(0,o.kt)("inlineCode",{parentName:"li"},"bridge")," folder according to your needs."),(0,o.kt)("li",{parentName:"ul"},"You don't need to make any framework settings for ",(0,o.kt)("strong",{parentName:"li"},"QB and ESX frameworks"),", as the bridge automatically handles this.")),(0,o.kt)("h3",{id:"servercfg"},"Server.cfg"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cfg"},"ensure um-rodeo-prop\nensure um-rodeo\n")),(0,o.kt)("p",null,"or create a ","[um]"," folder and put them"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cfg"},"ensure [um]\n")),(0,o.kt)("h2",{id:"customize"},"Customize"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you want to change the keylist in the minigame")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="web > js > bullsMinGame.js"',title:'"web',">":!0,js:!0,'bullsMinGame.js"':!0},"const keyList = ['w','a','s','d'];\n")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mkafrin/PolyZone"},"PolyZone"))))}m.isMDXComponent=!0}}]);