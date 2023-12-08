import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/views/RegisterPage.vue';
import Login from '@/views/LoginPage.vue';
import Home from '@/views/HomePage.vue';
import Category from '@/views/CategoryPage.vue';
import Blog from '@/views/DetailBlogPage.vue';



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
    path: '/category/:slug',
    component: Category,
  },
  {
    path: '/blog/:slug',
    component: Blog,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
