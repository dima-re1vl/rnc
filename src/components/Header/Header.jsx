import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/products">Товари</Link></li>
          <li><Link to="/info">Інформація</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
