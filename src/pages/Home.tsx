import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default Home;