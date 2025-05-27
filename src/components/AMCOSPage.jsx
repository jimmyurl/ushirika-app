import { useState } from 'react';
import { Coffee, Users, Menu, X, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Award, TrendingUp } from 'lucide-react';

const AMCOSPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const amcosList = [
    { name: "Nyakahanga AMCOS", district: "Karagwe", members: 450, established: 2010 },
    { name: "Bukoba Central AMCOS", district: "Bukoba", members: 320, established: 2008 },
    { name: "Muleba AMCOS", district: "Muleba", members: 280, established: 2012 },
    { name: "Kyerwa AMCOS", district: "Kyerwa", members: 195, established: 2015 },
    { name: "Misenyi AMCOS", district: "Misenyi", members: 210, established: 2011 },
    { name: "Ibuga AMCOS", district: "Karagwe", members: 165, established: 2014 },
    { name: "Kashambya AMCOS", district: "Bukoba", members: 240, established: 2009 },
    { name: "Nyaishozi AMCOS", district: "Muleba", members: 180, established: 2013 },
  ];

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
            <a href="/services" className="nav-link">Services</a>
            <a href="/investments" className="nav-link">Investments</a>
            <a href="/amcos" className="nav-link active">AMCOS</a>
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

  const AMCOSHeroSection = () => (
    <section style={{
      background: 'linear-gradient(135deg, #92400e 0%, #78350f 100%)',
      color: 'white',
      padding: '6rem 0 4rem',
      marginTop: '80px'
    }}>
      <div className="container">
        <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
          <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem'}}>
            Our Member AMCOS
          </h1>
          <p style={{fontSize: '1.2rem', opacity: '0.9', lineHeight: '1.6'}}>
            132 Agricultural Marketing Cooperative Societies working together for sustainable coffee farming and economic empowerment
          </p>
        </div>
      </div>
    </section>
  );

  const AMCOSOverviewSection = () => (
    <section className="section section-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">AMCOS Network Overview</h2>
          <p className="section-description">
            Our network spans across the Kagera region, connecting farmers and communities
          </p>
        </div>
        
        <div className="grid-3">
          <div className="card">
            <div className="card-icon">
              <Users size={32} />
            </div>
            <h3 className="card-title">132 AMCOS</h3>
            <p className="card-text">
              Member cooperatives united under our union across Kagera region
            </p>
          </div>
          
          <div className="card">
            <div className="card-icon">
              <Award size={32} />
            </div>
            <h3 className="card-title">25,000+ Farmers</h3>
            <p className="card-text">
              Individual farmers benefiting from our cooperative network
            </p>
          </div>
          
          <div className="card">
            <div className="card-icon">
              <TrendingUp size={32} />
            </div>
            <h3 className="card-title">5 Districts</h3>
            <p className="card-text">
              Coverage across Karagwe, Bukoba, Muleba, Kyerwa, and Misenyi districts
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const AMCOSBenefitsSection = () => (
    <section className="section section-light">
      <div className="container">
        <div className="amcos-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          <div className="card">
            <h3 className="card-title">Primary Cooperatives Structure</h3>
            <p className="card-text">
              Our member AMCOS are spread across the Kagera region, representing thousands of small-scale coffee farmers who work together to improve their livelihoods.
            </p>
            <ul style={{listStyle: 'none', padding: '0', marginTop: '1rem'}}>
              <li style={{padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb'}}>• Bukoba District AMCOS</li>
              <li style={{padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb'}}>• Karagwe District AMCOS</li>
              <li style={{padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb'}}>• Muleba District AMCOS</li>
              <li style={{padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb'}}>• Kyerwa District AMCOS</li>
              <li style={{padding: '0.5rem 0'}}>• Misenyi District AMCOS</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="card-title">Member Benefits</h3>
            <p className="card-text">
              Being part of KDCU provides numerous advantages to our member cooperatives and their individual farmer members:
            </p>
            <ul style={{listStyle: 'none', padding: '0', marginTop: '1rem'}}>
              <li style={{padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb'}}>• Fair price guarantee for coffee beans</li>
              <li style={{padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb'}}>• Quality improvement training programs</li>
              <li style={{padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb'}}>• Access to international export markets</li>
              <li style={{padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb'}}>• Technical support and modern equipment</li>
              <li style={{padding: '0.5rem 0'}}>• Financial services and microfinance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  const AMCOSListSection = () => (
    <section className="section section-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Member AMCOS</h2>
          <p className="section-description">
            Meet some of our active and successful member cooperatives
          </p>
        </div>
        
        <div className="grid-2">
          {amcosList.map((amcos, index) => (
            <div key={index} className="card">
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#92400e',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <Users size={24} color="white" />
                </div>
                <div>
                  <h3 className="card-title" style={{margin: '0', fontSize: '1.25rem'}}>
                    {amcos.name}
                  </h3>
                  <p style={{margin: '0', color: '#92400e', fontSize: '0.9rem'}}>
                    <MapPin size={14} style={{display: 'inline', marginRight: '0.25rem'}} />
                    {amcos.district} District
                  </p>
                </div>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem'}}>
                <div>
                  <p style={{margin: '0', fontSize: '0.9rem', color: '#6b7280'}}>Members:</p>
                  <p style={{margin: '0', fontWeight: 'bold', color: '#1f2937'}}>{amcos.members}</p>
                </div>
                <div>
                  <p style={{margin: '0', fontSize: '0.9rem', color: '#6b7280'}}>Established:</p>
                  <p style={{margin: '0', fontWeight: 'bold', color: '#1f2937'}}>{amcos.established}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{textAlign: 'center', marginTop: '2rem'}}>
          <p style={{color: '#6b7280', fontSize: '1.1rem'}}>
            ... and 124 more cooperatives across the Kagera region
          </p>
        </div>
      </div>
    </section>
  );

  const JoinAMCOSSection = () => (
    <section className="section section-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Join Our Network</h2>
          <p className="section-description">
            Interested in becoming a member cooperative? Learn about the process
          </p>
        </div>
        
        <div className="grid-3">
          <div className="card">
            <h3 className="card-title">Eligibility Requirements</h3>
            <ul style={{listStyle: 'none', padding: '0', margin: '1rem 0'}}>
              <li style={{padding: '0.5rem 0'}}>• Registered AMCOS in Kagera region</li>
              <li style={{padding: '0.5rem 0'}}>• Minimum 50 active farmer members</li>
              <li style={{padding: '0.5rem 0'}}>• Coffee production focus</li>
              <li style={{padding: '0.5rem 0'}}>• Good governance practices</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="card-title">Application Process</h3>
            <ul style={{listStyle: 'none', padding: '0', margin: '1rem 0'}}>
              <li style={{padding: '0.5rem 0'}}>• Submit membership application</li>
              <li style={{padding: '0.5rem 0'}}>• Provide required documentation</li>
              <li style={{padding: '0.5rem 0'}}>• Site visit and assessment</li>
              <li style={{padding: '0.5rem 0'}}>• Board approval and integration</li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="card-title">Get Started</h3>
            <p className="card-text" style={{marginBottom: '1.5rem'}}>
              Ready to join our cooperative network? Contact our membership team for guidance and support.
            </p>
            <button style={{
              backgroundColor: '#92400e',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              Contact Us
            </button>
          </div>
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

  return (
    <div className="App">
      <Header />
      <AMCOSHeroSection />
      <AMCOSOverviewSection />
      <AMCOSBenefitsSection />
      <AMCOSListSection />
      <JoinAMCOSSection />
      <Footer />
    </div>
  );
};

export default AMCOSPage;