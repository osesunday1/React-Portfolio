import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faUser, faGraduationCap, faBriefcase, faLaptopCode, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const SideNav = styled.div`
  margin-top: 10px;
  padding: 16px 10px;
  border-radius: 10px;
  background: var(--bg-color);
  transform-origin: top center;
  transform: scale(0.05);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease-in-out;

  &.showNav {
    transform: scale(1);
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: 1024px) {
    margin-top: 0px;
    margin: 0 auto;
    padding: 0;
    transform: none;
    opacity: 1;
    pointer-events: auto;
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 8px 10px;
      margin: 0 0 4px 0;
      border-radius: 8px;
      color: var(--darkGreen-color);
      cursor: pointer;

      &:last-child {
        margin-bottom: 0;
      }

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
          onClick={() => handleItemClick('skills')}
          className={activeItem === 'skills' ? 'active' : ''}
        >
          <i><FontAwesomeIcon icon={faLaptopCode} /></i>
          <p>Skills</p>
        </li>

        <li
          onClick={() => handleItemClick('education')}
          className={activeItem === 'education' ? 'active' : ''}
        >
          <i><FontAwesomeIcon icon={faGraduationCap} /></i>
          <p>Education</p>
        </li>

        <li
          onClick={() => handleItemClick('certifications')}
          className={activeItem === 'certifications' ? 'active' : ''}
        >
          <i><FontAwesomeIcon icon={faCertificate} /></i>
          <p>Certifications</p>
        </li>
      </ul>
    </SideNav>
  );
}

export default NavLinks;