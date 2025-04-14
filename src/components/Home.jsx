// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import About from '../components/About';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-xxl bg-white p-0">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <HeroCarousel />
          <About />
          <Products />
          <Testimonials />
          <Team />
          <Newsletter />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;