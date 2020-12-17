import React from 'react';

import { Container, NavLink, NavIcon, Bars, Logo } from './styles';

import ImgLogo from '../../assets/images/logo.png';

interface NavBarProps {
  isOpened(): void;
}

const NavBar: React.FC<NavBarProps> = ({ isOpened }: NavBarProps) => {
  return (
    <Container>
      <NavLink to="/">
        <Logo src={ImgLogo} alt="Logo" />
        Pizza
      </NavLink>
      <NavIcon onClick={isOpened}>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Container>
  );
};

export default NavBar;
