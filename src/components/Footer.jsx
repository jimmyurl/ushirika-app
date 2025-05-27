import { Coffee, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-icon">
                  <Coffee size={32} color="#92400e" />
                </div>
                <div>
                  <h3 className="footer-brand">KDCU Limited</h3>
                  <p className="footer-tagline">"Ushirika Hai Kwa Maendeleo"</p>
                </div>
              </div>
              <p className="footer-description">
                Empowering coffee growers in the Kagera region of Tanzania through cooperative excellence and sustainable farming practices.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-link">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#investments">Investments</a></li>
                <li><a href="#amcos">AMCOS</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                <li><a href="#">Coffee Processing</a></li>
                <li><a href="#">Quality Control</a></li>
                <li><a href="#">Farmer Training</a></li>
                <li><a href="#">Market Access</a></li>
                <li><a href="#">Certification Support</a></li>
                <li><a href="#">Equipment Supply</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-title">Contact Info</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>Kayanga, Karagwe District<br />Kagera Region, Tanzania</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>+255 123 456 789</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>info@kdculimited.co.tz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2024 KDCU Limited. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="/contact">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;