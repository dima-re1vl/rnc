import React, { useState } from 'react';
import styles from './Filters.module.css';

const Filters = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [category, setCategory] = useState('загальний');
  const [searchTerm, setSearchTerm] = useState('');

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value, 10);
    setPriceRange(newRange);
    onFilterChange({ priceRange: newRange, category, searchTerm });
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilterChange({ priceRange, category: e.target.value, searchTerm });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange({ priceRange, category, searchTerm: e.target.value });
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filterItem}>
        <label>Ціна: </label>
        <div className={styles.sliderContainer}>
          <input
            type="range"
            min="0"
            max="10000"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className={styles.slider}
          />
          <input
            type="range"
            min="0"
            max="10000"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className={styles.slider}
          />
        </div>
        <span>{priceRange[0]} - {priceRange[1]}</span>
      </div>
      <div className={styles.filterItem}>
        <label>Категорія: </label>
        <select value={category} onChange={handleCategoryChange} className={styles.select}>
          <option value="загальний">Загальний</option>
          <option value="дитячі товари">Дитячі товари</option>
          <option value="аксесуари">Аксесуари</option>
          <option value="жіночий одяг">Жіночий одяг</option>
          <option value="чоловічий одяг">Чоловічий одяг</option>
          <option value="інше">Інше</option>
        </select>
      </div>
      <div className={styles.filterItem}>
        <label>Пошук: </label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>
    </div>
  );
};

export default Filters;
