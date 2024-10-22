const { default: axios } = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "https://velog.io/@k-svelte-master/react-hook-real-knowledge",
    language: "ko-KR",
  },
});

export default axiosInstance;
