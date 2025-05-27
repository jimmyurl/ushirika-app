import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/kdlogo.png'; // Import the logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <img src={logo} alt="KDCU Logo" style={{ height: '40px' }} />
            </div>
            <div>
              <h1 className="logo-text">KDCU Limited</h1>
              <p className="logo-subtext">Cooperative Excellence</p>
            </div>
          </Link>

          <nav className="nav">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
              Services
            </Link>
            <Link to="/investments" className={`nav-link ${isActive('/investments') ? 'active' : ''}`}>
              Investments
            </Link>
            <Link to="/amcos" className={`nav-link ${isActive('/amcos') ? 'active' : ''}`}>
              AMCOS
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
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
            <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
            <Link to="/services" className={`mobile-nav-link ${isActive('/services') ? 'active' : ''}`}>
              Services
            </Link>
            <Link to="/investments" className={`mobile-nav-link ${isActive('/investments') ? 'active' : ''}`}>
              Investments
            </Link>
            <Link to="/amcos" className={`mobile-nav-link ${isActive('/amcos') ? 'active' : ''}`}>
              AMCOS
            </Link>
            <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;