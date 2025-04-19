import styles from './Skills.module.css';



export const Skills = () => {
  return (

    <div className={styles.skillsContainer}>
          
        <h1 className={styles.skillsTitle}>Skills</h1>

        <div className={styles.skillsGrid}>
            <div className={styles.skills}>C#</div>
            <div className={styles.skills}>JavaScript</div>
            <div className={styles.skills}>HTML</div>
            <div className={styles.skills}>CSS</div>
            <div className={styles.skills}>SQL</div>
        </div>
        
    </div>

  )
}