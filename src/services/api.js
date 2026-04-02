import axios from "axios";

const API = axios.create({
  baseURL: "https://backenddeploy-production-4754.up.railway.app/api/products"
});

export default API;
