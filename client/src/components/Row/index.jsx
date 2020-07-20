import React, { useState, useEffect } from 'react';
import axios from '../../services/baseUrl';
import './styles.css';
import Popup from './../PopupInformation';
import Modal from 'react-modal';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdStar } from 'react-icons/md';

Modal.setAppElement('#root');

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);
  const [showMovie, setShowMovie] = useState({});

  function display(newShowMovie) {
    if (newShowMovie !== showMovie) {
      setShowMovie(newShowMovie);
    }
    setShow(true);
    console.log(showMovie);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h2 className='row_title'>{title}</h2>
      <div className='row_movies'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`poster ${isLargeRow && 'posterLarge'}`}
            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => display(movie)}
          />
        ))}
      </div>
      <div className='modal_position'>
        <Modal
          isOpen={show}
          onRequestClose={() => setShow(false)}
          className='Modal'
          overlayClassName='Overlay'
        >
          <div
            className='modal_multimedia'
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original${showMovie?.backdrop_path}")`
            }}
          >
            <div className='modal_header'>
              <h3>{showMovie?.title || showMovie?.name || showMovie?.original_name}</h3>
              <div style={{ cursor: 'pointer' }}>
                <AiFillCloseCircle onClick={() => setShow(false)} size={35} color='red' />
              </div>
            </div>

            <div className='modal_content'>
              <div className='modal_description'>
                <p>{showMovie.overview}</p>
                <p style={{ marginTop: '10px' }}>
                  <strong>Released at:</strong> {showMovie.first_air_date}
                </p>
                <div className='modal_rating'>
                  <p>{showMovie.vote_average} / 10 </p>
                  <div>
                    <MdStar size={25} />
                  </div>
                </div>
              </div>
              <div>
                <div className='modal_trailer'>
                  <p>{showMovie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Row;
