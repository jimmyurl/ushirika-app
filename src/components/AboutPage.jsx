// src/pages/AboutPage.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="page-container">
      {/* Add Header component here */}
      <Header />
      
      {/* Hero Section for About */}
      <section className="hero">
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

      {/* About Section */}
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

      {/* Team Section */}
      <section id="team" className="section section-light">
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
                  <h3 className="team-name">{member.name}</h3>
                  <p style={{color: '#666', fontSize: '0.9rem'}}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Footer component here */}
      <Footer />
    </div>
  );
};

export default AboutPage;