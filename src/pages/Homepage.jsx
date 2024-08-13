import { motion, AnimatePresence  } from 'framer-motion';
import LeftAside from '../components/LeftAside';
import CenterAside from '../components/CenterAside';
import RightAside from '../components/RightAside';
import RightContent from '../components/RightContent';
import styles from './Homepage.module.css';
import { useReducer } from 'react';
import RightContentExperience from '../components/RightContentExperience';
import RightContentProjects from '../components/RightContentProjects';
import RightContentEducation from '../components/RightContentEducation';
import Header from '../components/Header';
import useWindowWidth from '../components/UIElements/UseWindowWidth';

const initialState = {
    content: 'home',
};

function reducer(state, action) {
    switch (action.type) {
        case 'bio':
            return {
                ...state,
                content: 'home',
            };
        case 'work':
            return {
                ...state,
                content: 'experience',
            };
        case 'projects':
            return {
                ...state,
                content: 'projects',
            };
        case 'education':
            return {
                ...state,
                content: 'education',
            };
        default:
            throw new Error('Action Unknown');
    }
}

const slideVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
};

const Homepage = ({ personalInfo, isLoading }) => {
    const windowWidth = useWindowWidth();
    const applyHeader = windowWidth < 1024;

    const [{ content }, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            {applyHeader && <Header dispatch={dispatch} />}
            <section className={styles.main}>
                <LeftAside dispatch={dispatch} content={content} />
                <CenterAside />

                <RightAside>
                <AnimatePresence mode="wait"> 
                    <motion.div
                        key={content}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={slideVariants}
                        transition={{ duration: 0.3 }}
                    >
                        {content === 'home' && (
                            <RightContent personalInfo={personalInfo} isLoading={isLoading} />
                        )}
                        {content === 'experience' && (
                            <RightContentExperience personalInfo={personalInfo} isLoading={isLoading} />
                        )}
                        {content === 'projects' && (
                            <RightContentProjects personalInfo={personalInfo} isLoading={isLoading} />
                        )}
                        {content === 'education' && (
                            <RightContentEducation personalInfo={personalInfo} isLoading={isLoading} />
                        )}
                    </motion.div>
                    </AnimatePresence>
                </RightAside>
            </section>
        </>
    );
};

export default Homepage;