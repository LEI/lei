<template>
  <v-sidebar v-model="visible" height="auto"> <!-- left fixed drawer -->
    <v-list two-line dense>
      <template v-for="item in list">
        <v-subheader v-if="item.header" v-text="item.header" />
        <v-divider v-else-if="item.divider && !item.inset" />
        <v-divider v-else-if="item.divider" inset />
        <v-list-item v-else :key="item.text">
          <v-list-tile ripple :avatar="item.avatar || item.icon ? true : false" :href="item.href" :nuxt="item.nuxt">
            <v-list-tile-avatar v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-avatar v-if="item.avatar">
              <img :src="item.avatar" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.text" />
              <v-list-tile-sub-title v-if="item.sub" v-html="item.sub" />
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </template>
    </v-list>
  </v-sidebar>
  <!-- <v-sidebar v-model="sidebar4" height="auto"> -->
  <!--   <v-list dense> -->
  <!--     <template v-for="(item,i) in itemGroup"> -->
  <!--       <v-list-group v-if="item.items"> -->
  <!--         <v-list-item slot="item"> -->
  <!--           <v-list-tile ripple> -->
  <!--             <v-list-tile-title v-text="item.title" /> -->
  <!--             <v-list-tile-action> -->
  <!--               <v-icon>keyboard_arrow_down</v-icon> -->
  <!--             </v-list-tile-action> -->
  <!--           </v-list-tile> -->
  <!--         </v-list-item> -->
  <!--         <v-list-item v-for="(subItem,i) in item.items" :key="i"> -->
  <!--           <v-list-tile ripple> -->
  <!--             <v-list-tile-title v-text="subItem.title" /> -->
  <!--           </v-list-tile> -->
  <!--         </v-list-item> -->
  <!--       </v-list-group> -->
  <!--       <v-subheader v-else-if="item.header" v-text="item.header" /> -->
  <!--       <v-divider v-else-if="item.divider" light /> -->
  <!--       <v-list-item v-else> -->
  <!--         <v-list-tile ripple> -->
  <!--           <v-list-tile-title v-text="item.title" /> -->
  <!--         </v-list-tile> -->
  <!--       </v-list-item> -->
  <!--     </template> -->
  <!--   </v-list> -->
  <!-- </v-sidebar> -->
</template>

<script>
// import Vue from 'vue'

export default {
  name: 'm-sidebar',
  props: {
    visible: {
      type: Boolean,
      required: false
    },
    list: {
      type: Array,
      required: false
    }
  }
}
</script>
