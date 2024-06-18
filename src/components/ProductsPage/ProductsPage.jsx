import React from 'react';
import ProductList from '../ProductList/ProductList';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {
  return (
    <div className={styles.productsPage}>
      <h1>Товари</h1>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
