import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        &#9776; {/* Символ бургер-меню */}
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navList}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Головна</Link></li>
          <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Товари</Link></li>
          <li><Link to="/info" onClick={() => setIsMenuOpen(false)}>Інформація</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
