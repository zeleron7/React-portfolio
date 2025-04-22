import styles from './Experience.module.css';

export const Experience = () => {
  return (

    <div className={styles.experienceContainer}>
        <h1 className={styles.experienceTitle}>Experience</h1>

        <h2 className={styles.subtitle}>Internship, Region Gävleborg</h2>

         {/*<p className={styles.experience}>Here i created a form from scratch that generates XML files. Each file represents a person with relevant data <br/>
         (name, birth etc). The form was created with the ASP.NET Core MVC framework and according to the <br/> Swedish Tax Agency's structure.
         This project has been very educational and expanded my knowledge <br/> in system development as i got to work with both backend and frontend.</p>*/}

         <p className={styles.experience}>Here i created a form from scratch that generates XML files. Each file represents a person with relevant data
         (name, birth etc). The form was created with the ASP.NET Core MVC framework and according to the Swedish Tax Agency's structure.
         This project has been very educational and expanded my knowledge in system development as i got to work with both backend and frontend.</p>

          <h2 className={styles.subtitle}>Solar installer, OTM EKO Energi</h2>

          <p className={styles.experience}>Here i worked in a team with others and my task was to install and connect solar panels on various properties. 
          I worked on both small and large projects and had a lot of contact with other professional groups. This has given me great experience in communication</p>

        </div>
  )
}