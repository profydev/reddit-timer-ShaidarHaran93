import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/logo.svg';

const HeaderContainer = styled.header`
  height: 100px;
  padding: 0px 80px ;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
`;

const NavItem = styled(Link)`
  margin-left: 26px;
`;

const Header = () => {
  const bla = 'Search';
  return (
    <HeaderContainer>
      <Link to="/"><Logo style={{ display: 'block' }} /></Link>
      <Nav>
        <NavItem to="/search/javascript">{bla}</NavItem>
        <NavItem to="#how-it-works">How it works</NavItem>
        <NavItem to="#about">About</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
