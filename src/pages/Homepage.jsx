import PropTypes from 'prop-types';
import LeftAside from '../components/LeftAside';
import CenterAside from '../components/CenterAside';
import RightAside from '../components/RightAside';
import RightContent from '../components/RightContent';
import styles from './Homepage.module.css'
import RightContentProjects from '../components/RightContentProjects';

const Homepage = ({personalInfo, isLoading}) => {

   

    return (  
        <>
        <section className={styles.main}>
            <LeftAside />
            <CenterAside />


            <RightAside>
              <RightContent  personalInfo= {personalInfo} isLoading={isLoading}/> 
              <RightContentProjects />
            </RightAside>
            
        </section>
        
        </>
    );
}
 


// Define the prop types
Homepage.propTypes = {
    personalInfo: PropTypes.any, 
    isLoading: PropTypes.bool
};


export default Homepage;