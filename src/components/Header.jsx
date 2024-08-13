import styled from "styled-components";
import NavLinks from "./NavBar/NavLinks";

const Heading = styled.header`
    position: fixed;
    top: 0;
    height: 4rem;
    width: 100%;
    z-index: 2000; 
   
`;

const Header = ({ dispatch }) => {
  return (
    <>
    
    <Heading>
    <NavLinks dispatch={ dispatch }/>
    </Heading>
    
    </>
  );
}

export default Header;