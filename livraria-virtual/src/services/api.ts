import axios from "axios";

var api = axios.create({
  baseURL: "http://localhost:3000"})

export default api;