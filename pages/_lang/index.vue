<template>
  <div class="container">
    <logo/>
    <div class="title">
      <h2>{{ $t('home.title') }}</h2>
      <!-- <p>{{ $t('home.introduction') }}</p> -->
    </div>
    <!-- <v-btn primary>Classic button</v-btn> -->
    <nuxt-link :to="'/about'">Nuxt link</nuxt-link>
    <br>
    <a href="/about">Href</a>
  </div>
</template>

<script>
import Logo from '~components/logo.vue'
export default {
  components: {
    Logo
  },
  head () {
    return { title: this.$t('home.title') }
  }
}
</script>
