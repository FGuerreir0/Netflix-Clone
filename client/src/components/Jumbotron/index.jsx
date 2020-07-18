import React, { useState, useEffect } from 'react';
import axios from '../../services/baseUrl';
import apirequests from '../../services/apiRequest';
import './styles.css';

function Jumbotron() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(apirequests.fetchNetflixOriginals);
      // console.log(request.data);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
    }
    fetchData();
  }, []);

  //console.log(movie);

  function shrink(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <div
      className='jumbotron'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
      }}
    >
      <div className='jumbotron_content'>
        <h1 className='jumbotron_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='jumbotron_buttons'>
          <button className='jumbotron_button_play'>Play</button>
          <button className='jumbotron_button_more'>More Information</button>
        </div>
        <h2 className='jumbotron_description'>{shrink(movie?.overview, 150)}</h2>
      </div>
      <div className='fade'></div>
    </div>
  );
}

export default Jumbotron;
