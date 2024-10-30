import React from 'react';
import '../styles/Banner.css';
import backgroundImage from '../images/background.jpg';

const Banner = () => {
  return (
    <div id="banner">
      <img src={backgroundImage} alt="background" />
    </div>
  );
};

export default Banner;