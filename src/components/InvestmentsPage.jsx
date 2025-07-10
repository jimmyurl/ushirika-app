// src/components/InvestmentsPage.jsx
import { Coffee, TrendingUp, Award, Users } from 'lucide-react'; // Removed Menu, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin
import '../Home.css';

const InvestmentsPage = () => {
  const investments = [
    {
      title: "Kamahungu Factory",
      amount: "USD 750,000",
      description: "State-of-the-art coffee processing facility designed to handle premium coffee production with modern wet processing technology."
    },
    {
      title: "Coffee Tree Hotel",
      amount: "USD 1,200,000",
      description: "Hospitality venture showcasing our coffee heritage while providing quality accommodation and promoting coffee tourism."
    },
    {
      title: "Nyaishozi Secondary School",
      amount: "USD 400,000",
      description: "Educational investment supporting community development and ensuring quality education for the next generation."
    },
    {
      title: "Blue Effort Company Limited",
      amount: "USD 300,000",
      description: "Strategic business partnership focused on expanding our commercial reach and diversifying our cooperative portfolio."
    },
    {
      title: "KDCU 94.5MHz FM Radio",
      amount: "USD 85,000",
      description: "Community radio station providing agricultural information, market updates, and educational content to our members."
    }
  ];

  const stats = [
    {
      icon: <TrendingUp size={32} />,
      value: "USD 2.74M",
      label: "Total Investments"
    },
    {
      icon: <Award size={32} />,
      value: "5 Projects",
      label: "Active"
    },
    {
      icon: <Users size={32} />,
      value: "132 AMCOS",
      label: "Beneficiaries"
    },
    {
      icon: <Coffee size={32} />,
      value: "12M+ Plants",
      label: "Impacted"
    }
  ];

  return (
    <div className="App">
      {/* Removed the Header component definition from here */}

      <main>
        {/* Hero Section - Updated to match About and Contact pages style */}
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
              Our Strategic Investments
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
              Discover how KDCU is investing in key infrastructure and partnerships to strengthen our cooperative network and support our member communities across the Kagera region.
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
                View Projects
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
                Partner With Us
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section section-white">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Investment Impact</h2>
              <p className="section-description">
                How our strategic investments are transforming the cooperative
              </p>
            </div>
            
            <div className="grid-4">
              {stats.map((stat, index) => (
                <div key={index} className="card">
                  <div className="card-icon">
                    {stat.icon}
                  </div>
                  <h3 className="card-title">{stat.value}</h3>
                  <p className="card-text">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investments Section */}
        <section className="section section-light">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Current & Planned Investments</h2>
              <p className="section-description">
                Our commitment to infrastructure and technology development
              </p>
            </div>
            
            <div className="grid-3">
              {investments.map((investment, index) => (
                <div key={index} className="card">
                  <h3 className="card-title">{investment.title}</h3>
                  <p className="card-text">{investment.description}</p>
                  <button className="button">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-dark">
          <div className="container">
            <div className="cta-content">
              <h2>Partner With Us</h2>
              <p>
                Interested in investing in our cooperative's future? We welcome partnerships 
                that align with our mission of sustainable coffee production.
              </p>
              <div style={{display: 'flex', gap: '1rem', marginTop: '2rem'}}>
                <button className="button button-primary">
                  Contact Our Team
                </button>
                <button className="button button-outline">
                  Download Prospectus
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Removed the Footer component definition from here */}
    </div>
  );
};

export default InvestmentsPage;