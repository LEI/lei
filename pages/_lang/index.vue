<template>
  <div class="container">
    <!-- <logo/> -->
    <div class="title">
      <h2>{{ $t('home.title') }}</h2>
      <!-- <p>{{ $t('home.introduction') }}</p> -->
    </div>
    <!-- <v-btn primary>Primary button</v-btn> -->
    <!-- <v-btn secondary>Secondary button</v-btn> -->
    <!-- <v-btn success>Success button</v-btn> -->
  </div>
</template>

<script>
import NuxtLogo from '~components/nuxt-logo.vue'
export default {
  components: {
    NuxtLogo
  },
  head () {
    return { title: this.$t('home.title') }
  }
}
</script>
