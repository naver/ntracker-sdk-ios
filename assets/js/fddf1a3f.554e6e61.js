"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),k=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=k(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=k(n),c=r,s=m["".concat(o,".").concat(c)]||m[c]||p[c]||a;return n?l.createElement(s,i(i({ref:t},d),{},{components:n})):l.createElement(s,i({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[m]="string"==typeof e?e:r,i[1]=u;for(var k=2;k<a;k++)i[k]=n[k];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>k});var l=n(7462),r=(n(7294),n(3905));const a={},i="\uc804\ud658 \uc774\ubca4\ud2b8 \uc804\uc1a1",u={unversionedId:"how_to_use_sdk/send_events",id:"how_to_use_sdk/send_events",title:"\uc804\ud658 \uc774\ubca4\ud2b8 \uc804\uc1a1",description:"\ub124\uc774\ubc84 \uc571 \uc804\ud658 \ucd94\uc801 SDK\uc5d0\uc11c\ub294 \ub2e4\uc591\ud55c \uc804\ud658 \uc774\ubca4\ud2b8\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4. \uc774 \uc911 '\uc571 \uc124\uce58'\uc640 '\uc571 \uc2e4\ud589' \uc774\ubca4\ud2b8\ub294 SDK\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \uc218\uc9d1\ud569\ub2c8\ub2e4. \uadf8 \uc678\uc5d0\ub294 \ud574\ub2f9 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\uba74 \uc218\ub3d9\uc73c\ub85c \uad6c\ud604\ud569\ub2c8\ub2e4.",source:"@site/docs/how_to_use_sdk/send_events.md",sourceDirName:"how_to_use_sdk",slug:"/how_to_use_sdk/send_events",permalink:"/ntracker-sdk-ios/how_to_use_sdk/send_events",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\uc720\uc785 \uacbd\ub85c \uc124\uc815(\ub525 \ub9c1\ud06c \uc0ac\uc6a9 \uc2dc \uc720\uc785 URL \uc124\uc815)",permalink:"/ntracker-sdk-ios/how_to_use_sdk/set_inflow_url"},next:{title:"\ub85c\uadf8 \uc804\uc1a1 \uc5ec\ubd80 \ud655\uc778",permalink:"/ntracker-sdk-ios/how_to_use_sdk/check_debuglog"}},o={},k=[{value:"\uad11\uace0 \uc804\ud658\uc744 \uc704\ud55c \uc774\ubca4\ud2b8 \uc804\uc1a1 \uc2dc \uc8fc\uc758 \uc0ac\ud56d",id:"\uad11\uace0-\uc804\ud658\uc744-\uc704\ud55c-\uc774\ubca4\ud2b8-\uc804\uc1a1-\uc2dc-\uc8fc\uc758-\uc0ac\ud56d",level:2},{value:"\uc774\ubca4\ud2b8 \uc774\ub984",id:"\uc774\ubca4\ud2b8-\uc774\ub984",level:3},{value:"\uc804\ud658 \uac00\uce58",id:"\uc804\ud658-\uac00\uce58",level:3},{value:"\uc774\ubca4\ud2b8 \uc885\ub958\uc5d0 \ub530\ub978 \uc0c1\ud488 \uc138\ubd80 \uc815\ubcf4 \uc804\uc1a1",id:"\uc774\ubca4\ud2b8-\uc885\ub958\uc5d0-\ub530\ub978-\uc0c1\ud488-\uc138\ubd80-\uc815\ubcf4-\uc804\uc1a1",level:2},{value:"\uc774\ubca4\ud2b8 \uc804\uc1a1 \ucf54\ub4dc \uc608",id:"\uc774\ubca4\ud2b8-\uc804\uc1a1-\ucf54\ub4dc-\uc608",level:2},{value:"&#39;\uad6c\ub9e4 \uc644\ub8cc&#39; \uc774\ubca4\ud2b8 \uc804\uc1a1",id:"\uad6c\ub9e4-\uc644\ub8cc-\uc774\ubca4\ud2b8-\uc804\uc1a1",level:3},{value:"iOS",id:"ios",level:4},{value:"Android",id:"android",level:4},{value:"&#39;\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc&#39; \uc774\ubca4\ud2b8 \uc804\uc1a1",id:"\uc571-\ub0b4-\uad6c\ub9e4-\uc644\ub8cc-\uc774\ubca4\ud2b8-\uc804\uc1a1",level:3},{value:"iOS",id:"ios-1",level:4},{value:"Android",id:"android-1",level:4},{value:"\uc77c\ubc18 \uc774\ubca4\ud2b8 \uc804\uc1a1 - items\ub97c \ud3ec\ud568\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0",id:"\uc77c\ubc18-\uc774\ubca4\ud2b8-\uc804\uc1a1---items\ub97c-\ud3ec\ud568\ud558\uc9c0-\uc54a\ub294-\uacbd\uc6b0",level:3},{value:"iOS",id:"ios-2",level:4},{value:"Android",id:"android-2",level:4},{value:"\uc77c\ubc18 \uc774\ubca4\ud2b8 \uc804\uc1a1 - items\ub97c \ud3ec\ud568\ud558\ub294 \uacbd\uc6b0",id:"\uc77c\ubc18-\uc774\ubca4\ud2b8-\uc804\uc1a1---items\ub97c-\ud3ec\ud568\ud558\ub294-\uacbd\uc6b0",level:3},{value:"iOS",id:"ios-3",level:4},{value:"Android",id:"android-3",level:4},{value:"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc774\ubca4\ud2b8 \uc804\uc1a1",id:"\uc0ac\uc6a9\uc790-\uc815\uc758-\uc774\ubca4\ud2b8-\uc804\uc1a1",level:3},{value:"iOS",id:"ios-4",level:4},{value:"Android",id:"android-4",level:4}],d={toc:k},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uc804\ud658-\uc774\ubca4\ud2b8-\uc804\uc1a1"},"\uc804\ud658 \uc774\ubca4\ud2b8 \uc804\uc1a1"),(0,r.kt)("p",null,"\ub124\uc774\ubc84 \uc571 \uc804\ud658 \ucd94\uc801 SDK\uc5d0\uc11c\ub294 \ub2e4\uc591\ud55c \uc804\ud658 \uc774\ubca4\ud2b8\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4. \uc774 \uc911 '\uc571 \uc124\uce58'\uc640 '\uc571 \uc2e4\ud589' \uc774\ubca4\ud2b8\ub294 SDK\uc5d0\uc11c \uc790\ub3d9\uc73c\ub85c \uc218\uc9d1\ud569\ub2c8\ub2e4. \uadf8 \uc678\uc5d0\ub294 \ud574\ub2f9 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\uba74 \uc218\ub3d9\uc73c\ub85c \uad6c\ud604\ud569\ub2c8\ub2e4. "),(0,r.kt)("p",null,"\uac01 \uc774\ubca4\ud2b8 \uc774\ub984\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"NTrackerConversionEvent")," struct/object\uc5d0 \uc815\uc758\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. "),(0,r.kt)("p",null,"\uc774\ubca4\ud2b8 \ubaa9\ub85d\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"\uc774\ubca4\ud2b8 \uc124\uba85"),(0,r.kt)("td",null,"\uc218\uc9d1 \ubc29\uc2dd"),(0,r.kt)("td",null,"\uc774\ubca4\ud2b8 \uc774\ub984"),(0,r.kt)("td",null,"API")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\uc571 \uc124\uce58"),(0,r.kt)("td",null,"\uc790\ub3d9"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"\uc571\uc744 \ucc98\uc74c \uc2e4\ud589\ud558\uba74 \uc790\ub3d9 \uc804\uc1a1")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\uc571 \uc2e4\ud589"),(0,r.kt)("td",null,"\uc790\ub3d9"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"\uc571\uc744 \uc2e4\ud589\ud558\uace0 SDK\uac00 \ucd08\uae30\ud654\ub418\uba74 \uc790\ub3d9 \uc804\uc1a1")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\uad6c\ub9e4 \uc644\ub8cc"),(0,r.kt)("td",null,"\uc218\ub3d9"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"`trackPurchaseEvent`")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc"),(0,r.kt)("td",null,"\uc218\ub3d9"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"`trackInAppPurchaseEvent`")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\uc7a5\ubc14\uad6c\ub2c8 \ub2f4\uae30"),(0,r.kt)("td",null,"\uc218\ub3d9"),(0,r.kt)("td",null,"Cart"),(0,r.kt)("td",{rowspan:"10"},"`trackConversionEvent`")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\uc704\uc2dc\ub9ac\uc2a4\ud2b8 \ucd94\uac00"),(0,r.kt)("td",null,"\uc218\ub3d9"),(0,r.kt)("td",null,"WishList")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\uc2e0\uccad \uc644\ub8cc"),(0,r.kt)("td",null,"\uc218\ub3d9"),(0,r.kt)("td",null,"Application")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\uc18c\uc2dd \ubc1b\uae30/\uad6c\ub3c5"),(0,r.kt)("td",null,"\uc218\ub3d9"),(0,r.kt)("td",null,"Subscribe")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\uc608\uc57d \uc644\ub8cc"),(0,r.kt)("td",null,"\uc218\ub3d9"),(0,r.kt)("td",null,"Reservation")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ucf58\ud150\uce20 \ubcf4\uae30"),(0,r.kt)("td",null,"\uc218\ub3d9"),(0,r.kt)("td",null,"ViewContent")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ub808\ubca8 \ub2ec\uc131"),(0,r.kt)("td",null,"\uc218\ub3d9"),(0,r.kt)("td",null,"LevelEnd")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc644\ub8cc"),(0,r.kt)("td",null,"\uc218\ub3d9"),(0,r.kt)("td",null,"Tutorial")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\ud68c\uc6d0 \uac00\uc785 \uc644\ub8cc"),(0,r.kt)("td",null,"\uc218\ub3d9"),(0,r.kt)("td",null,"SignUp")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\uc0ac\uc6a9\uc790 \uc815\uc758(#1~#10)"),(0,r.kt)("td",null,"\uc218\ub3d9"),(0,r.kt)("td",null,"CustomEvent[001~010]"))),(0,r.kt)("h2",{id:"\uad11\uace0-\uc804\ud658\uc744-\uc704\ud55c-\uc774\ubca4\ud2b8-\uc804\uc1a1-\uc2dc-\uc8fc\uc758-\uc0ac\ud56d"},"\uad11\uace0 \uc804\ud658\uc744 \uc704\ud55c \uc774\ubca4\ud2b8 \uc804\uc1a1 \uc2dc \uc8fc\uc758 \uc0ac\ud56d"),(0,r.kt)("p",null,"\uc131\uacfc\ud615 \ub514\uc2a4\ud50c\ub808\uc774 \uad11\uace0(DA)\uc5d0\uc11c \uad11\uace0 \uc804\ud658\uc744 \uc81c\uacf5\ud558\ub824\uba74 \ub2e4\uc74c \uc0ac\ud56d\uc5d0 \uc8fc\uc758\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc774\ubca4\ud2b8-\uc774\ub984"},"\uc774\ubca4\ud2b8 \uc774\ub984"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"trackConversionEvent")," API\ub85c \uc774\ubca4\ud2b8\ub97c \uc804\uc1a1\ud560 \ub54c \uc774\ubca4\ud2b8 \uc774\ub984(event name)\uc744 \ubc18\ub4dc\uc2dc \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc804\ud658-\uac00\uce58"},"\uc804\ud658 \uac00\uce58"),(0,r.kt)("p",null,"\uc804\ud658 \uac00\uce58(value)\ub294 \ucd1d \uc804\ud658 \ub9e4\ucd9c\uc561\uc744 \uc758\ubbf8\ud558\uba70, \ud1b5\ud654 \ub2e8\uc704\ub294 KRW\uc785\ub2c8\ub2e4. \uc790\ub3d9\uc73c\ub85c \uc218\uc9d1\ub418\ub294 \uc774\ubca4\ud2b8\ub97c \uc81c\uc678\ud55c \ubaa8\ub4e0 \uc774\ubca4\ud2b8\uc5d0\uc11c \uc804\ud658 \uac00\uce58\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'\uad6c\ub9e4 \uc644\ub8cc', '\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc' \uc774\ubca4\ud2b8 \uc804\uc1a1 \uc2dc \uc804\ud658 \uac00\uce58\ub97c \ud3ec\ud568\ud558\ub824\uba74 \ubc18\ub4dc\uc2dc \uc2e4\uc81c \uacb0\uc81c\ud55c \uae08\uc561\uc758 \ucd1d\uc561\uc744 \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4. \uadf8 \uc678 \uc804\ud658 \uc774\ubca4\ud2b8\uc758 \uc804\ud658 \uac00\uce58 \ud544\ub4dc\ub294 \uc120\ud0dd \uc0ac\ud56d\uc73c\ub85c, \uc804\ud658 \uc774\ubca4\ud2b8\ubcc4\ub85c \uce21\uc815\ud560 \uc804\ud658 \uac00\uce58\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"'\uad6c\ub9e4 \uc644\ub8cc', '\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc' \uc774\ubca4\ud2b8 \uc804\uc1a1 \uc2dc ",(0,r.kt)("inlineCode",{parentName:"li"},"NTrackerConversionItem"),"\uc73c\ub85c \uc0c1\ud488 \uc138\ubd80 \uc815\ubcf4\ub97c \ud568\uaed8 \uc804\uc1a1\ud560 \uacbd\uc6b0 \uc804\ud658 \uac00\uce58(value)\uc640 \uad6c\ub9e4 \ud56d\ubaa9(items)\uc758 payAmount \ud569\uacc4\uac00 \uc77c\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"'\uad6c\ub9e4 \uc644\ub8cc', '\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc' \uc678 \uc77c\ubc18 \uc774\ubca4\ud2b8\ub97c \uc804\uc1a1\ud560 \ub54c \uc804\ud658 \uac00\uce58\ub97c \ud3ec\ud568\ud558\ub824\uba74, \uc804\ud658 \uac00\uce58(value) \ud544\ub4dc\uac12\uc758 \ud1b5\ud654 \uae30\uc900\uc774 KRW\uc5ec\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uae30\uac04\uc5d0 \ub108\ubb34 \ub9ce\uc740 \uc804\ud658\uc774 \ubcf4\uace0\ub418\uba74 \uc5b4\ubdf0\uc9d5\uc73c\ub85c \uac10\uc9c0\ub418\uc5b4 \uc131\uacfc\ud615 DA\uc5d0\uc11c \uc804\ud658 \ubcf4\uace0\uac00 \uc81c\ud55c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5b4\ubdf0\uc9d5 \ud310\ub2e8 \uae30\uc900\uc740 \ub0b4\ubd80 \ub85c\uc9c1\uc5d0 \ub530\ub77c \ubcc0\uacbd\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"\uc774\ubca4\ud2b8-\uc885\ub958\uc5d0-\ub530\ub978-\uc0c1\ud488-\uc138\ubd80-\uc815\ubcf4-\uc804\uc1a1"},"\uc774\ubca4\ud2b8 \uc885\ub958\uc5d0 \ub530\ub978 \uc0c1\ud488 \uc138\ubd80 \uc815\ubcf4 \uc804\uc1a1"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NTrackerConversionItem"),"\uc5d0\ub294 \uc774\ubca4\ud2b8\uc5d0 \ud3ec\ud568\ub41c \uc138\ubd80 \ud56d\ubaa9\uc758 \uc77c\ubc18 \uc815\ubcf4\ub97c \ub2f4\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n'\uad6c\ub9e4 \uc644\ub8cc', '\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc' \uc774\ubca4\ud2b8\uc758 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"NTrackerConversionItem"),"\uc744 \uc774\uc6a9\ud574 \uad6c\ub9e4 \ud56d\ubaa9 \uc815\ubcf4(\uc0c1\ud488 \uc138\ubd80 \uc815\ubcf4)\ub97c \uc804\ub2ec\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4. \uc0ac\uc6a9 \ubc29\ubc95\uc740 ",(0,r.kt)("a",{parentName:"p",href:"#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%A0%84%EC%86%A1-%EC%BD%94%EB%93%9C-%EC%98%88"},"\uc774\ubca4\ud2b8 \uc804\uc1a1 \ucf54\ub4dc \uc608"),"\ub97c \ucc38\uace0\ud558\uc138\uc694."),(0,r.kt)("p",null,"\ud2b9\ud788, '\uad6c\ub9e4 \uc644\ub8cc', '\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc' \uc774\ubca4\ud2b8\uc5d0\uc11c USD \ud1b5\ud654\ub85c \uacb0\uc81c\ud560 \uac00\ub2a5\uc131\uc774 \uc788\uc73c\uba74, \uc804\ud658 \uac00\uce58(value) \ud544\ub4dc\ub294 \uc785\ub825\ud558\uc9c0 \uc54a\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"NTrackerConversionItem"),"\uc73c\ub85c items \ud558\uc704\uc5d0 \uacb0\uc81c \uae08\uc561\uacfc \ud1b5\ud654\ub97c \uc9c0\uc815\ud574\uc11c \uc804\uc1a1\ud574\uc57c \ud569\ub2c8\ub2e4. \ub2e8, \uc804\ud658 \uac00\uce58(value)\uc640 items \ud558\uc704 payAmount\uac00 \ubaa8\ub450 \uc804\ub2ec\ub418\uba74, \uc804\ud658 \uac00\uce58(value)\ub9cc \uc804\ud658 \ub9e4\ucd9c\uc561\uc5d0 \ud3ec\ud568\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"'\uc7a5\ubc14\uad6c\ub2c8 \ub2f4\uae30', '\uc704\uc2dc\ub9ac\uc2a4\ud2b8 \ucd94\uac00', '\ucf58\ud150\uce20 \ubcf4\uae30' \ub4f1\uc758 \uc774\ubca4\ud2b8 \uc804\uc1a1 \uc2dc ",(0,r.kt)("inlineCode",{parentName:"p"},"NTrackerConversionItem"),"\uc73c\ub85c \uc0c1\ud488 \uc138\ubd80 \uc815\ubcf4\ub97c \uc804\ub2ec\ud560 \uc218 \uc788\uc73c\ub098, \ud604\uc7ac\ub294 \uc131\uacfc\ud615 DA \ub9ac\ud3ec\ud2b8 \ubc0f \ucd5c\uc801\ud654\uc5d0 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud5a5\ud6c4 \uc804\ud658 \ucd5c\uc801\ud654 \ubc0f \uc131\uacfc\ud615 DA \ub0b4 \ub300\uc2dc\ubcf4\ub4dc \uae30\ub2a5\uc744 \uc774\uc6a9\ud574 items \ud558\uc704 \uc815\ubcf4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \uc9c0\uc6d0\ud560 \uc608\uc815\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NTrackerConversionItem"),"\uc73c\ub85c \uad6c\ub9e4 \ud56d\ubaa9 \uc815\ubcf4\ub97c \uc804\ub2ec\ud560 \ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"quantity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"payAmount"),"\ub294 \ud544\uc218 \ud544\ub4dc\uc774\uace0, \uadf8 \uc678\ub294 \uc120\ud0dd \ud544\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quantity"),"\ub294 \ud574\ub2f9 \uc0c1\ud488(\ub610\ub294 \uc11c\ube44\uc2a4)\uc758 \uc804\ud658 \uc218\ub7c9\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payAmount"),"\ub294 \ud574\ub2f9 \uc0c1\ud488\uc774 \ubc1c\uc0dd\uc2dc\ud0a8 \ucd1d \uc804\ud658 \uac00\uce58\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uac00\uaca9\uc774 1,000\uc6d0\uc778 item A\uac00 3\uac1c \uad6c\ub9e4\ub418\uc5c8\uc744 \ub54c, \ud574\ub2f9 item\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"payAmount"),"\ub294 3,000\uc6d0\uc785\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payAmount"),"\uac00 KRW\uac00 \uc544\ub2c8\uba74 ",(0,r.kt)("inlineCode",{parentName:"li"},"ext1"),"\uc5d0 currency code(ISO 4217)\ub97c \uc785\ub825\ud569\ub2c8\ub2e4. currency code\ub97c \uc124\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 'KRW'\ub85c \uacc4\uc0b0\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quantity"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"payAmount")," \uc678 \uc120\ud0dd \ud544\ub4dc\ub294 \uc815\ud574\uc9c4 \ud615\uc2dd \uc5c6\uc774 \uac01 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc784\uc758\ub85c \uc9c0\uc815\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\uc8fc\uc758")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\ud574\uc678 \uacb0\uc81c\uac00 \ud5c8\uc6a9\ub418\ub294 \uacbd\uc6b0, currency code\ub97c \ubc18\ub4dc\uc2dc \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud604\uc7ac KRW, USD\ub9cc \uc9c0\uc6d0\ub418\uba70, \ub2e4\ub978 currency code(\uc608: EUR)\uac00 \uc785\ub825\ub418\uba74 \uc804\ud658 \uac00\uce58\ub97c 0\uc73c\ub85c \ucc98\ub9ac\ud569\ub2c8\ub2e4."))),(0,r.kt)("h2",{id:"\uc774\ubca4\ud2b8-\uc804\uc1a1-\ucf54\ub4dc-\uc608"},"\uc774\ubca4\ud2b8 \uc804\uc1a1 \ucf54\ub4dc \uc608"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 \ub2e4\uc591\ud55c \uc774\ubca4\ud2b8\ub97c \uc804\uc1a1\ud558\ub294 \ucf54\ub4dc \uc608\uc785\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EA%B5%AC%EB%A7%A4-%EC%99%84%EB%A3%8C-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%A0%84%EC%86%A1"},"\uad6c\ub9e4 \uc644\ub8cc \uc774\ubca4\ud2b8 \uc804\uc1a1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EC%95%B1-%EB%82%B4-%EA%B5%AC%EB%A7%A4-%EC%99%84%EB%A3%8C-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%A0%84%EC%86%A1"},"\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc \uc774\ubca4\ud2b8 \uc804\uc1a1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EC%9D%BC%EB%B0%98-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%A0%84%EC%86%A1---items%EB%A5%BC-%ED%8F%AC%ED%95%A8%ED%95%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EA%B2%BD%EC%9A%B0"},"\uc77c\ubc18 \uc774\ubca4\ud2b8 \uc804\uc1a1 - items\ub97c \ud3ec\ud568\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EC%9D%BC%EB%B0%98-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%A0%84%EC%86%A1---items%EB%A5%BC-%ED%8F%AC%ED%95%A8%ED%95%98%EB%8A%94-%EA%B2%BD%EC%9A%B0"},"\uc77c\ubc18 \uc774\ubca4\ud2b8 \uc804\uc1a1 - items\ub97c \ud3ec\ud568\ud558\ub294 \uacbd\uc6b0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A0%95%EC%9D%98-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%A0%84%EC%86%A1"},"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc774\ubca4\ud2b8 \uc804\uc1a1"))),(0,r.kt)("h3",{id:"\uad6c\ub9e4-\uc644\ub8cc-\uc774\ubca4\ud2b8-\uc804\uc1a1"},"'\uad6c\ub9e4 \uc644\ub8cc' \uc774\ubca4\ud2b8 \uc804\uc1a1"),(0,r.kt)("p",null,"'\uad6c\ub9e4 \uc644\ub8cc'\ub098 '\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc' \uc774\ubca4\ud2b8\ub294 \uac01\uac01 ",(0,r.kt)("inlineCode",{parentName:"p"},"trackPurchaseEvent"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"trackInAppPurchaseEvent")," API\ub85c \uc804\ud658 \uac00\uce58(value)\uc640 \uad6c\ub9e4 \ud56d\ubaa9(items)\uc744 \uc804\uc1a1\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc804\ud658 \uac00\uce58(value)\ub294 \uad6c\ub9e4 \ud56d\ubaa9(items)\uc758 ",(0,r.kt)("inlineCode",{parentName:"li"},"payAmount"),"\uc758 \ud569\uacc4\uc640 \uc77c\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"USD \uacb0\uc81c \uac00\ub2a5\uc131\uc744 \uace0\ub824\ud574 \uc804\ud658 \uac00\uce58 \uc5c6\uc774 \uad6c\ub9e4 \ud56d\ubaa9\ub9cc \uc804\uc1a1\ud558\ub294 \uacbd\uc6b0, \ud56d\ubaa9\uc758 currency code(",(0,r.kt)("inlineCode",{parentName:"li"},"ext1"),")\uc640 pay amount(",(0,r.kt)("inlineCode",{parentName:"li"},"payAmount"),")\ub85c \ud50c\ub7ab\ud3fc \ub0b4\ubd80\uc5d0\uc11c \uc804\ud658 \uac00\uce58(\uc804\ud658 \ub9e4\ucd9c\uc561)\ub97c \uacc4\uc0b0\ud574\uc11c \uc81c\uacf5\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc774 \uc808\uc758 \uc774\ubca4\ud2b8 \uc804\uc1a1 \ucf54\ub4dc \uc608\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uad6c\ub9e4\uac00 \ubc1c\uc0dd\ud588\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"\uc0c1\ud488 \ub2e8\uac00"),(0,r.kt)("th",{parentName:"tr",align:null},"\uad6c\ub9e4 \uc218\ub7c9"),(0,r.kt)("th",{parentName:"tr",align:null},"\ucd1d \uad6c\ub9e4 \ube44\uc6a9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"item1"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"item2"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"400")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"item3"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"900")))),(0,r.kt)("h4",{id:"ios"},"iOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'// \ud658\uc728 \uc815\ubcf4\ub294 \'ext1\'\uc5d0 \uc785\ub825\ud569\ub2c8\ub2e4. \'KRW\'\uc778 \uacbd\uc6b0 \uc0dd\ub7b5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nlet items = [\n    NTrackerConversionItem(quantity: 1, payAmount: 100, id: "item1", ext1: "KRW"),\n    NTrackerConversionItem(quantity: 2, payAmount: 400, id: "item2", ext1: "KRW"),\n    NTrackerConversionItem(quantity: 3, payAmount: 900, id: "item3", ext1: "KRW")\n]\n\n// \uc804\ud658 \uac00\uce58\uc640 \uad6c\ub9e4 \ud56d\ubaa9\uc744 \uc804\uc1a1\ud558\ub294 \uacbd\uc6b0\nNTrackerExt.trackPurchaseEvent(value: 1_400, items: items)\n\n// \uc804\ud658 \uac00\uce58\ub97c \uc804\uc1a1\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0: \uc804\ud658 \uac00\uce58\ub294 \ubaa8\ub4e0 items\uc758 payAmount \ud569\uacc4\uc778 1,400\uc6d0\uc73c\ub85c \uacc4\uc0b0\ud569\ub2c8\ub2e4.\nNTrackerExt.trackPurchaseEvent(items: items)\n\n// \uc804\ud658 \uac00\uce58\ub9cc \uc804\uc1a1\ud558\ub294 \uacbd\uc6b0\nNTrackerExt.trackPurchaseEvent(value: 1_400)\n')),(0,r.kt)("h4",{id:"android"},"Android"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \ud658\uc728 \uc815\ubcf4\ub294 \'ext1\'\uc5d0 \uc785\ub825\ud569\ub2c8\ub2e4. \'KRW\'\uc778 \uacbd\uc6b0 \uc0dd\ub7b5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nval items = arrayOf(\n    NTrackerConversionItem(1, 100.0, "item1", null, null, "KRW"),\n    NTrackerConversionItem(2, 400.0, "item2", null, null, "KRW"),\n    NTrackerConversionItem(3, 900.0, "item3", null, null, "KRW")\n)\n\n// \uc804\ud658 \uac00\uce58\uc640 \uad6c\ub9e4 \ud56d\ubaa9\uc744 \uc804\uc1a1\ud558\ub294 \uacbd\uc6b0\nNTrackerExt.trackPurchaseEvent(1_400, items)\n\n// \uc804\ud658 \uac00\uce58\ub97c \uc804\uc1a1\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0: \uc804\ud658 \uac00\uce58\ub294 \ubaa8\ub4e0 items\uc758 payAmount \ud569\uacc4\uc778 1,400\uc6d0\uc73c\ub85c \uacc4\uc0b0\ud569\ub2c8\ub2e4.\nNTrackerExt.trackPurchaseEvent(items)\n\n// \uc804\ud658 \uac00\uce58\ub9cc \uc804\uc1a1\ud558\ub294 \uacbd\uc6b0\nNTrackerExt.trackPurchaseEvent(1_400)\n\n')),(0,r.kt)("h3",{id:"\uc571-\ub0b4-\uad6c\ub9e4-\uc644\ub8cc-\uc774\ubca4\ud2b8-\uc804\uc1a1"},"'\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc' \uc774\ubca4\ud2b8 \uc804\uc1a1"),(0,r.kt)("p",null,"'\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc' \uc774\ubca4\ud2b8\uc758 \uc804\uc1a1 \ubc29\uc2dd \ubc0f \uc815\ubcf4\ub294 '\uad6c\ub9e4 \uc644\ub8cc' \uc774\ubca4\ud2b8\uc640 \uc720\uc0ac\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"OS\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc0c1\ud488\uacfc \uad6c\ub9e4 \ub370\uc774\ud130\ub97c \uc774\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc804\uc1a1 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc758 \ucf54\ub4dc \uc608\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"NTrackerConversionItem"),"\uc5d0 \ub123\ub294 \ud56d\ubaa9\uc744 \ucc38\uace0\ud574 \uac01 \uc11c\ube44\uc2a4\uc758 \uc0c1\ud669\uc5d0 \ub9de\uac8c \ud65c\uc6a9\ud558\uc138\uc694."),(0,r.kt)("h4",{id:"ios-1"},"iOS"),(0,r.kt)("p",null,"\uc774 \ucf54\ub4dc \uc608\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"SKProduct"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"SKPaymentTransaction"),"\uc758 \uc815\ubcf4\ub85c '\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc' \uc774\ubca4\ud2b8\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"func sendIAP(product: SKProduct, transaction: SKPaymentTransaction) {\n    let quantity = transaction.payment.quantity\n    let payAmount = product.price.doubleValue\n    let itemId = product.productIdentifier\n    let itemName = product.localizedTitle\n    let currency = product.priceLocale.currencyCode\n\n    let ntrackerItem = NTrackerConversionItem(quantity: quantity, payAmount: payAmount, id: itemId, name: itemName, ext1: currency)\n    \n    NTrackerExt.trackInAppPurchaseEvent(items: [ntrackerItem])\n}\n")),(0,r.kt)("h4",{id:"android-1"},"Android"),(0,r.kt)("p",null,"\uc774 \ucf54\ub4dc \uc608\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"ProductDetails"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"Purchase"),"\uc758 \uc815\ubcf4\ub85c '\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc' \uc774\ubca4\ud2b8\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4. \uc0c1\ud488 \ubc0f \uad6c\ub9e4 \uc815\ubcf4\ub97c \uc81c\uacf5\ud558\ub294 \ud074\ub798\uc2a4\ub294 BillingClient\uc5d0 \ub530\ub77c \uc77c\ubd80 \ub2e4\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubb38\uc11c\uc5d0\uc11c\ub294 BillingClient 5\ub97c \uae30\uc900\uc73c\ub85c \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun sendIAB(purchase: Purchase, product: ProductDetails) {\n    val quantity = purchase.quantity\n    val itemId = product.productId\n    val itemName = product.name\n    val payAmount = product.oneTimePurchaseOfferDetails.priceAmountMicros / 1_000_000\n    val currency = product.oneTimePurchaseOfferDetails.priceCurrencyCode\n\n    val ntrackerItem = NTrackerConversionItem(quantity, payAmount.toDouble(), itemId, itemName, null, null, currency)\n    NTrackerExt.trackInAppPurchaseEvent(arrayOf(ntrackerItem))\n}\n")),(0,r.kt)("h3",{id:"\uc77c\ubc18-\uc774\ubca4\ud2b8-\uc804\uc1a1---items\ub97c-\ud3ec\ud568\ud558\uc9c0-\uc54a\ub294-\uacbd\uc6b0"},"\uc77c\ubc18 \uc774\ubca4\ud2b8 \uc804\uc1a1 - items\ub97c \ud3ec\ud568\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0"),(0,r.kt)("p",null,"'\uad6c\ub9e4 \uc644\ub8cc', '\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc' \uc774\ubca4\ud2b8 \uc678 \uc77c\ubc18 \uc774\ubca4\ud2b8\ub97c \uc804\uc1a1\ud560 \ub54c items\ub97c \ud3ec\ud568\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0, \ub2e4\uc74c\uacfc \uac19\uc774 event name\uacfc value\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"ios-2"},"iOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// '\uc18c\uc2dd \ubc1b\uae30/\uad6c\ub3c5' \uc804\ud658 \uc774\ubca4\ud2b8\uc758 \uc804\ud658 \uac00\uce58\ub97c 1,000\uc6d0\uc73c\ub85c \uc804\uc1a1\ud558\ub294 \uacbd\uc6b0\nNTrackerExt.trackConversionEvent(NTrackerConversionEvent.Subscribe, value: 1_000)\n")),(0,r.kt)("h4",{id:"android-2"},"Android"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// '\uc18c\uc2dd \ubc1b\uae30/\uad6c\ub3c5' \uc804\ud658 \uc774\ubca4\ud2b8\uc758 \uc804\ud658 \uac00\uce58\ub97c 1,000\uc6d0\uc73c\ub85c \uc804\uc1a1\ud558\ub294 \uacbd\uc6b0\nNTrackerExt.trackConversionEvent(NTrackerConversionEvent.Subscribe, 1_000)\n")),(0,r.kt)("h3",{id:"\uc77c\ubc18-\uc774\ubca4\ud2b8-\uc804\uc1a1---items\ub97c-\ud3ec\ud568\ud558\ub294-\uacbd\uc6b0"},"\uc77c\ubc18 \uc774\ubca4\ud2b8 \uc804\uc1a1 - items\ub97c \ud3ec\ud568\ud558\ub294 \uacbd\uc6b0"),(0,r.kt)("p",null,"\uc77c\ubc18 \uc774\ubca4\ud2b8\ub3c4 items\ub97c \ud3ec\ud568\ud574\uc11c \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, '\uc7a5\ubc14\uad6c\ub2c8 \ub2f4\uae30' \uc774\ubca4\ud2b8\ub294 \uc7a5\ubc14\uad6c\ub2c8\uc5d0 \ub2f4\uc740 \ud56d\ubaa9\uc758 \uc815\ubcf4\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub2e8, value \uc5c6\uc774 items \ud558\uc704 payAmount\ub9cc \uc804\uc1a1\ud560 \uacbd\uc6b0, \uc131\uacfc\ud615 DA\uc5d0\uc11c \uc804\ud658 \uac00\uce58\ub294 0\uc73c\ub85c \ubcf4\uace0\ub429\ub2c8\ub2e4. items \ud558\uc704\uc758 payAmount \ud569\uc0b0 \uc815\ubcf4\ub294 '\uad6c\ub9e4 \uc644\ub8cc', '\uc571 \ub0b4 \uad6c\ub9e4 \uc644\ub8cc' \uc774\ubca4\ud2b8\uc5d0\ub9cc \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"ios-3"},"iOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let items = [\n    NTrackerConversionItem(quantity: 1, payAmount: 100, id: "item1", ext1: "KRW"),\n    NTrackerConversionItem(quantity: 2, payAmount: 400, id: "item2", ext1: "KRW")\n]\n\n// \uc7a5\ubc14\uad6c\ub2c8\uc5d0 \ub2f4\uc740 items\ub97c \ud568\uaed8 \uc804\uc1a1\nNTrackerExt.trackConversionEvent(NTrackerConversionEvent.Cart, value: 900, items: items)\n')),(0,r.kt)("h4",{id:"android-3"},"Android"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val items = arrayOf(\n    NTrackerConversionItem(1, 100.0, "item1", null, null, "KRW"),\n    NTrackerConversionItem(2, 400.0, "item2", null, null, "KRW")\n)\n\n// \uc7a5\ubc14\uad6c\ub2c8\uc5d0 \ub2f4\uc740 items\ub97c \ud568\uaed8 \uc804\uc1a1\nNTrackerExt.trackConversionEvent(NTrackerConversionEvent.Cart, 900, items)\n')),(0,r.kt)("h3",{id:"\uc0ac\uc6a9\uc790-\uc815\uc758-\uc774\ubca4\ud2b8-\uc804\uc1a1"},"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc774\ubca4\ud2b8 \uc804\uc1a1"),(0,r.kt)("p",null,"\uc804\ud658 \uc774\ubca4\ud2b8\uac00 \uc0ac\uc804\uc5d0 \uc815\uc758\ub41c \ud56d\ubaa9\uc5d0 \uc5c6\uc73c\uba74 'custom' \uc774\ubca4\ud2b8\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. 'custom' \uc774\ubca4\ud2b8\ub294 1~10\uae4c\uc9c0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uace0, \uac01 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc784\uc758\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\ubc18 \uc774\ubca4\ud2b8\uc640 \ub3d9\uc77c\ud558\uac8c, event name\uacfc value\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"ios-4"},"iOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// 'Custom' \uc804\ud658 \uc774\ubca4\ud2b8\uc758 \uc804\ud658 \uac00\uce58\ub97c 1,000\uc6d0\uc73c\ub85c \uc804\uc1a1\ud558\ub294 \uacbd\uc6b0\nNTrackerExt.trackConversionEvent(NTrackerConversionEvent.CustomEvent001, value: 1_000)\n")),(0,r.kt)("h4",{id:"android-4"},"Android"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// 'Custom' \uc804\ud658 \uc774\ubca4\ud2b8\uc758 \uc804\ud658 \uac00\uce58\ub97c 1,000\uc6d0\uc73c\ub85c \uc804\uc1a1\ud558\ub294 \uacbd\uc6b0\nNTrackerExt.trackConversionEvent(NTrackerConversionEvent.CustomEvent001, 1_000)\n")))}p.isMDXComponent=!0}}]);