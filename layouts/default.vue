<template>
  <v-app top-toolbar> <!-- left-fixed-sidebar class="elevation-1" -->
    <v-toolbar> <!-- :class="theme.primary" -->
      <v-toolbar-side-icon class="hidden-lg-and-up secondary-text" @click.native.stop="sidebar.visible = !sidebar.visible" />
      <!-- <v-toolbar-logo></v-toolbar-logo> -->
      <v-toolbar-title v-html="title"></v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <v-toolbar-items>
        <v-toolbar-item v-for="(item,index) in pages" :key="index" :href="item.href" :nuxt="item.nuxt" ripple>
          {{ item.text }}
        </v-toolbar-item>
        <v-menu bottom left offset-y origin="top right" transition="v-slide-y-transition">
          <v-btn icon secondary slot="activator" :title="$i18n.locale.toUpperCase()"
            style="margin: 0 10px;">
            <!-- <v-icon>language</v-icon> -->
            {{ $i18n.locale }}
          </v-btn>
          <v-list>
            <v-list-item v-for="(item, index) in locales" :key="index">
              <v-list-tile :href="item.href" :nuxt="item.nuxt" ripple>
                <v-list-tile-title v-text="item.text"></v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <m-sidebar :visible="sidebar.visible" :list="sidebar.menu" height="auto"></m-sidebar>
      <v-content>
        <v-container fluid>
          <nuxt/>

          <v-toolbar class="secondary container mb-3" v-tooltip.top="{ html: 'Nuxt link (to): the browser does not reload the page' }">
            <v-icon class="accent--text">check</v-icon>
            <v-toolbar-title>
              &lt;nuxt-link to="..."&gt;
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <nuxt-link class="white--text px-3" v-for="(item,index) in pages" :key="index" :to="item.href">
              {{ item.text }}
            </nuxt-link>
          </v-toolbar>

          <v-toolbar class="secondary container mb-3" v-tooltip.top="{ html: 'Vuetify component (href): classic link, the browser reloads the page' }">
            <v-icon class="accent--text">check</v-icon>
            <v-toolbar-title>
              &lt;v-toolbar-item href="..."&gt;
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-toolbar-item v-for="(item,index) in pages" :key="index" :href="item.href" ripple> <!-- :nuxt="item.nuxt" -->
                {{ item.text }}
              </v-toolbar-item>
            </v-toolbar-items>
          </v-toolbar>

          <v-toolbar class="secondary container mb-3" v-tooltip.top="{ html: 'Vuetify component (href) with nuxt option: the browser still reloads the page' }">
            <v-icon class="warning--text">close</v-icon>
            <v-toolbar-title>
              &lt;v-toolbar-item href="..." nuxt&gt;
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-toolbar-item v-for="(item,index) in pages" :key="index" :href="item.href" nuxt ripple>
                {{ item.text }}
              </v-toolbar-item>
            </v-toolbar-items>
          </v-toolbar>

        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
import mSidebar from '~components/m-sidebar.vue'
export default {
  components: {
    mSidebar
  },
  // asyncData() {
  //   return {
  //     sidebar: false
  //   }
  // },
  data () {
    var pages = [
      { icon: 'home', text: this.$t('links.home'), href: this.path('/'), nuxt: true },
      { icon: 'account_box', text: this.$t('links.about'), href: this.path('/about'), nuxt: true }
    ]
    var locales = [
      { text: this.$t('links.english'), href: this.$route.fullPath.replace(/^\/[^/]+/, ''), nuxt: true },
      { text: this.$t('links.french'), href: `/fr` + this.$route.fullPath, nuxt: true }
    ]
    var social = [
      { text: 'Twitter', href: 'https://twitter.com/LEI', sub: 'twitter.com/LEI' },
      { text: 'GitHub', href: 'https://github.com/LEI', sub: 'github.com/LEI' },
      { text: 'Keybase', href: 'https://keybase.io/LEI', sub: 'keybase.io/LEI' }
    ]
    return {
      pages: pages,
      locales: locales,
      // theme: { primary: 'green' },
      title: this.$t('home.title'),
      sidebar: {
        visible: false,
        menu: [{ header: 'Navigation' }].concat(pages,
          // [{ divider: true }, { header: 'Locale' }], lang,
          [{ divider: true }, { header: 'Social' }], social)
      }
    }
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
