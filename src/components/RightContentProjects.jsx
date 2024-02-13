import {Outlet, NavLink } from "react-router-dom"
import styles from './RightContentProjects.module.css'




const RightContentProjects = () => {
    

    return (  
        <>
        <ProjectMenu />
        <Outlet />
        </>
    );
}



const ProjectMenu = () =>{
    return(
        <>
        <div className={styles.projectMenu}>
            <ul>
            <NavLink to= "react" className={({ isActive }) => isActive ? styles.activeLink : styles.inactive}  style={{ textDecoration: 'none' }}>
                <li>REACT</li>
            </NavLink>

            <NavLink to= "django" className={({ isActive }) => isActive ? styles.activeLink : styles.inactive} style={{ textDecoration: 'none' }}>    
                <li>DJANGO</li>
            </NavLink>
            </ul>

        </div>
        </>
    )
}



 
export default RightContentProjects;