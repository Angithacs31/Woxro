import React from 'react';
import "./Home.css";


const Home = () => {
  return (
    <div className='home'>
      <div className='image-container'>
        <img src="/img7_img.png" className="image img1" alt="img1" />
        <img src="/img2_img.png" className="image img2" alt="img2" />
        <img src="/img3_img.png" className="image img3" alt="img3" />
        <img src="/img4_img.png" className="image img4" alt="img4" />
        <img src="/img5_img.png" className="image img5" alt="img5" />
        <img src="/img6_img.png" className="image img6" alt="img6" />
      </div>

      <div className='home-contents'>
        <h1>Where Innovation Meets Precision.</h1>
        <p>
          Symphonia unites visionary thinkers, creative architects, and analytical 
          experts, collaborating seamlessly to transform challenges into opportunities. 
          Together, we deliver tailored solutions that drive impact and inspire growth.
        </p>
      </div>
    </div>
  );
}

export default Home;
