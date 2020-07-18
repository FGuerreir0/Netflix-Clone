import axios from 'axios';

const URL = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export default URL;
