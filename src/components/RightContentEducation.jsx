import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './RightContentEducation.module.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGraduationCap, FaSchool, FaBriefcase } from 'react-icons/fa';

const RightContentEducation = () => {
    return (  
        <>


<div className={styles.content}>
            <VerticalTimeline lineColor='#1abc9c' Height='100%'>

                 <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{background:'#1abc9c', color:'#fff'}} icon={<FaGraduationCap />} date = "2000-2014"> 
                <h3>it domain</h3> 
                <p>diploma cyprus international University</p>
             
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{background:'#1abc9c', color:'#fff'}} icon={<FaBriefcase />} date = "2000-2014"> 
                <h3>it domain</h3> 
                <p>diploma cyprus international University</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{background:'#1abc9c', color:'#fff'}} icon={<FaSchool />} date = "2000-2014"> 
                <h3>it domain</h3> 
                <p>diploma cyprus international University</p>
                </VerticalTimelineElement>

                
            </VerticalTimeline>
        </div>
        </>
    );
}
 
export default RightContentEducation


