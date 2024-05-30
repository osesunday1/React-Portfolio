import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faInfo } from '@fortawesome/free-solid-svg-icons';
import styles from './ReactProjects.module.css';
import { useState } from 'react';
import Modal from '../modal/Modal';

const ReactProjects = ({ personalInfo }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openInfoHandler = (project) => setSelectedProject(project);
  const closeInfoHandler = () => setSelectedProject(null);

  if (!personalInfo) {
    // Handle the case where reactJob doesn't exist as expected
    return <div>React projects information is not available.</div>;
  }
  
  const react = personalInfo.reactJob;

  return (
    <>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1><span>React</span> PROJECTS </h1>
        </div>

        {react && react.map((reac) => (
          <div className={styles.card1} key={reac.name}>
            <div className={styles.box}>
              <div className={styles.content}>
                <h3>{reac.name}</h3>
                <div className={styles.paragraph}>
                  <p>{reac.summary}</p>
                </div>
                <div className={styles.actions}>
                  <a href={reac.url} target="_blank" rel="noopener noreferrer">
                    <button>
                      <i><FontAwesomeIcon icon={faGlobe} /></i>
                    </button>
                  </a>
                  <button onClick={() => openInfoHandler(reac)}>
                    <i><FontAwesomeIcon icon={faInfo} /></i>
                  </button>
                  <a href={reac.git} target="_blank" rel="noopener noreferrer">
                    <button>
                      <i><FontAwesomeIcon icon={faGithub} /></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {selectedProject && (
          <Modal
            show={true}
            header={selectedProject.name}
            onCancel={closeInfoHandler}
            footer={<button onClick={closeInfoHandler}>CLOSE</button>}
          >
            <p>{selectedProject.description.WID}</p>
            
            <p>{selectedProject.description.HID}</p>
            
            <p>{selectedProject.description.IMP}</p>
          </Modal>
        )}
      </div>
    </>
  );
};

export default ReactProjects;