import { useState } from 'react';
import { Coffee, Users, Award, TrendingUp, Menu, X, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const ServicesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const services = [
    {
      title: "Coffee Processing",
      description: "State-of-the-art processing facilities ensuring premium coffee quality from farm to export.",
      icon: <Coffee size={32} />
    },
    {
      title: "Farmer Training",
      description: "Comprehensive training programs on sustainable farming practices and quality improvement.",
      icon: <Users size={32} />
    },
    {
      title: "Quality Certification",
      description: "Organic and 4C certification services helping farmers access premium markets.",
      icon: <Award size={32} />
    },
    {
      title: "Market Access",
      description: "Direct market linkages ensuring fair prices and reliable income for our members.",
      icon: <TrendingUp size={32} />
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

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
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/services" className="nav-link active">Services</a>
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

  const ServicesSection = () => (
    <section className="section section-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive support for our member cooperatives
          </p>
        </div>
        
        <div className="grid-2">
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className="card-icon">
                {service.icon}
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-text">{service.description}</p>
            </div>
          ))}
        </div>

        <div style={{marginTop: '4rem'}}>
          <h3 className="section-title">Additional Services</h3>
          <div className="grid-3" style={{marginTop: '2rem'}}>
            <div className="card">
              <h4 className="card-title">Technical Support</h4>
              <p className="card-text">
                On-site technical assistance for farming equipment, processing machinery, 
                and agricultural best practices.
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">Financial Services</h4>
              <p className="card-text">
                Microfinance solutions, savings programs, and financial literacy 
                training for our cooperative members.
              </p>
            </div>
            <div className="card">
              <h4 className="card-title">Export Facilitation</h4>
              <p className="card-text">
                Complete export documentation, logistics coordination, and 
                international market connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const NewsletterSection = () => (
    <section className="section section-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Stay Updated</h2>
          <p className="section-description">
            Subscribe to our newsletter for the latest news and updates
          </p>
        </div>
        
        <div style={{maxWidth: '500px', margin: '0 auto'}}>
          <form onSubmit={handleNewsletterSubmit} style={{display: 'flex', gap: '1rem'}}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              style={{
                flex: '1',
                padding: '1rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem',
                fontSize: '1rem'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#92400e',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem'
              }}
            >
              <Send size={20} />
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer style={{backgroundColor: '#1f2937', color: 'white', padding: '3rem 0 1rem'}}>
      <div className="container">
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
          <div>
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

  return (
    <div className="App">
      <Header />
      <div style={{paddingTop: '80px'}}>
        <ServicesSection />
        <NewsletterSection />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;