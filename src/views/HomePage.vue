<template>
<div class="homePage">
    <NavbarComponent/>
    <div class="banner">
        <img src="../assets/img/banner.jpg" alt="Banner">
    </div>
    <ListBlogComponent/>
    <FooterComponent/>
</div>
   
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ListBlogComponent from '@/components/ListBlogComponent.vue';
export default {

    components: {
        NavbarComponent,
        FooterComponent,
        ListBlogComponent,
    }
}
</script>

<style scoped>
.homePage{
  background-color: #293335;
}
.banner{
    padding: 0 20%;
}
.banner img{
    width: 100%;
    object-fit: fill;
}
</style>