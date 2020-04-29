import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const selectedPage = {
  borderBottom: '3px solid #FF872C',
  padding: '0 0 5px',
};

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <NavLink to="/" exact activeStyle={selectedPage}>
          Listagem
        </NavLink>
        <NavLink to="import" exact activeStyle={selectedPage}>
          Importar
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
