import { useState } from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    const quickLinks = [
      { name: 'About Us', href: '#about' },
      { name: 'Products', href: '#products' },
      { name: 'Services', href: '#services' },
      { name: 'Team', href: '#team' },
      { name: 'Contact', href: '#contact' }
    ];
  
    const services = [
      { name: 'Coffee Roasting', href: '#' },
      { name: 'Tea Blending', href: '#' },
      { name: 'Custom Orders', href: '#' },
      { name: 'Wholesale', href: '#' },
      { name: 'Catering', href: '#' }
    ];
  
    const contactInfo = {
      address: '123 Coffee Street, Bean City, BC 12345',
      phone: '+1 (555) 123-4567',
      email: 'info@ushirika.com',
      hours: 'Mon - Fri: 6:00 AM - 8:00 PM\nSat - Sun: 7:00 AM - 9:00 PM'
    };
  
    return (
      <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            {/* Company Info */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Ushirika</h4>
              <p className="mb-4">
                Premium quality coffee, tea, and pastries crafted with passion. 
                We bring you the finest products from around the world, roasted 
                and prepared with care.
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
  
            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Quick Links</h4>
              {quickLinks.map((link, index) => (
                <a key={index} className="btn btn-link text-light" href={link.href}>
                  {link.name}
                </a>
              ))}
            </div>
  
            {/* Services */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Our Services</h4>
              {services.map((service, index) => (
                <a key={index} className="btn btn-link text-light" href={service.href}>
                  {service.name}
                </a>
              ))}
            </div>
  
            {/* Contact Info */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact Us</h4>
              <div className="contact-info">
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3"></i>
                  {contactInfo.address}
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt me-3"></i>
                  {contactInfo.phone}
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-3"></i>
                  {contactInfo.email}
                </p>
                <div className="mt-3">
                  <h5 className="text-white mb-2">Business Hours</h5>
                  <p className="mb-0" style={{ whiteSpace: 'pre-line' }}>
                    {contactInfo.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <div className="border-top border-secondary pt-4">
                  &copy; {currentYear} Ushirika. All Rights Reserved.
                </div>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="border-top border-secondary pt-4">
                  <a className="text-light me-3" href="#" aria-label="Privacy Policy">
                    Privacy Policy
                  </a>
                  <a className="text-light me-3" href="#" aria-label="Terms of Service">
                    Terms of Service
                  </a>
                  <a className="text-light" href="#" aria-label="Cookie Policy">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;