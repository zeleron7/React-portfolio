//import React, { useState } from 'react';
import styles from './Intro.module.css';

export const Intro = () => {
  return (

    <div className={styles.container}>
    
    <div>
      <h1 className={styles.title}>Hello, <br/> I'm Jessie Mårtensson <br/> .NET Developer</h1>
    </div>

    <p className={styles.description}>
      I am a passionate upcoming .NET developer from Sweden. I have a strong interest in backend development, I like working with API's and databases in particular 
      <br/>and will graduate in May 2025.
    </p>
    </div>

  )
}