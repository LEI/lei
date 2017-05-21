<template>
  <div class="container">
    <div class="title">
      <h2>{{ $t('about.title') }}</h2>
      <p>{{ $t('about.introduction') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return { title: this.$t('about.title') }
  }
}
</script>
