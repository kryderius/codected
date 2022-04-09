import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.violet};
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.bodyS};
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  font-weight: ${({ theme }) => theme.regular};
`;

const Button = ({ link, children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default Button;
