<template>
  <v-sidebar v-model="visible" height="auto"> <!-- left fixed drawer -->
    <v-list two-line dense>
      <template v-for="item in list">
        <v-list-group v-if="item.items">
          <v-list-item slot="item">
          <v-list-tile :avatar="item.icon">
            <!-- <v-list-tile-title v-text="item.title" /> -->
            <!-- <v-list-tile-action> -->
            <!-- </v-list-tile-action> -->
            <v-list-tile-avatar v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title" />
              <v-list-tile-sub-title v-if="item.subTitle" v-html="item.subTitle" />
            </v-list-tile-content>
            <v-list-tile-avatar>
              <v-icon>{{ item.action || 'keyboard_arrow_down' }}</v-icon>
            </v-list-tile-avatar>
          </v-list-tile>
          </v-list-item>
          <v-list-item v-for="subItem in item.items" :key="subItem.title">
            <list-link :item="subItem" elem="v-list-tile" :item-class="{list__tile: item.title}"></list-link>
          </v-list-item>
        </v-list-group>
        <v-subheader class="accent-text" v-else-if="item.header" v-text="item.header" />
        <v-divider v-else-if="item.divider" light /> <!-- inset -->
        <v-list-item v-else>
          <list-link :item="item" elem="v-list-tile" :item-class="{list__tile: item.title}"></list-link>
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
import listLink from '~components/m-list-link.vue'
export default {
  name: 'm-sidebar',
  components: { listLink },
  props: {
    visible: { type: Boolean, required: true },
    list: { type: Array, required: true }
  }
}
</script>
