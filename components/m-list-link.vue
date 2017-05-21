<template>
  <!-- <v-list-tile :avatar="item.avatar || item.icon" :nuxt="item.nuxt" ripple> -->
  <nuxt-link v-if="item.nuxt" :to="{path :item.href}" :class="itemClass">
    <!-- <div v-if="item.title" class="list__tile__content"><div class="list__tile__title">{{item.title}}</div></div> -->
    <!-- <div v-if="item.action" class="list__tile__action"><v-icon>{{ item.action }}</v-icon></div> -->
    <v-list-tile-avatar v-if="item.icon">
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content v-if="item.title || item.subTitle">
      <v-list-tile-title v-if="item.title" v-html="item.title" />
      <v-list-tile-sub-title v-if="item.subTitle" v-html="item.subTitle" />
    </v-list-tile-content>
    <v-list-tile-avatar v-if="item.action">
      <v-icon>{{ item.action }}</v-icon>
    </v-list-tile-avatar>
  </nuxt-link>
  <a v-else :href="item.href" :class="itemClass" :target="item.target">
    <!-- <div v-if="item.title" class="list__tile__content"><div class="list__tile__title">{{item.title}}</div></div> -->
    <!-- <div v-if="item.action" class="list__tile__action"><v-icon>{{ item.action }}</v-icon></div> -->
    <v-list-tile-avatar v-if="item.icon">
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content v-if="item.title">
      <v-list-tile-title v-html="item.title" />
      <v-list-tile-sub-title v-if="item.subTitle" v-html="item.subTitle" />
    </v-list-tile-content>
    <v-list-tile-avatar v-if="item.action">
      <v-icon>{{ item.action }}</v-icon>
    </v-list-tile-avatar>
  </a>
  <!-- </v-list-tile> -->
</template>

<script>
// import Vue from 'vue'

export default {
  name: 'm-list-link',
  props: {
    itemClass: { type: Object, required: false },
    item: { type: Object, required: true }
  }
}
</script>
