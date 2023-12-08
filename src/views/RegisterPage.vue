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
import AuthService from "@/services/AuthService"
import Swal from 'sweetalert2';
import router from '@/router';

export default {
    data() {
        return {
            full_name:"",
            username: "",
            password: "",
        };
    },
    methods: {
        async register() {
            try {
                const response = await AuthService.register(this.full_name, this.username, this.password);
                // const response = true
                console.log('Đăng ký thành công:', response);
                if (response == true) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Đăng ký thành công!',
                    }).then(() => {
                        // Chuyển hướng đến trang /login sau khi nhấp vào nút "OK" trên thông báo
                        router.push('/login');
                    });
                }
            } catch (error) {
                console.error('Đăng ký thất bại:', error.message);
            }
        },
    },
};
</script>
  
<style scoped>

</style>
  