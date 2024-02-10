import styles from './DjangoProjects.module.css'



const DjangoProjects = ({personalInfo}) => {
    if (!personalInfo ) {
        // Handle the case where reactJob doesn't exist as expected
        return <div>React projects information is not available.</div>;
    }
    const django= personalInfo.djangoJob

    return(
        <>
         <div className={styles.content}>
           
            <div className={styles.heading}>
                <h1><span>Django</span> PROJECTS </h1>
            </div>

            {django && django.map((djang)=>(

                <div className={styles.card1} key={djang.name}>
                   <div className={styles.box}>
                       <div className={styles.content}>
                            <h3>{djang.name}</h3>
                            <div className={styles.paragraph}>
                                <p>{djang.summary}</p>
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
 
export default DjangoProjects;