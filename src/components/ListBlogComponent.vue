<template>
  <div class="container mt-5 mb-5">
    <h2 class="text-header text-white mb-5 text-center">{{ textHeader }}</h2>
    <div class="row">
      <div class="col-md-6 pb-4" v-for="(post, index) in postList" :key="index">
        <div class="card">
          <div class="card-image">
            <img :src="post.image" class="card-img-top" alt="Card Image">

          </div>
          <div class="card-body">
            <h5 class="card-title fs-4 fw-bolder">{{ post.title }}</h5>
            <p class="card-text pt-1">{{ post.updated_at }}</p>
            <p class="card-text pt-2">{{ post.description }}</p>
            <router-link :to="`/blog/${post.slug}`" class="btn btn-custome d-flex align-items-center"
              style="width:fit-content;">
              <span>See More</span>
              <span class="material-icons ml-2">
                pan_tool_alt
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
      
<script>
export default {
  props:['postList','textHeader'],
  data() {
    
  },
  
};
</script>
      
<style scoped>
.card-image {
  height: 300px;
}

.card-image img {
  height: 100%;
  object-fit: cover;
}

.card-text {
  margin-top: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #57606f;
}
</style>
      