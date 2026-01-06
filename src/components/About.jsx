import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>About Our Marketplace</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>The Problem We Solve</h3>
            <p>Local farmers often struggle to reach consumers directly, while buyers have difficulty finding fresh, locally-grown produce. Traditional supply chains involve multiple intermediaries, reducing farmers' profits and increasing prices for consumers.</p>
            
            <h3>Our Solution</h3>
            <p>FreshFarm connects farmers directly with consumers through our digital marketplace. We eliminate middlemen, ensuring:</p>
            <ul>
              <li>Higher profits for farmers</li>
              <li>Lower prices for consumers</li>
              <li>Fresher produce delivered faster</li>
              <li>Transparent farming practices</li>
              <li>Support for sustainable agriculture</li>
            </ul>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Farm fresh produce" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;