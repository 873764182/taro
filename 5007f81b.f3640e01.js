(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{1735:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},1736:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},1737:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),m=u(n),O=a,d=m["".concat(l,".").concat(O)]||m[O]||s[O]||c;return n?r.a.createElement(d,o(o({ref:t},i),{},{components:n})):r.a.createElement(d,o({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<c;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1738:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},1739:function(e,t,n){"use strict";var a=n(0),r=n(1740);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1740:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},1741:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1739),l=n(1738),o=n(50),b=n.n(o),i=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.children,s=e.defaultValue,m=e.values,O=e.groupId,d=e.className,j=Object(c.a)(),p=j.tabGroupChoices,f=j.setTabGroupChoices,v=Object(a.useState)(s),g=v[0],y=v[1];if(null!=O){var h=p[O];null!=h&&h!==g&&m.some((function(e){return e.value===h}))&&y(h)}var N=function(e){y(e),null!=O&&f(O,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(l.a)("tabs__item",b.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(o.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},o.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},1742:function(e,t,n){"use strict";var a=n(1735),r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},586:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(1735),r=n(1736),c=(n(0),n(1737)),l=n(1741),o=n(1742),b={title:"Form",sidebar_label:"Form"},i={unversionedId:"components/forms/form",id:"version-3.x/components/forms/form",isDocsHomePage:!1,title:"Form",description:"\u8868\u5355\u3002\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684 switch input checkbox slider radio picker \u63d0\u4ea4\u3002",source:"@site/versioned_docs/version-3.x/components/forms/form.md",slug:"/components/forms/form",permalink:"/taro/docs/components/forms/form",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/forms/form.md",version:"3.x",sidebar_label:"Form",sidebar:"version-3.x/components",previous:{title:"Editor",permalink:"/taro/docs/components/forms/editor"},next:{title:"Input",permalink:"/taro/docs/components/forms/input"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"FormProps",id:"formprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onSubmitEventDetail",id:"onsubmiteventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],s={rightToc:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"\u8868\u5355\u3002\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684 switch input checkbox slider radio picker \u63d0\u4ea4\u3002"),Object(c.a)("p",null,"\u5f53\u70b9\u51fb form \u8868\u5355\u4e2d form-type \u4e3a submit \u7684 button \u7ec4\u4ef6\u65f6\uff0c\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684 value \u503c\u8fdb\u884c\u63d0\u4ea4\uff0c\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a name \u6765\u4f5c\u4e3a key\u3002"),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/form.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<FormProps>\n")),Object(c.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.a)(l.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.a)(o.a,{value:"React",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n\n  formSubmit = e => {\n    console.log(e)\n  }\n\n  formReset = e => {\n    console.log(e)\n  }\n\n  render () {\n    return (\n      <Form onSubmit={this.formSubmit} onReset={this.formReset} >\n        <View className='example-body'>\n          <Switch name='switch' className='form-switch'></Switch>\n        </View>\n      </Form>\n    )\n  }\n}\n"))),Object(c.a)(o.a,{value:"Vue",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <form @submit="formSubmit" @reset="formReset" >\n      <view class="taro-example-body">\n        <switch name="switch" class="form-switch"></Switch>\n      </view>\n      <view class="taro-example-btns">\n        <button form-type="submit">Submit</button>\n        <button type="default" form-type="reset">Reset</button>\n    </view>\n  </form>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {}\n  },\n  methods: {\n    formSubmit (e) {\n      console.log(e)\n    },\n\n    formReset (e) {\n      console.log(e)\n    }\n  }\n}\n<\/script>\n\n')))),Object(c.a)("h2",{id:"formprops"},"FormProps"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"reportSubmit"),Object(c.a)("td",null,Object(c.a)("code",null,"boolean")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,"false")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u662f\u5426\u8fd4\u56de ",Object(c.a)("code",null,"formId")," \u7528\u4e8e\u53d1\u9001\u6a21\u677f\u6d88\u606f\u3002")),Object(c.a)("tr",null,Object(c.a)("td",null,"reportSubmitTimeout"),Object(c.a)("td",null,Object(c.a)("code",null,"number")),Object(c.a)("td",{style:{textAlign:"center"}},Object(c.a)("code",null,"0")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\uff08\u6beb\u79d2\u6570\uff09\u4ee5\u786e\u8ba4 ",Object(c.a)("code",null,"formId")," \u662f\u5426\u751f\u6548\u3002",Object(c.a)("br",null),"\u5982\u679c\u672a\u6307\u5b9a\u8fd9\u4e2a\u53c2\u6570\uff0c",Object(c.a)("code",null,"formId")," \u6709\u5f88\u5c0f\u7684\u6982\u7387\u662f\u65e0\u6548\u7684\uff08\u5982\u9047\u5230\u7f51\u7edc\u5931\u8d25\u7684\u60c5\u51b5\uff09\u3002",Object(c.a)("br",null),"\u6307\u5b9a\u8fd9\u4e2a\u53c2\u6570\u5c06\u53ef\u4ee5\u68c0\u6d4b ",Object(c.a)("code",null,"formId")," \u662f\u5426\u6709\u6548\uff0c",Object(c.a)("br",null),"\u4ee5\u8fd9\u4e2a\u53c2\u6570\u7684\u65f6\u95f4\u4f5c\u4e3a\u8fd9\u9879\u68c0\u6d4b\u7684\u8d85\u65f6\u65f6\u95f4\u3002",Object(c.a)("br",null),"\u5982\u679c\u5931\u8d25\uff0c\u5c06\u8fd4\u56de ",Object(c.a)("code",null,"requestFormId:fail")," \u5f00\u5934\u7684 ",Object(c.a)("code",null,"formId"),"\u3002")),Object(c.a)("tr",null,Object(c.a)("td",null,"onSubmit"),Object(c.a)("td",null,Object(c.a)("code",null,"BaseEventOrigFunction<onSubmitEventDetail>")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u643a\u5e26 form \u4e2d\u7684\u6570\u636e\u89e6\u53d1 submit \u4e8b\u4ef6",Object(c.a)("br",null),"event.detail = ","{ value : { name': 'value'}, formId: '' }")),Object(c.a)("tr",null,Object(c.a)("td",null,"onReset"),Object(c.a)("td",null,Object(c.a)("code",null,"BaseEventOrigFunction<any>")),Object(c.a)("td",{style:{textAlign:"center"}}),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u8868\u5355\u91cd\u7f6e\u65f6\u4f1a\u89e6\u53d1 reset \u4e8b\u4ef6")))),Object(c.a)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"FormProps.reportSubmit"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"FormProps.reportSubmitTimeout"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"FormProps.onSubmit"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"FormProps.onReset"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(c.a)("h3",{id:"onsubmiteventdetail"},"onSubmitEventDetail"),Object(c.a)("table",null,Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"\u53c2\u6570"),Object(c.a)("th",null,"\u7c7b\u578b"),Object(c.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.a)("th",null,"\u8bf4\u660e"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"value"),Object(c.a)("td",null,Object(c.a)("code",null,"{ [formItemName: string]: any; }")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u5f53\u70b9\u51fb ",Object(c.a)("code",null,"<form>")," \u8868\u5355\u4e2d ",Object(c.a)("code",null,"form-type")," \u4e3a ",Object(c.a)("code",null,"submit")," \u7684 ",Object(c.a)("code",null,"<button>")," \u7ec4\u4ef6\u65f6\uff0c",Object(c.a)("br",null),"\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684 ",Object(c.a)("code",null,"value")," \u503c\u8fdb\u884c\u63d0\u4ea4\uff0c",Object(c.a)("br",null),"\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a ",Object(c.a)("code",null,"name")," \u6765\u4f5c\u4e3a ",Object(c.a)("code",null,"key"),"\u3002")),Object(c.a)("tr",null,Object(c.a)("td",null,"formId"),Object(c.a)("td",null,Object(c.a)("code",null,"string")),Object(c.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.a)("td",null,"\u5f53 ",Object(c.a)("code",null,"reportSubmit")," \u4e3a ",Object(c.a)("code",null,"true")," \u65f6\uff0c\u8fd4\u56de ",Object(c.a)("code",null,"formId")," \u7528\u4e8e\u53d1\u9001\u6a21\u677f\u6d88\u606f\u3002")))),Object(c.a)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.a)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Form"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.a)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);