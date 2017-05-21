<template>
  <div class="title">
    <logo/>
    <h2 class="Content__Title">{{ $t('home.title') }}</h2>
    <p>{{ $t('home.introduction') }}</p>
    <!-- <v-btn primary>Primary button</v-btn> -->
    <!-- <v-btn secondary>Secondary button</v-btn> -->
    <!-- <v-btn success>Success button</v-btn> -->
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
