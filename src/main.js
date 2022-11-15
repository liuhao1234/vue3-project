import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'

// 引入全局样式
import 'element-plus/dist/index.css'
import '@/assets/main.css'

// 创建相关实例
const pinia = createPinia()
const app = createApp(App)

// 注入相关实例
app.use(pinia)
app.use(router)
app.use(ElementPlus,{
  locale: zhCn
})

// 绑定app
app.mount('#app')