// src/pages/AboutPage.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="container-xxl bg-white p-0">
      <Header />
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5">About KDCU Limited</h1>
          {/* Add your about page content here */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;