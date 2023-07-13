import axios from "axios";

const api = axios.create({
  baseURL: "https://ecommerce-website-r1vu.onrender.com",
});

export default api;
