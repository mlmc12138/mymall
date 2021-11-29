import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载
const Home = () => import('@/views/home/Home.vue')
const Card = () => import('@/views/card/Card.vue')
const Kinds = () => import('@/views/kinds/Kind.vue')
const Profile = () => import('@/views/profile/Profile.vue')
// 使用插件
Vue.use(VueRouter);
// 创建对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  }, 
  {
    path: '/card',
    component: Card
  }, 
  {
    path: '/kinds',
    component: Kinds
  }, 
  {
    path: '/profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router