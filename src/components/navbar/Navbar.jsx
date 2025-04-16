import React, { useState } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav ClassName={styles.Navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <ul className={styles.menuItems}>
                <li><a href="/">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#experience">experience</a></li>
            </ul>
        </div>
    </nav>
  )
}
