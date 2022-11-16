import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import router from '@/router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'

// 环境变量配置
console.log("***** env *****",import.meta.env)

// 引入全局样式
import 'element-plus/dist/index.css'
import '@/assets/main.css'

// 创建相关实例
const pinia = createPinia()
pinia.use(piniaPluginPersist)
const app = createApp(App)

// 应用级配置
app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.log(err)
}

// 注入相关实例
app.use(pinia)
app.use(router)
app.use(ElementPlus,{
  locale: zhCn
})

// 绑定app
app.mount('#app')