import axios from 'axios'

const instance = axios.create({
  baseURL: ''
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

// get请求
export function get(url,params){
  return instance.get(url,{
    params
  })
}

// post请求
export function post(url,data){
  return instance.post(url,data)
}