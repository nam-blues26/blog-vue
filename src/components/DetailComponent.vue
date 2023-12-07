<!-- DetailPage.vue -->
<template>
    <div class="blog-image">
          <div class="image-overlay"></div>
          <img :src="selectedCard.image" class="img-fluid" alt="Detail Image">
          <div class="detail-overlay">
              <h2>{{ selectedCard.title }}</h2>
              <p>{{ selectedCard.createdAt }}</p>
            </div>
        </div>
    <div class="container">
      <div class="row">
        
        <div class="col-md-8">
          <div class="detail-content">
            <h3>Content</h3>
            <p>{{ selectedCard.content }}</p>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Related Posts</h3>
          <!-- Hiển thị các bài viết liên quan ở đây -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCard: {}, // Dữ liệu của card được chọn
      };
    },
    created() {
      // Lấy dữ liệu chi tiết của card từ API hoặc bất kỳ nguồn dữ liệu nào khác
      // Ở đây, bạn có thể sử dụng `this.$route.params` để lấy thông tin đường dẫn từ URL
      // const cardId = this.$route.params.id;
  
      // Gọi API hoặc sử dụng dữ liệu giả định
      // Ví dụ: this.selectedCard = api.getCardDetail(cardId);
      this.selectedCard = {
        title: 'Card Title',
        createdAt: 'December 10, 2022',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        image: 'https://images.pexels.com/photos/196648/pexels-photo-196648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        // Thêm các trường dữ liệu khác nếu cần
      };
    },
  };
  </script>
  
  <style scoped>
  /* Thêm CSS tùy chỉnh cho trang chi tiết */
  
  .blog-image {
    position: relative;
    padding: 0 20%;
  }
  
  .blog-image img {
    width: 100%;
    object-fit: fill;
  }
  
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Màu nền mờ */
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
  
  .detail-content {
    margin-top: 20px;
  }
  </style>
  