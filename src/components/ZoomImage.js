import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import FullScreen from './FullScreen';
import '../styles/App.css';
import '../styles/ImageGrid.css';

const ZoomImage = React.memo(({ src, alt, index, inView }) => {
  const [hovered, setHovered] = useState(false);
  const [error, setError] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const props = useSpring({
    opacity: inView ? (hovered ? 0.8 : 1) : 0,
    transform: inView ? (hovered ? 'scale(1.1)' : 'scale(1)') : 'scale(0.8)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { mass: 1, tension: 110, friction: 23 },
  });

  const handleImageClick = () => {
    setIsFullScreen(true); 
  };

  const closeFullScreen = () => {
    setIsFullScreen(false); 
  };

  return (
    <>
      <animated.img
        src={error ? 'fallback-image.jpg' : src}
        alt={alt}
        className="zoom"
        style={props}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onError={() => setError(true)}
        loading="lazy"
        onClick={handleImageClick} 
      />
      {isFullScreen && (
        <FullScreen src={src} alt={alt} onClose={closeFullScreen} />
      )}
    </>
  );
});

export default ZoomImage;
