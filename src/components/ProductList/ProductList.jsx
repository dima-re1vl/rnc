import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/productService';
import ProductCard from '../ProductCard/ProductCard';
import Filters from '../Filters/Filters';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
      setFilteredProducts(allProducts);
    };
    fetchProducts();
  }, []);

  const handleFilterChange = ({ priceRange, category, searchTerm }) => {
    const filtered = products.filter(product => {
      const productPrice = product.kg * product.pricePerKg + product.selfCost + product.plusCost;
      const matchesPrice = productPrice >= priceRange[0] && productPrice <= priceRange[1];
      const matchesCategory = category === 'загальний' || product.category === category;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesPrice && matchesCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className={styles.productList}>
      <Filters onFilterChange={handleFilterChange} />
      <div className={styles.products}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
