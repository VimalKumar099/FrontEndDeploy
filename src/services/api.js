import axios from "axios";

const API = axios.create({
  baseURL: "https://backenddeploy-production-4754.up.railway.app/api"
});

export default API;
