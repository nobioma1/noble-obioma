import React, { useState } from 'react';
import styled from 'styled-components';
import { MdReorder } from 'react-icons/md';
import Nav from './Nav';

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 3px solid #4e6ac6;
  padding: 10px;
  background-color: #081c35;
  z-index: 999;

  svg {
    font-size: 3.5rem;
    color: white;

    @media (min-width: 500px) {
      display: none;
    }
  }
`;

const Header = () => {
  const [isOpen, openNav] = useState(false);
  const navHandler = () => openNav(prevNavState => !prevNavState);

  return (
    <HeaderContainer>
      <MdReorder onClick={navHandler} />
      <Nav navState={isOpen} navHandler={navHandler} />
    </HeaderContainer>
  );
};

export default Header;
