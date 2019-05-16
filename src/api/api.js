import axios from "axios";

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api.bundleofsage.com"
      : "http://localhost:3017",
  withCredentials: true
});

export default {
  auth: {
    checkStatus: () => client.get("/auth/status"),
    login: userInfo => client.post("/auth/login", { userInfo }),
    logout: () => client.get("/auth/logout")
  },
  user: {
    getUserProfile: () => client.get("/user")
  }
};
