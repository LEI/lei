<template>
    <!-- <le-header :title="title" :links="links"></le-header> -->
  <v-app top-toolbar class="elevation-1"> <!-- left-fixed-sidebar -->
    <v-toolbar v-bind:class="theme.primary">
      <v-toolbar-side-icon class="grey--text text--darken-4" @click.native.stop="sidebar.visible = !sidebar.visible" />
      <!-- <v-toolbar-logo></v-toolbar-logo> -->
      <v-toolbar-title v-html="title"></v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <v-toolbar-items>
        <v-toolbar-item v-for="(item,index) in nav" :key="index" :href="item.href" :nuxt="item.nuxt">{{ item.text }}</v-toolbar-item>
        <v-menu bottom left offset-y origin="top right" transition="v-slide-y-transition" style="margin: auto 10px;">
          <v-btn icon dark slot="activator" :title="$i18n.locale.toUpperCase()">
            <!-- <v-icon>language</v-icon> -->
            {{ $i18n.locale }}
          </v-btn>
          <v-list>
            <v-list-item v-for="(item, index) in lang_list" :key="index">
              <v-list-tile :href="item.href ? item.href : null" :nuxt="item.nuxt">
                <v-list-tile-title v-text="item.text"></v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-sidebar v-model="sidebar.visible" height="auto"> <ç-- left fixed drawer -->
        <v-list two-line dense>
          <template v-for="item in sidebar.menu">
            <v-subheader v-if="item.header" v-text="item.header" />
            <v-divider v-else-if="item.divider" v-bind:inset="item.inset" />
            <v-list-item v-else v-bind:key="item.text">
              <v-list-tile :avatar="item.avatar || item.icon ? true : false" :href="item.href ? item.href : null" :nuxt="item.nuxt">
                <v-list-tile-avatar v-if="item.icon">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-avatar v-if="item.avatar">
                  <img v-bind:src="item.avatar" />
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.text" />
                  <v-list-tile-sub-title v-if="item.sub" v-html="item.sub" />
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
          </template>
        </v-list>
      </v-sidebar>

      <!-- <v-sidebar v-model="sidebar4" height="auto"> -->
      <!--   <v-list dense> -->
      <!--     <template v-for="(item,i) in itemGroup"> -->
      <!--       <v-list-group v-if="item.items"> -->
      <!--         <v-list-item slot="item"> -->
      <!--           <v-list-tile ripple> -->
      <!--             <v-list-tile-title v-text="item.title" /> -->
      <!--             <v-list-tile-action> -->
      <!--               <v-icon>keyboard_arrow_down</v-icon> -->
      <!--             </v-list-tile-action> -->
      <!--           </v-list-tile> -->
      <!--         </v-list-item> -->
      <!--         <v-list-item v-for="(subItem,i) in item.items" :key="i"> -->
      <!--           <v-list-tile ripple> -->
      <!--             <v-list-tile-title v-text="subItem.title" /> -->
      <!--           </v-list-tile> -->
      <!--         </v-list-item> -->
      <!--       </v-list-group> -->
      <!--       <v-subheader v-else-if="item.header" v-text="item.header" /> -->
      <!--       <v-divider v-else-if="item.divider" light /> -->
      <!--       <v-list-item v-else> -->
      <!--         <v-list-tile ripple> -->
      <!--           <v-list-tile-title v-text="item.title" /> -->
      <!--         </v-list-tile> -->
      <!--       </v-list-item> -->
      <!--     </template> -->
      <!--   </v-list> -->
      <!-- </v-sidebar> -->

      <v-content>
        <v-container fluid>
          <nuxt/>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
import LeHeader from '~components/le-header.vue'
export default {
  components: {
    LeHeader,
  },
  // asyncData() {
  //   return {
  //     sidebar: false
  //   }
  // },
  data () {
    var nav = [
      { icon: 'home', text: this.$t('links.home'), href: this.path('/'), nuxt: true },
      { icon: 'account_box', text: this.$t('links.about'), href: this.path('/about'), nuxt: true },
    ];
    var lang = [
      { text: this.$t('links.english'), href: this.$route.fullPath.replace(/^\/[^\/]+/, ''), nuxt: true },
      { text: this.$t('links.french'), href: `/fr` + this.$route.fullPath, nuxt: true }
    ];
    var social = [
      { text: 'Twitter', href: 'https://twitter.com/LEI', sub: 'twitter.com/LEI' },
      { text: 'GitHub', href: 'https://github.com/LEI', sub: 'github.com/LEI' },
      { text: 'Keybase', href: 'https://keybase.io/LEI', sub: 'keybase.io/LEI' },
    ];
    return {
      nav: nav,
      lang_list: lang,
      theme: { primary: 'green' },
      title: this.$t('home.title'),
      sidebar: {
        visible: false,
        menu: nav.concat( // [{ divider: true }, { header: 'Locale' }], lang,
          [{ divider: true }, { header: 'Social' }], social),
      },
    }
  },
  methods: {
    path (url) {
      return (this.$i18n.locale === 'en' ? url : '/' + this.$i18n.locale + url)
    },
  }
}
</script>

<style>
</style>
