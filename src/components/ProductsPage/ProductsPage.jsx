import React, { useState, useEffect, useCallback } from 'react';
import Filters from '../Filters/Filters';
import ProductList from '../ProductList/ProductList';
import { getProducts } from '../../services/productService';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 10000],
    category: 'загальний',
    searchTerm: '',
    artSearch: ''
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  const filterProducts = useCallback(() => {
    const filtered = products.filter(product => {
      const price = product.kg * product.pricePerKg + product.selfCost + product.plusCost;
      const matchesPrice = price >= filters.priceRange[0] && price <= filters.priceRange[1];
      const matchesCategory = filters.category === 'загальний' || product.category === filters.category;
      const matchesSearchTerm = product.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const matchesArtSearch = product.art.toString().includes(filters.artSearch);

      return matchesPrice && matchesCategory && matchesSearchTerm && matchesArtSearch;
    });

    setFilteredProducts(filtered);
  }, [filters, products]);

  useEffect(() => {
    filterProducts();
  }, [filters, filterProducts]);

  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters
    }));
  };

  return (
    <div className={styles.productsPage}>
      <Filters onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
