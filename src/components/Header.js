import React from 'react';
import '../assets/css/Header.css';
import logo from '../assets/img/anchor.svg';

function Header({ title }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
}

export default Header;
