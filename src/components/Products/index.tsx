import React from 'react';

import {
  Container,
  Header,
  Wrapper,
  Card,
  Img,
  Info,
  Title,
  Description,
  Price,
  Button,
} from './styles';

interface ProductsProps {
  heading: string;
  products: {
    id: number;
    img: string;
    alt: string;
    title: string;
    desc: string;
    price: string;
    button: string;
  }[];
}

const Products: React.FC<ProductsProps> = ({
  heading,
  products,
}: ProductsProps) => {
  return (
    <Container>
      <Header>{heading}</Header>
      <Wrapper>
        {products.map(product => {
          return (
            <Card key={product.id}>
              <Img src={product.img} alt={product.alt} />
              <Info>
                <Title>{product.title}</Title>
                <Description>{product.desc}</Description>
                <Price>{product.price}</Price>
                <Button>{product.button}</Button>
              </Info>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Products;
