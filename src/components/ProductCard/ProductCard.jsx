import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { art, category, inst, name, photos } = product;

  return (
    <div className={styles.card}>
      <div className={styles.slider}>
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={name} />
        ))}
      </div>
      <h3>{name}</h3>
      <p className={styles.category}>{category}</p>
      <p>{art}</p>
      <a href={inst} target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
};

export default ProductCard;
