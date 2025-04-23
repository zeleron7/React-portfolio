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

      <a href="#contact" className={styles.contact}>Socials</a>

      <p className={styles.description}>
      Aspiring .NET developer from a small town in Sweden, currently finishing my studies and set to graduate at the end of May 2025. 
      I enjoy working behind the scenes on things like APIs and databases, and I'm especially interested in how different systems connect and communicate.
      </p>

    </div>

  )
}