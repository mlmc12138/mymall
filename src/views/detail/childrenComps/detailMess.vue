<!--  -->
<template>
  <div class="goods-mess">
    <div>{{ detailMess.price }}</div>
    <div>{{ detailMess.desc }}</div>
    <div>{{ detailMess.oldPrice }}</div>
    <div>{{ detailMess.discount }}</div>
    <div>{{ detailMess.service }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    detailMess: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style  scoped>
.goods-mess {
  width: 100%;
  overflow-x: scroll;
}
</style>
