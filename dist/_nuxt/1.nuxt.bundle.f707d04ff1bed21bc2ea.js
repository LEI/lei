webpackJsonp([1],{146:function(e,t,o){o(165);var n=o(16)(o(158),o(163),null,null);e.exports=n.exports},157:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o(0);t.default={name:"le-header",props:{title:{type:String,required:!0}}}},158:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(162),i=o.n(n);t.default={components:{LeHeader:i.a},data:function(){return{title:this.$t("home.title"),links:[{url:"/",text:"Back to home"}]}},methods:{path:function(e){return"en"===this.$i18n.locale?e:"/"+this.$i18n.locale+e}}}},161:function(e,t,o){t=e.exports=o(24)(void 0),t.push([e.i,".complete-example{height:540px;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;position:relative;overflow:hidden;z-index:1;.md-fab{margin:0;position:absolute;bottom:-20px;left:16px}.md-title{color:#fff}.md-list{overflow:auto}.md-list-action .md-icon{color:rgba(#000,.26)}.md-avatar-icon .md-icon{color:#fff!important}.md-sidenav .md-list-text-container>:nth-child(2){color:rgba(#fff,.54)}.md-account-header{.md-list-item:hover .md-button:hover{background-color:inherit}.md-avatar-list .md-list-item-container:hover{background:none!important}}}",""])},162:function(e,t,o){var n=o(16)(o(157),o(164),null,null);e.exports=n.exports},163:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"phone-viewport complete-example"},[o("le-header",{attrs:{title:e.title,links:e.links}}),o("nuxt")],1)},staticRenderFns:[]}},164:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v(e._s(e.title))])])},staticRenderFns:[]}},165:function(e,t,o){var n=o(161);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(25)("43af5594",n,!0)}});