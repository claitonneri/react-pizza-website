import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Container = styled.nav`
  display: flex;
  justify-content: center;

  background: transparent;
  height: 160px;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;

  color: #fff;
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  } ;
`;

export const Logo = styled.img`
  display: block;
  width: 120px;
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
