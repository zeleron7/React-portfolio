import styles from './Socials.module.css';
import githubLogo from '../../assets/image 14.png';
import linkedinLogo from '../../assets/image 13.png';

export const Socials = () => {
  return (

    <div className={styles.socialsContainer}>
        
        <h1 className={styles.socialsTitle}>Socials</h1>

        <ul className={styles.socialsList}>
            <li className={styles.socialsLink}>
                <img src={linkedinLogo} alt="linkedinLogo"/>
                <a href="https://www.linkedin.com/in/jessiemartensson">Linkedin</a>
            </li>
            <li className={styles.socialsLink}>
                <img src={githubLogo} alt="githubLogo"/> 
                <a href="https://github.com/zeleron7">Github</a>
            </li>
        </ul>

    </div>
  )
}