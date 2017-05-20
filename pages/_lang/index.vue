<template>
  <!-- <div class="Content"> -->
  <!--   <div class="container"> -->

  <!--     <logo/> -->

  <!--     <h1 class="Content__Title">{{ $t('home.title') }}</h1> -->
  <!--     <p>{{ $t('home.introduction') }}</p> -->
  <!--   </div> -->
  <!-- </div> -->
  <div>
    <!-- <h1 class="Content__Title">{{ $t('home.title') }}</h1> -->
    <!-- <p>{{ $t('home.introduction') }}</p> -->
    <md-avatar class="md-avatar-icon md-large">
      <md-icon>home</md-icon>
    </md-avatar>
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
