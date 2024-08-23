import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "cf72fdb93c87445e31698a685e5e9a76",
    language: "ko-KR",
  },
});

export default instance;
