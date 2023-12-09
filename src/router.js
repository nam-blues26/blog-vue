import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/views/RegisterPage.vue';
import Login from '@/views/LoginPage.vue';
import Home from '@/views/HomePage.vue';
import Category from '@/views/CategoryPage.vue';
import Blog from '@/views/DetailBlogPage.vue';
import BlogListAdmin from '@/views/admin/BlogListAdminPage.vue';
import AddBlogAdmin from '@/views/admin/AddBlogAdminPage.vue';
import EditBlogAdmin from '@/views/admin/EditBlogAdminPage.vue';


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
  {
    path: '/admin',
    component: BlogListAdmin,
  },
  {
    path: '/admin/add-blog',
    component: AddBlogAdmin,
  },
  {
    path: '/admin/edit-blog/:slug',
    component: EditBlogAdmin,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
