// src/components/InvestmentsPage.jsx
import { Coffee, TrendingUp, Award, Users } from 'lucide-react'; // Removed Menu, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin
import '../Home.css';

const InvestmentsPage = () => {
  const investments = [
    {
      title: "Coffee Mill Expansion",
      amount: "USD 500,000",
      description: "Upgrading processing capacity to handle increased production from member cooperatives."
    },
    {
      title: "Quality Laboratory",
      amount: "USD 150,000",
      description: "Modern quality testing equipment to ensure coffee meets international standards."
    },
    {
      title: "Farmer Training Centers",
      amount: "USD 200,000",
      description: "Establishing regional training facilities for continuous farmer education."
    },
    {
      title: "Warehouse Facilities",
      amount: "USD 350,000",
      description: "Expanding storage capacity to maintain coffee quality throughout the year."
    },
    {
      title: "Transportation Fleet",
      amount: "USD 250,000",
      description: "Investing in reliable transportation for efficient coffee collection and delivery."
    },
    {
      title: "Solar Drying Systems",
      amount: "USD 180,000",
      description: "Implementing sustainable drying solutions to reduce energy costs."
    }
  ];

  const stats = [
    {
      icon: <TrendingUp size={32} />,
      value: "USD 1.63M",
      label: "Total Investments"
    },
    {
      icon: <Award size={32} />,
      value: "6 Projects",
      label: "Completed"
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
        {/* Hero Section */}
        <section className="hero-section" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/coffee-field.jpg)' }}>
          <div className="container">
            <div className="hero-content">
              <h1>Our Strategic Investments</h1>
              <p className="hero-subtitle">Building sustainable infrastructure for cooperative growth</p>
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
                <div key={index} className="card-white">
                  <h3 className="card-title">{investment.title}</h3>
                  <p className="investment-amount" style={{color: '#92400e', fontWeight: 'bold', fontSize: '1.2rem', margin: '1rem 0'}}>
                    {investment.amount}
                  </p>
                  <p className="card-text">{investment.description}</p>
                  <button className="button" style={{marginTop: '1rem'}}>
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