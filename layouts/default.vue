<template>
    <!-- <le-header :title="title" :links="links"></le-header> -->
    <!-- <header class="Header"> -->
    <!--   <div class="container"> -->
    <!--     <h1 class="Header__Title">Nuxt i18n</h1> -->
    <!--     <nav class="Header__Menu"> -->
    <!--       <nuxt-link class="Header__Link" :to="path('/')" exact> -->
    <!--         {{ $t('links.home') }} -->
    <!--       </nuxt-link> -->
    <!--       <nuxt-link class="Header__Link" :to="path('/about')"  active-class="none"> -->
    <!--         {{ $t('links.about') }} -->
    <!--       </nuxt-link> -->
    <!--       <nuxt-link class="Header__Link" v-if="$i18n.locale === 'en'" :to="`/fr` + $route.fullPath" active-class="none" exact> -->
    <!--         {{ $t('links.french') }} -->
    <!--       </nuxt-link> -->
    <!--       <nuxt-link class="Header__Link" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact> -->
    <!--         {{ $t('links.english') }} -->
    <!--       </nuxt-link> -->
    <!--     </nav> -->
    <!--   </div> -->
    <!-- </header> -->
  <!-- <v-app top-toolbar left-fixed-sidebar class="elevation-1"> -->
  <v-app top-toolbar class="elevation-1">
    <v-toolbar v-bind:class="theme.primary">
      <v-toolbar-side-icon class="grey--text text--darken-4" @click.native.stop="sidebar.visible = !sidebar.visible" />
      <!-- <v-toolbar-logo></v-toolbar-logo> -->
      <v-toolbar-title v-html="title"></v-toolbar-title>
      <v-toolbar-items>
        <v-toolbar-item>Home</v-toolbar-item>
        <v-toolbar-item>About</v-toolbar-item>
        <v-menu bottom left offset-y origin="top right" transition="v-slide-y-transition" style="margin: 10px;">
          <v-btn icon dark slot="activator">
            {{ $i18n.locale }}
          </v-btn>
          <v-list>
            <v-list-item v-for="(item, index) in locale_list" :key="index">
              <v-list-tile :avatar="item.avatar || item.icon ? true : false" :href="item.href ? item.href : null" :nuxt="item.nuxt">
                <!-- <v-list-tile-avatar v-if="item.icon"> -->
                <!--   <v-icon>{{ item.icon }}</v-icon> -->
                <!-- </v-list-tile-avatar> -->
                <!-- <v-list-tile-avatar v-if="item.avatar"> -->
                <!--   <img v-bind:src="item.avatar" /> -->
                <!-- </v-list-tile-avatar> -->
                <v-list-tile-title v-text="item.text"></v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <!-- <v-icon>search</v-icon> -->
      <!-- <nuxt-link class="" v-if="$i18n.locale === 'en'" :to="`/fr` + $route.fullPath" active-class="none" exact> -->
      <!--   <v-btn small primary floating secondary>FR</v-btn> -->
      <!--   <1!-- {{ $t('links.french') }} --1> -->
      <!-- </nuxt-link> -->
      <!-- <nuxt-link class="" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact> -->
      <!--   <v-btn small primary floating secondary>EN</v-btn> -->
      <!--   <1!-- {{ $t('links.english') }} --1> -->
      <!-- </nuxt-link> -->
    </v-toolbar>
    <main>
      <v-sidebar v-model="sidebar.visible" height="auto">
      <!-- <v-sidebar left fixed drawer v-model="sidebar.visible"> -->
        <!-- <v-list> -->
        <!--   <v-list-item v-for="(link, index) in sidebar.list" :key="index"> -->
        <!--     <v-list-tile> -->
        <!--       <v-list-tile-title> -->
        <!--         <a v-bind:href="link.url">{{ link.text }}</a> -->
        <!--       </v-list-tile-title> -->
        <!--     </v-list-tile> -->
        <!--   </v-list-item> -->
        <!-- </v-list> -->
        <v-list two-line dense>
          <template v-for="item in menu">
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
                  <v-list-tile-sub-title v-if="item.desc" v-html="item.desc" />
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
    return {
      locale_list: [
        { value: 'en', text: this.$t('links.english') },
        { value: 'fr', text: this.$t('links.french') }
      ],
      theme: { primary: 'green' },
      title: this.$t('home.title'),
      sidebar: { visible: false },
      menu: [
          // { header: 'Pages' },
          { icon: 'home', text: this.$t('links.home'), href: this.path('/'), nuxt: true },
          { icon: 'account_box', text: this.$t('links.about'), href: this.path('/about'), nuxt: true },
          { divider: true },
          { header: 'Social' },
          { text: 'Twitter', href: 'https://twitter.com/LEI', desc: 'twitter.com/LEI' },
          { text: 'GitHub', href: 'https://github.com/LEI', desc: 'github.com/LEI' },
          { text: 'Keybase', href: 'https://keybase.io/LEI', desc: 'keybase.io/LEI' },
          // { url: '/', text: 'Back to home' },
      ]
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
