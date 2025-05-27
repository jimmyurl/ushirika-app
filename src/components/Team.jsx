// src/components/Team.jsx
const Team = () => {
    const teamMembers = [
      {
        id: 1,
        name: 'John Mitchell',
        position: 'Head Chef & Founder',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
        description: 'With over 15 years of culinary experience, John leads our kitchen with passion and innovation.',
        social: {
          facebook: '#',
          twitter: '#',
          instagram: '#',
          linkedin: '#'
        }
      },
      {
        id: 2,
        name: 'Maria Garcia',
        position: 'Pastry Chef',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
        description: 'Maria brings artistry to every pastry, creating delightful treats that satisfy both eyes and taste buds.',
        social: {
          facebook: '#',
          twitter: '#',
          instagram: '#',
          linkedin: '#'
        }
      },
      {
        id: 3,
        name: 'Alex Thompson',
        position: 'Coffee Master',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        description: 'Alex is our coffee expert, ensuring every bean is perfectly roasted and every cup is exceptional.',
        social: {
          facebook: '#',
          twitter: '#',
          instagram: '#',
          linkedin: '#'
        }
      },
      {
        id: 4,
        name: 'Sophie Wilson',
        position: 'Tea Specialist',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
        description: 'Sophie curates our tea collection, bringing the finest organic teas from gardens around the world.',
        social: {
          facebook: '#',
          twitter: '#',
          instagram: '#',
          linkedin: '#'
        }
      }
    ];
  
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Our Team</h6>
            <h1 className="mb-5">Meet Our Expert Team</h1>
          </div>
          
          <div className="row g-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img 
                      className="img-fluid" 
                      src={member.image} 
                      alt={member.name}
                      style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                  
                  <h5 className="mb-0">{member.name}</h5>
                  <small className="text-primary">{member.position}</small>
                  
                  <p className="text-muted mt-3 px-3">{member.description}</p>
                  
                  <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-square btn-primary mx-1" href={member.social.facebook}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href={member.social.twitter}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href={member.social.instagram}>
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href={member.social.linkedin}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Team;