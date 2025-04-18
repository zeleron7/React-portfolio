//import React, { useState } from 'react';
import styles from './Intro.module.css';

export const Intro = () => {
  return (

    <div className={styles.container}>
    
    <h1 className={styles.title}>
      Hello, <br />
      I'm <span className={styles.highlight}>Jessie Mårtensson</span> <br />
      .NET Developer
      </h1>
    
      <p className={styles.description}>
        I am a passionate upcoming .NET developer from a small town in Sweden. I have a strong interest in backend development, I like working with API's and databases in particular 
        and <br/> will graduate in May 2025.
      </p>
    </div>

  )
}