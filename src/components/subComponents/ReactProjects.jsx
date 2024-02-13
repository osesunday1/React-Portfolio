
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import styles from './ReactProjects.module.css'





const ReactProjects = ({personalInfo})=>{
  
    if (!personalInfo ) {
        // Handle the case where reactJob doesn't exist as expected
        return <div>React projects information is not available.</div>;
    }
    const react= personalInfo.reactJob

    return(
        <>
         <div className={styles.content}>
           
            <div className={styles.heading}>
                <h1><span>React</span> PROJECTS </h1>
            </div>

            {react && react.map((reac)=>(

                <div className={styles.card1} key={reac.name}>
                   <div className={styles.box}>
                       <div className={styles.content}>
                            <h3>{reac.name}</h3>
                            <div className={styles.paragraph}>
                                <p>{reac.summary}</p>
                            </div>

                            
                                <a href={reac.url} target="_blank" rel="noopener noreferrer">
                                    <button> 
                                    <i><FontAwesomeIcon icon={faGithub} /></i>
                                    </button>
                                </a>
                                
                        </div>
                    </div>
                </div>

                ))}



    </div>
        </>
    )
}



export default ReactProjects; 