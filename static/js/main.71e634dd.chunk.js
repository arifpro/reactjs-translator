(this["webpackJsonpreactjs-translator"]=this["webpackJsonpreactjs-translator"]||[]).push([[0],{44:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n(1),r=n(17),c=n.n(r),s=n(4),u=n(55),i=Object(u.a)((function(){return{container:{margin:"10px 20px"},input:{margin:"8px 0"},label:{fontWeight:700},title:{marginTop:"10px"}}})),o=function(e){var a=e.label,n=e.value,l=e.onChange,r=i();return Object(t.jsxs)("div",{children:[Object(t.jsx)("label",{className:r.label,children:a}),Object(t.jsx)("input",{className:"input",value:n,onChange:function(e){return l(e.target.value)}})]})},b=[{label:"Afrikaans",value:"af"},{label:"Arabic",value:"ar"},{label:"Bengali",value:"bn"},{label:"French",value:"fr"},{label:"Hindi",value:"hi"},{label:"Japanese",value:"ja"},{label:"Portuguese",value:"pt"},{label:"Russian",value:"ru"},{label:"Simplified Chinese",value:"zh-CN"},{label:"Spanish",value:"es"},{label:"Swahili",value:"sw"},{label:"Thai",value:"th"}],j=function(e){var a=e.language,n=e.onLanguageChange;void 0===a&&(a="bn");var r=b.find((function(e){return e.value===a}));if(!r)throw new Error("Unknown language code '".concat(a,"'"));var c=Object(l.useState)(!1),u=Object(s.a)(c,2),i=u[0],o=u[1];return Object(t.jsxs)("div",{children:[Object(t.jsx)("label",{className:"label",children:"Select Language"}),Object(t.jsxs)("div",{className:"dropdown ".concat(i&&"is-active"),children:[Object(t.jsx)("div",{className:"dropdown-trigger",children:Object(t.jsx)("button",{className:"button",onClick:function(){return o(!i)},children:Object(t.jsxs)("span",{children:[r.label," ","\u2193"]})})}),Object(t.jsx)("div",{className:"dropdown-menu",children:Object(t.jsx)("div",{className:"dropdown-content",children:b.map((function(e){var a=e.label,l=e.value;return Object(t.jsx)("a",{href:"#",onClick:function(){return function(e){o(!1),n(e)}(l)},className:"dropdown-item",children:a})}))})})]})]})},d=n(6),v=n.n(d),h=n(18),g=n(7),p=n.n(g),O=function(){var e=Object(h.a)(v.a.mark((function e(a,n,t){var l,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA",{q:a,target:n},{cancelToken:t.token});case 3:return l=e.sent,r=l.data,e.abrupt("return",r.data.translations[0].translatedText);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return","");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a,n,t){return e.apply(this,arguments)}}(),f=function(e){var a=e.text,n=e.language,r=Object(l.useState)(""),c=Object(s.a)(r,2),u=c[0],i=c[1];return Object(l.useEffect)((function(){if(a){var e=p.a.CancelToken.source();return O(a,n,e).then(i),function(){try{e.cancel()}catch(a){}}}}),[a,n]),console.log(u),Object(t.jsxs)("div",{children:[Object(t.jsx)("label",{className:"label",children:"Output"}),Object(t.jsx)("h1",{className:"title",children:u})]})};var x=function(){var e=Object(l.useState)(""),a=Object(s.a)(e,2),n=a[0],r=a[1],c=Object(l.useState)("bn"),u=Object(s.a)(c,2),i=u[0],b=u[1];return Object(t.jsxs)("div",{children:[Object(t.jsx)(o,{label:"Enter English",onChange:r,value:n}),Object(t.jsx)(j,{language:i,onLanguageChange:b}),Object(t.jsx)(f,{text:n,language:i})]})};c.a.render(Object(t.jsx)(x,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.71e634dd.chunk.js.map