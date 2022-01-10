<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  data () {
    return {
      scroll: null,
      message: "111"
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    // 创建一个scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      taps: true,
      probeType: this.probeType
    })

    // 监听滚动 
    this.scroll.on('scroll', (position)=> {
      // console.log(position);
      this.$emit('scroll', position);
    })
  },
  
}
</script>

<style  scoped>

</style>
