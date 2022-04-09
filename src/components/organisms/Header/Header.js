import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 15px;
  z-index: 100;

  @media (min-width: 992px) {
    padding: 0 8%;
  }

  @media (min-width: 1200px) {
    height: 130px;
  }
`;

const StyledLogo = styled(Link)`
  position: relative;
  z-index: 100;
`;

const Hamburger = styled.button`
  position: relative;
  width: 30px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;
`;

const HamburgerInner = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.violet};

  &.active {
    &::before {
      transform: rotate(90deg);
      top: 50%;
    }
    &::after {
      display: none;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.violet};
    transition: all 0.2s ease-out;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.violet};
  }
`;

const NavMobile = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  background-color: #fff;
  z-index: 99;
  transform: translateY(-100%);
  transition: all 0.4s ease-out;

  &.active {
    transform: translateY(0%);
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <StyledHeader>
      <StyledLogo to="/">codected</StyledLogo>
      <Hamburger onClick={(e) => setMenuOpen(!menuOpen)}>
        <HamburgerInner className={menuOpen && "active"}></HamburgerInner>
      </Hamburger>
      <NavMobile className={menuOpen && "active"}></NavMobile>
    </StyledHeader>
  );
};

export default Header;
