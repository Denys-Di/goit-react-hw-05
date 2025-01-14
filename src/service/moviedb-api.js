import axios from "axios";

export const API_KEY = "b9d449803c6a280ef9a9f20e8f9dbf76";

export const API_JWT =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWQ0NDk4MDNjNmEyODBlZjlhOWYyMGU4ZjlkYmY3NiIsIm5iZiI6MTczNjg2NzE1NC4yNjcsInN1YiI6IjY3ODY3ZDUyMjI1NjAyM2RmZDRlOTcxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gP7qR6nLUjpJxNq_FLUaj9W4AceNpgKcWuD7n1xLNJ8";
export const BASE_URL = "https://api.themoviedb.org/3";
export const search = "/search/movie";
export const headers = {
  Authorization: `Bearer ${API_JWT}`,
};

export const fetchMovies = async (url = search, { query } = {}) => {
  const { data } = await axios.get(url, {
    params: { query },
    baseURL: BASE_URL,
    headers: headers,
    
  });

  return data;
};