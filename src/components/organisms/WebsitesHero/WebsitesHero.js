import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MainContext } from "../../../context";
import Headline from "../../atoms/Headline/Headline";
import Text from "../../atoms/Text/Text";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import TopLeftSVG from "../../../assets/svg/websites-hero-left.svg";
import TopRightSVG from "../../../assets/svg/websites-hero-right.svg";

const HeroSection = styled.section`
  padding-top: 150px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .websites-hero-left {
    position: absolute;
    top: -20%;
    z-index: -1;
    left: 0;
  }

  .websites-hero-right {
    position: absolute;
    top: 70%;
    z-index: -1;
    right: 0;
  }
`;

const HeroContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px;

  @media (min-width: 992px) {
    flex-direction: row;
    margin: 0 8%;
  }

  @media (min-width: 2000px) {
    margin: 0 25%;
  }
`;

const LeftWrapper = styled.div`
  margin-bottom: 50px;
  text-align: center;

  @media (min-width: 992px) {
    width: 50%;
    text-align: left;
    max-width: 640px;
    margin-bottom: 0;
  }
`;

const StyledHeadline = styled(Headline)`
  font-size: ${({ theme }) => theme.headingXL};
  margin-bottom: 60px;

  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.headingXXL};
  }

  span {
    display: inline-block;
  }
`;

const RightWrapper = styled.div`
  width: 100%;
  max-width: 350px;

  .gatsby-image-wrapper {
    max-width: 522px;
  }

  @media (min-width: 992px) {
    width: 50%;
    max-width: unset;
    display: flex;
    justify-content: flex-end;
  }
`;

const WebsitesHero = () => {
  const data = useStaticQuery(query);
  const { loaderExit } = useContext(MainContext);

  return (
    <HeroSection>
      <img src={TopLeftSVG} className="websites-hero-left" alt="" />
      <img src={TopRightSVG} className="websites-hero-right" alt="" />

      <HeroContainer>
        <LeftWrapper>
          <StyledHeadline as="h1">
            <motion.span
              initial={{ opacity: 0, y: "20%" }}
              animate={loaderExit && { y: 0, opacity: 1 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.8 }}
              className="violet"
            >
              Skuteczna
            </motion.span>{" "}
            i{" "}
            <motion.span
              initial={{ opacity: 0, y: "20%" }}
              animate={loaderExit && { y: 0, opacity: 1 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.8, delay: 0.2 }}
              className="violet"
            >
              niezawodna
            </motion.span>{" "}
            strona internetowa
          </StyledHeadline>
          <Text style={{ marginBottom: "20px" }}>
            <strong>Skuteczna i niezawodna strona internetowa</strong> to klucz do sukcesu! Nie trać pieniędzy na
            rozwiązania, które nie przyniosą Ci zysku - zacznij zarabiać razem z nami.
          </Text>
        </LeftWrapper>

        <RightWrapper>
          <GatsbyImage
            image={data.websitesHero.childImageSharp.gatsbyImageData}
            alt="Codected.eu strony internetowe hero image"
          />
        </RightWrapper>
      </HeroContainer>
    </HeroSection>
  );
};

const query = graphql`
  query WebsitesHeroQuery {
    websitesHero: file(name: { eq: "websites-hero" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
  }
`;

export default WebsitesHero;
