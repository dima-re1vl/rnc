import React from 'react';
import styles from './ProductCard.module.css';
import calculatePrice from '../../utils/calculatePrice';

const ProductCard = ({ product }) => {
  const price = calculatePrice(product);

  return (
    <div className={styles.card}>
      <div className={styles.imageSlider}>
        {product.photos.map((photo, index) => (
          <img key={index} src={photo} alt={product.name} className={styles.image} />
        ))}
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>Ціна: {price} грн</p>
        <a href={product.inst} target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
          <img src="/instagram-icon.png" alt="Instagram" className={styles.instagramIcon} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
