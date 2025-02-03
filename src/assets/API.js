import axios from "axios";

const myId = import.meta.env.VITE_TMDB_KEY;

axios.defaults.baseURL = `https://api.themoviedb.org`;
axios.defaults.headers = {
  common: {
    accept: "application/json",
    Authorization: `Bearer ${myId}`,
  },
};
axios.defaults.params = {
  language: "en-US",
};

export const trendsMovies = async () => {
  const response = await axios.get("/3/trending/movie/day");

  return response.data.results;
};

export const selectedMovie = async (search) => {
  const response = await axios.get(`/3/movie/${search}`);
  return response.data;
};

export const serchMovie = async (search) => {
  const response = await axios.get(`/3/search/movie?query=${search}`);
  return response.data.results;
};

export const selectedMovieCasts = async (id) => {
  const response = await axios.get(`/3/movie/${id}/credits`);
  return response.data.cast;
};

export const selectedReviews = async (id) => {
  const response = await axios.get(`/3/movie/${id}/reviews`);
  return response.data.results;
};
