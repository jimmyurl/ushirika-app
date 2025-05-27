import { useEffect, useState } from 'react';
import { Coffee, Users, Award, TrendingUp, Menu, X, ChevronLeft, ChevronRight, Star, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import '../Home.css';
import logo from '../assets/kdlogo.png';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      title: "Welcome to KDCU Limited",
      subtitle: "Ushirika Hai Kwa Maendeleo",
      description: "Karagwe District Co-operative Union Ltd - Empowering small-scale coffee growers in the Kagera region of Tanzania."
    },
    {
      title: "Premium Coffee Excellence",
      subtitle: "Quality You Can Trust",
      description: "From our 132 member cooperatives to your cup - experience the finest coffee from the heart of Tanzania."
    },
    {
      title: "Sustainable Farming",
      subtitle: "Growing Together",
      description: "Supporting over 12 million coffee plants with organic and 4C certified sustainable farming practices."
    },
    {
      title: "Community Partnership",
      subtitle: "Stronger Together",
      description: "Join our family of dedicated farmers working towards cooperative excellence and shared prosperity."
    }
  ];

  const teamMembers = [
    {
      name: "John Mwasika",
      position: "General Manager",
      description: "Leading KDCU with over 15 years of cooperative management experience."
    },
    {
      name: "Mary Kagoma",
      position: "Quality Control Manager",
      description: "Ensuring our coffee meets international standards and certifications."
    },
    {
      name: "Peter Rweyemamu",
      position: "Operations Director",
      description: "Overseeing daily operations and member cooperative relations."
    }
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
      cooperative: "Bukoba AMCOS",
      text: "Through KDCU's programs, women farmers in our area have gained valuable skills and economic independence."
    },
    {
      name: "Emmanuel Kagaruki",
      role: "Youth Farmer",
      cooperative: "Karagwe AMCOS",
      text: "The youth development programs have encouraged young people to stay in agriculture and embrace modern farming."
    }
  ];

  const investments = [
    {
      title: "Coffee Mill Expansion",
      amount: "USD 500,000",
      description: "Upgrading processing capacity to handle increased production from member cooperatives."
    },
    {
      title: "Quality Laboratory",
      amount: "USD 150,000",
      description: "Modern quality testing equipment to ensure coffee meets international standards."
    },
    {
      title: "Farmer Training Centers",
      amount: "USD 200,000",
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

  const Header = () => (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <img src={logo} alt="KDCU Logo" style={{ height: '40px' }} /> {/* Updated logo */}
            </div>
            <div>
              <h1 className="logo-text">KDCU Limited</h1>
              <p className="logo-subtext">Cooperative Excellence</p>
            </div>
          </div>

          <nav className="nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/services" className="nav-link">Services</a>
            <a href="/investments" className="nav-link">Investments</a>
            <a href="/amcos" className="nav-link">AMCOS</a>
            <a href="/contact" className="nav-link">Contact</a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav">
            <a href="/" className="mobile-nav-link">Home</a>
            <a href="/about" className="mobile-nav-link">About</a>
            <a href="/services" className="mobile-nav-link">Services</a>
            <a href="/investments" className="mobile-nav-link">Investments</a>
            <a href="/amcos" className="mobile-nav-link">AMCOS</a>
            <a href="/contact" className="mobile-nav-link">Contact</a>
          </div>
        )}
      </div>
    </header>
  );

  const CarouselSection = () => (
    <section id="carousel" className="carousel-container">
      {carouselSlides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
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
            <h3 className="card-title">132 AMCOS</h3>
            <p className="card-text">
              Member cooperatives united under our union
            </p>
          </div>
          
          <div className="card">
            <div className="card-icon">
              <Award size={32} />
            </div>
            <h3 className="card-title">54 Staff</h3>
            <p className="card-text">
              Dedicated professionals working for our members
            </p>
          </div>
          
          <div className="card">
            <div className="card-icon">
              <TrendingUp size={32} />
            </div>
            <h3 className="card-title">12,342,899</h3>
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
              description: "Premium Coffee is always fresh and our beans are locally roasted right here in Tanzania.",
              price: "1,300"
            },
            { 
              name: "4C Coffee Certification", 
              description: "4C certification applies high standards on economic, social and environmental conditions for coffee production and processing to establish sustainable practices.",
              price: "1,800"
            },
            { 
              name: "Organic Coffee", 
              description: "Organic coffee is coffee produced without the aid of artificial chemical substances, such as certain additives or some pesticides and herbicides.",
              price: "2,100"
            }
          ].map((product, index) => (
            <div key={index} className="card-white">
              <div className="product-image">
                <Coffee size={64} />
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.name}</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                  <div style={{color: '#92400e'}}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>
                <p className="product-notes">{product.description}</p>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
                  <button className="product-button" style={{width: 'auto'}}>
                    View Details
                  </button>
                  <button className="product-button" style={{backgroundColor: '#78350f', width: 'auto'}}>
                    Price: {product.price}
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
              <p className="investment-amount" style={{color: '#92400e', fontWeight: 'bold', fontSize: '1.2rem', margin: '1rem 0'}}>
                {investment.amount}
              </p>
              <p className="card-text">{investment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const TeamSection = () => (
    <section className="section section-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-description">
            Experienced professionals dedicated to cooperative success
          </p>
        </div>
        
        <div className="grid-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="card">
              <div className="team-avatar" style={{
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                backgroundColor: '#92400e', 
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="card-title">{member.name}</h3>
              <p style={{color: '#92400e', fontWeight: 'bold', marginBottom: '1rem'}}>
                {member.position}
              </p>
              <p className="card-text">{member.description}</p>
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
            <div key={index} className="card-white">
              <div style={{color: '#92400e', marginBottom: '1rem'}}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="card-text" style={{fontStyle: 'italic', marginBottom: '1.5rem'}}>
                "{testimonial.text}"
              </p>
              <div>
                <h4 style={{margin: '0', color: '#1f2937'}}>{testimonial.name}</h4>
                <p style={{margin: '0.25rem 0 0 0', color: '#92400e', fontSize: '0.9rem'}}>
                  {testimonial.role} - {testimonial.cooperative}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer style={{backgroundColor: '#1f2937', color: 'white', padding: '3rem 0 1rem'}}>
      <div className="container">
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
          <div>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
              <Coffee size={32} color="#92400e" style={{marginRight: '0.5rem'}} />
              <div>
                <h3 style={{margin: '0', fontSize: '1.5rem'}}>KDCU Limited</h3>
                <p style={{margin: '0', color: '#9ca3af'}}>Cooperative Excellence</p>
              </div>
            </div>
            <p style={{color: '#9ca3af', lineHeight: '1.6'}}>
              Karagwe District Co-operative Union Ltd - Empowering small-scale coffee growers 
              in the Kagera region of Tanzania since establishment.
            </p>
          </div>
          
          <div>
            <h4 style={{marginBottom: '1rem', color: '#92400e'}}>Quick Links</h4>
            <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
              <li style={{marginBottom: '0.5rem'}}>
                <a href="/" style={{color: '#9ca3af', textDecoration: 'none'}}>Home</a>
              </li>
              <li style={{marginBottom: '0.5rem'}}>
                <a href="/about" style={{color: '#9ca3af', textDecoration: 'none'}}>About Us</a>
              </li>
              <li style={{marginBottom: '0.5rem'}}>
                <a href="/services" style={{color: '#9ca3af', textDecoration: 'none'}}>Services</a>
              </li>
              <li style={{marginBottom: '0.5rem'}}>
                <a href="/contact" style={{color: '#9ca3af', textDecoration: 'none'}}>Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{marginBottom: '1rem', color: '#92400e'}}>Contact Info</h4>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
              <MapPin size={16} style={{marginRight: '0.5rem', color: '#92400e'}} />
              <span style={{color: '#9ca3af', fontSize: '0.9rem'}}>Karagwe, Kagera Region, Tanzania</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
              <Phone size={16} style={{marginRight: '0.5rem', color: '#92400e'}} />
              <span style={{color: '#9ca3af', fontSize: '0.9rem'}}>+255 28 222 xxxx</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
              <Mail size={16} style={{marginRight: '0.5rem', color: '#92400e'}} />
              <span style={{color: '#9ca3af', fontSize: '0.9rem'}}>info@kdculimited.co.tz</span>
            </div>
            
            <div style={{display: 'flex', gap: '1rem'}}>
              <Facebook size={20} style={{color: '#9ca3af', cursor: 'pointer'}} />
              <Twitter size={20} style={{color: '#9ca3af', cursor: 'pointer'}} />
              <Instagram size={20} style={{color: '#9ca3af', cursor: 'pointer'}} />
              <Linkedin size={20} style={{color: '#9ca3af', cursor: 'pointer'}} />
            </div>
          </div>
        </div>
        
        <div style={{borderTop: '1px solid #374151', paddingTop: '1rem', textAlign: 'center'}}>
          <p style={{margin: '0', color: '#9ca3af', fontSize: '0.9rem'}}>
            © 2024 KDCU Limited. All rights reserved. | Ushirika Hai Kwa Maendeleo
          </p>
        </div>
      </div>
    </footer>
  );

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="App">
      <Header />
      <CarouselSection />
      <StatsSection />
      <ProductsSection />
      <InvestmentsSection />
      <TeamSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;