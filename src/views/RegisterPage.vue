<template>
  <div>
    <h2>Đăng Ký</h2>
    <form @submit.prevent="register">
      <label for="fullname">Họ và Tên:</label>
      <input type="text" id="full_name" v-model="fullName" required>

      <label for="username">Tên người dùng:</label>
      <input type="text" id="username" v-model="username" required>

      <label for="password">Mật khẩu:</label>
      <input type="password" id="password" v-model="password" required>

      <label for="repassword">Nhập lại mật khẩu:</label>
      <input type="password" id="repassword" v-model="repassword" required>

      <button type="submit">Đăng Ký</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      username: '',
      password: '',
      repassword: '',
    };
  },
  methods: {
    register() {
      // Xử lý logic đăng ký, có thể gọi API ở đây
      console.log('Đã nhấn nút Đăng Ký');
      console.log('Họ và Tên:', this.fullName);
      console.log('Tên người dùng:', this.username);
      console.log('Mật khẩu:', this.password);
      console.log('Nhập lại mật khẩu:', this.repassword);
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
