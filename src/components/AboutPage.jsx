import { Users, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const AboutPage = () => {
  const [currentBoardSlide, setCurrentBoardSlide] = useState(0);
  const [currentManagementSlide, setCurrentManagementSlide] = useState(0);

  const boardMembers = [
    { name: "Faxon Josiah Mbyemeire", role: "Chairman", image: "/assets/images/kdlogo.png" },
    { name: "Elimerick Furula Kamaleck", role: "Vice Chairman", image: "/assets/images/kdcu-office.JPG" },
    { name: "Gaudioza Tulizo Wilison", role: "Board Member", image: "/assets/images/kdcu-office.JPG" },
    { name: "Fidoline Faustine Kasenene", role: "Board Member", image: "/assets/images/kdcu-office.JPG" },
    { name: "Phoibe Apolinary", role: "Board Member", image: "/assets/images/kdcu-office.JPG" }
  ];

  const managementTeam = [
    { name: "Domitian Rober Kigunia ", role: "General Manager", image: "/assets/images/kdcu-office.JPG" },
    { name: "Tumsime Mujwauzi", role: "Factory Manager", image: "/assets/images/kdcu-office.JPG" },
    { name: "Eva Albert Mutwe", role: "Human Resources Manager", image: "/assets/images/kdcu-office.JPG" },
    { name: "Stephen Sirilo", role: "Marketing Manager", image: "/assets/images/kdcu-office.JPG" },
    { name: "Stephen GAMBA", role: "Chief Internal Auditor", image: "/assets/images/kdcu-office.JPG" },
    { name: "Rejea Nehemia Matata", role: "Chief Accountant", image: "/assets/images/kdcu-office.JPG" }
  ];

  const stats = [
    {
      icon: <Users size={32} />,
      value: "133 AMCOS",
      label: "Member Cooperatives"
    },
    {
      icon: <Award size={32} />,
      value: "54 Staff",
      label: "Dedicated Professionals"
    },
    {
      icon: <TrendingUp size={32} />,
      value: "12,342,899",
      label: "Coffee Estimates"
    }
  ];

  const TeamCarousel = ({ members, currentSlide, setCurrentSlide, title, description }) => {
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % members.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + members.length) % members.length);
    };

    const goToSlide = (index) => {
      setCurrentSlide(index);
    };

    return (
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            {title}
          </h2>
          <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            {description}
          </p>
        </div>
        
        {/* Carousel Container with proper spacing for buttons */}
        <div style={{ 
          position: 'relative', 
          maxWidth: '500px', 
          margin: '0 auto'
        }}>
          {/* Carousel Content */}
          <div style={{ 
            overflow: 'hidden', 
            borderRadius: '12px',
            height: '500px',
            position: 'relative'
          }}>
            {members.map((member, index) => (
              <div 
                key={index} 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: currentSlide === index ? 1 : 0,
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                  transition: 'all 0.5s ease-in-out',
                  padding: '20px',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  padding: '2rem',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  {/* Member Image */}
                  <div style={{
                    width: '150px',
                    height: '150px',
                    margin: '0 auto 1.5rem',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid #FEA116',
                    background: '#f3f4f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'none',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#e5e7eb',
                      color: '#6b7280',
                      flexDirection: 'column',
                      fontSize: '2.5rem'
                    }}>
                      👤
                      <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Photo</div>
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '0.5rem'
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    color: '#FEA116',
                    fontWeight: '600',
                    marginBottom: '1.5rem',
                    fontSize: '1rem'
                  }}>
                    {member.role}
                  </p>
                  
                  {/* Social Links */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem'
                  }}>
                    <a 
                      href="#" 
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#FEA116',
                        color: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        transition: 'background-color 0.3s'
                      }}
                      onClick={(e) => e.preventDefault()}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#e4950f'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#FEA116'}
                    >
                      f
                    </a>
                    <a 
                      href="#" 
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#FEA116',
                        color: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        transition: 'background-color 0.3s'
                      }}
                      onClick={(e) => e.preventDefault()}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#e4950f'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#FEA116'}
                    >
                      t
                    </a>
                    <a 
                      href="#" 
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#FEA116',
                        color: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'background-color 0.3s'
                      }}
                      onClick={(e) => e.preventDefault()}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#e4950f'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#FEA116'}
                    >
                      in
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons - Fixed positioning */}
          <button 
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '-70px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#FEA116',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#e4950f';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FEA116';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '-70px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#FEA116',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#e4950f';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FEA116';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          gap: '0.5rem'
        }}>
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: currentSlide === index ? '#FEA116' : '#d1d5db',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: currentSlide === index ? 'scale(1.2)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                if (currentSlide !== index) {
                  e.target.style.backgroundColor = '#9ca3af';
                }
              }}
              onMouseLeave={(e) => {
                if (currentSlide !== index) {
                  e.target.style.backgroundColor = '#d1d5db';
                }
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section - Updated to match InvestmentsPage style */}
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
            Welcome to KDCU
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
            Karagwe District Co-operative Union Ltd (KDCU) is an organization of small-scale coffee growers in the Kagera region in the northwest corner of Tanzania.
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
              Learn More
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
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section - Updated to match InvestmentsPage style */}
      <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
              Our Impact
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
              How we're transforming coffee production in the Kagera region
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '2rem',
                backgroundColor: '#fffbeb',
                borderRadius: '12px',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#FEA116',
                  color: 'white',
                  borderRadius: '50%',
                  marginBottom: '1rem'
                }}>
                  {stat.icon}
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                  {stat.value}
                </h3>
                <p style={{ color: '#6b7280' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
              About KDCU Limited
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
              Welcome to <span style={{ fontWeight: 'bold', color: '#FEA116' }}>KDCU Limited</span>
            </p>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{
              color: '#4b5563',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Karagwe District Co-operative Union Ltd (KDCU) is an organisation of small-scale coffee growers in the Kagera region in the northwest corner of Tanzania, about 200 miles south of the equator. The region has a population of around 408,000 and shares borders with Uganda to the north, Rwanda and Burundi to the west, and Lake Victoria to the east. The KDCU head office is in Kayanga, about 100 miles west of Bukoba, the regional capital.
            </p>
          </div>
        </div>
      </section>

      {/* Board Members Carousel */}
      <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <TeamCarousel 
            members={boardMembers}
            currentSlide={currentBoardSlide}
            setCurrentSlide={setCurrentBoardSlide}
            title="Board Members"
            description="Meet our dedicated board members who guide our cooperative union's strategic direction"
          />
        </div>
      </section>

      {/* Management Team Carousel */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <TeamCarousel 
            members={managementTeam}
            currentSlide={currentManagementSlide}
            setCurrentSlide={setCurrentManagementSlide}
            title="Management Team"
            description="Meet our professional management team driving operational excellence"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;