import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'; // 导入相关样式
Vue.use(ElementUI); // 引用

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
