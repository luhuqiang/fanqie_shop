(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-about"],{"497b":function(t,n,e){var a=e("d7bb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("295d4f06",a,!0,{sourceMap:!1,shadowMode:!1})},"713e":function(t,n,e){"use strict";e.r(n);var a=e("ab69"),o=e("d15e");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("feba");var r,c=e("f0c5"),i=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"29a58a00",null,!1,a["a"],r);n["default"]=i.exports},"919d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{content:""}},onLoad:function(){this.get_item()},methods:{get_item:function(){var t=this;this.fq_get("fanqie/user/about","",(function(n){t.content=n.data.content}))}}};n.default=a},ab69:function(t,n,e){"use strict";var a,o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("custom",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("关于我们")])],2),t.content?e("v-uni-view",{staticClass:"padding-sm"},[e("v-uni-rich-text",{attrs:{nodes:t.content}})],1):t._e()],1)},u=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}))},d15e:function(t,n,e){"use strict";e.r(n);var a=e("919d"),o=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=o.a},d7bb:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"uni-page-body[data-v-29a58a00]{background-color:#fff}body.?%PAGE?%[data-v-29a58a00]{background-color:#fff}",""]),t.exports=n},feba:function(t,n,e){"use strict";var a=e("497b"),o=e.n(a);o.a}}]);