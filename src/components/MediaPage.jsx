import { FileText, Download, Calendar, Eye, Search, Filter, X } from 'lucide-react';
import { useState } from 'react';

const MediaPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Sample media data - replace with your actual data
  const mediaItems = [
    {
      id: 1,
      title: "Coffee Quality Improvement Tender",
      category: "tender",
      date: "2024-12-15",
      size: "2.3 MB",
      type: "PDF",
      description: "Tender for coffee quality improvement equipment and services",
      fileUrl: "/assets/documents/tender-coffee-quality.pdf",
      views: 145,
      urgent: true
    },
    {
      id: 2,
      title: "Marketing Manager Position",
      category: "job",
      date: "2024-12-10",
      size: "1.8 MB",
      type: "PDF",
      description: "Job opening for Marketing Manager at KDCU headquarters",
      fileUrl: "/assets/documents/job-marketing-manager.pdf",
      views: 89,
      urgent: false
    },
    {
      id: 3,
      title: "Annual General Meeting Notice",
      category: "notice",
      date: "2024-12-05",
      size: "1.2 MB",
      type: "PDF",
      description: "Official notice for the 2024 Annual General Meeting",
      fileUrl: "/assets/documents/agm-notice-2024.pdf",
      views: 203,
      urgent: true
    },
    {
      id: 4,
      title: "Coffee Processing Equipment Tender",
      category: "tender",
      date: "2024-11-28",
      size: "3.1 MB",
      type: "PDF",
      description: "Procurement tender for new coffee processing equipment",
      fileUrl: "/assets/documents/tender-processing-equipment.pdf",
      views: 167,
      urgent: false
    },
    {
      id: 5,
      title: "Field Officer Recruitment",
      category: "job",
      date: "2024-11-20",
      size: "1.5 MB",
      type: "PDF",
      description: "Multiple positions available for field officers",
      fileUrl: "/assets/documents/job-field-officers.pdf",
      views: 234,
      urgent: false
    },
    {
      id: 6,
      title: "Cooperative Training Program",
      category: "notice",
      date: "2024-11-15",
      size: "2.0 MB",
      type: "PDF",
      description: "Training program for cooperative members",
      fileUrl: "/assets/documents/training-program.pdf",
      views: 178,
      urgent: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Media', count: mediaItems.length },
    { id: 'tender', name: 'Tenders', count: mediaItems.filter(item => item.category === 'tender').length },
    { id: 'job', name: 'Jobs', count: mediaItems.filter(item => item.category === 'job').length },
    { id: 'notice', name: 'Notices', count: mediaItems.filter(item => item.category === 'notice').length }
  ];

  const filteredItems = mediaItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'tender': return '#dc2626';
      case 'job': return '#059669';
      case 'notice': return '#7c3aed';
      default: return '#6b7280';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'tender': return '📋';
      case 'job': return '💼';
      case 'notice': return '📢';
      default: return '📄';
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
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
            Media & Publications
          </h1>
          <p style={{
            fontSize: '1.1rem',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.6'
          }}>
            Access our latest tenders, job opportunities, official notices, and important documents
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section style={{ padding: '2rem 0', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Search Bar */}
            <div style={{ 
              flex: '1', 
              minWidth: '300px',
              position: 'relative' 
            }}>
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 3rem',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#FEA116'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
              <Search 
                size={20} 
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#6b7280'
                }}
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: showFilters ? '#FEA116' : 'transparent',
                color: showFilters ? 'white' : '#374151',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              <Filter size={16} />
              Filters
            </button>
          </div>

          {/* Filter Categories */}
          {showFilters && (
            <div style={{ 
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: selectedCategory === category.id ? '#FEA116' : 'white',
                    color: selectedCategory === category.id ? 'white' : '#374151',
                    border: '1px solid #d1d5db',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    fontSize: '0.9rem'
                  }}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Media Grid Section */}
      <section style={{ padding: '3rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          {filteredItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <FileText size={48} style={{ color: '#9ca3af', marginBottom: '1rem' }} />
              <h3 style={{ color: '#6b7280', marginBottom: '0.5rem' }}>No documents found</h3>
              <p style={{ color: '#9ca3af' }}>Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {filteredItems.map(item => (
                <div 
                  key={item.id}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  }}
                >
                  {/* Urgent Badge */}
                  {item.urgent && (
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: '#dc2626',
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      URGENT
                    </div>
                  )}

                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{
                      fontSize: '2rem',
                      minWidth: '50px',
                      height: '50px',
                      backgroundColor: '#f3f4f6',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {getCategoryIcon(item.category)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: '#1f2937',
                        marginBottom: '0.5rem',
                        lineHeight: '1.3'
                      }}>
                        {item.title}
                      </h3>
                      <div style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        backgroundColor: getCategoryColor(item.category),
                        color: 'white',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        {item.category}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.5',
                    marginBottom: '1rem',
                    fontSize: '0.95rem'
                  }}>
                    {item.description}
                  </p>

                  {/* Meta Information */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    fontSize: '0.875rem',
                    color: '#6b7280'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={16} />
                      {formatDate(item.date)}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Eye size={14} />
                        {item.views}
                      </div>
                      <span>{item.type} • {item.size}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      style={{
                        flex: 1,
                        padding: '0.75rem',
                        backgroundColor: '#FEA116',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        transition: 'background-color 0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#e4950f'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#FEA116'}
                      onClick={() => window.open(item.fileUrl, '_blank')}
                    >
                      <Download size={16} />
                      Download
                    </button>
                    <button
                      style={{
                        padding: '0.75rem 1rem',
                        backgroundColor: 'transparent',
                        color: '#6b7280',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#f3f4f6';
                        e.target.style.borderColor = '#9ca3af';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.borderColor = '#d1d5db';
                      }}
                      onClick={() => window.open(item.fileUrl, '_blank')}
                    >
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{
        padding: '4rem 0',
        backgroundColor: '#1f2937',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Stay Updated
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '2rem'
          }}>
            Don't miss out on important announcements, tender opportunities, and job openings
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              backgroundColor: '#FEA116',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#e4950f';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FEA116';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              Subscribe to Updates
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
              e.target.style.color = '#1f2937';
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
    </div>
  );
};

export default MediaPage;