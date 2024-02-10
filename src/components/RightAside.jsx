import PropTypes from 'prop-types';
import styles from './RightAside.module.css'
import { Outlet } from 'react-router-dom';

const RightAside = () => {
    return (
        <>
        <section className={styles.rightAside}>
          <Outlet />
        </section>
        </>
      );
}


  // Define the prop types
  RightAside.propTypes = {
    children: PropTypes.any
};
export default RightAside;