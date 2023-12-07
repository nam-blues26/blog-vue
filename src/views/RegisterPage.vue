<template>
    <div class="form-container">
        <div class="form-view">
            <div class="left-content">
                <!-- Hình ảnh bên trái -->
                <img src="../assets/img/img-form-register.jpeg" alt="Register Image" class="img-fluid" />
            </div>
            <!-- Hình ảnh và Form đăng ký -->
            <div class="right-content">
                <form @submit.prevent="register" class="form-signin">
                    <h2 class="h1 mb-3 fw-bold text-center">REGISTER</h2>
                    <div class="form-group">
                        <input type="text" v-model="full_name" class="form-control" placeholder="Full Name" required />
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="username" class="form-control" placeholder="Username" required />
                    </div>
                    <div class="form-group">
                        <input type="password" v-model="password" class="form-control" placeholder="Password" required />
                    </div>
                    <div class="form-group">
                                                <p class="text-center">Already have an account?<router-link to="/login" class="">Login</router-link></p>
                                        </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">DONE</button>
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
            full_name:"",
            username: "",
            password: "",
        };
    },
    methods: {
        register() {
            // Xử lý logic đăng ký, có thể gọi API ở đây
            console.log("Đã nhấn nút Đăng Ký");
            console.log("tên", this.full_name);
            console.log("Tên người dùng:", this.username);
            console.log("Mật khẩu:", this.password);
        },
    },
};
</script>
  
<style scoped>

</style>
  