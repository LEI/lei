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
  <v-app top-toolbar left-fixed-sidebar>
    <v-toolbar v-bind:class="theme.primary">
      <v-toolbar-side-icon class="grey--text text--darken-4" @click.native.stop="sidebar.visible = !sidebar.visible" />
      <!-- <v-toolbar-logo></v-toolbar-logo> -->
      <v-toolbar-title v-html="title"></v-toolbar-title>
      <v-icon>search</v-icon>
    </v-toolbar>
    <main>
      <v-sidebar left fixed drawer v-model="sidebar.visible">
        <!-- <v-list> -->
        <!--   <v-list-item v-for="(link, index) in sidebar.list" :key="index"> -->
        <!--     <v-list-tile> -->
        <!--       <v-list-tile-title> -->
        <!--         <a v-bind:href="link.url">{{ link.text }}</a> -->
        <!--       </v-list-tile-title> -->
        <!--     </v-list-tile> -->
        <!--   </v-list-item> -->
        <!-- </v-list> -->
        <v-list> <!-- two-line -->
          <template v-for="item in sidebar.list">
            <v-subheader v-if="item.header" v-text="item.header" />
            <v-divider v-else-if="item.divider" v-bind:inset="item.inset" />
            <v-list-item v-else v-bind:key="item.title">
              <v-list-tile :avatar="item.avatar ? true : false" :href="item.href ? item.href : null">
                <v-list-tile-avatar v-if="item.avatar">
                  <img v-bind:src="item.avatar" />
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title" />
                  <v-list-tile-sub-title v-if="item.subtitle" v-html="item.subtitle" />
                </v-list-tile-content>
              </v-list-tile>
            </v-list-item>
          </template>
        </v-list>
      </v-sidebar>
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
      theme: { primary: 'green' },
      title: this.$t('home.title'),
      sidebar: {
        visible: false,
        list: [
            { header: 'Social' },
            { title: 'Twitter', href: 'https://twitter.com/LEI', subtitle: 'twitter.com/LEI' },
            { divider: true, inset: true },
            { title: 'GitHub', href: 'https://github.com/LEI', subtitle: 'github.com/LEI' },
            { divider: true, inset: true },
            { title: 'Keybase', href: 'https://keybase.io/LEI', subtitle: 'keybase.io/LEI' },
            // { url: '/', text: 'Back to home' },
        ]
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
