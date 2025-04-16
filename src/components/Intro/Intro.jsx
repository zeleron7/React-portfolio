//import React, { useState } from 'react';
import styles from './Intro.module.css';
import portrait from '../../assets/nyttporträtt.png';

export const Intro = () => {
  return (
    
    <div>

      <img src={portrait} alt="Portrait" className={styles.portrait}/>

      <h1 className={styles.title}>Hello, <br /> <br />
        I'm Jessie <br /> <br />
        .NET Developer <br /> <br />
      </h1>

      {/*<img src={portrait} alt="Portrait" className={styles.portrait}/>*/}

      <p className={styles.description}>
        I am passionate upcoming .NET developer from Sweden. I have a strong interest in backend development and will graduate in end of May 2025.
      </p>

      

    </div>

  )
}