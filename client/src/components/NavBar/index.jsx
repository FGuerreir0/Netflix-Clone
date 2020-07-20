import React from 'react';
import './styles.css';
import { useState, useEffect } from 'react';
import { IoMdNotifications } from 'react-icons/io';
import { GiPresent } from 'react-icons/gi';

import { GoSearch } from 'react-icons/go';

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
        <a href='http://localhost:3000/' className='nav_link'>
          Home
        </a>
        <a href='http://localhost:3000/' className='nav_link'>
          TV Shows
        </a>
        <a href='http://localhost:3000/' className='nav_link'>
          Movies
        </a>

        <a href='http://localhost:3000/' className='nav_link'>
          Latest
        </a>

        <a href='http://localhost:3000/' className='nav_link'>
          My List
        </a>
      </div>
      <div className='nav_user'>
        <GoSearch className='nav_user_item' size={23} color={'white'} />
        <GiPresent className='nav_user_item' size={25} color={'white'} />
        <IoMdNotifications className='nav_user_item' size={25} color={'white'} />
        <img
          className='nav_user_item'
          style={{ width: '30px', objectFit: 'contain' }}
          src={process.env.PUBLIC_URL + '/images/user.png'}
          alt='User Icon'
        />
      </div>
    </div>
  );
}

export default NavBar;
