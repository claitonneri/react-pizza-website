import React from 'react';

import { Container, NavLink, NavIcon, Bars } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <NavLink to="/">Pizza</NavLink>
      <NavIcon>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Container>
  );
};

export default NavBar;
