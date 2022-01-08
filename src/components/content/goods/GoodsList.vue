<!--  -->
<template>
  <div class="goods">
    <goods-list-item v-for="(items,id) in goods" :key="id"  :goods-item="items"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: { GoodsListItem },
  data () {
    return {
    }
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style  scoped>

</style>
