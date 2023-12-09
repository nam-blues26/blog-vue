<script setup>
import Editor from '@tinymce/tinymce-vue'
</script>

<template>
    <div class="wrapper">
        <NavbarComponent />
        <div class="content-wrapper" style="min-height: 888.4px;">
            <section class="content">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">ADD BLOG</h3>
                            </div>
                            <form @submit.prevent="submitForm">
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Title</label>
                                        <input type="text" v-model="title" class="form-control" id="exampleInputEmail1"
                                            placeholder="Enter title" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Description</label>
                                        <input type="text" v-model="description" class="form-control"
                                            id="exampleInputEmail1" placeholder="Enter description" required>
                                    </div>
                                    <div class="form-group">
                                        <label>Category</label>
                                        <select class="form-control" v-model="category_id" required>
                                            <option value="" selected disabled hidden>Choose here</option>
                                            <option v-for="(cate, index) in categoryList" :key="index" :value="cate.id">{{
                                                cate.name }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputFile">File input</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input type="file" @change="handleFileChange" class="custom-file-input"
                                                    id="exampleInputFile">
                                                <label class="custom-file-label" for="exampleInputFile">Choose
                                                    file</label>
                                            </div>
                                            <div class="input-group-append">
                                                <span class="input-group-text">Upload</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img v-if="selectedImage" :src="selectedImage" class="selected-image"
                                                alt="Selected Image">
                                            <img v-else :src="selectedImage" class="selected-image"
                                                alt="Blog Image">
                                        </div>
                                    </div>

                                    <Editor api-key="no-api-key" :init="{
                                        plugins: 'lists link image table code help wordcount'
                                    }" v-model="content" />
                                </div>

                                <div class="card-footer">
                                    <button type="submit" value="Submit" class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div class="col-md-6"></div>
                </div>


            </section>

        </div>
    </div>
</template>
      
<script>
import NavbarComponent from '@/components/admin/NavbarComponent.vue';
import CategoryService from '@/services/CategoryService';
import { API_BASE_URL } from "@/config";
import BlogService from "@/services/BlogService";
import Swal from 'sweetalert2';
import router from '@/router';
export default {
    components: {
        NavbarComponent,
    },
    data() {
        return {
            selectedImage: null,
            domainImage: `${API_BASE_URL}/post/image/`,
            categoryList: [],
            id:0,
            title: '',
            category_id: '',
            file: null,
            content: '',
            description: ''
        };
    },
    async created() {
        // console.log("Token ADMIN Add Blog: ",getJwtToken());

        // Gọi API để lấy danh sách cate
        try {
            const Blog = await BlogService.getBlogBySlug(this.$route.params.slug);
            console.log(Blog);
            this.id=Blog.id;
            this.title = Blog.title;
            this.description = Blog.description;
            this.category_id = Blog.category_id;
            this.content = Blog.content;
            this.selectedImage = API_BASE_URL + "/post/image/" + Blog.image;

            const categories = await CategoryService.getList();
            this.categoryList = categories.map((c) => ({
                id: c.id,
                name: c.name,
                slug: c.slug
                // Thêm các trường khác nếu cần
            }));
            console.log(this.categoryList);

        } catch (error) {
            console.error("Error fetching blog list:", error);
        }
    },
    methods: {
        displayImage(file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                this.selectedImage = e.target.result;
            };

            reader.readAsDataURL(file);
        },
        handleFileChange(event) {
            this.file = event.target.files[0];
            if (this.file) {
                this.displayImage(this.file);
            }
        },
        async submitForm() {
            try {
                if(this.file !== null){
                    console.log("Have file");
                    const response = await BlogService.updateBlogWithImage(this.id,this.title, this.description, this.category_id, this.content, this.file);
                    if (response.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sửa bài viết thành công!',
                    }).then(() => {
                        // Chuyển hướng đến trang /login sau khi nhấp vào nút "OK" trên thông báo
                        router.push('/admin');
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Sửa bài viết thất bại!',
                    })
                }
                }
                else{
                    console.log("Not file");

                    const response = await BlogService.updateBlogWithoutImage(this.id,this.title, this.description, this.category_id, this.content);
                    if (response.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sửa bài viết thành công!',
                    }).then(() => {
                        // Chuyển hướng đến trang /login sau khi nhấp vào nút "OK" trên thông báo
                        router.push('/admin');
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Sửa bài viết thất bại!',
                    })
                }
                }

                
                // Do something after successful creation, e.g., redirect to another page.
            } catch (error) {
                // console.error('Error creating post:', error.response.data);
                // Handle error, show message, etc.
            }

        },
    },
}
</script>
      
<style scoped>
.card-img-top {
    margin: 0 auto;
    width: 150px;
    height: 100px;
    object-fit: cover;
}

.selected-image {
    width: 200px;
    object-fit: contain;
}
</style>