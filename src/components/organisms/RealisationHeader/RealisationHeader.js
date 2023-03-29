import React, { useContext } from "react";
import styled from "styled-components";
import Headline from "../../atoms/Headline/Headline";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import Text from "../../atoms/Text/Text";
import RealisationHeroLeft from "../../../assets/svg/realisation-hero-left.svg";
import RealisationHeroRight from "../../../assets/svg/realisation-hero-right.svg";
import { MainContext } from "../../../context";
import { SplitText } from "@cyriacbr/react-split-text";
import { motion } from "framer-motion";

const Wrapper = styled.section`
  padding-top: 150px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .hero-left-svg {
    position: absolute;
    z-index: -1;
    top: 1%;
    left: 0;
    /* animation-duration: 10s;
    animation-name: leftblur;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear; */
  }

  .hero-right-svg {
    position: absolute;
    z-index: -1;
    top: 7%;
    right: 0;
    /* animation-duration: 10s;
    animation-name: rightblur;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear; */
  }

  @keyframes leftblur {
    0% {
      top: 1%;
    }
    50% {
      top: 0;
    }
    100% {
      top: 30%;
    }
  }
  @keyframes rightblur {
    0% {
      top: 7%;
    }
    50% {
      top: 20%;
    }
    100% {
      top: 0;
    }
  }

  @media (min-width: 992px) {
    padding-bottom: 150px;
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px 100px 15px;

  @media (min-width: 992px) {
    flex-direction: row;
    margin: 0 8% 100px 8%;
  }

  @media (min-width: 2000px) {
    margin: 0 25% 100px 25%;
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

  div div {
    overflow: hidden;
    line-height: 1.25;
  }

  .wrapper {
    line-height: 110%;
    position: relative;
    display: inline-block;
    overflow: visible !important;
  }

  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.headingXXL};
  }
`;

const RightWrapper = styled.div`
  width: 100%;
  max-width: 522px;

  .gatsby-image-wrapper {
    width: 100%;
    box-shadow: 0px 48px 100px rgba(17, 12, 46, 0.15);
    border-radius: 20px;

    @media (min-width: 992px) {
      max-width: 522px;
    }
  }

  @media (min-width: 992px) {
    width: 50%;
    max-width: unset;
    display: flex;
    justify-content: flex-end;
  }
`;

const Iconography = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 50px;
  width: 100%;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const ChosenTechnologies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 8%;
  }

  @media (min-width: 2000px) {
    margin: 0 25%;
  }
`;

const ChosenTechnologiesLeft = styled.div`
  @media (min-width: 992px) {
    width: 30%;
  }
`;

const ChosenTechnologiesRight = styled.div`
  width: 100%;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 48px 100px rgba(17, 12, 46, 0.15);
  /* display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  grid-gap: 50px;
  justify-items: center;
  align-items: center; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 15px;
  /* min-height: 170px; */

  img {
    height: 40px;

    @media (min-width: 992px) {
      height: 60px;
    }
  }
  @media (min-width: 600px) {
    grid-template: repeat(1, 1fr) / repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    width: 70%;
    display: flex;
    justify-content: space-around;
  }
`;

const ChosenTechnologiesTitle = styled(Text)`
  margin-bottom: 50px;
  font-size: 24px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: #000;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const RealisationHeader = ({ content, headline, technologies, icons, image }) => {
  const imageData = useStaticQuery(query);
  const { loaderExit } = useContext(MainContext);

  return (
    <Wrapper>
      <img className="hero-left-svg" src={RealisationHeroLeft} alt="" />
      <img className="hero-right-svg" src={RealisationHeroRight} alt="" />

      <Container>
        <LeftWrapper>
          {/* <StyledHeadline data-aos="headline-fadedown">{headline && headline}</StyledHeadline> */}
          <StyledHeadline>
            <SplitText
              LetterWrapper={({ countIndex, children }) => (
                <motion.span
                  className="wrapper"
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={loaderExit && { y: 0, opacity: 1 }}
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8, delay: countIndex * 0.04 }}
                >
                  {children}
                </motion.span>
              )}
            >
              {headline && headline}
            </SplitText>
          </StyledHeadline>
          {content && content}
          <Iconography>{icons && icons}</Iconography>
        </LeftWrapper>
        <RightWrapper>
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            animate={loaderExit && { y: 0, opacity: 1 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.8, delay: 0.4 }}
          >
            <GatsbyImage
              image={image.file.childImageSharp.gatsbyImageData}
              alt="Codected.eu strony internetowe hero image"
            />
          </motion.div>
        </RightWrapper>
      </Container>
      <ChosenTechnologies>
        <ChosenTechnologiesLeft>
          <ChosenTechnologiesTitle>Wybrane technologie</ChosenTechnologiesTitle>
        </ChosenTechnologiesLeft>
        <ChosenTechnologiesRight>{technologies && technologies}</ChosenTechnologiesRight>
      </ChosenTechnologies>
    </Wrapper>
  );
};

const query = graphql`
  query RealisationHeaderImage {
    file(name: { eq: "speedcopy" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
  }
`;

export default RealisationHeader;
