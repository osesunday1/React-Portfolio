import {Outlet } from "react-router-dom"
import styles from './RightContentProjects.module.css'




const RightContentProjects = () => {
    

    return (  
        <>
        <section className='sideContent'>
        <section className={styles.sideContent}>
        <ProjectMenu />
        <Outlet />
        </section>
        </section>
        </>
    );
}



const ProjectMenu = () =>{
    return(
        <>
        
        <div className={styles.projectMenu }>
        

        </div>
        </>
    )
}



 
export default RightContentProjects;