import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.cn/
export default defineConfig({
  envDir: "./viteEnv", //配置文件所在目录，默认根路径
  envPrefix: ["VITE", "VENUS"], //这个时候，我们可以将VITE_、VENUS_开头的变量统统透传给客户端
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
