webpackJsonp([1],{146:function(t,e,i){i(165);var n=i(16)(i(158),i(163),null,null);t.exports=n.exports},157:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i(1);e.default={name:"le-header",props:{title:{type:String,required:!0}}}},158:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(162),r=i.n(n);e.default={components:{LeHeader:r.a},data:function(){var t=[{icon:"home",text:this.$t("links.home"),href:this.path("/"),nuxt:!0},{icon:"account_box",text:this.$t("links.about"),href:this.path("/about"),nuxt:!0}],e=[{text:this.$t("links.english"),href:this.$route.fullPath.replace(/^\/[^\/]+/,""),nuxt:!0},{text:this.$t("links.french"),href:"/fr"+this.$route.fullPath,nuxt:!0}],i=[{text:"Twitter",href:"https://twitter.com/LEI",sub:"twitter.com/LEI"},{text:"GitHub",href:"https://github.com/LEI",sub:"github.com/LEI"},{text:"Keybase",href:"https://keybase.io/LEI",sub:"keybase.io/LEI"}];return{nav:t,lang_list:e,theme:{primary:"green"},title:this.$t("home.title"),sidebar:{visible:!1,menu:t.concat([{divider:!0},{header:"Social"}],i)}}},methods:{path:function(t){return"en"===this.$i18n.locale?t:"/"+this.$i18n.locale+t}}}},161:function(t,e,i){e=t.exports=i(24)(void 0),e.push([t.i,"",""])},162:function(t,e,i){var n=i(16)(i(157),i(164),null,null);t.exports=n.exports},163:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{staticClass:"elevation-1",attrs:{"top-toolbar":""}},[i("v-toolbar",{class:t.theme.primary},[i("v-toolbar-side-icon",{staticClass:"grey--text text--darken-4",nativeOn:{click:function(e){e.stopPropagation(),t.sidebar.visible=!t.sidebar.visible}}}),i("v-toolbar-title",{domProps:{innerHTML:t._s(t.title)}}),i("v-toolbar-items",[t._l(t.nav,function(e,n){return i("v-toolbar-item",{key:n,attrs:{href:e.href,nuxt:e.nuxt}},[t._v(t._s(e.text))])}),i("v-menu",{staticStyle:{margin:"10px"},attrs:{bottom:"",left:"","offset-y":"",origin:"top right",transition:"v-slide-y-transition"}},[i("v-btn",{attrs:{icon:"",dark:""},slot:"activator"},[t._v("\n          "+t._s(t.$i18n.locale)+"\n        ")]),i("v-list",t._l(t.lang_list,function(e,n){return i("v-list-item",{key:n},[i("v-list-tile",{attrs:{href:e.href?e.href:null,nuxt:e.nuxt}},[i("v-list-tile-title",{domProps:{textContent:t._s(e.text)}})],1)],1)}))],1)],2)],1),i("main",[i("v-sidebar",{attrs:{height:"auto"},model:{value:t.sidebar.visible,callback:function(e){t.sidebar.visible=e},expression:"sidebar.visible"}},[t._v(" <ç-- left fixed drawer --\x3e\n      "),i("v-list",{attrs:{"two-line":"",dense:""}},[t._l(t.sidebar.menu,function(e){return[e.header?i("v-subheader",{domProps:{textContent:t._s(e.header)}}):e.divider?i("v-divider",{attrs:{inset:e.inset}}):i("v-list-item",{key:e.text},[i("v-list-tile",{attrs:{avatar:!(!e.avatar&&!e.icon),href:e.href?e.href:null,nuxt:e.nuxt}},[e.icon?i("v-list-tile-avatar",[i("v-icon",[t._v(t._s(e.icon))])],1):t._e(),e.avatar?i("v-list-tile-avatar",[i("img",{attrs:{src:e.avatar}})]):t._e(),i("v-list-tile-content",[i("v-list-tile-title",{domProps:{innerHTML:t._s(e.text)}}),e.sub?i("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.sub)}}):t._e()],1)],1)],1)]})],2)],1),i("v-content",[i("v-container",{attrs:{fluid:""}},[i("nuxt")],1)],1)],1)],1)},staticRenderFns:[]}},164:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v(t._s(t.title))])])},staticRenderFns:[]}},165:function(t,e,i){var n=i(161);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(25)("43af5594",n,!0)}});