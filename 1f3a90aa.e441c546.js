(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{1735:function(e,t,l){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}l.d(t,"a",(function(){return a}))},1736:function(e,t,l){"use strict";function a(e,t){if(null==e)return{};var l,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)l=c[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}l.d(t,"a",(function(){return a}))},1737:function(e,t,l){"use strict";l.d(t,"a",(function(){return j}));var a=l(0),n=l.n(a);function c(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function u(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){c(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)l=c[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)l=c[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var b=n.a.createContext({}),o=function(e){var t=n.a.useContext(b),l=t;return e&&(l="function"==typeof e?e(t):u(u({},t),e)),l},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var l=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=o(l),j=a,d=s["".concat(r,".").concat(j)]||s[j]||O[j]||c;return l?n.a.createElement(d,u(u({ref:t},b),{},{components:l})):n.a.createElement(d,u({ref:t},b))}));function j(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=l.length,r=new Array(c);r[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,r[1]=u;for(var b=2;b<c;b++)r[b]=l[b];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,l)}s.displayName="MDXCreateElement"},279:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return r})),l.d(t,"metadata",(function(){return u})),l.d(t,"rightToc",(function(){return i})),l.d(t,"default",(function(){return o}));var a=l(1735),n=l(1736),c=(l(0),l(1737)),r={title:"Taro.chooseMessageFile(option)",sidebar_label:"chooseMessageFile"},u={unversionedId:"apis/media/image/chooseMessageFile",id:"version-2.x/apis/media/image/chooseMessageFile",isDocsHomePage:!1,title:"Taro.chooseMessageFile(option)",description:"\u4ece\u5ba2\u6237\u7aef\u4f1a\u8bdd\u9009\u62e9\u6587\u4ef6\u3002",source:"@site/versioned_docs/version-2.x/apis/media/image/chooseMessageFile.md",slug:"/apis/media/image/chooseMessageFile",permalink:"/taro/docs/2.x/apis/media/image/chooseMessageFile",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/media/image/chooseMessageFile.md",version:"2.x",sidebar_label:"chooseMessageFile",sidebar:"version-2.x/API",previous:{title:"Taro.compressImage(option)",permalink:"/taro/docs/2.x/apis/media/image/compressImage"},next:{title:"Taro.chooseImage(option)",permalink:"/taro/docs/2.x/apis/media/image/chooseImage"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"ChooseFile",id:"choosefile",children:[]},{value:"selectType",id:"selecttype",children:[]},{value:"selectedType",id:"selectedtype",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:i};function o(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"\u4ece\u5ba2\u6237\u7aef\u4f1a\u8bdd\u9009\u62e9\u6587\u4ef6\u3002"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(c.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.a)("h3",{id:"option"},"Option"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"count"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.a)("td",null,"\u6700\u591a\u53ef\u4ee5\u9009\u62e9\u7684\u6587\u4ef6\u4e2a\u6570\uff0c\u53ef\u4ee5 0\uff5e100")),Object(c.a)("tr",null,Object(c.a)("td",null,"complete"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: CallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.a)("tr",null,Object(c.a)("td",null,"extension"),Object(c.a)("td",null,Object(c.a)("code",null,"string[]")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u6839\u636e\u6587\u4ef6\u62d3\u5c55\u540d\u8fc7\u6ee4\uff0c\u4ec5 type==file \u65f6\u6709\u6548\u3002\u6bcf\u4e00\u9879\u90fd\u4e0d\u80fd\u662f\u7a7a\u5b57\u7b26\u4e32\u3002\u9ed8\u8ba4\u4e0d\u8fc7\u6ee4\u3002")),Object(c.a)("tr",null,Object(c.a)("td",null,"fail"),Object(c.a)("td",null,Object(c.a)("code",null,"(res: CallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.a)("tr",null,Object(c.a)("td",null,"success"),Object(c.a)("td",null,Object(c.a)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.a)("tr",null,Object(c.a)("td",null,"type"),Object(c.a)("td",null,Object(c.a)("code",null,'"all" | "video" | "image" | "file"')),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u6240\u9009\u7684\u6587\u4ef6\u7684\u7c7b\u578b")))),Object(c.a)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"tempFiles"),Object(c.a)("td",null,Object(c.a)("code",null,"ChooseFile[]")),Object(c.a)("td",null,"\u8fd4\u56de\u9009\u62e9\u7684\u6587\u4ef6\u7684\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5bf9\u8c61\u6570\u7ec4")),Object(c.a)("tr",null,Object(c.a)("td",null,"errMsg"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.a)("h3",{id:"choosefile"},"ChooseFile"),Object(c.a)("p",null,"\u8fd4\u56de\u9009\u62e9\u7684\u6587\u4ef6\u7684\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5bf9\u8c61\u6570\u7ec4"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"name"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u9009\u62e9\u7684\u6587\u4ef6\u540d\u79f0")),Object(c.a)("tr",null,Object(c.a)("td",null,"path"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u8def\u5f84")),Object(c.a)("tr",null,Object(c.a)("td",null,"size"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d B")),Object(c.a)("tr",null,Object(c.a)("td",null,"time"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",null,"\u9009\u62e9\u7684\u6587\u4ef6\u7684\u4f1a\u8bdd\u53d1\u9001\u65f6\u95f4\uff0cUnix\u65f6\u95f4\u6233\uff0c\u5de5\u5177\u6682\u4e0d\u652f\u6301\u6b64\u5c5e\u6027")),Object(c.a)("tr",null,Object(c.a)("td",null,"type"),Object(c.a)("td",null,Object(c.a)("code",null,'"video" | "image" | "file"')),Object(c.a)("td",null,"\u9009\u62e9\u7684\u6587\u4ef6\u7c7b\u578b")))),Object(c.a)("h3",{id:"selecttype"},"selectType"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"all"),Object(c.a)("td",null,"\u4ece\u6240\u6709\u6587\u4ef6\u9009\u62e9")),Object(c.a)("tr",null,Object(c.a)("td",null,"video"),Object(c.a)("td",null,"\u53ea\u80fd\u9009\u62e9\u89c6\u9891\u6587\u4ef6")),Object(c.a)("tr",null,Object(c.a)("td",null,"image"),Object(c.a)("td",null,"\u53ea\u80fd\u9009\u62e9\u56fe\u7247\u6587\u4ef6")),Object(c.a)("tr",null,Object(c.a)("td",null,"file"),Object(c.a)("td",null,"\u53ef\u4ee5\u9009\u62e9\u9664\u4e86\u56fe\u7247\u548c\u89c6\u9891\u4e4b\u5916\u7684\u5176\u5b83\u7684\u6587\u4ef6")))),Object(c.a)("h3",{id:"selectedtype"},"selectedType"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"video"),Object(c.a)("td",null,"\u9009\u62e9\u4e86\u89c6\u9891\u6587\u4ef6")),Object(c.a)("tr",null,Object(c.a)("td",null,"image"),Object(c.a)("td",null,"\u9009\u62e9\u4e86\u56fe\u7247\u6587\u4ef6")),Object(c.a)("tr",null,Object(c.a)("td",null,"file"),Object(c.a)("td",null,"\u9009\u62e9\u4e86\u9664\u56fe\u7247\u548c\u89c6\u9891\u7684\u6587\u4ef6")))),Object(c.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseMessageFile({\n  count: 10,\n  type: 'image',\n  success: function (res) {\n    // tempFilePath\u53ef\u4ee5\u4f5c\u4e3aimg\u6807\u7b7e\u7684src\u5c5e\u6027\u663e\u793a\u56fe\u7247\n    const tempFilePaths = res.tempFilePaths\n  }\n})\n")),Object(c.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.chooseMessageFile"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}o.isMDXComponent=!0}}]);