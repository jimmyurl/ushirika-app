{/* Board Members Section */}
<section id="board" className="section section-light">
<div className="container">
  <div className="section-header">
    <h2 className="section-title">Board Members</h2>
    <p className="section-description">
      Meet our dedicated board members who guide our cooperative union's strategic direction
    </p>
  </div>
  
  <div className="grid-4">
    {[
      { name: "Chairman Board", role: "Chairman", image: "kdcu-office.JPG" },
      { name: "Vice Chairman", role: "Vice Chairman", image: "kdcu-office.JPG" },
      { name: "Board Member", role: "Board Member", image: "kdcu-office.JPG" },
      { name: "Board Member", role: "Board Member", image: "kdcu-office.JPG" },
      { name: "Board Member", role: "Board Member", image: "kdcu-office.JPG" }
    ].map((member, index) => (
      <div key={index} className="team-member">
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
          <h3 className="team-name">{member.name}</h3>
          <p style={{color: '#666', fontSize: '0.9rem'}}>{member.role}</p>
        </div>
      </div>
    ))}
  </div>
</div>
</section>

{/* Management Section */}
<section id="management" className="section section-white">
<div className="container">
  <div className="section-header">
    <h2 className="section-title">Management Team</h2>
    <p className="section-description">
      Meet our professional management team driving operational excellence
    </p>
  </div>
  
  <div className="grid-4">
    {[
      { name: "General Manager", role: "General Manager", image: "kdcu-office.JPG" },
      { name: "Factory Manager", role: "Factory Manager", image: "kdcu-office.JPG" },
      { name: "Human Resources Manager", role: "Human Resources Manager", image: "kdcu-office.JPG" },
      { name: "Marketing Manager", role: "Marketing Manager", image: "kdcu-office.JPG" },
      { name: "Chief Internal Auditor", role: "Chief Internal Auditor", image: "kdcu-office.JPG" },
      { name: "Chief Accountant", role: "Chief Accountant", image: "kdcu-office.JPG" }
    ].map((member, index) => (
      <div key={index} className="team-member">
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
          <h3 className="team-name">{member.name}</h3>
          <p style={{color: '#666', fontSize: '0.9rem'}}>{member.role}</p>
        </div>
      </div>
    ))}
  </div>
</div>
</section>
export default AboutPage;