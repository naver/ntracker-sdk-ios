"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[925],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2073:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="SDK \uc124\uce58",l={unversionedId:"how_to_use_sdk/install",id:"how_to_use_sdk/install",title:"SDK \uc124\uce58",description:"\ud50c\ub7ab\ud3fc\ubcc4\ub85c \ub124\uc774\ubc84 \uc571 \uc804\ud658 \ucd94\uc801 SDK\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",source:"@site/docs/how_to_use_sdk/install.md",sourceDirName:"how_to_use_sdk",slug:"/how_to_use_sdk/install",permalink:"/ntracker-sdk-ios/how_to_use_sdk/install",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\ub124\uc774\ubc84 \uacf5\ud1b5\ud0a4 \ubc1c\uae09",permalink:"/ntracker-sdk-ios/how_to_use_sdk/get_site_id"},next:{title:"SDK \uc124\uc815 \ubc0f \ucd08\uae30\ud654",permalink:"/ntracker-sdk-ios/how_to_use_sdk/configure_and_initialize"}},p={},s=[{value:"iOS",id:"ios",level:2},{value:"Android",id:"android",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdk-\uc124\uce58"},"SDK \uc124\uce58"),(0,o.kt)("p",null,"\ud50c\ub7ab\ud3fc\ubcc4\ub85c \ub124\uc774\ubc84 \uc571 \uc804\ud658 \ucd94\uc801 SDK\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("p",null,"\ub124\uc774\ubc84 \uc571 \uc804\ud658 \ucd94\uc801 SDK\ub294 \ub2e4\uc74c\uc758 \ud504\ub808\uc784\uc6cc\ud06c\uc5d0 \uc758\uc874\uc131\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CoreTelephony.framework"),(0,o.kt)("li",{parentName:"ul"},"SystemConfiguration.framework")),(0,o.kt)("p",null,"\ub124\uc774\ubc84 \uc571 \uc804\ud658 \ucd94\uc801 SDK\ub294 CocoaPods\ub97c \uc774\uc6a9\ud574 \uc124\uce58\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pod 'NTrackerSDKExt'\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\ucc38\uace0")),(0,o.kt)("p",{parentName:"blockquote"},"Apple\uc740 iOS 14.5\ubd80\ud130 \uc571 \ucd94\uc801 \ud22c\uba85\uc131(ATT, App Tracking Transparency) \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc774\uc6a9\ud574 IDFA(Identifier for Advertisers)\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \uad8c\ud55c\uc744 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubc1b\ub3c4\ub85d \uc694\uad6c\ud569\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 Apple\uc758 User Privacy and Data Use \ubb38\uc11c\ub97c \ucc38\uace0\ud558\uc138\uc694."),(0,o.kt)("p",{parentName:"blockquote"},"\ub124\uc774\ubc84 \uc571 \uc804\ud658 \ucd94\uc801 SDK\ub294 iOS\uc758 \uc571 \ucd94\uc801 \ud22c\uba85\uc131 \uc815\ucc45\uc744 \uc900\uc218\ud569\ub2c8\ub2e4. SDK\uac00 \uc124\uce58\ub41c \uc571\uc758 trackingAuthorizationStatus(app-tracking permission status)\ub97c \uc2b9\uacc4\ud558\uba70, iOS\uc758 \uc0ac\uc6a9\uc790\uac00 \uc571 \uc804\ud658 \ucd94\uc801\uc744 \ud5c8\uc6a9\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uad11\uace0 \uc2dd\ubcc4\uc790(IDFA)\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4.")),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("p",null,"\ub124\uc774\ubc84 \uc571 \uc804\ud658 \ucd94\uc801 SDK\ub294 \ub2e4\uc74c\uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \uc758\uc874\uc131\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. Gradle dependency \uc124\uc815\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dependencies {\n  implementation 'com.google.android.gms:play-services-appset:16.0.2'\n  implementation 'com.android.installreferrer:installreferrer:2.2'\n}\n")),(0,o.kt)("p",null,"\ub124\uc774\ubc84 \uc571 \uc804\ud658 \ucd94\uc801 SDK\ub294 \ub2e4\uc74c\uc758 \uad8c\ud55c\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. AndroidManifest.xml \ud30c\uc77c\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<uses-permission android:name="android.permission.INTERNET" />\n<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n')),(0,o.kt)("p",null,"\ub124\uc774\ubc84 \uc571 \uc804\ud658 \ucd94\uc801 SDK\ub294 Maven central repository\ub97c \uc774\uc6a9\ud574 \ubc30\ud3ec\ud569\ub2c8\ub2e4. Gradle \uc124\uc815\uc5d0 'mavenCentral' repository\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"allprojects {\n  repositories {\n    mavenCentral()\n  }\n}\n")),(0,o.kt)("p",null,"\ub124\uc774\ubc84 \uc571 \uc804\ud658 \ucd94\uc801 SDK\ub97c Gradle dependency \uc124\uc815\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dependencies {\n  implementation 'com.navercorp.ntracker:NTrackerSDKExt:\ubc84\uc804\uba85'\n}\n")))}d.isMDXComponent=!0}}]);