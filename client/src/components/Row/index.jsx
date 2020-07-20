import React, { useState, useEffect } from 'react';
import axios from '../../services/baseUrl';
import './styles.css';
import Popup from './../PopupInformation';
import Modal from 'react-modal';
import { AiFillCloseCircle } from 'react-icons/ai';

Modal.setAppElement('#root');

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);

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
            onClick={() => setShow(true)}
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
          <div style={{ cursor: 'pointer' }}>
            <AiFillCloseCircle onClick={() => setShow(false)} size={35} color='red' />
          </div>
          <p>Content</p>
        </Modal>
      </div>
    </div>
  );
}

export default Row;
