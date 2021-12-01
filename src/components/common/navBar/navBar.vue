<!--  -->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    height: 44px;
    background-color: red;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.5);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  img {
    width: 30px;
    height: 30px;
    margin-top: 6px;
    margin-left: 13px;
  }
  input {
    border-radius: 15px;
    height: 30px;
    border: none;
    outline: none;
    padding-left: 15px;
  }
  .left,.right {
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
    color: white;
  }
</style>
