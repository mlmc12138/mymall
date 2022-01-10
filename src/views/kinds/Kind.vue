<!--  -->
<template>
  <div id="kind">
    <nav-bar>
      <div slot="left"><img src="@/assets/img/header/fanhui.svg" alt="" /></div>
      <div slot="center"><input type="text" placeholder="数码家电" /></div>
      <div slot="right">
        <img src="@/assets/img/header/sousuo.svg" alt="" />
      </div>
    </nav-bar>
    <div class="wrapper">
      <ul class="content">
       
      </ul>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/common/navBar/navBar.vue";
import BScroll from "better-scroll";
export default {
  components: { navBar },
  data() {
    return {};
  },

  created() {

  },
  mounted() {
    new BScroll(".wrapper", {
     
    });
  },
};
</script>

<style  scoped>
.wrapper {
  margin-top: 44px;
  width: 100%;
  height: 200px;
  background-color: skyblue;
  overflow: hidden;
  /* overflow-y: scroll; */
  /* overflow: auto; */
}
</style>
