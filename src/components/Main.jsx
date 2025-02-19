import React from 'react';
import { Navbar } from './Navbar';  // ✅ Use named import
import Home from './Home';
import { Footer } from './Footer';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
};

export default Main;
