import React, { useState } from 'react';

import NavBar from '../NavBar';
import SideBar from '../SideBar';

import { Container, Content, Items, Title, Paragraph, Button } from './styles';

const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpened = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <NavBar isOpened={isOpened} />
      <SideBar isOpen={isOpen} isOpened={isOpened} />
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
