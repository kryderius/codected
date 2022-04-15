import React from "react";
import styled from "styled-components";
import Headline from "../../atoms/Headline/Headline";
import Text from "../../atoms/Text/Text";
import AnimatedSVG from "../../molecules/AnimatedSVG/AnimatedSVG";
import Button from "../../atoms/Button/Button";
import { SplitText } from "@cyriacbr/react-split-text";
import scrollToSection from "../../../hooks/sctollTo";

const HeroSection = styled.section`
  min-height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
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
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <LeftWrapper>
          <StyledHeadline>
            <SplitText
              LetterWrapper={({ countIndex, children }) => (
                <span
                  className="wrapper"
                  data-aos="hero-headline"
                  data-aos-duration="100"
                  data-aos-delay={`${countIndex}00` / 2}
                >
                  {children}
                </span>
              )}
            >
              Postaw na rozwój swojego biznesu.
            </SplitText>
          </StyledHeadline>
          <StyledText data-aos="fade-up" data-aos-delay="300">
            Tworzymy zaawansowane strony www oraz aplikacje webowe, a także zajmujemy się Twoim wizerunkiem marki.
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
