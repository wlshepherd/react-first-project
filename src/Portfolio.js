import React, { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ImageGrid from './components/ImageGrid';
import Footer from './components/Footer';
import './styles/App.css';

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = useMemo(() => importAll(require.context('./photos', false, /\.(png|jpe?g|svg)$/)), []);

  return (
    <div className="portfolio-container">
      <NavBar/>
      <Banner/>
      <div><br/><br/></div>
      <h1 id="title" style={{ fontSize: '26px' }}><center>Selected Work (反烏托邦)</center></h1>
      <div><br/><br/></div>
      <div ref={ref}><ImageGrid images={images} inView={inView} /></div>
      <Footer/>
    </div>
  );
};

export default Portfolio;