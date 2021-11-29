<!--  -->
<template>
  <div>
    <tabbar>
      <tabbar-item path="/home" activeColor="red">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-txt">首页</div>
      </tabbar-item>
      <tabbar-item path="/kinds" activeColor="red">
        <img slot="item-icon" src="@/assets/img/tabbar/fenlei.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/fenlei_active.svg"
          alt=""
        />
        <div slot="item-txt">分类</div>
      </tabbar-item>
      <tabbar-item path="/card" activeColor="red">
        <img slot="item-icon" src="@/assets/img/tabbar/gouwuche.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/gouwuche_active.svg"
          alt=""
        />
        <div slot="item-txt">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="@/assets/img/tabbar/my.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/my_active.svg"
          alt=""
        />
        <div slot="item-txt">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/common/tabbar/tabbar.vue";
import TabbarItem from "@/components/common/tabbar/tabbarItem.vue";

export default {
  data() {
    return {};
  },
  components: {
    tabbar,
    TabbarItem
  }
};
</script>

<style  scoped>
</style>
