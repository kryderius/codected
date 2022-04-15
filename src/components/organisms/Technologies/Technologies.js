import React from "react";
import styled from "styled-components";
import Headline from "../../atoms/Headline/Headline";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const TechnologiesSection = styled.section`
  margin: 200px 0;
  position: relative;
`;

const OfferContainer = styled.div`
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
  }
`;

const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 75px 0;
  margin-left: auto;
  margin-right: auto;
`;

const StyledLogo = styled(GatsbyImage)`
  filter: grayscale(100);
  margin: auto;

  &:hover {
    filter: grayscale(0);
  }
`;

const Technologies = () => {
  const data = useStaticQuery(query);

  return (
    <TechnologiesSection id="technologies">
      <OfferContainer>
        <StyledHeadline data-aos="fade-up">
          Najlepsze <span className="violet">technologie</span> dla Ciebie
        </StyledHeadline>
        <LogosWrapper>
          <StyledLogo image={data.reactLogo.childImageSharp.gatsbyImageData} alt="React" />
          <StyledLogo image={data.gatsbyLogo.childImageSharp.gatsbyImageData} alt="Gatsby" />
          <StyledLogo image={data.nodejsLogo.childImageSharp.gatsbyImageData} alt="NodeJs" />
          <StyledLogo image={data.wordpressLogo.childImageSharp.gatsbyImageData} alt="WordPress" />
          <StyledLogo image={data.figmaLogo.childImageSharp.gatsbyImageData} alt="Figma" />
          <StyledLogo image={data.javascriptLogo.childImageSharp.gatsbyImageData} alt="javascript" />
        </LogosWrapper>
      </OfferContainer>
    </TechnologiesSection>
  );
};

const query = graphql`
  query LogosQuery {
    reactLogo: file(name: { eq: "react" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 100)
      }
    }
    gatsbyLogo: file(name: { eq: "gatsby" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 100)
      }
    }
    nodejsLogo: file(name: { eq: "nodejs" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 100)
      }
    }
    wordpressLogo: file(name: { eq: "wordpress" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 100)
      }
    }
    figmaLogo: file(name: { eq: "figma" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 100)
      }
    }
    javascriptLogo: file(name: { eq: "javascript" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, height: 100)
      }
    }
  }
`;

export default Technologies;
