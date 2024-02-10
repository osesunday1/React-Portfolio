
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

                            <button>Read More</button>
                        </div>
                    </div>
                </div>

                ))}



    </div>
        </>
    )
}



export default ReactProjects; 