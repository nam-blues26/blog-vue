<template>
        <NavbarComponent/>
        <DetailComponent/>
      <div class="blog" style="height: 100vh;"></div>

        <FooterComponent/>
    </template>
    
    <script>
    import NavbarComponent from '@/components/NavbarComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue';
    import DetailComponent from '@/components/DetailComponent.vue';
    export default {
    
        components: {
            NavbarComponent,
            FooterComponent,
            DetailComponent,
        }
    }
    </script>
    
    <style scoped>
    .banner{
        padding: 0 20%;
    }
    .banner img{
        width: 100%;
        object-fit: fill;
    }
    </style>