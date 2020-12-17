import React from 'react';

import { Container, Button } from './styles';

const Feature: React.FC = () => {
  return (
    <Container>
      <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <Button>Order Now</Button>
    </Container>
  );
};

export default Feature;
