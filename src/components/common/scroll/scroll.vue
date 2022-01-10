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
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 创建一个scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      taps: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    // 监听滚动 
    this.scroll.on('scroll', (position)=> {
      // console.log(position);
      this.$emit('scroll', position);
    })

    // 监听上拉事件
    this.scroll.on('pullingUp',()=> {
      this.$emit('pullUp')
    })
  },
  
}
</script>

<style  scoped>

</style>
