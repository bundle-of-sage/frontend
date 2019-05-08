import axios from "axios";

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api.bundleofsage.com"
      : "http://localhost:5000/bundle-of-sage/us-central1/app/",
  withCredentials: true
});

export default {
  auth: {
    checkStatus: () => client.get("/auth/status"),
    signUp: userInfo => client.post("/auth/sign-up", { userInfo }),
    login: userInfo => client.post("/auth/login", { userInfo }),
    logout: () => client.get("/auth/logout")
  },
  membership: {}
};
