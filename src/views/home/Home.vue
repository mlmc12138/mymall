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
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/navBar.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
  },
};
</script>

<style  scoped>
</style>
