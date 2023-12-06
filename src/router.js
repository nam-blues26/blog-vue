import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/views/RegisterPage.vue';


const routes = [
  {
    path: '/register',
    component: Register,
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
