import { useState } from 'react';
import { Coffee, Users, Award, TrendingUp, Send } from 'lucide-react'; // Removed Menu, X, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin

const ServicesPage = () => {
  const [email, setEmail] = useState(''); // isMenuOpen and setIsMenuOpen are no longer needed here as Header is removed.

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

  // Removed the Header component definition from here as it's handled globally in App.jsx

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

  // Removed the Footer component definition from here as it's handled globally in App.jsx

  return (
    <div className="App">
      {/* <Header /> was removed from here */}
      <div style={{paddingTop: '80px'}}>
        <ServicesSection />
        <NewsletterSection />
      </div>
      {/* <Footer /> was removed from here */}
    </div>
  );
};

export default ServicesPage;