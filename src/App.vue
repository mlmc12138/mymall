<template>
  <div id="app">
    <!-- 将路由进行缓存 详情页面不需要缓存-->
    <keep-alive exclude="Detail"> 
      <!-- 占位 路由跳转时会被替换 -->
      <router-view></router-view>
    </keep-alive>
    <Maintabbar></Maintabbar>
  </div>
</template>

<script>
import Maintabbar from "@/components/content/Miantabbar/Maintabbar.vue";
export default {
  name: "App",
  components: {
    Maintabbar,
  },
};
</script>

<style>
@import url("./assets/css/base.css");
</style>
