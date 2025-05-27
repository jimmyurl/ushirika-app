import { useEffect, useState } from 'react';
import { Coffee, Users, Award, TrendingUp, Mail, Phone, MapPin, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../Home.css';

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
              <Coffee size={32} color="#92400e" />
            </div>
            <div>
              <h1 className="logo-text">KDCU Limited</h1>
              <p className="logo-subtext">Cooperative Excellence</p>
            </div>
          </div>

          <nav className="nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#investments" className="nav-link">Investments</a>
            <a href="#amcos" className="nav-link">Amcos</a>
            <a href="#contact" className="nav-link">Contact</a>
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
            <a href="#home" className="mobile-nav-link">Home</a>
            <a href="#about" className="mobile-nav-link">About</a>
            <a href="#services" className="mobile-nav-link">Services</a>
            <a href="#investments" className="mobile-nav-link">Investments</a>
            <a href="#amcos" className="mobile-nav-link">Amcos</a>
            <a href="#contact" className="mobile-nav-link">Contact</a>
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

  const HeroSection = () => (
    <section id="home" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Welcome to KDCU
          <span className="hero-subtitle">"Ushirika Hai Kwa Maendeleo"</span>
        </h1>
        <p className="hero-description">
          Karagwe District Co-operative Union Ltd (KDCU) is an organization of small-scale coffee growers in the Kagera region in the northwest corner of Tanzania.
        </p>
        <div className="hero-buttons">
          <button className="primary-button">
            Learn More
          </button>
          <button className="secondary-button">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section id="about" className="section section-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About KDCU Limited</h2>
          <p className="section-description">
            Welcome to <span style={{fontWeight: 'bold'}}>KDCU Limited</span>
          </p>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <p className="card-text">
            Karagwe District Co-operative Union Ltd (KDCU) is an organisation of small-scale coffee growers in the Kagera region in the northwest corner of Tanzania, about 200 miles south of the equator. The region has a population of around 408,000 and shares borders with Uganda to the north, Rwanda and Burundi to the west, and Lake Victoria to the east. The KDCU head office is in Kayanga, about 100 miles west of Bukoba, the regional capital.
          </p>
          
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
                Coffee estimates demonstrating our scale
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ProductsSection = () => (
    <section id="products" className="section section-light">
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
              image: "premium.jpg", 
              description: "Premium Coffee is always fresh and our beans are locally roasted right here in Tanzania.",
              price: "1,300"
            },
            { 
              name: "4C Coffee Certification", 
              image: "4c.jpg", 
              description: "4C certification applies high standards on economic, social and environmental conditions for coffee production and processing to establish sustainable practices.",
              price: "1,800"
            },
            { 
              name: "Organic Coffee", 
              image: "organic.webp", 
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
                  <small style={{color: '#92400e'}}>★★★★★</small>
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

  const TeamSection = () => (
    <section id="team" className="section section-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Management</h2>
          <p className="section-description">
            Meet the dedicated team leading our cooperative union forward
          </p>
        </div>
        
        <div className="grid-4">
          {[
            { name: "Arnold Kikasiga", role: "General Manager", image: "kdcu-office.JPG" },
            { name: "Steve Cyliro", role: "Marketing Manager", image: "kdcu-office.JPG" },
            { name: "Mnyama", role: "Chief Accountant", image: "kdcu-office.JPG" },
            { name: "Dada Omutwe", role: "HR Manager", image: "kdcu-office.JPG" }
          ].map((member, index) => (
            <div key={index} className="team-member">
              <div style={{position: 'relative'}}>
                <div style={{height: '300px', background: '#ddd', borderRadius: '0.5rem', overflow: 'hidden'}}>
                  <img src={`img/${member.image}`} alt={member.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div style={{position: 'absolute', left: '50%', top: '100%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center'}}>
                  <a href="#" style={{backgroundColor: '#92400e', color: 'white', padding: '0.5rem', borderRadius: '50%', margin: '0 0.25rem'}}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" style={{backgroundColor: '#92400e', color: 'white', padding: '0.5rem', borderRadius: '50%', margin: '0 0.25rem'}}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" style={{backgroundColor: '#92400e', color: 'white', padding: '0.5rem', borderRadius: '50%', margin: '0 0.25rem'}}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div style={{textAlign: 'center', padding: '1rem', marginTop: '1.5rem'}}>
                <h3 className="team -name">{member.name}</h3>
                <p style={{color: '#666', fontSize: '0.9rem'}}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section id="contact" className="section section-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">
            Get in touch with us for more information about our services
          </p>
        </div>
        
        <div className="grid-2">
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h3>Address</h3>
                <p>Kayanga, Karagwe District<br />Kagera Region, Tanzania</p>
              </div>
            </div>
            
            <div className="contact-item">
              <Phone size={24} />
              <div>
                <h3>Phone</h3>
                <p>+255 123 456 789</p>
              </div>
            </div>
            
            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h3>Email</h3>
                <p>info@kdculimited.co.tz</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" className="form-input" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" className="form-input"></textarea>
              </div>
              <button type="submit" className="primary-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>KDCU Limited</h3>
            <p>Empowering coffee growers in the Kagera region of Tanzania through cooperative excellence.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Kayanga, Karagwe District</p>
            <p>Kagera Region, Tanzania</p>
            <p>Phone: +255 123 456 789</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 KDCU Limited. All rights reserved.</p>
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
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;