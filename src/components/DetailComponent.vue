<!-- DetailPage.vue -->
<template>
  <div class="blog-image">
    <div class="image-overlay"></div>
    <img :src="DetailBlog.image" class="img-fluid" alt="Detail Image">
    <div class="detail-overlay">
      <h2>{{ DetailBlog.title }}</h2>
      <p>{{ DetailBlog.updated_at }}</p>
    </div>
  </div>
  <div class="container detail-blog">
    <div class="row">
      <div class="col-md-8">
        <div class="detail-content" v-html="DetailBlog.content">
 
        </div>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-3">
        <h3>Related Posts</h3>
        <ul>
          <li v-for="(blog, index) in Related" :key="index" class="d-flex align-items-center mt-3">
            <span class="material-icons">
arrow_right
</span><router-link :to="`/blog/${blog.slug}`" >{{ blog.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: ['DetailBlog','Related'],
  data() {

  },
};
</script>
  
<style scoped>
/* Thêm CSS tùy chỉnh cho trang chi tiết */
.detail-blog {
  margin-top: 50px;
}

.blog-image {
  position: relative;
  padding: 0 20%;
}

.blog-image img {
  width: 100%;
  object-fit: cover;
  height: 70vh;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* Màu nền mờ */
}

.detail-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

.detail-overlay h2 {
  margin-bottom: 10px;
}

.detail-overlay p {
  margin: 0;
}
</style>
  