import React from 'react';
import ZoomImage from './ZoomImage';
import '../styles/ImageGrid.css';

const ImageGrid = ({ images, inView }) => (
    <div className="image-grid-container">
      <ul className="image-grid">
        {Object.keys(images).map((key, index) => (
          <li key={index}>
            <ZoomImage src={images[key]} alt={`Image of ${key}`} index={index} inView={inView} />
          </li>
        ))}
      </ul>
    </div>
  );

export default ImageGrid;
