<template>
    <nav style="z-index: 1000; position: fixed; top: 0px; width: 100%;" class="navbar navbar-expand-lg">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img src="../assets/img/Logo.png" alt="Logo" height="40px" />
        </router-link>
  
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
          <span class="material-icons text-white">
            reorder
          </span>
        </button>
  
        <ul class="navbar-nav mx-auto" :class="{ 'show-navbar': showNavbar }">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-white">Home</router-link>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
            <ul class="dropdown-menu " aria-labelledby="navbarDropdown" >
              <li v-for="(cate, index) in categoryList" :key="index"><router-link :to="`/category/${cate.slug}`" class="dropdown-item ">{{ cate.name }}</router-link></li>
            </ul>
          </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link text-white">About us</router-link>
            </li>
          
          </ul>
  
          <div class="navbar-nav  ml-auto">
            <li class="nav-item">
              <router-link to="/login" class="btn btn-outline-light mx-2">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="btn btn-outline-light">Register</router-link>
            </li>
          </div>
        </div>
      </nav>
  </template>
  
<script>
import CategoryService from '@/services/CategoryService';
export default {
  data() {
    return {
      showNavbar: false,
      categoryList: [],
    };
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar
    }
  },
  async created() {
    // Gọi API để lấy danh sách cate
    try {
      const categories = await CategoryService.getList();
      this.categoryList = categories.map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug
        // Thêm các trường khác nếu cần
      }));
      console.log(this.categoryList);

    } catch (error) {
      console.error("Error fetching blog list:", error);
    }
  },
};
</script>
  
<style scoped>
nav {
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 20px;
    padding-bottom: 20px;
}

.navbar-nav{

    flex-direction: row;
}
.navbar-brand {
    margin-right: auto;
}

.navbar-brand img {
    width: 180px;
    object-fit: cover;
}

.navbar-toggler {
    border: none;
}

.navbar-toggler:focus {
    outline: none;
}

.navbar-toggler-icon {
    background-color: #fff;
}

.navbar-nav {
    margin-left: auto;
}

.nav-link {
    font-size: 1.5em;
    padding-left: 30px !important;
    transition: color 0.5s;
    text-transform: uppercase;
}

.nav-link:hover {
    color: #cd6133 !important;
}

@media (max-width: 992px) {
    .navbar-nav {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 90px;
        right: 0;
        background-color: #343a40;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        transform: scale(0);
        transform-origin: top right;
        transition: transform 0.5s;
        padding-top: 24px;
    }

    .show-navbar {
        transform: scale(1);
    }

    .navbar-toggler {
        display: block;
    }

    .navbar-toggler:focus+.navbar-nav {
        display: flex;
    }

    .nav-item {
        padding-bottom: 24px;
        text-align: center;
    }
}
</style>
  