webpackJsonp([1,2],{206:function(t,e,r){var n=r(22)(r(211),r(215),null,null);t.exports=n.exports},209:function(t,e,r){var n=r(22)(r(223),null,null,null);t.exports=n.exports},211:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(96),o=r(213),i=r.n(o),s=n.default.database();e.default={components:{NuxtLogo:i.a},head:function(){return{title:this.$t("home.title")}},firebase:{links:s.ref("links")},data:function(){return{links:this.links}}}},212:function(t,e,r){e=t.exports=r(23)(void 0),e.push([t.i,".VueToNuxtLogo{display:inline-block;animation:turn 2s linear forwards 1s;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;animation:goright .5s linear forwards 3.5s}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;animation:godown .5s linear forwards 3s;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@keyframes turn{to{transform:rotateX(0deg)}}@keyframes godown{to{top:180px}}@keyframes goright{to{left:70px}}",""])},213:function(t,e,r){r(217);var n=r(22)(null,r(214),null,null);t.exports=n.exports},214:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"VueToNuxtLogo"},[r("div",{staticClass:"Triangle Triangle--two"}),r("div",{staticClass:"Triangle Triangle--one"}),r("div",{staticClass:"Triangle Triangle--three"}),r("div",{staticClass:"Triangle Triangle--four"})])}]}},215:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[r("h2",[t._v(t._s(t.$t("home.title")))]),r("p",[t._v(t._s(t.$t("home.introduction")))]),r("pre",[t._v(t._s(t.links))])])])},staticRenderFns:[]}},217:function(t,e,r){var n=r(212);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(24)("246b9c21",n,!0)},223:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(206),o=r.n(n);e.default=o.a}});