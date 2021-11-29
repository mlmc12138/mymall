<!--  -->
<template>
  <div id="card">
    <nav-bar>
      <div slot="left"><img src="@/assets/img/header/fanhui.svg" alt=""></div>
      <div slot="center">购物车</div>
      <div slot="right"><img src="@/assets/img/header/more.svg" alt=""></div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from '../../components/common/navBar/navBar.vue'
export default {
  components: { navBar },
  data () {
    return {
    }
  }
}
</script>

<style  scoped>

</style>
