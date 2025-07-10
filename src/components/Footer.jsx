// Footer.jsx
import { Coffee, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Added Linkedin

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
            <span style={{color: '#9ca3af', fontSize: '0.9rem'}}>+255 28 222 7105</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
            <Mail size={16} style={{marginRight: '0.5rem', color: '#92400e'}} />
            <span style={{color: '#9ca3af', fontSize: '0.9rem'}}>info@kdcu.co.tz</span>
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

export default Footer;