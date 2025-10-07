import axios from "axios";

const API = axios.create({
  baseURL: "https://farm-backend-xi.vercel.app", // your live backend
});

export default API;
