import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import styles from './Experience.module.css';
import liaprojekt from '../../assets/liabild.png';
import lia2 from '../../assets/lia2.png';

export const Experience = () => {

  const [showImage, setShowImage] = useState(false);
  const imageRef = useRef(null);

  const handleClick = () => {
    setShowImage(true);
  };

  const handleOutsideClick = (event) => {
    if (imageRef.current && !imageRef.current.contains(event.target)) {
      setShowImage(false);
    }
  };

  useEffect(() => {
    if (showImage) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showImage]);


  return (

    <div className={styles.experienceContainer}>
        <h1 className={styles.experienceTitle}>Experience</h1>

        <h2 className={styles.subtitle}>Internship, Region Gävleborg</h2>

         <p className={styles.experience}>
          In this project, I created a form from scratch that generates XML files. Each file represents a person with relevant data
          (name, birthdate, etc.). The form was built using the ASP.NET Core MVC framework and follows the structure required by the Swedish Tax Agency.
          This project was very educational and significantly expanded my knowledge of system development, as I worked with both the backend and frontend.
          </p>

          <div className={styles.imageContainer}>
            <a className={styles.showImage} onClick={handleClick}>Photo</a>

            {showImage && (
              <div className={styles.overlay} onClick={() => setShowImage(false)} ref={imageRef}>
                <img
                  src={liaprojekt}
                  alt="LIA 1"
                  className={styles.image}
                  onClick={(e) => e.stopPropagation()} // prevents closing when image is clicked
                />
              </div>
            )}
          </div>
          

          <h2 className={styles.subtitle}>Solar installer, OTM EKO Energi</h2>

          <p className={styles.experience}>
            In this role, I worked as part of a team, where my main task was to install and connect solar panels on various properties. 
            I contributed to both small and large projects and had frequent contact with other professional groups. This experience greatly improved my communication skills.
          </p>

        </div>
  )
}