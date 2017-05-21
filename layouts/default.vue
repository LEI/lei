<template>
  <v-app top-toolbar> <!-- left-fixed-sidebar class="elevation-1" -->
    <v-toolbar>
      <v-toolbar-side-icon class="hidden-lg-and-up secondary-text" @click.native.stop="showSideBar = !showSideBar" />
      <!-- <v-toolbar-logo></v-toolbar-logo> -->
      <v-toolbar-title v-html="title"></v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <v-toolbar-items>
        <!-- <v-toolbar-item v-for="(item,index) in pageList" :key="index" :href="item.href" :nuxt="item.nuxt" ripple> -->
        <!--   {{ item.title }} -->
        <!-- </v-toolbar-item> -->
        <list-link v-for="(item,index) in pageList" :key="index" :item="item" :elem="'tollbar-item'" :item-class="{toolbar__item: item.title}"></list-link>
        <v-menu bottom left offset-y origin="top right" transition="v-slide-y-transition">
          <v-btn class="mx-3" icon secondary slot="activator" :title="$i18n.locale.toUpperCase()">
            <!-- <v-icon>language</v-icon> -->
            {{ $i18n.locale }}
          </v-btn>
          <v-list>
            <v-list-item v-for="(item, index) in langList" :key="index">
              <list-link :item="item" :elem="'v-list-tile'" :item-class="{list__tile: item.title}"></list-link>
              <!-- <v-list-tile :href="item.href" :nuxt="item.nuxt" ripple> -->
              <!--   <v-list-tile-title v-text="item.title"></v-list-tile-title> -->
              <!-- </v-list-tile> -->
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <m-sidebar :visible="showSideBar" :list="itemGroup"></m-sidebar>
      <v-content>
        <v-container fluid>
          <nuxt/>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
import app from '~plugins/firebase'
import listLink from '~components/m-list-link.vue'
import mSidebar from '~components/m-sidebar.vue'
var db = app.database()
export default {
  components: { listLink, mSidebar },
  // asyncData() {
  //   return {
  //     sidebar: false
  //   }
  // },
  data () {
    // FIXME: path() update
    var pageList = [
      {
        title: this.$t('links.home'),
        href: function () { return this.path('/') }.bind(this),
        nuxt: true,
        action: 'home'
      },
      {
        title: this.$t('links.about'),
        href: function () { return this.path('/about') }.bind(this),
        nuxt: true,
        action: 'account_box'
      }
    ]
    var langList = [
      {
        title: this.$t('links.english'),
        href: this.$route.fullPath.replace(/^\/[^/]+/, ''),
        nuxt: true
      },
      {
        title: this.$t('links.french'),
        href: `/fr` + this.$route.fullPath,
        nuxt: true
      }
    ]
    return {
      pageList: pageList,
      langList: langList,
      title: this.$t('home.title'),
      showSideBar: false,
      itemGroup: [{ header: 'Navigation' }].concat(pageList,
        // [{ divider: true }, { title: 'Locales', action: 'keyboard_arrow_down', items: langList }],
        [{ divider: true }, { header: 'Social' }], [
        { title: 'Twitter', href: 'https://twitter.com/LEI', subTitle: 'twitter.com/LEI', target: '_blank' },
        { title: 'GitHub', href: 'https://github.com/LEI', subTitle: 'github.com/LEI', target: '_blank' },
        { title: 'Keybase', href: 'https://keybase.io/LEI', subTitle: 'keybase.io/LEI', target: '_blank' }]
      )
    }
  },
  firebase: {
    // links: this.linksRef.ref('links')
    links: db.ref('links')
  },
  methods: {
    path (url) {
      return (this.$i18n.locale === 'en' ? url : '/' + this.$i18n.locale + url)
    }
  }
}
</script>

<style>
</style>
