(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sort-lists"],{"1a65":function(t,i,s){"use strict";s.r(i);var e=s("da7d"),a=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(i,t,(function(){return e[t]}))}(n);i["default"]=a.a},"4afd":function(t,i,s){"use strict";s.r(i);var e=s("9146"),a=s("1a65");for(var n in a)"default"!==n&&function(t){s.d(i,t,(function(){return a[t]}))}(n);var o,u=s("f0c5"),c=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"666f348b",null,!1,e["a"],o);i["default"]=c.exports},9146:function(t,i,s){"use strict";var e,a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",[s("custom",{attrs:{transparent:!0,isBack:!0}},[s("template",{attrs:{slot:"right"},slot:"right"},[s("v-uni-navigator",{staticClass:"action roundIcon",attrs:{url:"/pages/index/index","open-type":"switchTab","hover-class":"none"}},[s("v-uni-view",{staticClass:"cuIcon-home"})],1)],1)],2),t.ad&&t.goods?s("v-uni-view",{},[s("v-uni-image",{staticStyle:{width:"100%"},attrs:{mode:"widthFix",src:t.ad}})],1):t._e(),t.goods?s("v-uni-view",{staticClass:"cu-card goods col-goods col-twice"},t._l(t.goods,(function(i,e){return s("v-uni-view",{key:e,staticClass:"cu-item shadow bg-white",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.toGoodsDetail(i.id)}}},[s("v-uni-image",{attrs:{src:i.thumb,mode:"aspectFill"}}),s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{},[s("v-uni-view",{staticClass:"text-cut"},[t._v(t._s(i.title))])],1),s("v-uni-view",{staticClass:"flex align-center margin-top-xs"},[i.burst?s("v-uni-view",{staticClass:"cu-tag sm line-orange"},[t._v("爆品")]):t._e(),i.yj_money?s("v-uni-view",{staticClass:"cu-tag sm line-orange"},[t._v("返现")]):t._e(),i.p_1?s("v-uni-view",{staticClass:"cu-tag sm line-orange"},[t._v("佣金")]):t._e()],1),s("v-uni-view",{staticClass:"flex justify-between align-center margin-top-xs"},[s("v-uni-view",{staticClass:"flex align-center"},[s("v-uni-view",{staticClass:"margin-right-sm"},[s("v-uni-text",{staticClass:"text-price text-red text-bold text-lg"},[t._v(t._s(i.price))])],1)],1),s("v-uni-view",{staticClass:"padding-left-xs text-right text-gray text-sm"},[t._v("售"+t._s(i.sales)+"件")])],1)],1)],1)})),1):s("v-uni-view",[s("abnor")],1)],1)},n=[];s.d(i,"b",(function(){return a})),s.d(i,"c",(function(){return n})),s.d(i,"a",(function(){return e}))},da7d:function(t,i,s){"use strict";s("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{goods:"",id:0,ad:"",pages:1}},onLoad:function(t){this.id=t.id?t.id:-1,this.getItems()},methods:{getItems:function(){var t=this;this.fq_get("fanqie/group/lists",{id:this.id,pages:this.pages},(function(i){t.goods=i.data,t.ad=i.mark}))},get_Goods:function(){var t=this;this.fq_get("fanqie/group/lists",{id:this.id,pages:this.pages},(function(i){i.data?t.goods=t.goods.concat(i.data):t.pages=0}))},toGoodsDetail:function(t){uni.navigateTo({url:"/pages/goods/detail?id="+t})},onReachBottom:function(){this.goods&&this.pages&&(this.pages+=1,this.get_Goods())}}};i.default=e}}]);