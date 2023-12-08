// src/services/AuthService.js

import axios from "axios";
import { API_BASE_URL } from "@/config";

let jwtToken = '';

export const setJwtToken = (token) => {
  jwtToken = token;
};

export const getJwtToken = () => jwtToken;

// const apiClientWithToken = axios.create({
//     baseURL: `${API_BASE_URL}`,
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${getJwtToken()}`, // Thêm token vào header Authorization
//     },
//   });


const AuthService = {
  register: async (full_name, username, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/user/register`, {
        full_name,
        username,
        password,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/user/login`, {
        username,
        password,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  // Thêm các phương thức khác liên quan đến đăng nhập, đăng xuất nếu cần
};

export default AuthService;
