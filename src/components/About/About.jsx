//import React, { useState } from 'react';
import styles from './About.module.css';
import portrait from '../../assets/nyttporträtt.png';

export const About = () => {
  return (
    
    <div className={styles.aboutContainer}>

      <img src={portrait} alt="Portrait" className={styles.portrait} />

      <h1 className={styles.aboutTitle}><br/>About Me</h1>

      <p className={styles.about}>23 years old from Söderhamn, Sweden who is very committed and passionate about IT with a broad knowledge <br/> of computers. 
       I'm currently studying to become a .NET developer in Gävle. I have a constant desire to develop <br/> and learn more. Since a very young age I've had
       a big interest in computers which came from playing video  <br/> games.</p>

       <p className={styles.about}>I have a background as an electrician and worked with installing 
       solar panels right after graduating. <br/> After a few months I developed pain in my heel which later turned out to be arthritis. This condition
       <br/> got me to change my career path and this is when i came across programming.</p>

    </div>

  )
}