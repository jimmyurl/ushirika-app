import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Search, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample event data with Tanzanian coffee cooperative events
  const events = [
    {
      id: 1,
      title: "Mavuno Mkuu wa Kahawa - Annual Coffee Harvest Festival",
      date: "March 15, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "Kayanga, Karagwe",
      description: "Celebrating our farmers' hard work with a festival showcasing the best coffee harvest from our 133 AMCOS. Traditional dances, coffee tasting, and awards ceremony.",
      attendees: 850,
      type: "festival",
      year: "2024",
      gallery: [
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574514286765-352033c43fe4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1442411210769-ce83d1c5ad2d?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Mafunzo ya Kilimo Endelevu - Sustainable Farming Workshop",
      date: "April 22, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Bukoba, Kagera",
      description: "Educational workshop on sustainable farming practices, soil conservation, and organic certification processes for our member cooperatives.",
      attendees: 320,
      type: "workshop",
      year: "2024",
      gallery: [
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Mkutano Mkuu wa Washirika - Annual Cooperative Members Meeting",
      date: "May 10, 2024",
      time: "1:00 PM - 7:00 PM",
      location: "Kayanga Conference Hall",
      description: "Annual general meeting discussing cooperative growth, market opportunities, member benefits, and strategic planning for the next fiscal year.",
      attendees: 480,
      type: "meeting",
      year: "2024",
      gallery: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Sherehe ya Uthibitisho wa Ubora - Quality Certification Ceremony",
      date: "June 5, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "KDCU Processing Plant, Kayanga",
      description: "Celebrating farmers who achieved organic and 4C certification with awards and recognition. Showcasing our commitment to quality coffee production.",
      attendees: 280,
      type: "ceremony",
      year: "2024",
      gallery: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Mafunzo ya Teknolojia ya Kisasa - Modern Technology Training",
      date: "August 18, 2023",
      time: "9:00 AM - 4:00 PM",
      location: "Kayanga Training Center",
      description: "Training session on modern coffee processing techniques, digital marketing for cooperatives, and financial management using mobile technology.",
      attendees: 180,
      type: "workshop",
      year: "2023",
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Mkutano wa Kimataifa wa Kahawa - International Coffee Conference",
      date: "September 25, 2023",
      time: "8:00 AM - 6:00 PM",
      location: "Lake Victoria Hotel, Bukoba",
      description: "Regional conference bringing together coffee cooperatives from East Africa to share best practices and explore export opportunities.",
      attendees: 450,
      type: "conference",
      year: "2023",
      gallery: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
      ]
    }
  ];

  const years = ['all', '2024', '2023', '2022'];
  const eventTypes = [
    { value: 'all', label: 'All Events' },
    { value: 'festival', label: 'Festivals' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'meeting', label: 'Meetings' },
    { value: 'ceremony', label: 'Ceremonies' },
    { value: 'conference', label: 'Conferences' }
  ];

  // Filter events based on search and filters
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || event.year === selectedYear;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    
    return matchesSearch && matchesYear && matchesType;
  });

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

  const HeroSection = () => (
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
          Matukio ya KDCU
          <span style={{
            display: 'block',
            fontSize: '1.5rem',
            fontWeight: '400',
            marginTop: '0.5rem',
            color: 'rgba(255,255,255,0.9)'
          }}>
            Our Events & Activities
          </span>
        </h1>
        <p style={{
          fontSize: '1.1rem',
          maxWidth: '800px',
          margin: '0 auto 2rem',
          color: 'rgba(255,255,255,0.9)',
          lineHeight: '1.6'
        }}>
          Join us in celebrating coffee culture, sustainable farming, and community growth. Discover our workshops, festivals, and cooperative meetings that strengthen our coffee community.
        </p>
      </div>
    </section>
  );

  const SearchAndFilter = () => (
    <section style={{ padding: '2rem 0', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Search */}
          <div style={{ position: 'relative', flex: '1', minWidth: '300px' }}>
            <Search size={20} style={{ 
              position: 'absolute', 
              left: '1rem', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#6b7280'
            }} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search events..."
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 3rem',
                border: '2px solid #e5e7eb',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#FEA116'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                padding: '0.75rem 1rem',
                border: '2px solid #e5e7eb',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              style={{
                padding: '0.75rem 1rem',
                border: '2px solid #e5e7eb',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              {eventTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div style={{ marginTop: '1rem', color: '#6b7280', fontSize: '0.9rem' }}>
          {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
        </div>
      </div>
    </section>
  );

  const EventsSection = () => (
    <section style={{ padding: '3rem 0', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {filteredEvents.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#6b7280', marginBottom: '1rem' }}>
              No events found
            </h3>
            <p style={{ color: '#9ca3af' }}>
              Try adjusting your search terms or filters
            </p>
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
            gap: '2rem' 
          }}>
            {filteredEvents.map((event) => (
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#1f2937',
                      flex: 1
                    }}>
                      {event.title}
                    </h3>
                    <span style={{
                      backgroundColor: '#FEA116',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      marginLeft: '1rem'
                    }}>
                      {event.type}
                    </span>
                  </div>
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
        )}
      </div>
    </section>
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={{ paddingTop: '80px' }}>
        <HeroSection />
        <SearchAndFilter />
        <EventsSection />
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