import styles from './CenterAside.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons'


const CenterAside = () => {
    return (  
        <>

        <section className={styles.centerAside}>
        <img src="./ose.jpg" alt="Oseyenbhin Osemeahon" />

        <div className={styles.cardContent}>
            <div className={styles.name}>
                <h2>OSEYENBHIN OSEMEAHON</h2>
            </div>

            <div className={styles.specialty}>
                <p>Full-Stack Developer</p>
            </div>
            
            <div className={styles.socialIcons}>
            <i><FontAwesomeIcon icon={faGithub} /></i>
            <i><FontAwesomeIcon icon={faLinkedin} /></i>
            <i><FontAwesomeIcon icon={faTwitter} /></i>
            <i><FontAwesomeIcon icon={faInstagram} /></i>
            </div>

            <div className={styles.cardButtons}>
            <button><i><FontAwesomeIcon icon={faDownload} /></i></button>
            </div>
        </div>
        </section>

        </>
    );
}
 
export default CenterAside;