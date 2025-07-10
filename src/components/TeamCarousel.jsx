import React from 'react';
import '../Home.css';

const TeamCarousel = ({ members, title, description }) => {
  return (
    <section className="team-section section-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-description">{description}</p>
        </div>

        <div className="team-members-static-grid">
          {members.map((member, index) => (
            <div key={index} className="team-member-card">
              <div className="team-avatar-container">
                <div className="team-avatar">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="team-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<span class="team-initials">${member.name.split(' ').map(n => n[0]).join('')}</span>`;
                      }}
                    />
                  ) : (
                    <span className="team-initials">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
              </div>
              <div className="team-member-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;