import { Mail, Phone, MapPin } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Contact = () => {
  return (
    <div className="page-container">
      {/* Contact Hero Section - Updated to match About page style */}
      <section style={{
        background: 'linear-gradient(135deg, #FEA116 0%, #e4950f 100%)',
        color: 'white',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Contact Us
            <span style={{
              display: 'block',
              fontSize: '1.5rem',
              fontWeight: '400',
              marginTop: '0.5rem',
              color: 'rgba(255,255,255,0.9)'
            }}>
              "Ushirika Hai Kwa Maendeleo"
            </span>
          </h1>
          <p style={{
            fontSize: '1.1rem',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.6'
          }}>
            Get in touch with us for more information about our services and cooperative opportunities. We're here to help and would love to hear from you.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              backgroundColor: 'white',
              color: '#FEA116',
              padding: '1rem 2rem',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f3f4f6';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              Send Message
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              border: '2px solid white',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#FEA116';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-description">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <h3>Address</h3>
                  <p>Karagwe District Cooperative Union Limited, 398 Bugene Road,</p><p> P.O. Box 14, 35402<br />Karagwe Kagera Region, Tanzania.</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+255 28 222 7105</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>info@kdcu.co.tz</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="Enter your full name" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" placeholder="Enter your email address" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Enter message subject" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" placeholder="Enter your message here..." rows="6" className="form-input"></textarea>
                </div>
                <button type="submit" className="primary-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Find Us</h2>
            <p className="section-description">
              Visit our office in Kayanga, Karagwe District
            </p>
          </div>
          <div className="map-container">
            <div className="map-placeholder">
              <MapPin size={48} />
              <p>Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;