import React from 'react';

import {
  Container,
  Icon,
  CloseIcon,
  Menu,
  ButtonWrap,
  Item,
  Route,
} from './styles';

interface SideBarProps {
  isOpen: boolean;
  isOpened: () => void;
}

const SideBar: React.FC<SideBarProps> = ({
  isOpen,
  isOpened,
}: SideBarProps) => {
  return (
    <Container isOpen={isOpen} onClick={isOpened}>
      <Icon onClick={isOpened}>
        <CloseIcon />
      </Icon>
      <Menu>
        <Item to="/">Pizzas</Item>
        <Item to="/">Desserts</Item>
        <Item to="/">Full Menu</Item>
      </Menu>
      <ButtonWrap>
        <Route to="/">Order Now</Route>
      </ButtonWrap>
    </Container>
  );
};

export default SideBar;
