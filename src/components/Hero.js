import React from 'react';

const Hero = () => {
  const scrollToMarketplace = (e) => {
    e.preventDefault();
    const section = document.getElementById('marketplace');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>Fresh Produce Direct from Local Farmers</h1>
        <p>Support local agriculture while enjoying the freshest organic products</p>
        <a href="#marketplace" className="btn" onClick={scrollToMarketplace}>
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;