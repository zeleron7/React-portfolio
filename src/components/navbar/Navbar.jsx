import React, { useState } from 'react';
import styles from './Navbar.module.css';

import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <Link className={styles.title} to="/">JM</Link>
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
