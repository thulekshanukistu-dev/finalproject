import React from 'react';

const ProductModal = ({ isOpen, product, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close-modal" onClick={onClose}>&times;</span>
        <div className="modal-product">
          <img 
            src={product.image} 
            alt={product.name} 
            className="modal-image" 
          />
          <div className="modal-details">
            <h3>{product.name}</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price} {product.unit}</p>
            <p><strong>Farmer:</strong> {product.farmer}</p>
            <p><strong>Rating:</strong> {product.rating} / 5</p>
            <p><strong>Description:</strong> {product.description}</p>
            <button className="btn" style={{ marginTop: '1rem' }}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;