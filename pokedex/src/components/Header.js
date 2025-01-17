import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #f44336;
  padding: 10px;
  color: #fff;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const HeaderLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: #e53935;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c62828;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Pokédex</HeaderTitle>
      <div>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/pokedex">Pokédex</HeaderLink>
      </div>
    </HeaderContainer>
  );
};

export default Header;
