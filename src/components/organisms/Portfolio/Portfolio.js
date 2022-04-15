import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import styled from "styled-components";
import Headline from "../../atoms/Headline/Headline";
import { graphql, useStaticQuery } from "gatsby";
import PortfolioItem from "../../molecules/PortfolioItem/PortfolioItem";

const PortfolioSection = styled.section`
  margin: 200px 0;
`;

const PortfolioContainer = styled.div`
  margin: 0 15px;

  @media (min-width: 992px) {
    flex-direction: row;
    margin: 0 8%;
  }
`;

const StyledHeadline = styled(Headline)`
  margin-bottom: 100px;
  @media (min-width: 1200px) {
    font-size: 40px;
    margin-bottom: 0;
  }
`;

const PortfolioColumns = styled.div`
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ColumnLeft = styled.div`
  @media (min-width: 992px) {
    width: 45%;
    margin-top: 200px;
  }
`;

const ColumnRight = styled.div`
  @media (min-width: 992px) {
    width: 45%;
  }
`;

const DevelopmentInfo = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 180px;
  padding: 15px;
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.violet};
  border-radius: 10px;
  transform: translate(-50%, 30%);
  opacity: 0;
  pointer-events: none;
  transition: all 1s cubic-bezier(0.33, 1, 0.68, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  &.active {
    opacity: 1;
    pointer-events: all;
    transform: translate(-50%, -50%);

    @media (min-width: 992px) {
      /* transform: translate(0); */
    }
  }

  @media (min-width: 992px) {
    /* transform: translate(0, 30%); */
    max-width: 500px;
    height: 160px;
    padding: 30px;
  }
`;

const DevelopmentInfoText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.bodyXS};
  font-family: ${({ theme }) => theme.fontFamilyText};
  line-height: 140%;
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.black};
`;

const DevelopmentInfoButton = styled.button`
  margin-top: 10px;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.violet};
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.bodyXS};
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  font-weight: ${({ theme }) => theme.regular};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.violet};
  }
`;

const Portfolio = () => {
  const [isUnavailable, setIsUnavailable] = useState(false);
  const data = useStaticQuery(query);

  return (
    <PortfolioSection id="portfolio">
      <DevelopmentInfo className={isUnavailable && "active"}>
        <DevelopmentInfoText>
          Nie skończyliśmy jeszcze budowy tej podstrony, ale niedługo coś tutaj się pojawi.
        </DevelopmentInfoText>
        <DevelopmentInfoButton onClick={(e) => setIsUnavailable(false)}>Rozumiem</DevelopmentInfoButton>
      </DevelopmentInfo>
      <PortfolioContainer>
        <StyledHeadline data-aos="fade-up">
          Nasze <span className="violet">genialne</span> realizacje
        </StyledHeadline>
        <PortfolioColumns>
          <ColumnLeft>
            <PortfolioItem
              image={data.flameCenter.childImageSharp.gatsbyImageData}
              imgAlt="FlameCenter"
              // link=""
              title="FlameCenter"
              text="Strona www, logotyp, wizytówki i ulotki"
              setIsUnavailable={setIsUnavailable}
            />
          </ColumnLeft>
          <ColumnRight>
            <PortfolioItem
              image={data.speedCopy.childImageSharp.gatsbyImageData}
              imgAlt="Speed Copy"
              // link=""
              title="Speed Copy"
              text="Strona www"
              hasMargin
              setIsUnavailable={setIsUnavailable}
            />
            <PortfolioItem
              image={data.ekowkra.childImageSharp.gatsbyImageData}
              imgAlt="Ekowkra"
              // link=""
              title="Ekowkra"
              text="Zakodowanie strony www dla firmy RendPro"
              setIsUnavailable={setIsUnavailable}
            />
          </ColumnRight>
        </PortfolioColumns>
      </PortfolioContainer>
    </PortfolioSection>
  );
};

const query = graphql`
  query PortfolioQuery {
    flameCenter: file(name: { eq: "FlameCenter2" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
    speedCopy: file(name: { eq: "speedcopy" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
    ekowkra: file(name: { eq: "ekowkra" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
  }
`;

export default Portfolio;
