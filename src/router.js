import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/views/RegisterPage.vue';
import Login from '@/views/LoginPage.vue';
import Home from '@/views/HomePage.vue';
import Detail from '@/views/DetailBlogPage.vue';


const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/details',
    name: 'DetailPage',
    component: Detail,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
