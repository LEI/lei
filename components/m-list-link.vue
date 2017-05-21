<template>
  <!-- <v-list-tile :avatar="prop.avatar || prop.icon" :nuxt="prop.nuxt" ripple> -->
  <nuxt-link v-if="prop.nuxt" :to="typeof prop.href === 'function' ? prop.href() : prop.href" :class="propClass"> <!-- :is="propIs" ripple -->
    <!-- <div v-if="prop.title" class="list__tile__content"><div class="list__tile__title">{{prop.title}}</div></div> -->
    <!-- <div v-if="prop.action" class="list__tile__action"><v-icon>{{ prop.action }}</v-icon></div> -->
    <v-list-tile-avatar v-if="prop.icon">
      <v-icon>{{ prop.icon }}</v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content v-if="prop.title || prop.subTitle">
      <v-list-tile-title v-if="prop.title" v-html="prop.title" />
      <v-list-tile-sub-title v-if="prop.subTitle" v-html="prop.subTitle" />
    </v-list-tile-content>
    <v-list-tile-avatar v-if="prop.action">
      <v-icon>{{ prop.action }}</v-icon>
    </v-list-tile-avatar>
  </nuxt-link>
  <a v-else :href="prop.href" :class="propClass" :target="prop.target"> <!-- :is="propIs" ripple -->
    <!-- <div v-if="prop.title" class="list__tile__content"><div class="list__tile__title">{{prop.title}}</div></div> -->
    <!-- <div v-if="prop.action" class="list__tile__action"><v-icon>{{ prop.action }}</v-icon></div> -->
    <v-list-tile-avatar v-if="prop.icon">
      <v-icon>{{ prop.icon }}</v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content v-if="prop.title">
      <v-list-tile-title v-html="prop.title" />
      <v-list-tile-sub-title v-if="prop.subTitle" v-html="prop.subTitle" />
    </v-list-tile-content>
    <v-list-tile-avatar v-if="prop.action">
      <v-icon>{{ prop.action }}</v-icon>
    </v-list-tile-avatar>
  </a>
  <!-- <pre v-else>??? {{ prop }}</pre> -->
  <!-- </v-list-tile> -->
</template>

<script>
// import Vue from 'vue'

export default {
  name: 'm-list-link',
  props: {
    item: { type: Object, required: true },
    elem: { type: String, required: false },
    itemClass: { type: Object, required: false }
  },
  data: function () {
    return {
      prop: this.item,
      propIs: this.elem,
      propClass: this.itemClass
    }
  }
}
</script>
