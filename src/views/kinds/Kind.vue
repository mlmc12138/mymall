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
    <div class="content">
      <div class="left">
        <tab-control
        class="tar-control"
        :titles="['男装', '女装', '童装','同款','复古','潮流','校园','职场','其他']"
      ></tab-control>
      </div>
      <div class="right">
        <img src="@/assets/img/goodsList(1).png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/common/navBar/navBar.vue";
import TabControl from '../../components/content/tabControl/tabControl.vue';

export default {
  components: { navBar,TabControl },
  data() {
    return {};
  },

  created() {

  },
  mounted() {
  },
};
</script>

<style  scoped>
.content {
  margin-top: 44px;
}
.tar-control {
  display: flex;
  flex-direction: column;
}
.right {
  position: fixed;
  top: 44px;
  right: 0;
  width: 85%;
}
</style>
