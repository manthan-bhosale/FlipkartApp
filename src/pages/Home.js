import React from 'react';
import Bannner from '../Components/Home/Banner';
import Banner2 from '../Components/Home/Banner2';
import './Home.css';
import Products from '../Components/Home/Products';
import Navbar from '../Components/Home/Navbar';
import CategoryDisplay from '../Components/Home/CategoryDisplay';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <CategoryDisplay />
      <Bannner />
      <Banner2 />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
