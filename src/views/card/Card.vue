<!--  -->
<template>
  <div id="card">
    <nav-bar>
      <div slot="left"><img src="@/assets/img/header/fanhui.svg" alt=""></div>
      <div slot="center">购物车({{$store.state.goodsList.length}})</div>
      <div slot="right"><img src="@/assets/img/header/more.svg" alt=""></div>
    </nav-bar>
    <card-list></card-list>
  </div>
</template>

<script>
import navBar from '../../components/common/navBar/navBar.vue'
import CardList from './cardChildren/cardList.vue'
export default {
  components: { navBar, CardList },
  data () {
    return {

    }
  },
}
</script>

<style  scoped>
</style>
