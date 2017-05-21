<template>
  <div class="container">
    <div class="title">
      <h2>{{ $t('home.title') }}</h2>
      <p>{{ $t('home.introduction') }}</p>
    </div>
    <logo/>
    <!-- <v-btn primary>Primary button</v-btn> -->
    <!-- <v-btn secondary>Secondary button</v-btn> -->
    <!-- <v-btn success>Success button</v-btn> -->
  </div>
</template>

<script>
// import app from '~plugins/firebase'
import NuxtLogo from '~components/nuxt-logo.vue'
// var db = app.database()
export default {
  components: {
    NuxtLogo
  },
  head () {
    return { title: this.$t('home.title') }
  },
  // fetch ({ store }) {
  //   this.linksRef = store.db.ref('links')
  // },
  firebase: { // links: this.linksRef.ref('links')
    // links: db.ref('links')
  },
  data: function () {
    // console.log(this, this.$firebaseRefs, this.links);
    return {
      // links: this.links // this.$firebaseRefs.links
    }
  }
}
</script>
