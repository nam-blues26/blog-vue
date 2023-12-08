<template>
    <NavbarComponent />
    <DetailComponent :DetailBlog="Blog"/>
    <div class="blog" style="height: 100vh;"></div>

    <FooterComponent />
</template>
    
<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import DetailComponent from '@/components/DetailComponent.vue';
import BlogService from "@/services/BlogService";
import { API_BASE_URL } from "@/config";

export default {
    data() {
        return {
            Blog: {},
        };
    },
    components: {
        NavbarComponent,
        FooterComponent,
        DetailComponent,
    },
    async created() {
        await this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                this.Blog = await BlogService.getBlogBySlug(this.$route.params.slug);
                this.Blog.image = API_BASE_URL + "/post/image/" + this.Blog.image
            } catch (error) {
                console.error("Error fetching blog list:", error);
            }
        },
    },
    watch: {
        '$route.params.slug': 'fetchData'
    },
    beforeRouteUpdate(to, from, next) {
        this.fetchData();
        next();
    }
}
</script>
    
<style scoped>
.banner {
    padding: 0 20%;
}

.banner img {
    width: 100%;
    object-fit: fill;
}
</style>