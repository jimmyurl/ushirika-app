// src/components/InvestmentsPage.jsx
import { Coffee, TrendingUp, Award, Users, Menu, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import '../Home.css';

const InvestmentsPage = () => {
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
    },
    {
      title: "Warehouse Facilities",
      amount: "USD 350,000",
      description: "Expanding storage capacity to maintain coffee quality throughout the year."
    },
    {
      title: "Transportation Fleet",
      amount: "USD 250,000",
      description: "Investing in reliable transportation for efficient coffee collection and delivery."
    },
    {
      title: "Solar Drying Systems",
      amount: "USD 180,000",
      description: "Implementing sustainable drying solutions to reduce energy costs."
    }
  ];

  const stats = [
    {
      icon: <TrendingUp size={32} />,
      value: "USD 1.63M",
      label: "Total Investments"
    },
    {
      icon: <Award size={32} />,
      value: "6 Projects",
      label: "Completed"
    },
    {
      icon: <Users size={32} />,
      value: "132 AMCOS",
      label: "Beneficiaries"
    },
    {
      icon: <Coffee size={32} />,
      value: "12M+ Plants",
      label: "Impacted"
    }
  ];

  return (
    <div className="App">
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
              <a href="/services" className="nav-link">Services</a>
              <a href="/investments" className="nav-link active">Investments</a>
              <a href="/amcos" className="nav-link">AMCOS</a>
              <a href="/contact" className="nav-link">Contact</a>
            </nav>

            <button className="mobile-menu-button">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/coffee-field.jpg)' }}>
          <div className="container">
            <div className="hero-content">
              <h1>Our Strategic Investments</h1>
              <p className="hero-subtitle">Building sustainable infrastructure for cooperative growth</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section section-white">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Investment Impact</h2>
              <p className="section-description">
                How our strategic investments are transforming the cooperative
              </p>
            </div>
            
            <div className="grid-4">
              {stats.map((stat, index) => (
                <div key={index} className="card">
                  <div className="card-icon">
                    {stat.icon}
                  </div>
                  <h3 className="card-title">{stat.value}</h3>
                  <p className="card-text">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investments Section */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Current & Planned Investments</h2>
              <p className="section-description">
                Our commitment to infrastructure and technology development
              </p>
            </div>
            
            <div className="grid-3">
              {investments.map((investment, index) => (
                <div key={index} className="card-white">
                  <h3 className="card-title">{investment.title}</h3>
                  <p className="investment-amount" style={{color: '#92400e', fontWeight: 'bold', fontSize: '1.2rem', margin: '1rem 0'}}>
                    {investment.amount}
                  </p>
                  <p className="card-text">{investment.description}</p>
                  <button className="button" style={{marginTop: '1rem'}}>
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-dark">
          <div className="container">
            <div className="cta-content">
              <h2>Partner With Us</h2>
              <p>
                Interested in investing in our cooperative's future? We welcome partnerships 
                that align with our mission of sustainable coffee production.
              </p>
              <div style={{display: 'flex', gap: '1rem', marginTop: '2rem'}}>
                <button className="button button-primary">
                  Contact Our Team
                </button>
                <button className="button button-outline">
                  Download Prospectus
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </div>
  );
};

export default InvestmentsPage;