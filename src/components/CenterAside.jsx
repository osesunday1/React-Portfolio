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
                    <a href="https://github.com/osesunday1?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <i><FontAwesomeIcon icon={faGithub} /></i>
                    </a>

                    <a href="https://www.linkedin.com/in/oseyenbhin-sunday-osemeahon-527701128/" target="_blank" rel="noopener noreferrer">
                            <i><FontAwesomeIcon icon={faLinkedin} /></i>
                    </a>

                    <a href="https://twitter.com/Galacticos_CEO" target="_blank" rel="noopener noreferrer">
                            <i><FontAwesomeIcon icon={faTwitter} /></i>
                    </a>

                    <a href="https://www.instagram.com/dr._ose/" target="_blank" rel="noopener noreferrer">
                            <i><FontAwesomeIcon icon={faInstagram} /></i>
                    </a>
            </div>

            <div className={styles.cardButtons}>
                        <a  href="https://drive.google.com/file/d/1hU6ywR8rgpYwxRyjyf0DFHRkM2XKSZZ_/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
                    <button ><i><FontAwesomeIcon icon={faDownload} /></i></button>
                    </a>
            </div>
        </div>
        </section>

        </>
    );
}
 
export default CenterAside;