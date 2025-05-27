// src/components/Newsletter.jsx
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="container-xxl bg-primary newsletter py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                <h1 className="text-white mb-4">Stay Updated</h1>
                <p className="text-white mb-4">
                  Subscribe to our newsletter and be the first to know about our latest products, 
                  special offers, and exclusive deals. Get fresh updates delivered to your inbox!
                </p>
                <div className="newsletter-features">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fa fa-check-circle text-white me-2"></i>
                    <span className="text-white">Weekly product updates</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="fa fa-check-circle text-white me-2"></i>
                    <span className="text-white">Exclusive discounts</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa fa-check-circle text-white me-2"></i>
                    <span className="text-white">Recipe tips & tricks</span>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="bg-white rounded p-4">
                  <h4 className="text-center mb-4">Join Our Newsletter</h4>
                  
                  {isSubscribed ? (
                    <div className="text-center">
                      <div className="alert alert-success" role="alert">
                        <i className="fa fa-check-circle me-2"></i>
                        Thank you for subscribing! Check your email for confirmation.
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="newsletterEmail" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="newsletterEmail"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="agreeTerms"
                            required
                          />
                          <label className="form-check-label small" htmlFor="agreeTerms">
                            I agree to receive marketing emails and accept the{' '}
                            <a href="#" className="text-primary">Privacy Policy</a>
                          </label>
                        </div>
                      </div>
                      
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Subscribing...
                          </>
                        ) : (
                          <>
                            <i className="fa fa-paper-plane me-2"></i>
                            Subscribe Now
                          </>
                        )}
                      </button>
                    </form>
                  )}
                  
                  <div className="text-center mt-3">
                    <small className="text-muted">
                      Join over 10,000+ subscribers worldwide
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;