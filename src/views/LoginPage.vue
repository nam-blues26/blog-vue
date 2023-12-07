<template>
        <div class="form-container">
                <div class="form-view">
                        <div class="left-content">
                                <!-- Hình ảnh bên trái -->
                                <img src="../assets/img/img-form-login.jpeg" alt="Register Image" class="img-fluid" />
                        </div>
                        <!-- Hình ảnh và Form đăng ký -->
                        <div class="right-content">
                                <form @submit.prevent="login" class="form-login">
                                        <h2 class="h1 mb-3 fw-bold text-center">Login</h2>
                                        <div class="form-group">
                                                <input type="text" v-model="username" class="form-control"
                                                        placeholder="Username" required />
                                        </div>
                                        <div class="form-group">
                                                <input type="password" v-model="password" class="form-control"
                                                        placeholder="Password" required />
                                        </div>
                                        <div class="form-group">
                                                <p class="text-center">Don't have an account?<router-link to="/register" class="">Signup</router-link></p>
                                        </div>
                                        <div class="form-group">
                                                <button type="submit" class="btn btn-primary btn-block">LOGIN</button>
                                        </div>
                                </form>
                        </div>
                </div>
        </div>
</template>
      
<script>
export default {
        data() {
                return {
                        username: "",
                        password: "",
                };
        },
        methods: {
                login() {
                        // Xử lý logic đăng ký, có thể gọi API ở đây
                        console.log("Đã nhấn nút Đăng Ký");
                        console.log("Tên người dùng:", this.username);
                        console.log("Mật khẩu:", this.password);
                },
        },
};
</script>
      
<style scoped></style>
      