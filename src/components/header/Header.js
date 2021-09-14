import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import * as S from './Header.style';

const Header = () => (
  <S.Container>
    <Link to="/"><Logo style={{ display: 'block' }} /></Link>
    <S.Nav>
      <S.NavItem to="/search/javascript">Search</S.NavItem>
      <S.NavItem to="/#how-it-works">How it works</S.NavItem>
      <S.NavItem to="/#about">About</S.NavItem>
    </S.Nav>
  </S.Container>
);

export default Header;
