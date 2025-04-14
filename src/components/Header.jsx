// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid bg-dark px-0">
      <div className="row gx-0">
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <Link to="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
            <h1 className="m-0 text-primary text-uppercase">KDCU
              <img src="/assets/images/kdlogo.png" alt="KDCU Logo"/>
            </h1>
          </Link>
        </div>
        <div className="col-lg-9">
          <div className="row gx-0 bg-white d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i className="fa fa-envelope text-primary me-2"></i>
                <p className="mb-0">info@kdcu.co.tz</p>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-2">
                <i className="fa fa-phone-alt text-primary me-2"></i>
                <p className="mb-0">028 222 7105</p>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <a className="me-3" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="me-3" href="https://twitter.com/LtdKdcu"><i className="fab fa-twitter"></i></a>
                <a className="me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                <a className="me-3" href=""><i className="fab fa-instagram"></i></a>
                <a className="" href="https://www.youtube.com/@kdcutv3095"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
            <Link to="/" className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 text-primary text-uppercase">KDCU</h1>
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse justify-content-between ${isOpen ? 'show' : ''}`} id="navbarCollapse">
              <div className="navbar-nav mr-auto py-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/services" className="nav-item nav-link">Services</Link>
                <Link to="/amcos" className="nav-item nav-link">Amcos</Link>
                <div className="nav-item dropdown">
                  <Link to="/news" className="nav-link dropdown-toggle">News</Link>
                  <div className="dropdown-menu rounded-0 m-0">
                    <Link to="/news" className="dropdown-item">Tangazo la Zabuni</Link>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
              </div>
              <Link to="/amcos" className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">
                AMCOS Hai<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;