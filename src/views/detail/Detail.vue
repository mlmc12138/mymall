<!--  -->
<template>
  <div class="nav-bar">
    <nav-bar>
      <div slot="left"><img src="@/assets/img/common/back.svg" alt="" /></div>
      <div slot="center" class="title">
        <div
          class="title-item"
          :class="{ active: curryIndex == index }"
          v-for="(item, index) in titles"
          :key="index"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
      <div slot="right"><img src="@/assets/img/header/more.svg" alt="" /></div>
    </nav-bar>
    <!-- 轮播 -->
    <detail-swaper :swaperImg="swaperImg"></detail-swaper>
    <!-- 价格详情 -->
    <detail-mess :detailMess="goodsInfo" @addGoods="addGoods"> </detail-mess>
    <!-- 评论 -->
    <!-- 推荐 -->
  </div>
</template>

<script>
import navBar from "../../components/common/navBar/navBar.vue";

import { getDetail, Goods } from "@/network/detail.js";
import DetailSwaper from "./childrenComps/detailSwaper.vue";
import DetailMess from "./childrenComps/detailMess.vue";
export default {
  name: "Detail",
  components: { navBar, DetailSwaper, DetailMess },
  data() {
    return {
      titles: ["商品", "详情", "评价", "推荐"],
      curryIndex: 0,
      iid: null,
      swaperImg: [],
      goodsInfo: {},
    };
  },
  created() {
    // 商品详细数据
    this.iid = this.$route.query.iid;
    getDetail(this.iid).then((res) => {
      const data = res.data.result;
      console.log(this.iid);
      this.swaperImg = data.itemInfo.topImages;
      this.goodsInfo = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
    });
  },
  methods: {
    itemClick(index) {
      this.curryIndex = index;
    },
    addGoods() {
      const product = {};
      product.img = this.swaperImg[0];
      product.title = this.goodsInfo.title;
      product.price = this.goodsInfo.price;
      product.desc = this.goodsInfo.desc;

      // mutation
      this.$store.commit("addGoods", product);
    },
  },
};
</script>

<style  scoped>
.nav-bar {
  background: #fff;
}
.title {
  color: black;
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 15px;
}
.nav-bar h2 {
  margin-top: 44px;
}
.nav-bar img {
  width: 20px;
}
.active {
  color: red;
}
</style>
