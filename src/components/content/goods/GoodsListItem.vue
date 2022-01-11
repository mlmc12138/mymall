<!--  -->
<template>
  <div class="goodsItems" @click="itemClick">
   <img :src="goodsItem.show.img" alt="" />
    <div class="goodsInfo">
      <p class="title">{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <img src="@/assets/img/common/collect.svg" alt="" />
      <span class="collection">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemClick() {
      this.$router.push({
        path: "/detail",
        query: {
         iid: this.goodsItem.iid
        }
      })
    }
  }
};
</script>

<style  scoped>
.goodsItems {
  padding-bottom: 40px;
  width: 46%;
  position: relative;
}
.goodsInfo {
  position: absolute;
  text-align: center;
  width: 100%;
}
.goodsItems img {
  width: 100%;
  margin: 0 auto;
  height: 100%;
  border-radius: 5px 5px 5px 5px;
}
.goodsInfo img {
    width: 15px;
  }
.goodsInfo .title {
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 5px;
}
.goodsInfo .price {
  color: pink;
  margin-right: 8px;
}
</style>
