import React, { useState } from 'react';
import styles from './Navbar.module.css';
import navmenu from '../../assets/navmenu.png';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
    <h1 className={styles.title}>JM</h1>
    <div className={styles.menu}>

    <img src={navmenu} alt="navmenu" className={styles.navmenu} 
    onClick={() => { setMenuOpen(!menuOpen); }}
    />
    
      <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
      onClick={() => { setMenuOpen(false) }}
      >

        {/*<li><a href="#projects">Projects</a></li>*/}
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
    </div>
  </nav>
  )
}
