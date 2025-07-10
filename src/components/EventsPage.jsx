import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Send, X, ChevronLeft, ChevronRight } from 'lucide-react';

const EventsPage = () => {
  const [email, setEmail] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample event data with gallery images
  const events = [
    {
      id: 1,
      title: "Annual Coffee Harvest Festival",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Moshi, Tanzania",
      description: "Celebrating our farmers' hard work with a festival showcasing the best coffee harvest of the year.",
      attendees: 250,
      gallery: [
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1442411210769-ce83d1c5ad2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574514286765-352033c43fe4?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Sustainable Farming Workshop",
      date: "April 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Arusha, Tanzania",
      description: "Educational workshop on sustainable farming practices and organic certification processes.",
      attendees: 120,
      gallery: [
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Cooperative Members Meeting",
      date: "May 10, 2024",
      time: "2:00 PM - 8:00 PM",
      location: "Kilimanjaro, Tanzania",
      description: "Annual general meeting discussing cooperative growth, market opportunities, and member benefits.",
      attendees: 180,
      gallery: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Quality Certification Ceremony",
      date: "June 5, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "Dar es Salaam, Tanzania",
      description: "Celebrating farmers who achieved organic and 4C certification with awards and recognition.",
      attendees: 200,
      gallery: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop"
      ]
    }
  ];

  const allImages = events.flatMap(event => event.gallery);

  const openLightbox = (imageSrc) => {
    const imageIndex = allImages.findIndex(img => img === imageSrc);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % allImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(allImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(allImages[prevIndex]);
  };

  const handleNewsletterSubmit = () => {
    if (email && email.includes('@')) {
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };

  const EventsSection = () => (
    <section style={{ padding: '5rem 0', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#1f2937',
            marginBottom: '1rem',
            position: 'relative',
            display: 'inline-block'
          }}>
            Our Events
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Join us in celebrating coffee culture, sustainable farming, and community growth
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
          gap: '2rem' 
        }}>
          {events.map((event) => (
            <div key={event.id} style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }}>
              {/* Event Gallery */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '2fr 1fr 1fr',
                gap: '0.25rem',
                height: '250px'
              }}>
                <div 
                  style={{ 
                    backgroundImage: `url(${event.gallery[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s ease'
                  }}
                  onClick={() => openLightbox(event.gallery[0])}
                  onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <div 
                    style={{ 
                      backgroundImage: `url(${event.gallery[1]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      cursor: 'pointer',
                      flex: 1,
                      transition: 'opacity 0.3s ease'
                    }}
                    onClick={() => openLightbox(event.gallery[1])}
                    onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                  />
                  <div 
                    style={{ 
                      backgroundImage: `url(${event.gallery[2]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      cursor: 'pointer',
                      flex: 1,
                      transition: 'opacity 0.3s ease'
                    }}
                    onClick={() => openLightbox(event.gallery[2])}
                    onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                  />
                </div>
                <div style={{ position: 'relative' }}>
                  <div 
                    style={{ 
                      backgroundImage: `url(${event.gallery[3]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      cursor: 'pointer',
                      height: '100%',
                      transition: 'opacity 0.3s ease'
                    }}
                    onClick={() => openLightbox(event.gallery[3])}
                    onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                  onClick={() => openLightbox(event.gallery[0])}>
                    +{event.gallery.length - 1} more
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold', 
                  color: '#1f2937',
                  marginBottom: '0.75rem'
                }}>
                  {event.title}
                </h3>
                <p style={{ 
                  color: '#6b7280', 
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>
                  {event.description}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={16} color="#92400e" />
                    <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{event.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Clock size={16} color="#92400e" />
                    <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{event.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={16} color="#92400e" />
                    <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{event.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users size={16} color="#92400e" />
                    <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{event.attendees} attendees</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const NewsletterSection = () => (
    <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Stay Updated
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Subscribe to our newsletter for the latest event updates and coffee industry news
          </p>
        </div>
        
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              style={{
                flex: '1',
                padding: '1rem',
                border: '2px solid #e5e7eb',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#92400e'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
            <button
              onClick={handleNewsletterSubmit}
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#92400e',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#78350f'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#92400e'}
            >
              <Send size={20} />
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={{ paddingTop: '80px' }}>
        <EventsSection />
        <NewsletterSection />
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}
          onClick={closeLightbox}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <img 
              src={selectedImage} 
              alt="Event" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '0.5rem'
              }}
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}
            >
              <X size={20} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              style={{
                position: 'absolute',
                left: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Image Counter */}
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '1rem',
              fontSize: '0.875rem'
            }}>
              {currentImageIndex + 1} of {allImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;