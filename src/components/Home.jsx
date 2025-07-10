import { useEffect, useState } from 'react';
import { Coffee, Users, Award, TrendingUp, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import '../Home.css'; 
import { createClient } from '@supabase/supabase-js';
import TeamCarousel from '../components/TeamCarousel';
import sirImage from '../assets/images/sir.jpg';
import mujwauziImage from '../assets/images/mujwauzi.jpg';
import rejeaImage from '../assets/images/rejea.png';
import kdcuOfficeImage from '../assets/images/kdlogo.png'; 
import steveImage from '../assets/images/steve.jpg'; 

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      title: "Welcome to KDCU Limited",
      subtitle: "Ushirika Hai Kwa Maendeleo",
      description: "Karagwe District Co-operative Union Ltd - Empowering small-scale coffee growers in the Kagera region of Tanzania.",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80"
    },
    {
      title: "Premium Coffee Excellence",
      subtitle: "Quality You Can Trust",
      description: "From our 132 member cooperatives to your cup - experience the finest coffee from the heart of Tanzania.",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Sustainable Farming",
      subtitle: "Growing Together",
      description: "Supporting over 12 million coffee plants with organic and 4C certified sustainable farming practices.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      title: "Community Partnership",
      subtitle: "Stronger Together",
      description: "Join our family of dedicated farmers working towards cooperative excellence and shared prosperity.",
      image: "https://images.unsplash.com/photo-1624644599581-682525b21602?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const managementTeam = [
    { name: "Domitian Robert Kigunia", role: "General Manager", image: sirImage },
    { name: "Tumsime Mujwauzi", role: "Factory Manager", image: mujwauziImage },
    { name: "Stephen Sirilo", role: "Marketing Manager", image: steveImage },
    { name: "Stephen Gamba", role: "Internal Auditor Manager", image: kdcuOfficeImage },
    { name: "Eva Albert Mutwe", role: "Human Resources Manager", image: kdcuOfficeImage },
    { name: "Rejea Nehemia Matata", role: "Chief Financial Officer", image: rejeaImage }
  ];

  const testimonials = [
    {
      name: "James Bahati",
      role: "Coffee Farmer",
      cooperative: "Nyakahanga AMCOS",
      text: "KDCU has transformed my farming practices. The training and fair prices have improved my family's livelihood significantly."
    },
    {
      name: "Grace Mutabazi",
      role: "Women's Group Leader",
      cooperative: "Kakanya AMCOS",
      text: "Through KDCU's programs, women farmers in our area have gained valuable skills and economic independence."
    },
    {
      name: "Emmanuel Kagaruki",
      role: "Youth Farmer",
      cooperative: "Rwenkorongo AMCOS",
      text: "The youth development programs have encouraged young people to stay in agriculture and embrace modern farming."
    }
  ];

  const investments = [
    {
      title: "Coffee Mill Expansion",
      description: "Upgrading processing capacity to handle increased production from member cooperatives."
    },
    {
      title: "Quality Laboratory",
      description: "Modern quality testing equipment to ensure coffee meets international standards."
    },
    {
      title: "Farmer Training Centers",
      description: "Establishing regional training facilities for continuous farmer education."
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Carousel auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const Spinner = () => (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p className="spinner-text">Loading...</p>
    </div>
  );

  const CarouselSection = () => (
    <section id="carousel" className="carousel-container">
      {carouselSlides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }} 
        >
          <div className="carousel-content">
            <h2>{slide.title}</h2>
            <h3 className="hero-subtitle">{slide.subtitle}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className="carousel-nav prev">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="carousel-nav next">
        <ChevronRight size={24} />
      </button>

      <div className="carousel-indicators">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </section>
  );

  const StatsSection = () => (
    <section className="section section-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-description">
            Making a difference in the lives of coffee farmers across Kagera region
          </p>
        </div>

        <div className="grid-3">
          <div className="card">
            <div className="card-icon">
              <Users size={32} />
            </div>
            <h3 className="card-title">Numerous AMCOS</h3>
            <p className="card-text">
              Member cooperatives united under our union
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Award size={32} />
            </div>
            <h3 className="card-title">Dedicated Staff</h3>
            <p className="card-text">
              Committed professionals working for our members
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <TrendingUp size={32} />
            </div>
            <h3 className="card-title">Vast Coffee Plant Network</h3>
            <p className="card-text">
              Coffee plants under our cooperative network
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const ProductsSection = () => (
    <section id="products" className="section section-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Coffee Products</h2>
          <p className="section-description">
            Discover our range of premium coffee varieties, each carefully sourced from our member farmers
          </p>
        </div>

        <div className="grid-3">
          {[
            {
              name: "Premium Coffee",
              description: "Premium Coffee is always fresh and our beans are locally roasted right here in Tanzania."
            },
            {
              name: "4C Coffee Certification",
              description: "4C certification applies high standards on economic, social and environmental conditions for coffee production and processing to establish sustainable practices."
            },
            {
              name: "Organic Coffee",
              description: "Organic coffee is coffee produced without the aid of artificial chemical substances, such as certain additives or some pesticides and herbicides."
            }
          ].map((product, index) => (
            <div key={index} className="card-white product-card">
              <div className="product-image">
                <Coffee size={64} />
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ color: '#92400e' }} className="star-rating">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>
                <p className="product-notes">{product.description}</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                  <button className="product-button" style={{ width: 'auto' }}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const InvestmentsSection = () => (
    <section id="investments" className="section section-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Investments</h2>
          <p className="section-description">
            Strategic investments in infrastructure and technology
          </p>
        </div>

        <div className="grid-3">
          {investments.map((investment, index) => (
            <div key={index} className="card">
              <h3 className="card-title">{investment.title}</h3>
              <p className="card-text">{investment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const TestimonialsSection = () => (
    <section className="section section-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Members Say</h2>
          <p className="section-description">
            Hear from our valued cooperative members
          </p>
        </div>

        <div className="grid-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-white testimonial-item">
              <div style={{ color: '#92400e', marginBottom: '1rem' }} className="star-rating">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="card-text" style={{ fontStyle: 'italic', marginBottom: '1.5rem'}}>
                "{testimonial.text}"
              </p>
              <div>
                <h4 style={{ margin: '0', color: '#1f2937'}}>{testimonial.name}</h4>
                <p style={{ margin: '0.25rem 0 0 0', color: '#92400e', fontSize: '0.9rem'}}>
                  {testimonial.role} - {testimonial.cooperative}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="App">
      <CarouselSection />
      <StatsSection />
      <ProductsSection />
      <InvestmentsSection />
      {/* New TeamCarousel for Management Team */}
      <TeamCarousel
        members={managementTeam}
        title="Our Management Team"
        description="Meet our professional management team driving operational excellence"
      />
      <TestimonialsSection />
    </div>
  );
};

export default Home;