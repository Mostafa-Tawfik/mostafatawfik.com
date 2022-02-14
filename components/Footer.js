import React from 'react';
import styles from '../styles/components/Footer.module.scss'

export default function Footer() {
  return <div className={styles['footer']}>
    <img className={styles['footer-logo']} alt='myLogo' src='../../images/logo.jpg'></img>
    <p>Copyright <span>Mostafa Tawfik</span> © 2022</p>
  </div>;
}
