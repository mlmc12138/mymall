<!--  -->
<template>
  <div class="card-list">
    <div
      class="card-list-item"
      v-for="(item, index) in goodsList"
      :key="index"
    >

      <div class="left">
        <img :src="item.img" alt="">
      </div>
      <div class="right">
        {{item.title}}
       <i>{{item.price}}</i>
      </div>
    </div>
    <button class="payFor">领券结算</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
     
    };
  },
  computed: {
    ...mapGetters(["goodsList"]),
  },
};
</script>

<style  scoped>
.card-list {
  margin-top: 44px;
  width: 100%;
  overflow: hidden;
}
.left{
  width: 15%;
}
.right {
  font-size: 15px;
  width: 75%;
}
.card-list-item {
  margin-top: 8px;
  height: 60px;
  
}
.card-list-item i {
  color: red;
}
.card-list-item img {
  height: 60px;
}
.payFor {
  width: 100px;
  position: fixed;
  right: 8px;
  bottom: 65px;
  background-color: red;
  color: white;
  border: 0;
  text-align: center;
  border-radius: 8px;
}
</style>
