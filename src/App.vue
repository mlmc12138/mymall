<template>
  <div id="app">
    <!-- 占位 路由跳转时会被替换 -->
    <router-view></router-view>
    <Maintabbar></Maintabbar>
  </div>
</template>

<script>
import Maintabbar from '@/components/content/Miantabbar/Maintabbar.vue'
export default {
  name: 'App',
  components: {
   Maintabbar
  }
}
</script>

<style>
  @import url("./assets/css/base.css");
</style>
