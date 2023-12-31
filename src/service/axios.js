import axios from 'axios'

// ES6 Promise的封装
export function request(options) {

  // axios.defaults.baseURL = 'http://localhost:8085'
  // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  return new Promise((resolve, reject) => {
    // 1.创建axios的实例对象
    const instance = axios.create({
      baseURL: 'http://localhost:8085',
      timeout: 5000
    })

    // 过滤器(拦截器)
    instance.interceptors.response.use(res => {
      return res.data
    })

    // 通过实例发送网络请求
    instance(options)
      .then(res => {
        resolve(res)
      }).catch(err => {
      reject(err)
    })
  })
}
