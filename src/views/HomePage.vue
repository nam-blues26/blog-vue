<template>
  <div class="homePage">
    <NavbarComponent />
    <div class="banner">
      <img src="../assets/img/banner.jpg" alt="Banner">
    </div>

    <ListBlogComponent :postList="PostList" :textHeader="textHeader" />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ListBlogComponent from '@/components/ListBlogComponent.vue';
import BlogService from "@/services/BlogService";
import { API_BASE_URL } from "@/config";
export default {
  data() {
    return {
      textHeader: "NEW EPISODES",
      PostList: [
      ],
    };
  },
  components: {
    NavbarComponent,
    FooterComponent,
    ListBlogComponent,
  },
  async created() {
    // Gọi API để lấy danh sách cate
    try {
      const posts = await BlogService.getList();
      this.PostList = posts.map((p) => ({
        id: p.id,
        title: p.title,
        description: p.description,
        image: API_BASE_URL + "/post/image/" + p.image,
        slug: p.slug,
        updated_at: p.updated_at
        // Thêm các trường khác nếu cần
      }));
      console.log(this.PostList);

    } catch (error) {
      console.error("Error fetching blog list:", error);
    }
  },
  
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
  height: 70vh;
}
</style>