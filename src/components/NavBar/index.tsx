import React from 'react';

import { Container, NavLink, NavIcon, Bars } from './styles';

interface NavBarProps {
  isOpened(): void;
}

const NavBar: React.FC<NavBarProps> = ({ isOpened }: NavBarProps) => {
  return (
    <Container>
      <NavLink to="/">Pizza</NavLink>
      <NavIcon onClick={isOpened}>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Container>
  );
};

export default NavBar;
