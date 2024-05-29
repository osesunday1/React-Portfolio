import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './RightAside.module.css';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const RightAside = () => {
  const location = useLocation();
  const [showComponent, setShowComponent] = useState(false);

  // Trigger the transition in and out based on route changes
  useEffect(() => {
    // Component should enter
    setShowComponent(true);

    // Component should start exit animation on location change
    return () => setShowComponent(false);
  }, [location]);

  return (
    <>
      <section className={styles.rightAside}>
        <TransitionGroup>
          <CSSTransition
            in={showComponent} // Controlled by state
            key={location.pathname}
            timeout={1200}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit
          >
            <Outlet />
          </CSSTransition>
        </TransitionGroup>
      </section>
    </>
  );
};

RightAside.propTypes = {
  children: PropTypes.any
};

export default RightAside;