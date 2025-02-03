import axios from "axios";

const myId = import.meta.env.VITE_TMDB_KEY;

axios.defaults.baseURL = `https://api.themoviedb.org`;

export const trendsMovies = async () => {
  const response = await axios.get("/3/trending/movie/day?language=en-US", {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${myId}`,
    },
  });

  return response.data.results;
};

export const selectedMovie = async (search) => {
  const response = await axios.get(`/3/movie/${search}?language=en-US`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${myId}`,
    },
  });
  return response.data;
};

export const serchMovie = async (search) => {
  const response = await axios.get(`/3/search/movie?query=${search}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${myId}`,
    },
  });
  
  return response.data.results;
};

export const selectedMovieCasts = async (id) => {
  const response = await axios.get(`/3/movie/${id}/credits`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${myId}`,
    },
  });
  return response.data.cast;
};

export const selectedReviews = async (id) => {
  const response = await axios.get(`/3/movie/${id}/reviews`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${myId}`,
    },
  });

  return response.data.results;
};
