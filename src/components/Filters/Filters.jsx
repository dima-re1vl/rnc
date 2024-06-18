import React, { useState } from 'react';
import styles from './Filters.module.css';

const Filters = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [category, setCategory] = useState('загальний');
  const [searchTerm, setSearchTerm] = useState('');

  const handlePriceChange = (e) => {
    setPriceRange([e.target.value[0], e.target.value[1]]);
    onFilterChange({ priceRange, category, searchTerm });
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilterChange({ priceRange, category, searchTerm });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange({ priceRange, category, searchTerm });
  };

  return (
    <div className={styles.filters}>
      <div>
        <label>Ціна: </label>
        <input 
          type="range" 
          min="0" 
          max="1000" 
          value={priceRange} 
          onChange={handlePriceChange} 
          className={styles.slider}
        />
        <span>{priceRange[0]} - {priceRange[1]}</span>
      </div>
      <div>
        <label>Категорія: </label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="загальний">Загальний</option>
          <option value="дитячі товари">Дитячі товари</option>
          <option value="аксесуари">Аксесуари</option>
          <option value="жіночий одяг">Жіночий одяг</option>
          <option value="чоловічий одяг">Чоловічий одяг</option>
          <option value="інше">Інше</option>
        </select>
      </div>
      <div>
        <label>Пошук: </label>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
      </div>
    </div>
  );
};

export default Filters;
