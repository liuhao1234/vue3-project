import Login from '@/pages/Login/index.vue'
import Home from '@/pages/Home/index.vue'

const routes = [
  {
    name: 'home',
    path: '/home', 
    component: Home 
  },
  {
    name: 'login',
    path: '/login', 
    component: Login 
  }
]

export default routes