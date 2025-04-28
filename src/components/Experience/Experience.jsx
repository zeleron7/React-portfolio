import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import styles from './Experience.module.css';
import liaprojekt from '../../assets/liabild.png';
import otmprojekt from '../../assets/otmprojekt.png';

export const Experience = () => {

  // Hooks
  const [showImage, setShowImage] = useState(false);
  const [showImageTwo, setShowImageTwo] = useState(false);

  const imageRef = useRef(null);
  const imageRefTwo = useRef(null);

  // Image 1 (liaprojekt)
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

  // Image 2 (otmprojekt)
  const handleClickTwo = () => {
    setShowImageTwo(true);
  };

  const handleOutsideClickTwo = (event) => {
    console.log('test')
    if (imageRefTwo.current && !imageRefTwo.current.contains(event.target)) {
      setShowImageTwo(false);
    }
  };

  useEffect(() => {
    if (showImageTwo) {
      document.addEventListener("mousedown", handleOutsideClickTwo);
    } else {
      document.removeEventListener("mousedown", handleOutsideClickTwo);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClickTwo);
    };
  }, [showImageTwo]);

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
                  alt="Picture of my internship project"
                  className={styles.imageOne}
                  onClick={(e) => e.stopPropagation()} 
                />
              </div>
            )}
          </div>
          
          <h2 className={styles.subtitle}>Solar installer, OTM EKO Energi</h2>

          <p className={styles.experience}>
            In this role, I worked as part of a team, where my main task was to install and connect solar panels on various properties. 
            I contributed to both small and large projects and had frequent contact with other professional groups. This experience greatly improved my communication skills.
          </p>

          <div className={styles.imageContainer}>
            <a className={styles.showImage} onClick={handleClickTwo}>Photo</a>

              {showImageTwo && (
                <div className={styles.overlay} onClick={() => setShowImageTwo(false)} ref={imageRefTwo}>
                  <img
                    src={otmprojekt}
                    alt="Picture from when I worked as a solar installer"
                    className={styles.imageTwo}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </div>
            
        </div>
  )
}