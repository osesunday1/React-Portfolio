import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faUser, faGraduationCap, faDisplay, faBriefcase } from '@fortawesome/free-solid-svg-icons';



const SideNav = styled.div`
    margin-top: 30px;
    border-radius: 10px;
    background: var(--bg-color);
    transform: translateX(-700%);
    transition: transform 0.3s ease-in-out;

    &.showNav {
        transform: translateX(0%);
    }

    @media (max-width: 1024px) {
        margin-top: 0px;
        margin: 0 auto;
        transform: translateX(0%);
        height: 100%;
        border-radius: 0px;
        background: var(--darkGreen-color);
    }

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;

        li {
            flex-direction: row;
        padding: 5px 10px;
        margin: 0 auto;
        color: white;
            

            i {
                font-size: 20px;
                color: var(--darkGreen-color);
                padding: 10px;
            }

            &:hover i,
            &:hover p {
                color: var(--green-color);
                cursor: pointer;
            }

            p {
                margin-top: 5px;
                font-size: 12px;
                color: var(--darkGreen-color);
            }

            @media (max-width: 1024px) {
            flex-direction: row;
            padding: 5px 10px;
            margin-top: 0px;
            margin: 0 auto;

            i {
             color: var(--bg-color);
            }    
            }
        }

        @media (max-width: 1024px) {
        flex-direction: row;
        padding: 10px 30px;
        margin-top: 0px;

        p {
                display: none;
            }

            
        }
    }

    

    
    
`;

const NavLinks = ({isNavVisible, dispatch}) => {
  return (
    
    <SideNav className={isNavVisible ? 'showNav' : ''}>
    <ul>
        <li onClick={()=>dispatch({type: 'bio'})}>
            <i><FontAwesomeIcon icon={faUser} /></i> 
            <p>About me</p>
        </li>
        <li onClick={()=>dispatch({type: 'work'})}>
        <i><FontAwesomeIcon icon={faBriefcase} /></i> 
            <p>Experience</p>
        </li>
        <li onClick={()=>dispatch({type: 'projects'})}>
        <i><FontAwesomeIcon icon={faDisplay} /></i> 
            <p>Projects</p>
        </li>
        <li onClick={()=>dispatch({type: 'education'})}>
        <i><FontAwesomeIcon icon={faGraduationCap} /></i> 
            <p>Education</p>
        </li>
    </ul>
</SideNav>
  );
}

export default NavLinks;