<!--  -->
<template>
  <div class="tab-control">
    <div
      v-for="(items, index) in titles"
      :key="index"
      class="tab-control-items"
      :class="{active: currIndex === index}"
      @click="itemClick(index)"
    >
      <span>{{ items }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currIndex = index
      this.$emit('tabClick', index);
    }
  }
};
</script>

<style  scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
  z-index: 1;
}
.tab-control-items {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active {
  color: red
}
.active span {
  border-bottom: 3px solid red;
}
.tab-control-items span {
  padding: 5px;
}
</style>
