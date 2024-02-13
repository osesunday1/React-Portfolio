import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './RightContentEducation.module.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGraduationCap} from 'react-icons/fa';





const RightContentEducation = ({personalInfo, isLoading}) => {

     // First, check if it's loading
     if (isLoading) {
        return <div>Loading...</div>;
    }

    // Then, check if personalInfo is not null before trying to access its properties
    if (!personalInfo) {
        return <div>No personal information available.</div>;
    }

    const education =personalInfo.education 

    return (  
                <>

            <div className={styles.content}>
                    <VerticalTimeline lineColor='var(--darkGreen-color)' Height='100%'>

                        {education && education.map((edu)=>(

                            <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{background:'var(--darkGreen-color)', color:'#fff'}} icon={<FaGraduationCap />} date = {edu.date}  key= {edu.degree}> 
                            <h4>{edu.degree}, <span>{edu.country}</span></h4> 
                            <p>{edu.course}</p>
                        
                            </VerticalTimelineElement>

                        ))}

                        

                        
                    </VerticalTimeline>
                </div>
                </>
    );
}
 
export default RightContentEducation


