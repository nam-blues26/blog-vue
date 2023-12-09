// import {getJwtToken} from '@/services/AuthService'
import axios from "axios";
import { API_BASE_URL } from "@/config";
import { getJwtToken } from "@/services/AuthService";

const apiClientWithToken = axios.create({
    baseURL: `${API_BASE_URL}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getJwtToken()}`, // Thêm token vào header Authorization
    },
  });

const BlogService = {
	getList: async () => {
		try {
			const response = await axios.get(`${API_BASE_URL}/post`);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
	getBlogBySlug: async (slug) => {
		try {
			const response = await axios.get(`${API_BASE_URL}/post/${slug}`);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
	addBlog: async (title,description, category_id, content, file) => {
		try {
			const response = await apiClientWithToken.postForm(
				`${API_BASE_URL}/post`,
				{
					title: title,
					description:description,
					category_id: category_id,
					content: content,
					file: file,
				},
				
			);
			return response;
		} catch (error) {
			return error;
		}
	},
};

export default BlogService;
