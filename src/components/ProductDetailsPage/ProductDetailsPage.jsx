import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import styles from './ProductDetailsPage.module.css';
import { getProducts } from '../../services/productService';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import calculatePrice from '../../utils/calculatePrice';

const ProductDetailsPage = () => {
  const { art } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productList = await getProducts(); // Получаем список всех продуктов
        const selectedProduct = productList.find(p => p.art === Number(art)); // Находим продукт по art
        if (!selectedProduct) {
          throw new Error('Product not found');
        }
        setProduct(selectedProduct); // Устанавливаем найденный продукт в состояние
        setLoading(false); // Завершаем загрузку данных
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false); // Завершаем загрузку в случае ошибки
      }
    };

    fetchProduct(); // Вызываем функцию загрузки данных
  }, [art]); // Зависимость от art, чтобы перезапрашивать данные при изменении артикля

  if (loading) {
    return <div>Loading...</div>; // Выводим Loading... пока идет загрузка данных
  }

  if (!product) {
    return <div>Товар не найден</div>; // Выводим сообщение, если продукт не найден
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const price = calculatePrice(product);

  return (
    <div className={styles.productDetails}>
      <div className={styles.imageSliderContainer}>
        <Slider {...settings} className={styles.imageSlider}>
          {product.photos.map((photo, index) => (
            <div key={index}>
              <img src={photo} alt={product.name} className={styles.image} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.details}>
        <h1 className={styles.name}>{product.name}</h1>
        <p className={styles.art}><strong>Art:</strong> {product.art}</p>
        <p className={styles.category}><strong>Категорія:</strong> {product.category}</p>
        <p className={styles.info}><strong>Інформація:</strong> {product.info}</p>
        <p className={styles.price}><strong>Ціна:</strong> {price} грн</p>
        <p className={styles.sizes}><strong>Розміри:</strong> {product.sizes.join(', ')}</p>
        <a href={product.inst} target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
          <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png" alt="Instagram" className={styles.instagramIcon} />
        </a>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
