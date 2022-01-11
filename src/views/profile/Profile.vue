<!--  -->
<template>
  <div class="profile">
    <nav-bar><div slot="center">个人中心</div></nav-bar>
    <img src="@/assets/img/profile.png" alt="">
    <img src="@/assets/img/profile_02.png" alt="">
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
  .profile {
    margin-top: 44px;
    widows: 100%;
  }
  .profile img {
    width: 100%;
  }
</style>
