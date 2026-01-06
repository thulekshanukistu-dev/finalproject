import React, { useState } from 'react';
import './App.css';

import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Marketplace from './components/Marketplace';
import ProductModal from './components/Productmodel';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Organic Tomatoes",
      category: "vegetables",
      price: 3.99,
      unit: "per lb",
      farmer: "Green Valley Farm",
      description: "Fresh organic tomatoes grown without pesticides",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.5
    },
    {
      id: 2,
      name: "Fresh Apples",
      category: "fruits",
      price: 2.49,
      unit: "per lb",
      farmer: "Sunny Orchard",
      description: "Crisp and juicy organic apples",
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.7
    },
    {
      id: 3,
      name: "Organic Milk",
      category: "dairy",
      price: 4.99,
      unit: "per gallon",
      farmer: "Happy Cows Dairy",
      description: "Fresh organic milk from grass-fed cows",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.8
    },
    {
    id: 2,
    name: "Fresh Tomatoes",
    category: "vegetables",
    price: 3.99,
    unit: "per kg",
    farmer: "Sunny Fields",
    description: "Vine-ripened organic tomatoes",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.6
    },
    {
      id: 5,
      name: "Fresh Strawberries",
      category: "fruits",
      price: 5.99,
      unit: "per lb",
      farmer: "Berry Patch",
      description: "Sweet organic strawberries, picked daily",
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.9
    },
    {
      id: 6,
      name: "Farm Fresh Eggs",
      category: "dairy",
      price: 6.99,
      unit: "per dozen",
      farmer: "Free Range Farm",
      description: "Organic eggs from free-range chickens",
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.6
    },
    {
      id: 7,
      name: "Organic Quinoa",
      category: "grains",
      price: 8.99,
      unit: "per lb",
      farmer: "Mountain Grains",
      description: "High-quality organic quinoa",
      image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.7
    },
    {
      id: 8,
      name: "Sweet Corn",
      category: "vegetables",
      price: 1.99,
      unit: "per ear",
      farmer: "Golden Fields Farm",
      description: "Fresh sweet corn, harvested daily",
      image: "https://images.unsplash.com/photo-1529590003495-b2646e2718bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.5
    }
  ];

  const handleContactSubmit = (formData) => {
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="marketplace">
          <Marketplace 
            products={products} 
            onProductClick={handleProductClick}
          />
        </section>
        <section id="contact">
          <Contact onSubmit={handleContactSubmit} />
        </section>
      </main>
      <Footer />
      
      <ProductModal
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;