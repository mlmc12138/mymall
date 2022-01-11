<!--  -->
<template>
  <div class="goods-mess">
    <div>{{ detailMess.price }}</div>
    <div>{{ detailMess.title }}</div>
    <div>{{ detailMess.desc }}</div>
    <div>{{ detailMess.oldPrice }}</div>
    <button class="addGoods" @click="addGoods">加入购物车</button>
    <button class="buyGoods">立即购买</button>
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
  methods: {
    addGoods() {
      this.$emit('addGoods');
    }
  }
};
</script>

<style  scoped>
.goods-mess {
  width: 100%;
  overflow-x: scroll;
}
.goods-mess button {
  width: 100px;
  height: 30px;
  position: fixed;
  bottom: 60px;
  border-radius: 15px;
  border: 0;
  color: white;
}
.addGoods {
  right: 5px;
  background-color: red;
}
.buyGoods {
  right: 115px;
  background-color: orange;
}
</style>
