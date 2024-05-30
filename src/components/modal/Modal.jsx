
import styles from './Modal.module.css';
import Backdrop from '../UIElements/Backdrop'
import { CSSTransition } from 'react-transition-group'

const ModalOverlay = props=>{
    return(
        <div className={styles.modal}>
            <header className={styles.modal__header}>{props.header}</header>
            <div className={styles.modal__content}>
                {props.children}
            </div>

            <footer className={styles.modal__footer}>{props.footer}</footer>
        </div>
    )
}


const Modal = (props) => {
  return <>
        {props.show && <Backdrop onClick={props.onCancel}/>}
        <CSSTransition 
        in= {props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={styles.modal}
        >

        <ModalOverlay {...props}/>
        </CSSTransition>
  </>;
}

export default Modal;