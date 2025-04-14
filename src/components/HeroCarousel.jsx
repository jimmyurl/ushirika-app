// src/components/HeroCarousel.jsx
import { useState } from 'react';

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      image: "/assets/images/mwenyekiti.jpg",
      title: "Ushirika Hai Kwa Maendeleo",
      subtitle: "Welcome to KDCU"
    },
    {
      image: "/assets/images/bashungwa.jpg",
      title: "A Message from Manager",
      subtitle: "Welcome to KDCU"
    },
    // Add other carousel items
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container-fluid p-0 mb-5">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div 
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <img className="w-100" src={item.image} alt={item.title} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '700px' }}>
                  <h6 className="section-title text-white text-uppercase mb-3">{item.subtitle}</h6>
                  <h1 className="display-3 text-white mb-4">{item.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button 
          className="carousel-control-prev" 
          type="button" 
          onClick={prevSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          onClick={nextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;