import axios from "_axios@0.24.0@axios";
export function request(config) {
  // 创建 axios实例
  // return new Promise((resolve, reject) => {
  //   // 创建 axios 实例
  //   const instance1 = axios.create({
  //     baseURL: 'http://123.207.32.32:8000',
  //     timeout: 5000
  //   })
  //   const i2 = axios.create({
  //     baseURL: 'http://www.blogry.cn',
  //     timeout: 5000
  //   })
  //   instance1(config)
  //     .then(res=> {
  //       resolve(res)
  //     })
  //     .catch(err=> {
  //       reject(err)
  //     })
  // })
  // 创建 axios 实例
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  const instance2 = axios.create({
    baseURL: 'http://www.blogry.cn',
    timeout: 5000
  })
// axios拦截器
instance1.interceptors.request.use(config=> {
  //1 当一些config中的信息不符合服务器时进行拦截
  //2 每次发送请求时 都希望在界面中创建一个加载的图标
  return config
},err=> {
  console.log(err);
}) 

  // 发送网络请求
  // instance1(config) 本身就是一个Promise对象
  return instance1(config)
}