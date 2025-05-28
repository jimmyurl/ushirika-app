import { Mail, Phone, MapPin } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


const Contact = () => {
  return (
    <div className="page-container">
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="hero-container">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-description">
            Get in touch with us for more information about our services and cooperative opportunities
          </p>
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
                  <p>Kayanga, Karagwe District<br />Kagera Region, Tanzania</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+255 123 456 789</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>info@kdculimited.co.tz</p>
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