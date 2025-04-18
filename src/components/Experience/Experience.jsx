import styles from './Experience.module.css';

export const Experience = () => {
  return (

    <div className={styles.container}>
        <h1 className={styles.title}>Experience</h1>
    
            <div className={styles.experienceItem}>
            <h2 className={styles.experienceTitle}>Internship at XYZ Company</h2>
            <p className={styles.experienceDescription}>Assisted in software development projects and learned about .NET technologies.</p>
            <p className={styles.experienceDate}>January 2024 - May 2024</p>
            </div>

            <div className={styles.experienceContainer}>
            <div className={styles.experienceItem}>
            <h2 className={styles.experienceTitle}>Solar installer</h2>
            <p className={styles.experienceDescription}>Worked with installing solar panels and electrical systems.</p>
            <p className={styles.experienceDate}>June 2020 - August 2021</p>
            </div>
            </div>


        </div>
  )
}