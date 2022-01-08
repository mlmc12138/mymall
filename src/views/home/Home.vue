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
    <feature-view></feature-view>
    <tab-control
      class="tar-control"
      :titles="['流行', '精选', '推荐']"
    ></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
    <div style="height: 60px">
    </div>
  </div>
</template>

<script>
// 子组件
import NavBar from "@/components/common/navBar/navBar.vue";
import HomeSwiper from "./childrenComps/HomeSwiper.vue";
import FeatureView from "./childrenComps/FeatureView.vue";
import GoodsList from '@/components/content/goods/GoodsList.vue';

// 公用组件
import RecommendView from "./childrenComps/RecommendView.vue";
import TabControl from "@/components/content/tabControl/tabControl.vue";

// 方法
import { getHomeMultidata } from "@/network/home.js";
import { getHomeGoods } from "@/network/home.js";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        "pop": { page: 0, list: [] },
        "new": { page: 0, list: [] },
        "sell": { page: 0, list: [] },
      },
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
  },
  created() {
    // 1,获取多个数据
    this.getHomeMultidata()
    // 2,获取商品数据
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // 对获取到的数据进行保存
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then((res) => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
      } )
    }
  },
};
</script>

<style  scoped>
#home {
  padding-top: 44px;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
