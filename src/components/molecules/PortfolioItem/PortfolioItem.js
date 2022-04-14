import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const BoxWrapper = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 24px 50px rgba(0, 0, 0, 0.12);

    .gatsby-image-wrapper {
      transform: scale(1.1);
    }
  }
`;

const LinkWrapper = styled(Link)`
  width: 100%;
  height: 100%;
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  padding: 0 10% 10% 10%;
  left: 0;
  bottom: 0;
  color: ${({ theme }) => theme.black};
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.headingL};
  font-weight: ${({ theme }) => theme.bold};
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.bodyAlt};
  font-weight: ${({ theme }) => theme.light};
`;

const PortfolioItem = ({ image, imgAlt, link, title, text }) => {
  return (
    <BoxWrapper>
      <LinkWrapper to={link}>
        <StyledGatsbyImage image={image} alt={imgAlt} />
        <TextWrapper>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextWrapper>
      </LinkWrapper>
    </BoxWrapper>
  );
};

export default PortfolioItem;