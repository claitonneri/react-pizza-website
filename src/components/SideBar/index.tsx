import React from 'react';

import {
  Container,
  Icon,
  Close,
  Menu,
  ButtonWrap,
  Link,
  Route,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Icon>
        <CloseIcon />
      </Icon>
      <Menu>
        <Link to="/">Pizzas</Link>
        <Link to="/">Desserts</Link>
        <Link to="/">Full Menu</Link>
      </Menu>
      <ButtonWrap>
        <Route to="/">Order Now</Route>
      </ButtonWrap>
    </Container>
  );
};

export default SideBar;
