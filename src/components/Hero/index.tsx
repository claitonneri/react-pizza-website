import React from 'react';

import NavBar from '../NavBar';
import SideBar from '../SideBar';

import { Container, Content, Items, Title, Paragraph, Button } from './styles';

const Hero: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <SideBar />
      <Content>
        <Items>
          <Title>Greatest Pizza Ever</Title>
          <Paragraph>Ready in 60 seconds</Paragraph>
          <Button>Place Order</Button>
        </Items>
      </Content>
    </Container>
  );
};

export default Hero;
