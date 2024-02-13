import { useState } from "react";
import styles from './LeftAside.module.css'
import {NavLink} from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faFile, faDisplay} from '@fortawesome/free-solid-svg-icons'



const LeftAside = () => {


    const [isNavVisible, setIsNavVisible] = useState(false);

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
                   <li><NavLink to= "about" style={{ textDecoration: 'none' }}>
                    <i>  <FontAwesomeIcon icon={faUser} /></i>
                        <p>About me</p>
                    </NavLink></li>
               

                    <li> <NavLink to= "education" style={{ textDecoration: 'none' }}>  
                    <i>  <FontAwesomeIcon icon={faFile} /></i>
                        <p>Resume</p>
                    </NavLink></li>
               
             
                    <li> <NavLink to= "projects" style={{ textDecoration: 'none' }}> 
                    <i><FontAwesomeIcon icon={faDisplay} /></i>
                        <p>Projects</p>
                    </NavLink></li>
               
                </ul>
            </div>

        </section>

        </>
     );
}
 
export default LeftAside;