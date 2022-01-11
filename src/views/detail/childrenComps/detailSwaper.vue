<!--  -->
<template>
  <div>
    <swiper class="detailSwaper">
      <swiper-item v-for="(item,index) in swaperImg" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue'
import SwiperItem from '@/components/common/swiper/SwiperItem.vue'

export default {
  components: { Swiper, SwiperItem },
  data () {
    return {

    }
  },
  props: {
    swaperImg: {
      type: Array,
      default: []
    }
  }
}
</script>

<style  scoped>
  .detailSwaper {
    width: 100%;
    height: calc(100vh - 300px);
  }

</style>
