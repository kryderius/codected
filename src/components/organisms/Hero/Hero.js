import React, { useContext } from "react";
import styled from "styled-components";
import Headline from "../../atoms/Headline/Headline";
import Text from "../../atoms/Text/Text";
import AnimatedSVG from "../../molecules/AnimatedSVG/AnimatedSVG";
import Button from "../../atoms/Button/Button";
import { SplitText } from "@cyriacbr/react-split-text";
import scrollToSection from "../../../hooks/sctollTo";
import { MainContext } from "../../../context/index";
import { motion } from "framer-motion";
import BlurSVG from "../../../assets/svg/portfolio-blur.svg";
import BlurLeftSVG from "../../../assets/svg/websites-hero-right.svg";

const HeroSection = styled.section`
  min-height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .hero-blur {
    position: absolute;
    top: -10%;
    right: -10%;
    z-index: -1;

    @media (min-width: 1200px) {
      top: 10%;
      right: -20%;
    }
  }
  .hero-blur-left {
    position: absolute;
    display: none;

    @media (min-width: 1200px) {
      top: 10%;
      left: -10%;
    }
  }
`;

const HeroContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  }
`;

const StyledHeadline = styled(Headline)`
  margin-bottom: 25px;

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
`;

const StyledText = styled(Text)`
  margin-bottom: 50px;
  max-width: 550px;

  @media (min-width: 992px) {
    margin-bottom: 70px;
  }

  @media (min-width: 1400px) {
    font-size: ${({ theme }) => theme.headingM};
  }
`;

const RightWrapper = styled.div`
  width: 100%;
  max-width: 350px;

  @media (min-width: 992px) {
    width: 50%;
    max-width: unset;
    display: flex;
    justify-content: center;
  }
`;

const Hero = () => {
  const { loaderExit } = useContext(MainContext);
  return (
    <HeroSection id="hero">
      <img className="hero-blur" src={BlurSVG} alt="" />
      <img className="hero-blur-left" src={BlurLeftSVG} alt="" />

      <HeroContainer>
        <LeftWrapper>
          <StyledHeadline>
            <SplitText
              LetterWrapper={({ countIndex, children }) => (
                <motion.span
                  className="wrapper"
                  // data-aos="hero-headline"
                  // data-aos-duration="100"
                  // data-aos-delay={`${countIndex}00` / 2}
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={loaderExit && { y: 0, opacity: 1 }}
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8, delay: countIndex * 0.04 }}
                >
                  {children}
                </motion.span>
              )}
            >
              Postaw na rozwój swojego biznesu.
            </SplitText>
          </StyledHeadline>
          <StyledText data-aos="headline-fadeup" data-aos-delay="300">
            Tworzymy zaawansowane <strong>strony www</strong> oraz <strong>aplikacje webowe</strong>, a także zajmujemy
            się Twoim wizerunkiem marki.
          </StyledText>
          <Button onClick={(e) => scrollToSection(e, "contact")}>Chcę zyskać</Button>
        </LeftWrapper>
        <RightWrapper>
          <AnimatedSVG />
        </RightWrapper>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
