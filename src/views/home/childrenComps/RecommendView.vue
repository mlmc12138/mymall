<!--  -->
<template>
  <div class="recommend">
    <div v-for="(item,sort) in recommends" :key="sort" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style  scoped>
  .recommend {
    display: flex;
  }
  .recommend-item {
    flex: 1;
    padding:10px 6px 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item img {
    width: 65px;
    height: 65px;
  }
</style>
