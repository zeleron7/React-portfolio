import styles from './Contact.module.css';
import githubLogo from '../../assets/githublogo.png';
import linkedinLogo from '../../assets/linkedinlogo.png';

export const Contact = () => {
  return (

    <div>
        
        <h1 className={styles.contactTitle}>Contact</h1>

        <ul className={styles.contactList}>
            <li className={styles.contactLink}>
                <img src={linkedinLogo} alt="linkedinLogo"/>
                <a href="https://www.linkedin.com/in/jessiemartensson">linkedin.com/in/jessiemartensson</a>
            </li>
            <li className={styles.contactLink}>
                <img src={githubLogo} alt="githubLogo"/> 
                <a href="https://github.com/zeleron7">github.com/zeleron7</a>
            </li>
        </ul>

    </div>
  )
}