<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'le-header',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
