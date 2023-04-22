import axios from "axios";

export const API = axios.create({
  baseURL: "https://92.255.111.124:8080/api",
  responseType: "json",
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
  },
});
