import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Headline from "../../atoms/Headline/Headline";
import { graphql, useStaticQuery } from "gatsby";
import PortfolioItem from "../../molecules/PortfolioItem/PortfolioItem";

const PortfolioSection = styled.section`
  margin: 200px 0;
  position: relative;
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

const Portfolio = () => {
  const data = useStaticQuery(query);

  return (
    <PortfolioSection id="technologies">
      <PortfolioContainer>
        <StyledHeadline>
          Nasze <span className="violet">genialne</span> realizacje
        </StyledHeadline>
        <PortfolioColumns>
          <ColumnLeft>
            <PortfolioItem
              image={data.flameCenter.childImageSharp.gatsbyImageData}
              imgAlt="FlameCenter"
              link="/#"
              title="FlameCenter"
              text="Strona www, logotyp, wizytówki i ulotki"
            />
          </ColumnLeft>
          <ColumnRight>
            <PortfolioItem
              image={data.speedCopy.childImageSharp.gatsbyImageData}
              imgAlt="Speed Copy"
              link="/#"
              title="Speed Copy"
              text="Strona www"
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
  }
`;

export default Portfolio;
