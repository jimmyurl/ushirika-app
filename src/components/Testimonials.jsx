// src/components/Testimonials.jsx
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Food Blogger',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      text: 'Amazing quality products! The coffee beans are absolutely incredible and the pastries are fresh every single day. Highly recommended!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Restaurant Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      text: 'We have been sourcing our coffee and tea from them for years. Consistent quality and excellent customer service. Simply the best!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Café Owner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      text: 'Their organic tea collection is outstanding. My customers always ask where I source my tea from. Thank you for the excellent products!',
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Coffee Enthusiast',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      text: 'The specialty blend coffee is my morning fuel. Rich, aromatic, and perfectly roasted. I cannot imagine starting my day without it.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fa fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}
      ></i>
    ));
  };

  return (
    <div className="container-xxl py-5 bg-light">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-light text-center text-primary px-3">Testimonials</h6>
          <h1 className="mb-5">What Our Customers Say</h1>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="testimonial-carousel position-relative">
              <div className="testimonial-item text-center">
                <div className="testimonial-content bg-white p-5 rounded shadow">
                  <div className="testimonial-image mb-4">
                    <img
                      className="rounded-circle mx-auto d-block"
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div className="testimonial-stars mb-3">
                    {renderStars(testimonials[currentSlide].rating)}
                  </div>
                  
                  <p className="fs-5 text-muted mb-4">
                    "{testimonials[currentSlide].text}"
                  </p>
                  
                  <h5 className="mb-1">{testimonials[currentSlide].name}</h5>
                  <p className="text-primary mb-0">{testimonials[currentSlide].position}</p>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                className="btn btn-primary btn-lg position-absolute top-50 start-0 translate-middle-y"
                onClick={prevSlide}
                style={{ marginLeft: '-50px' }}
              >
                <i className="fa fa-chevron-left"></i>
              </button>
              
              <button
                className="btn btn-primary btn-lg position-absolute top-50 end-0 translate-middle-y"
                onClick={nextSlide}
                style={{ marginRight: '-50px' }}
              >
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
            
            {/* Indicators */}
            <div className="d-flex justify-content-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`btn btn-sm mx-1 ${
                    currentSlide === index ? 'btn-primary' : 'btn-outline-primary'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  style={{ width: '12px', height: '12px', borderRadius: '50%' }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;