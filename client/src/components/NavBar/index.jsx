import React from 'react';
import './styles.css';
import { useState, useEffect } from 'react';

function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className='nav_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='Netflix Logo'
      />
      <div className='nav_links'>
        <a href='' className='nav_link'>
          Home
        </a>
        <a href='' className='nav_link'>
          Series
        </a>
        <a href='' className='nav_link'>
          Movies
        </a>

        <a href='' className='nav_link'>
          Most Recent
        </a>
      </div>

      <img className='nav_user' src={process.env.PUBLIC_URL + '/images/user.png'} alt='User Icon' />
    </div>
  );
}

export default NavBar;
