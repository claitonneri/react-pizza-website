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

const SideBar: React.FC = () => {
  return (
    <Container isOpen={false}>
      <Icon>
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
