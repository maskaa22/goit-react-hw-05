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

export const selectedMovieCasts = async (id) => {
  const response = await axios.get(`/3/movie/${id}/credits`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${myId}`,
    },
  });
  return response.data.cast;
};
export const selectedReviews = async (search) => {
  const response = await axios.get(`/3/movie/${search}?language=en-US`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${myId}`,
    },
  });
  return response.data;
};
