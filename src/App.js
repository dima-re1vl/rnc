import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ProductsPage from './components/ProductsPage/ProductsPage';
import ProductDetailsPage from './components/ProductDetailsPage/ProductDetailsPage';
import InfoPage from './components/InfoPage/InfoPage';
import TopBar from './components/TopBar/TopBar';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <TopBar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:art" element={<ProductDetailsPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
