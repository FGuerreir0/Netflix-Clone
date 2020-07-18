import React, { useState, useEffect } from 'react';
import axios from '../../services/baseUrl';
import './styles.css';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //console.table(movies);
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_movies'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`poster ${isLargeRow && 'posterLarge'}`}
            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
