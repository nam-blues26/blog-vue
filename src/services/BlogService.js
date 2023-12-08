// import {getJwtToken} from '@/services/AuthService'
import axios from "axios";
import { API_BASE_URL } from "@/config";

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
};

export default BlogService;
