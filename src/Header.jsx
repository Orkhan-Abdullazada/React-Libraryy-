// import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

const Header = () => {
  

  return (
    <div className='headerDiv'>
      <h1>Dada Book Searching App</h1>
      <input
        type="text"
        placeholder='Find book'
      />
      <div className="icon-container">
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </div>
    </div>
  );
};

export {Header};

