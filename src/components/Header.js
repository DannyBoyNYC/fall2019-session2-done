import React from 'react';
import styles from '../assets/css/Header.module.css';
import logo, { ReactComponent as Anchor } from '../assets/img/anchor.svg';

function Header({ title }) {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      {/* <img src={logo} className={styles.logo} alt="logo" /> */}
      <Anchor className={styles.logo} />
    </div>
  );
}

export default Header;
