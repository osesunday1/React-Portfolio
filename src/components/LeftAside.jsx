import { useState } from "react";
import styles from './LeftAside.module.css'
import {NavLink} from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faFile, faDisplay} from '@fortawesome/free-solid-svg-icons'



const LeftAside = () => {


    const [isNavVisible, setIsNavVisible] = useState(true);

    const toggleNav = () => {
      setIsNavVisible(!isNavVisible);
    };


    return ( 
        <>
        <section className={styles.leftAside}>
        <div className={styles.menuBar} onClick={toggleNav}>
              <i>  <FontAwesomeIcon icon={faBars} /></i>
        </div>

            <div className={`${styles.sideNav} ${isNavVisible ? styles.showNav : ''}`}>
                <ul>
                <NavLink to= "about" style={{ textDecoration: 'none' }}>
                   <li>
                    <i>  <FontAwesomeIcon icon={faUser} /></i>
                        <p>About me</p>
                    </li>
                </NavLink>
               
                <NavLink to= "education" style={{ textDecoration: 'none' }}>  
                    <li>
                    <i>  <FontAwesomeIcon icon={faFile} /></i>
                        <p>Resume</p>
                    </li>
                    </NavLink>
               
                    <NavLink to= "projects" style={{ textDecoration: 'none' }}>
                    <li>  
                    <i><FontAwesomeIcon icon={faDisplay} /></i>
                        <p>Projects</p>
                    </li>
                    </NavLink>
               
                </ul>
            </div>

        </section>

        </>
     );
}
 
export default LeftAside;