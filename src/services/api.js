import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-49a9.up.railway.app/api"
});

export default API;
