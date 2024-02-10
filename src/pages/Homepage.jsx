import PropTypes from 'prop-types';
import LeftAside from '../components/LeftAside';
import CenterAside from '../components/CenterAside';
import RightAside from '../components/RightAside';
import RightContent from '../components/RightContent';
import styles from './Homepage.module.css'
import RightContentProjects from '../components/RightContentProjects';

const Homepage = ({personalInfo, isLoading, toggleNav, isNavVisible}) => {

   

    return (  
        <>
        <header> </header>
        <section className={styles.main}>
            <LeftAside toggleNav={toggleNav} isNavVisible={isNavVisible}/>
            <CenterAside />


            <RightAside>
              <RightContent  personalInfo= {personalInfo} isLoading={isLoading}/> 
              <RightContentProjects />
            </RightAside>
            
        </section>
         <footer></footer>
        </>
    );
}
 


// Define the prop types
Homepage.propTypes = {
    personalInfo: PropTypes.any, 
    isLoading: PropTypes.bool
};


export default Homepage;