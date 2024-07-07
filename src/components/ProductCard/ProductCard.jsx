import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styles from './ProductCard.module.css';
import calculatePrice from '../../utils/calculatePrice';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProductCard = ({ product }) => {
  const price = calculatePrice(product);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.card}>
      <Link to={`/products/${product.art}`} className={styles.link}>
        <Slider {...settings} className={styles.imageSlider}>
          {product.photos.map((photo, index) => (
            <div key={index}>
              <img src={photo} alt={product.name} className={styles.image} />
            </div>
          ))}
        </Slider>
        <div className={styles.details}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.art}>Art: {product.art}</p>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.price}>Ціна: {price} грн</p>
          <a href={product.inst} target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
            <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png" alt="Instagram" className={styles.instagramIcon} />
          </a>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
