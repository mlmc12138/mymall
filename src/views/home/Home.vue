<!--  -->
<template>
  <div id="home">
    <nav-bar>
      <div slot="left"><img src="@/assets/img/header/logo.svg" alt="" /></div>
      <div slot="center"><input type="text" placeholder="多快好省" /></div>
      <div slot="right">
        <img src="@/assets/img/header/sousuo.svg" alt="" />
      </div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/navBar.vue";
import HomeSwiper from "./childrenComps/HomeSwiper.vue";
import { getHomeMultidata } from "@/network/home.js";
import RecommendView from './childrenComps/RecommendView.vue'
export default {
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  created() {
   getHomeMultidata().then((res) => {
      // 对获取到的数据进行保存
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
};
</script>

<style  scoped>
</style>
