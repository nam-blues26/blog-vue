// import {getJwtToken} from '@/services/AuthService'
import axios from "axios";
import { API_BASE_URL } from "@/config";


const CategoryService = {
        getList: async () => {
                try {
                  const response = await axios.get(`${API_BASE_URL}/category`);
                  return response.data;
                } catch (error) {
                  console.log(error);
                }
              },
              getPostsByCategory: async (slug) => {
                try {
                  const response = await axios.get(`${API_BASE_URL}/category/${slug}`);
                  return response.data;
                } catch (error) {
                  console.log(error);
                }
              },
              getPostsAdmin: async () => {
                try {
                  const response = await axios.get(`${API_BASE_URL}/category/admin/get-posts`);
                  return response.data;
                } catch (error) {
                  console.log(error);
                }
              },
}

export default CategoryService