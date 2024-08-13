import { useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavLinks from "./NavBar/NavLinks";
import { faBars } from '@fortawesome/free-solid-svg-icons';



// Styled Components

const Section = styled.section`
    width: 80%;
    text-align: center;
    background: #a51e1e;
    margin: 0 auto;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const MenuBar = styled.div`
    height: 70px;
    border-radius: 10px;
    color: var(--dark-color);
    background: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    background: #1e20a5;

    i {
        font-size: 20px;
    }

    &:active i {
        font-size: 10px;
    }

    &:hover i {
        color: var(--green-color);
    }

    @media (max-width: 1024px) {
        display: none;
    }
`;




const LeftAside = ({dispatch}) => {

    const [isNavVisible, setIsNavVisible] = useState(true);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <Section>
            <MenuBar onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </MenuBar>

            <NavLinks isNavVisible= {isNavVisible} dispatch= {dispatch}/>

           
        </Section>
    );
}

export default LeftAside;
