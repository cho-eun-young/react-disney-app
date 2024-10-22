import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "7486535849f15cad4bb9b79839fd3628",
    language: "ko-KR",
  },
});

export default axiosInstance;
