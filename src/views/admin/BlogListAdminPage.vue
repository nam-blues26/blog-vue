<template>
  <div class="wrapper">
    <NavbarComponent />
    <div class="content-wrapper" style="min-height: 888.4px;">
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card">

                <div class="card-body">
                  <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
                    <div class="row">
                      <div class="col-sm-12 col-md-6"></div>
                      <div class="col-sm-12 col-md-6"></div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12" v-for="(cate, index) in categoryList" :key="index">
                        <h4>Category: {{ cate.categoryName }}</h4>
                        <table id="example2" class="table table-bordered table-hover dataTable dtr-inline mb-5"
                          aria-describedby="example2_info" >
                          <thead>
                            <tr>
                              <th class="sorting sorting_asc" tabindex="0" aria-controls="example2" rowspan="1"
                                colspan="1" aria-label="Rendering engine: activate to sort column descending"
                                aria-sort="ascending" style="width: 150px;">Image</th>
                              <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-label="Browser: activate to sort column ascending" style="width: 850px;" >Title</th>
                              <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-label="Platform(s): activate to sort column ascending">Updated At</th>
                              <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                aria-label="Engine version: activate to sort column ascending">Action</th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr class="odd" v-for="(blog, index) in cate.postList" :key="index">
                              <td><img :src="domainImage+blog.image" class="card-img-top" alt="Card Image"></td>
                              <td class="fw-bolder">{{ blog.title }}</td>
                              <td>{{ blog.updated_at }}</td>
                              <td>
                                <router-link :to="`/blog/${blog.slug}`" target="_blank" class="btn-admin btn btn-success">View</router-link>
                                <router-link :to="`admin/edit-blog/${blog.slug}`" class="btn-admin btn btn-warning">Edit</router-link>
                                <a href="" class="btn-admin btn btn-danger">Delete</a>
                              </td>
                            </tr>

                          </tbody>

                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/admin/NavbarComponent.vue';
import CategoryService from '@/services/CategoryService';
import { API_BASE_URL } from "@/config";
import { getJwtToken } from "@/services/AuthService";

export default {
  components: {
    NavbarComponent,
  },
  data() {
    return {
      domainImage:`${API_BASE_URL}/post/image/`,
      categoryList: [],
    };
  },
  async created() {
    // Gọi API để lấy danh sách cate
        console.log("Token ADMIN: ",getJwtToken());
    try {
      this.categoryList = await CategoryService.getPostsAdmin();
     
      console.log(this.categoryList);

    } catch (error) {
      console.error("Error fetching blog list:", error);
    }
  },
}
</script>

<style scoped>
.card-img-top{
  margin: 0 auto;
  width: 150px;
  height: 100px;
  object-fit: cover;
}

.btn-admin{
  margin-left: 10px;
}
</style>