import { useEffect, useState } from 'react';
import { Coffee, Users, Award, TrendingUp, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const styles = {
    // Loading Spinner
    spinnerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#fef3c7',
      flexDirection: 'column'
    },
    spinner: {
      width: '4rem',
      height: '4rem',
      border: '4px solid #f3e8c2',
      borderTop: '4px solid #d97706',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },
    spinnerText: {
      marginTop: '1rem',
      color: '#92400e',
      fontWeight: '500'
    },

    // Header
    header: {
      background: 'linear-gradient(to right, #78350f, #92400e, #78350f)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    },
    headerContainer: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '0 1rem'
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    logoIcon: {
      backgroundColor: '#fef3c7',
      padding: '0.5rem',
      borderRadius: '9999px'
    },
    logoText: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#fef3c7'
    },
    logoSubtext: {
      color: '#fde68a',
      fontSize: '0.875rem'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem'
    },
    navLink: {
      color: '#fef3c7',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.3s ease'
    },
    mobileMenuButton: {
      display: 'none',
      color: '#fef3c7',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    },
    mobileNav: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      paddingBottom: '1rem'
    },
    mobileNavLink: {
      color: '#fef3c7',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      transition: 'color 0.3s ease'
    },

    // Hero Section
    hero: {
      background: 'linear-gradient(135deg, #fef3c7, #fed7aa, #fef3c7)',
      padding: '5rem 0'
    },
    heroContainer: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '0 1rem',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '1.5rem',
      lineHeight: '1.1'
    },
    heroSubtitle: {
      display: 'block',
      color: '#92400e'
    },
    heroDescription: {
      fontSize: '1.25rem',
      color: '#92400e',
      marginBottom: '2rem',
      maxWidth: '48rem',
      margin: '0 auto 2rem',
      lineHeight: '1.6'
    },
    heroButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center'
    },
    primaryButton: {
      backgroundColor: '#92400e',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '9999px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    secondaryButton: {
      border: '2px solid #92400e',
      color: '#92400e',
      backgroundColor: 'transparent',
      padding: '1rem 2rem',
      borderRadius: '9999px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },

    // Section Styles
    section: {
      padding: '5rem 0'
    },
    sectionWhite: {
      backgroundColor: 'white'
    },
    sectionLight: {
      background: 'linear-gradient(135deg, #fef3c7, #fed7aa)'
    },
    sectionDark: {
      background: 'linear-gradient(135deg, #78350f, #92400e)'
    },
    container: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '0 1rem'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '1rem'
    },
    sectionTitleLight: {
      color: '#fef3c7'
    },
    sectionDescription: {
      fontSize: '1.25rem',
      color: '#92400e',
      maxWidth: '48rem',
      margin: '0 auto'
    },
    sectionDescriptionLight: {
      color: '#fde68a'
    },

    // Grid Layouts
    grid3: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    grid4: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem'
    },

    // Cards
    card: {
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#fef3c7',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.3s ease'
    },
    cardWhite: {
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'box-shadow 0.3s ease'
    },
    cardIcon: {
      backgroundColor: '#92400e',
      width: '4rem',
      height: '4rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem',
      color: 'white'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#78350f',
      marginBottom: '1rem'
    },
    cardText: {
      color: '#92400e'
    },

    // Product Cards
    productImage: {
      height: '12rem',
      background: 'linear-gradient(135deg, #92400e, #78350f)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fef3c7'
    },
    productContent: {
      padding: '1.5rem'
    },
    productTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#78350f',
      marginBottom: '0.5rem'
    },
    productOrigin: {
      color: '#92400e',
      marginBottom: '0.5rem'
    },
    productNotes: {
      color: '#b45309',
      fontSize: '0.875rem',
      marginBottom: '1rem'
    },
    productButton: {
      width: '100%',
      backgroundColor: '#92400e',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },

    // Team Section
    teamMember: {
      textAlign: 'center'
    },
    teamAvatar: {
      width: '8rem',
      height: '8rem',
      background: 'linear-gradient(135deg, #92400e, #78350f)',
      borderRadius: '50%',
      margin: '0 auto 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fef3c7'
    },
    teamName: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#78350f',
      marginBottom: '0.5rem'
    },
    teamRole: {
      color: '#92400e',
      fontWeight: '500',
      marginBottom: '0.5rem'
    },
    teamExperience: {
      color: '#b45309',
      fontSize: '0.875rem'
    },

    // Contact Section
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '3rem'
    },
    contactInfo: {
      color: '#fef3c7'
    },
    contactTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1.5rem'
    },
    contactList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    contactForm: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '2rem',
      borderRadius: '0.75rem'
    },
    formTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#fef3c7',
      marginBottom: '1.5rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '0.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid #d97706',
      color: 'white',
      fontSize: '1rem'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '0.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid #d97706',
      color: 'white',
      fontSize: '1rem',
      resize: 'vertical',
      minHeight: '100px'
    },
    formButton: {
      width: '100%',
      backgroundColor: '#fef3c7',
      color: '#78350f',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },

    // Footer
    footer: {
      backgroundColor: '#451a03',
      color: '#fef3c7',
      padding: '3rem 0',
      textAlign: 'center'
    },
    footerLogo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      marginBottom: '1.5rem'
    },
    footerLogoIcon: {
      backgroundColor: '#92400e',
      padding: '0.5rem',
      borderRadius: '9999px'
    },
    footerTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    footerSubtext: {
      color: '#fde68a',
      fontSize: '0.875rem'
    },
    footerDescription: {
      color: '#fde68a',
      marginBottom: '1rem'
    },
    footerCopyright: {
      color: '#f59e0b',
      fontSize: '0.875rem'
    },

    // Responsive Styles
    '@media (max-width: 768px)': {
      nav: {
        display: 'none'
      },
      mobileMenuButton: {
        display: 'block'
      },
      heroTitle: {
        fontSize: '2rem'
      },
      heroButtons: {
        flexDirection: 'column'
      },
      contactGrid: {
        gridTemplateColumns: '1fr'
      },
      grid3: {
        gridTemplateColumns: '1fr'
      },
      grid4: {
        gridTemplateColumns: '1fr'
      }
    }
  };

  // Add keyframe animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .nav-link:hover {
        color: #fde68a !important;
      }
      
      .primary-button:hover {
        background-color: #78350f !important;
        transform: scale(1.05);
      }
      
      .secondary-button:hover {
        background-color: #92400e !important;
        color: white !important;
      }
      
      .card:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2) !important;
      }
      
      .card-white:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2) !important;
      }
      
      .product-button:hover {
        background-color: #78350f !important;
      }
      
      .form-button:hover {
        background-color: white !important;
      }
      
      @media (max-width: 768px) {
        .nav { display: none !important; }
        .mobile-menu-button { display: block !important; }
        .hero-title { font-size: 2rem !important; }
        .hero-buttons { flex-direction: column !important; }
        .contact-grid { grid-template-columns: 1fr !important; }
        .grid-3 { grid-template-columns: 1fr !important; }
        .grid-4 { grid-template-columns: 1fr !important; }
      }
      
      @media (min-width: 640px) {
        .hero-buttons { flex-direction: row !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const Spinner = () => (
    <div style={styles.spinnerContainer}>
      <div style={styles.spinner}></div>
      <p style={styles.spinnerText}>Loading...</p>
    </div>
  );

  const Header = () => (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <Coffee size={32} color="#92400e" />
            </div>
            <div>
              <h1 style={styles.logoText}>KDCU Limited</h1>
              <p style={styles.logoSubtext}>Cooperative Excellence</p>
            </div>
          </div>

          <nav style={styles.nav} className="nav">
            <a href="#home" style={styles.navLink} className="nav-link">Home</a>
            <a href="#about" style={styles.navLink} className="nav-link">About</a>
            <a href="#services" style={styles.navLink} className="nav-link">Services</a>
            <a href="#investments" style={styles.navLink} className="nav-link">Investments</a>
            <a href="#amcos" style={styles.navLink} className="nav-link">Amcos</a>
            <a href="#contact" style={styles.navLink} className="nav-link">Contact</a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={styles.mobileMenuButton}
            className="mobile-menu-button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div style={styles.mobileNav}>
            <a href="#home" style={styles.mobileNavLink}>Home</a>
            <a href="#about" style={styles.mobileNavLink}>About</a>
            <a href="#services" style={styles.mobileNavLink}>Services</a>
            <a href="#investments" style={styles.mobileNavLink}>Investments</a>
            <a href="#amcos" style={styles.mobileNavLink}>Amcos</a>
            <a href="#contact" style={styles.mobileNavLink}>Contact</a>
          </div>
        )}
      </div>
    </header>
  );

  const HeroSection = () => (
    <section id="home" style={styles.hero}>
      <div style={styles.heroContainer}>
        <h1 style={styles.heroTitle} className="hero-title">
          Welcome to KDCU
          <span style={styles.heroSubtitle}>"Ushirika Hai Kwa Maendeleo"</span>
        </h1>
        <p style={styles.heroDescription}>
          Karagwe District Co-operative Union Ltd (KDCU) is an organization of small-scale coffee growers in the Kagera region in the northwest corner of Tanzania.
        </p>
        <div style={styles.heroButtons} className="hero-buttons">
          <button style={styles.primaryButton} className="primary-button">
            Learn More
          </button>
          <button style={styles.secondaryButton} className="secondary-button">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section id="about" style={{...styles.section, ...styles.sectionWhite}}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>About KDCU Limited</h2>
          <p style={styles.sectionDescription}>
            Welcome to <span style={{fontWeight: 'bold'}}>KDCU Limited</span>
          </p>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <p style={styles.cardText}>
            Karagwe District Co-operative Union Ltd (KDCU) is an organisation of small-scale coffee growers in the Kagera region in the northwest corner of Tanzania, about 200 miles south of the equator. The region has a population of around 408,000 and shares borders with Uganda to the north, Rwanda and Burundi to the west, and Lake Victoria to the east. The KDCU head office is in Kayanga, about 100 miles west of Bukoba, the regional capital.
          </p>
          
          <div style={styles.grid3} className="grid-3">
            <div style={styles.card} className="card">
              <div style={styles.cardIcon}>
                <Users size={32} />
              </div>
              <h3 style={styles.cardTitle}>132 AMCOS</h3>
              <p style={styles.cardText}>
                Member cooperatives united under our union
              </p>
            </div>
            
            <div style={styles.card} className="card">
              <div style={styles.cardIcon}>
                <Award size={32} />
              </div>
              <h3 style={styles.cardTitle}>54 Staff</h3>
              <p style={styles.cardText}>
                Dedicated professionals working for our members
              </p>
            </div>
            
            <div style={styles.card} className="card">
              <div style={styles.cardIcon}>
                <TrendingUp size={32} />
              </div>
              <h3 style={styles.cardTitle}>12,342,899</h3>
              <p style={styles.cardText}>
                Coffee estimates demonstrating our scale
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ProductsSection = () => (
    <section id="products" style={{...styles.section, ...styles.sectionLight}}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Our Coffee Products</h2>
          <p style={styles.sectionDescription}>
            Discover our range of premium coffee varieties, each carefully sourced from our member farmers
          </p>
        </div>
        
        <div style={styles.grid3} className="grid-3">
          {[
            { 
              name: "Premium Coffee", 
              image: "premium.jpg", 
              description: "Premium Coffee is always fresh and our beans are locally roasted right here in Tanzania.",
              price: "1,300"
            },
            { 
              name: "4C Coffee Certification", 
              image: "4c.jpg", 
              description: "4C certification applies high standards on economic, social and environmental conditions for coffee production and processing to establish sustainable practices.",
              price: "1,800"
            },
            { 
              name: "Organic Coffee", 
              image: "organic.webp", 
              description: "Organic coffee is coffee produced without the aid of artificial chemical substances, such as certain additives or some pesticides and herbicides.",
              price: "2,100"
            }
          ].map((product, index) => (
            <div key={index} style={styles.cardWhite} className="card-white">
              <div style={styles.productImage}>
                <Coffee size={64} />
              </div>
              <div style={styles.productContent}>
                <h3 style={styles.productTitle}>{product.name}</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                  <small style={{color: '#92400e'}}>★★★★★</small>
                </div>
                <p style={styles.productNotes}>{product.description}</p>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
                  <button style={{...styles.productButton, width: 'auto'}} className="product-button">
                    View Details
                  </button>
                  <button style={{...styles.productButton, backgroundColor: '#78350f', width: 'auto'}} className="product-button">
                    Price: {product.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const TeamSection = () => (
    <section id="team" style={{...styles.section, ...styles.sectionWhite}}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Our Management</h2>
          <p style={styles.sectionDescription}>
            Meet the dedicated team leading our cooperative union forward
          </p>
        </div>
        
        <div style={styles.grid4} className="grid-4">
          {[
            { name: "Arnold Kikasiga", role: "General Manager", image: "kdcu-office.JPG" },
            { name: "Steve Cyliro", role: "Marketing Manager", image: "kdcu-office.JPG" },
            { name: "Mnyama", role: "Chief Accountant", image: "kdcu-office.JPG" },
            { name: "Dada Omutwe", role: "HR Manager", image: "kdcu-office.JPG" }
          ].map((member, index) => (
            <div key={index} style={styles.teamMember}>
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
                <h3 style={styles.teamName}>{member.name}</h3>
                <p style={styles.teamRole}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const TestimonialSection = () => (
    <section style={{...styles.section, backgroundColor: '#78350f', color: 'white'}}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={{...styles.sectionTitle, color: 'white'}}>Testimonials</h2>
          <p style={{...styles.sectionDescription, color: '#fde68a'}}>
            What our members say about us
          </p>
        </div>
        
        <div style={{display: 'flex', overflowX: 'auto', gap: '1rem', padding: '1rem 0'}}>
          {[
            { 
              quote: "Kwa Kweli Chama Kikuu cha Ushirika cha KDCU Kimekua mkombozi wetu kwa kutoa bei nzuri hata wakulima wenu wanapata faida.", 
              name: "Mwenyekiti-Rwenkorongo", 
              location: "Rwenkorongo",
              image: "steve.JPG"
            },
            { 
              quote: "Kwa Kweli Chama Kikuu cha Ushirika cha KDCU Kimekua mkombozi wetu kwa kutoa bei nzuri hata wakulima wenu wanapata faida.", 
              name: "Mwenyekiti-Mgakorongo", 
              location: "Mgakorongo",
              image: "mujwauzi.JPG"
            },
            { 
              quote: "Kwa Kweli Chama Kikuu cha Ushirika cha KDCU Kimekua mkombozi wetu kwa kutoa bei nzuri hata wakulima wenu wanapata faida.", 
              name: "Mwenyekiti-Kakanya", 
              location: "Kakanya",
              image: "steve.JPG"
            }
          ].map((testimonial, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              minWidth: '300px',
              color: '#78350f'
            }}>
              <p style={{marginBottom: '1rem', fontStyle: 'italic'}}>{testimonial.quote}</p>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={`img/${testimonial.image}`} alt={testimonial.name} style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  marginRight: '1rem'
                }} />
                <div>
                  <h6 style={{fontWeight: 'bold', margin: 0}}>{testimonial.name}</h6>
                  <small>{testimonial.location}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section id="contact" style={{...styles.section, ...styles.sectionDark}}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={{...styles.sectionTitle, ...styles.sectionTitleLight}}>Get in Touch</h2>
          <p style={{...styles.sectionDescription, ...styles.sectionDescriptionLight}}>
            Ready to learn more about our cooperative union?
          </p>
        </div>
        
        <div style={styles.contactGrid} className="contact-grid">
          <div style={styles.contactInfo}>
            <h3 style={styles.contactTitle}>Contact Information</h3>
            <div style={styles.contactList}>
              <div style={styles.contactItem}>
                <Mail size={20} color="#fde68a" />
                <span>info@kdcu.co.tz</span>
              </div>
              <div style={styles.contactItem}>
                <Phone size={20} color="#fde68a" />
                <span>028 222 7105</span>
              </div>
              <div style={styles.contactItem}>
                <MapPin size={20} color="#fde68a" />
                <span>Bomani-Kayanga 0014, Karagwe</span>
              </div>
            </div>
          </div>
          
          <div style={styles.contactForm}>
            <h3 style={styles.formTitle}>Send us a Message</h3>
            <div style={styles.formGroup}>
              <input
                type="text"
                placeholder="Your Name"
                style={styles.input}
              />
              <input
                type="email"
                placeholder="Your Email"
                style={styles.input}
              />
              <textarea
                placeholder="Your Message"
                style={styles.textarea}
              />
              <button style={styles.formButton} className="form-button">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const NewsletterSection = () => (
    <section style={{...styles.section, backgroundColor: 'white'}}>
      <div style={{...styles.container, maxWidth: '1200px'}}>
        <div style={{
          border: '1px solid #ddd',
          borderRadius: '0.5rem',
          padding: '1rem',
          backgroundColor: 'white'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'white'
          }}>
            <h4 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#78350f'}}>
              Subscribe Our <span style={{color: '#92400e', textTransform: 'uppercase'}}>Newsletter</span>
            </h4>
            <div style={{
              position: 'relative',
              maxWidth: '400px',
              margin: '0 auto'
            }}>
              <input 
                type="text" 
                placeholder="Enter your email" 
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '1px solid #ddd',
                  borderRadius: '0.25rem'
                }} 
              />
              <button style={{
                position: 'absolute',
                top: '50%',
                right: '0.5rem',
                transform: 'translateY(-50%)',
                backgroundColor: '#92400e',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                cursor: 'pointer'
              }}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
          <div style={{padding: '1rem'}}>
            <div style={{
              backgroundColor: '#92400e',
              borderRadius: '0.5rem',
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <a href="index.html" style={{textDecoration: 'none'}}>
                <h1 style={{color: 'white', textTransform: 'uppercase', margin: 0}}>KDCU Limited</h1>
              </a>
              <p style={{color: '#fde68a', marginTop: '0.5rem'}}>
                Download <a href="#" style={{color: 'white', fontWeight: '500'}}>Price List</a>, Note the prices varies based on the change in dollar currency.
              </p>
            </div>
          </div>
          
          <div style={{padding: '1rem'}}>
            <h6 style={{
              ...styles.sectionTitle,
              color: '#fde68a',
              fontSize: '1.25rem',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              Contact
            </h6>
            <p style={{...styles.cardText, color: '#fde68a', marginBottom: '0.5rem'}}>
              <MapPin size={16} style={{marginRight: '0.5rem'}} />
              Bomani-Kayanga 0014,Karagwe
            </p>
            <p style={{...styles.cardText,color: '#fde68a', marginBottom: '0.5rem'}}>
              <Phone size={16} style={{marginRight: '0.5rem'}} />
              028 222 7105
            </p>
            <p style={{...styles.cardText, color: '#fde68a', marginBottom: '0.5rem'}}>
              <Mail size={16} style={{marginRight: '0.5rem'}} />
              info@kdcu.co.tz
            </p>
          </div>
          
          <div style={{padding: '1rem'}}>
            <h6 style={{
              ...styles.sectionTitle,
              color: '#fde68a',
              fontSize: '1.25rem',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              Quick Links
            </h6>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <a href="#home" style={{color: '#fde68a', textDecoration: 'none'}}>Home</a>
              <a href="#about" style={{color: '#fde68a', textDecoration: 'none'}}>About</a>
              <a href="#services" style={{color: '#fde68a', textDecoration: 'none'}}>Services</a>
              <a href="#contact" style={{color: '#fde68a', textDecoration: 'none'}}>Contact</a>
            </div>
          </div>
          
          <div style={{padding: '1rem'}}>
            <h6 style={{
              ...styles.sectionTitle,
              color: '#fde68a',
              fontSize: '1.25rem',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              Follow Us
            </h6>
            <div style={{display: 'flex', gap: '0.5rem'}}>
              <a href="#" style={{
                backgroundColor: '#92400e',
                color: 'white',
                padding: '0.5rem',
                borderRadius: '0.25rem',
                textDecoration: 'none'
              }}>
                Facebook
              </a>
              <a href="#" style={{
                backgroundColor: '#92400e',
                color: 'white',
                padding: '0.5rem',
                borderRadius: '0.25rem',
                textDecoration: 'none'
              }}>
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid #92400e',
          marginTop: '2rem',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={styles.footerCopyright}>
            © 2024 KDCU Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;