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
    addGoods(state, info) {
      // const oldInfo = state.goodsList.find(item => item.iid === info.iid)
      // if (oldInfo) {
      //   oldInfo.count += 1
      // } else {
      //   info.count = 1
      //   state.goodsList.push(info)
      // }
      state.goodsList.push(info)
    }
  },
  getters
})

// 挂载到 Vue
export default store