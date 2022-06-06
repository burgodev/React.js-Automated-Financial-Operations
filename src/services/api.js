import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "https://api.botmoney.io/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const token = localStorage.getItem("token") || "";

if (token) {
  api.defaults.headers.authorization = token;
}

export default api;
