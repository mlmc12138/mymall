import Vue from "vue"
import vuex from "vuex"
import getters from "./getters"
// 安装插件 
Vue.use(vuex);
// 创建 store对象
const store = new vuex.Store({
  state: {
    goodsList: []
  },
  mutations: {
    addGoods(state, payload) {
        state.goodsList.push(payload)
    }
  },
  getters
})

// 挂载到 Vue
export default store