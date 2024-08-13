
import styles from './RightAside.module.css';



const RightAside = ({children}) => {
 
  return (
    <>
      <section className={styles.rightAside}>
       
        {children}
      </section>
    </>
  );
};



export default RightAside;