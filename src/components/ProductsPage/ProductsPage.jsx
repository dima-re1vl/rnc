import React, { useEffect, useState, useCallback } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';
import Filters from '../Filters/Filters';
import ProductList from '../ProductList/ProductList';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 10000],
    category: 'загальний',
    searchTerm: ''
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productList = querySnapshot.docs.map(doc => doc.data());
      console.log("Fetched products:", productList);  // Debugging line
      setProducts(productList);
      setFilteredProducts(productList);
    };

    fetchProducts();
  }, []);

  const filterProducts = useCallback(() => {
    const filtered = products.filter(product => {
      const price = product.kg * product.pricePerKg + product.selfCost + product.plusCost;
      console.log("price" + price);
      const matchesPrice = price >= filters.priceRange[0] && price <= filters.priceRange[1];
      const matchesCategory = filters.category === 'загальний' || product.category === filters.category;
      const matchesSearchTerm = product.name.toLowerCase().includes(filters.searchTerm.toLowerCase());

      return matchesPrice && matchesCategory && matchesSearchTerm;
    });

    console.log("Filtered products:", filtered);  // Debugging line
    setFilteredProducts(filtered);
  }, [filters, products]);

  useEffect(() => {
    filterProducts();
  }, [filters, products, filterProducts]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className={styles.productsPage}>
      <Filters onFilterChange={handleFilterChange} />
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductsPage;
