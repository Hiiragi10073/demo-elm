(function(t){function e(e){for(var n,r,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0789":function(t,e,a){},1e3:function(t,e,a){},1110:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("4de4"),a("2994");var n=a("2bdd"),i=(a("4142"),a("39d1")),s=(a("0ec5"),a("21ab")),r=(a("3df5"),a("2830")),o=(a("4b0a"),a("2bb1")),c=(a("7844"),a("5596")),u=(a("c3a6"),a("ad06")),l=(a("a52c"),a("2ed4")),d=(a("537a"),a("ac28")),p=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},v=[],m=a("2877"),h={},g=Object(m["a"])(h,f,v,!1,null,null,null),_=g.exports,b=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Main"},[a("div",{staticClass:"header"},[a("router-link",{attrs:{to:"/search"}},[a("i",{staticClass:"iconfont icon-search"})]),a("router-link",{attrs:{to:"/address"}},[a("div",{staticClass:"address"},[t._v("虹口区中国建设银行...")])]),a("div",{staticClass:"sign"},[a("router-link",{staticClass:"link",attrs:{to:"/login"}},[t._v("登录")]),a("span",{staticClass:"link"},[t._v("|")]),a("router-link",{staticClass:"link",attrs:{to:"/register"}},[t._v("注册")])],1)],1),a("div",{staticClass:"categorys"},[a("van-swipe",{attrs:{duration:"300"},on:{change:t.swipeChange},scopedSlots:t._u([{key:"indicator",fn:function(){return[a("div",{staticClass:"custom-indicator"},[a("div",{staticClass:"indicator",class:{active:0===t.swipeIndex}}),a("div",{staticClass:"indicator",class:{active:1===t.swipeIndex}})])]},proxy:!0}])},[a("van-swipe-item",[a("van-grid",t._l(t.categorys.list1,(function(e){return a("van-grid-item",{key:e.id,on:{click:function(a){return t.toCategoryDetail(e.id)}}},[a("img",{staticClass:"category-img",attrs:{src:t._f("addBaseURL")(e.image_url)}}),a("span",[t._v(t._s(e.title))])])})),1)],1),a("van-swipe-item",[a("van-grid",t._l(t.categorys.list2,(function(e){return a("van-grid-item",{key:e.id,on:{click:function(a){return t.toCategoryDetail(e.id)}}},[a("img",{staticClass:"category-img",attrs:{src:t._f("addBaseURL")(e.image_url)}}),a("span",[t._v(t._s(e.title))])])})),1)],1)],1)],1),a("div",{staticClass:"shop-list"},[t._m(0),a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",offset:"500"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.shopList,(function(t){return a("elm-shop-item",{key:t.id,attrs:{data:t}})})),1)],1),a("div",{staticClass:"tabber"},[a("elm-tabbar")],1)])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("i",{staticClass:"iconfont icon-shangdian"}),a("span",[t._v("附近商家")])])}],w=a("2909"),k=(a("96cf"),a("1da1")),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-tabbar",{staticClass:"elm-tabbar",attrs:{"active-color":"#000"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tabbar-item",{attrs:{to:"/main"},scopedSlots:t._u([{key:"icon",fn:function(e){return[a("van-icon",{staticClass:"iconfont icon-logo",class:e.active?t.icon.active:""})]}}])},[a("span",[t._v("外卖")])]),a("van-tabbar-item",{attrs:{to:"/search"},scopedSlots:t._u([{key:"icon",fn:function(e){return[a("van-icon",{staticClass:"iconfont icon-search",class:e.active?t.icon.active:""})]}}])},[a("span",[t._v("搜索")])]),a("van-tabbar-item",{attrs:{to:"/orders"},scopedSlots:t._u([{key:"icon",fn:function(e){return[a("van-icon",{staticClass:"iconfont icon-order",class:e.active?t.icon.active:""})]}}])},[a("span",[t._v("订单")])]),a("van-tabbar-item",{attrs:{to:"/profile"},scopedSlots:t._u([{key:"icon",fn:function(e){return[a("van-icon",{staticClass:"iconfont icon-user",class:e.active?t.icon.active:""})]}}])},[a("span",[t._v("我的")])])],1)},j=[],O={data:function(){return{active:0,icon:{active:"active"}}}},S=O,L=(a("b81f"),Object(m["a"])(S,x,j,!1,null,"bb8de822",null)),P=L.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"elm-shop-item",on:{click:function(e){return t.toShopDetail(t.data.id)}}},[a("img",{attrs:{src:"http://localhost:8000/img/"+t.data.image_path,alt:""}}),a("div",{staticClass:"info"},[a("div",{staticClass:"top"},[a("div",{staticClass:"title"},[t.data.is_premium?a("span",{staticClass:"premium"},[t._v("品牌")]):t._e(),a("span",{staticClass:"name"},[t._v(t._s(t.data.name))])]),a("div",{staticClass:"supports"},t._l(t.data.supports,(function(e){return a("div",{key:e.id,staticClass:"supports-icon"},[t._v(t._s(e.icon_name))])})),0)]),a("div",{staticClass:"middle"},[a("div",{staticClass:"rate"},[a("van-rate",{staticClass:"rate",attrs:{size:12,color:"#ff9a0d","void-icon":"star","void-color":"#eee",readonly:""},model:{value:t.data.rating,callback:function(e){t.$set(t.data,"rating",e)},expression:"data.rating"}}),a("span",{staticClass:"rate-text"},[t._v(t._s(t.data.rating)+" ")]),a("span",[t._v("月售"+t._s(t.data.recent_order_num)+"单")])],1),a("div",{staticClass:"delivery_mode"},[t.data.delivery_mode?a("div",{staticClass:"mode",style:{backgroundColor:"#"+t.data.delivery_mode.color}},[t._v(t._s(t.data.delivery_mode.text))]):t._e()])]),a("div",{staticClass:"bottom"},[a("div",{staticClass:"piece"},[a("span",[t._v("￥20起送 / "+t._s(t.data.piecewise_agent_fee.tips))])]),a("div",[a("span",[t._v(t._s(t.data.distance))]),t._v(" / "),a("span",{staticClass:"time"},[t._v(t._s(t.data.order_lead_time))])])])])])},$=[],D={props:["data"],methods:{toShopDetail:function(t){this.$router.push("/shopDetail/".concat(t))}}},E=D,T=(a("9ae8"),a("a7a8"),Object(m["a"])(E,R,$,!1,null,"ecefdfb6",null)),I=T.exports,M=(a("d3b7"),a("bc3a")),B=a.n(M);function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise((function(n,i){var s;s="GET"===a?B.a.get(t,{params:e}):B.a.post(t,e),s.then((function(t){n(t.data)})).catch((function(t){i(t)}))}))}B.a.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),B.a.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));var G="https://elm.cangdu.org",J=function(t){return U("".concat(G,"/shopping/restaurants"),t)},q=function(){return U("".concat(G,"/v2/index_entry"))},z={data:function(){return{categorys:{list1:[],list2:[]},swipeIndex:0,shopList:[],loading:!1,finished:!1,config:{latitude:"100",longitude:"200",offset:0,limit:20}}},components:{elmTabbar:P,elmShopItem:I},methods:{getCategorys:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:if(a=e.sent,!a){e.next=8;break}t.categorys.list1=a.filter((function(t,e){return e<8})),t.categorys.list2=a.filter((function(t,e){return e>=8})),e.next=9;break;case 8:return e.abrupt("return");case 9:case"end":return e.stop()}}),e)})))()},getShopList:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,J(t.config);case 2:a=e.sent,a&&((n=t.shopList).push.apply(n,Object(w["a"])(a)),t.shopList.length%t.config.limit!==0&&(t.finished=!0));case 4:case"end":return e.stop()}}),e)})))()},onLoad:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.config.offset+=t.config.limit,e.next=3,t.getShopList(t.config);case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},swipeChange:function(t){this.swipeIndex=t},toCategoryDetail:function(t){console.log(t)}},created:function(){this.getCategorys(),this.getShopList()}},A=z,F=(a("631e"),a("7489"),Object(m["a"])(A,y,C,!1,null,"5bc78128",null)),H=F.exports;p["a"].use(b["a"]);var K=new b["a"]({routes:[{path:"/",redirect:"/main"},{path:"/main",component:H},{path:"/search",component:H},{path:"/orders",component:H},{path:"/profile",component:H},{path:"/address",component:H},{path:"/login",component:H},{path:"/register",component:H},{path:"/shopDetail/:id",component:H}]}),N=K,Q=a("2f62");p["a"].use(Q["a"]);var V={username:"",password:""},W=new Q["a"].Store({state:V}),X=W;a("adcf"),a("499a"),a("b6b1");p["a"].use(d["a"]),p["a"].use(l["a"]),p["a"].use(u["a"]),p["a"].use(c["a"]),p["a"].use(o["a"]),p["a"].use(r["a"]),p["a"].use(s["a"]),p["a"].use(i["a"]),p["a"].use(n["a"]),p["a"].filter("addBaseURL",(function(t){return"https://fuss10.elemecdn.com/"+t})),p["a"].config.productionTip=!1,new p["a"]({router:N,store:X,render:function(t){return t(_)}}).$mount("#app")},"631e":function(t,e,a){"use strict";var n=a("ede4"),i=a.n(n);i.a},7489:function(t,e,a){"use strict";var n=a("b621"),i=a.n(n);i.a},"9ae8":function(t,e,a){"use strict";var n=a("0789"),i=a.n(n);i.a},a7a8:function(t,e,a){"use strict";var n=a("1110"),i=a.n(n);i.a},adcf:function(t,e,a){},b621:function(t,e,a){},b6b1:function(t,e,a){},b81f:function(t,e,a){"use strict";var n=a("1000"),i=a.n(n);i.a},ede4:function(t,e,a){}});
//# sourceMappingURL=app.38ef50c4.js.map