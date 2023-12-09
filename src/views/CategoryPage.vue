<template>
    <div class="homePage">
        <NavbarComponent />
        <div class="banner">
            <img src="../assets/img/banner-category.jpg" alt="Banner">
        </div>
        <ListBlogComponent :postList="PostList" :textHeader="textHeader"/>
        <FooterComponent />
    </div>
</template>
        
<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ListBlogComponent from '@/components/ListBlogComponent.vue';
import CategoryService from "@/services/CategoryService";
import { API_BASE_URL } from "@/config";

export default {
    data() {
        return {
            textHeader:'',
            PostList: [],
        };
    },
    components: {
        NavbarComponent,
        FooterComponent,
        ListBlogComponent,
    },
    async created() {
        await this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const posts = await CategoryService.getPostsByCategory(this.$route.params.slug);
                this.textHeader ="BLOG - " +posts.categoryName;
                this.PostList = posts.postList.map((p) => ({
                    id: p.id,
                    title: p.title,
                    description: p.description,
                    image: API_BASE_URL + "/post/image/" + p.image,
                    slug: p.slug,
                    updated_at:p.updated_at
                    // Thêm các trường khác nếu cần
                }));
                console.log(posts);
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
.homePage {
    background-color: #293335;
}

.banner {
    padding: 0 18%;
}

.banner img {
    width: 100%;
    object-fit: fill;
}
</style>