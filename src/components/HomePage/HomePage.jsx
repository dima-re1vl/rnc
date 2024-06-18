import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1>Добро пожаловать в наш магазин!</h1>
      <p>Здесь вы найдёте товары из китайских магазинов по выгодным ценам.</p>
    </div>
  );
}

export default HomePage;
