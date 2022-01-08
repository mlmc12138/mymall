<!--  -->
<template>
  <div class="goodsItems">
    <a :href="goodsItem.link"><img :src="goodsItem.show.img" alt=""></a>
    <div>
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collection">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style  scoped>

</style>
