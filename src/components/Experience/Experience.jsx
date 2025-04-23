import styles from './Experience.module.css';
import lia1 from '../../assets/lia1.png';
import lia2 from '../../assets/lia2.png';

export const Experience = () => {
  return (

    <div className={styles.experienceContainer}>
        <h1 className={styles.experienceTitle}>Experience</h1>

        <h2 className={styles.subtitle}>Internship, Region Gävleborg</h2>

         <p className={styles.experience}>
          In this project, I created a form from scratch that generates XML files. Each file represents a person with relevant data
          (name, birthdate, etc.). The form was built using the ASP.NET Core MVC framework and follows the structure required by the Swedish Tax Agency.
          This project was very educational and significantly expanded my knowledge of system development, as I worked with both the backend and frontend.
          </p>

          <h2 className={styles.subtitle}>Solar installer, OTM EKO Energi</h2>

          <p className={styles.experience}>
            In this role, I worked as part of a team, where my main task was to install and connect solar panels on various properties. 
            I contributed to both small and large projects and had frequent contact with other professional groups. This experience greatly improved my communication skills.
          </p>

        </div>
  )
}