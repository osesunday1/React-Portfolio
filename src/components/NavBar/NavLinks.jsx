import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faUser, faGraduationCap, faDisplay, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

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
      color: var(--darkGreen-color);
      cursor: pointer;

      /* Apply a different color if the item is active */
      &.active {
        color: black; /* Change this to your desired color */
        font-weight: 3em; /* Optional: add bold to make it more visible */
      }
      &.active p {
        color: black;
      }

      i {
        font-size: 20px;
        padding: 10px;
      }

      &:hover i,
      &:hover p {
        color: var(--green-color);
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
        color: var(--bg-color)

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

const NavLinks = ({ isNavVisible, dispatch }) => {
  const [activeItem, setActiveItem] = useState('bio');

  const handleItemClick = (type) => {
    setActiveItem(type);
    dispatch({ type });
  };

  return (
    <SideNav className={isNavVisible ? 'showNav' : ''}>
      <ul>
        <li
          onClick={() => handleItemClick('bio')}
          className={activeItem === 'bio' ? 'active' : ''}
        >
          <i><FontAwesomeIcon icon={faUser} /></i>
          <p>About me</p>
        </li>
        <li
          onClick={() => handleItemClick('work')}
          className={activeItem === 'work' ? 'active' : ''}
        >
          <i><FontAwesomeIcon icon={faBriefcase} /></i>
          <p>Experience</p>
        </li>
      
        <li
          onClick={() => handleItemClick('education')}
          className={activeItem === 'education' ? 'active' : ''}
        >
          <i><FontAwesomeIcon icon={faGraduationCap} /></i>
          <p>Education</p>
        </li>
      </ul>
    </SideNav>
  );
}

export default NavLinks;