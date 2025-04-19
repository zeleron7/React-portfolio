import React, { useState } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <h1 className={styles.title}>JM</h1>
    <div className={styles.menu}>
      <ul className={styles.menuItems}>
        {/*<li><a href="#projects">Projects</a></li>*/}
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
    </div>
  </nav>

    
  )
}
