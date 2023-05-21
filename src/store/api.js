import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

const movieAPI = {
  async getAllMovies() {
    try {
      const response = await axios.get(
        `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },

  async searchMovies(q) {
    try {
      const response = await axios.get(
        `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },

  async detailMovie(id) {
    try {
      const response = await axios.get(
        `${baseUrl}/movie/${id}?api_key=${apiKey}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default movieAPI;
