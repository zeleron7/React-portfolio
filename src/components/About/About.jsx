import styles from './About.module.css';

export const About = () => {
  return (
    
    <div className={styles.aboutContainer}>

      <h1 className={styles.aboutTitle}>About Me</h1>

      <p className={styles.about}>I'm a 23-year-old from Söderhamn, Sweden, passionate about IT and equipped with broad knowledge of computers. 
       I'm currently studying to become a .NET developer in Gävle and have a constant drive to grow and learn more. 
       My interest in technology started at a young age, sparked by playing video games and exploring how computers work.</p>

      <p className={styles.about}>
        I have a background as an electrician and worked as a solar installer right after graduation. 
        A few months into the job, I began experiencing heel pain, which was eventually diagnosed as arthritis. 
        This challenge led me to reevaluate my career path and that's when I discovered programming, which quickly became my new passion.
      </p>

    </div>

  )
}