import React from 'react';
import '../styles/FullScreen.css';

const FullScreen = ({ src, alt, onClose }) => {
  return (
    <div className="fullscreen-overlay" onClick={onClose}>
      <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="fullscreen-image" />
        <button className="close-button" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default FullScreen;