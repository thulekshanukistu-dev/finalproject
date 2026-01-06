import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLeaf } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: 'Shop', links: ['All Products', 'Vegetables', 'Fruits', 'Dairy', 'Grains', 'Seasonal'] },
    { title: 'Farmers', links: ['Join Our Network', 'Seller Dashboard', 'Resources', 'Success Stories'] },
    { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press', 'Sustainability'] },
    { title: 'Support', links: ['Help Center', 'Contact Us', 'Shipping Info', 'Returns', 'FAQ'] },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  const contactInfo = [
    { icon: <FaPhone />, text: '+1 (555) 123-4567' },
    { icon: <FaEnvelope />, text: 'support@freshfarm.com' },
    { icon: <FaMapMarkerAlt />, text: '123 Farm Road, Green Valley, CA 90210' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="logo">
              <FaLeaf className="logo-icon" />
              <span className="logo-text">FreshFarm</span>
            </div>
            <p className="tagline">
              Connecting communities with fresh, local produce since 2024.
            </p>
            <div className="newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for fresh deals</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="btn-subscribe">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-grid">
            {footerLinks.map((section, index) => (
              <div key={index} className="link-section">
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href="#" aria-label={`Navigate to ${link}`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-info">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <span className="contact-text">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="business-hours">
              <h5>Business Hours</h5>
              <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
              <p>Sat-Sun: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Social & Bottom Bar */}
        <div className="footer-bottom">
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                aria-label={`Visit our ${social.label} page`}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="certifications">
            <span className="cert-badge" aria-label="Certified Organic">🌱 Organic</span>
            <span className="cert-badge" aria-label="Locally Sourced">🏠 Local</span>
            <span className="cert-badge" aria-label="Sustainable Farming">♻️ Sustainable</span>
          </div>

          <div className="legal-links">
            <a href="#" aria-label="Privacy Policy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#" aria-label="Terms of Service">Terms of Service</a>
            <span className="separator">•</span>
            <a href="#" aria-label="Cookie Policy">Cookie Policy</a>
          </div>

          <div className="copyright">
            <p>&copy; {currentYear} FreshFarm Marketplace. All rights reserved.</p>
            <p className="mission">
              Supporting local farmers, one purchase at a time. 🌾
            </p>
          </div>

          <div className="payment-methods">
            <span className="payment-icon" aria-label="Visa">💳</span>
            <span className="payment-icon" aria-label="Mastercard">💳</span>
            <span className="payment-icon" aria-label="PayPal">💰</span>
            <span className="payment-icon" aria-label="Apple Pay">📱</span>
            <span className="payment-icon" aria-label="Google Pay">📱</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;