import React from 'react';
import styles from './TopBar.module.css';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <a href="" target="_blank" rel="noopener noreferrer" className={styles.icon}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" />
      </a>
      <div className={styles.title}><Link to="/">RNC</Link></div>
      <a href="https://www.instagram.com/rnc.ua?igsh=MWF4Z3R2MXlxOWFvNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className={styles.icon}>
        <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png" alt="Instagram" />
      </a>
    </div>
  );
}

export default TopBar;
