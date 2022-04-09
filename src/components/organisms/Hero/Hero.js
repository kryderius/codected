import React from "react";
import styled from "styled-components";
import Headline from "../../atoms/Headline/Headline";
import Text from "../../atoms/Text/Text";
import AnimatedSVG from "../../molecules/AnimatedSVG/AnimatedSVG";
import Button from "../../atoms/Button/Button";

const HeroSection = styled.section`
  min-height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    <HeroSection>
      <HeroContainer>
        <LeftWrapper>
          <StyledHeadline>
            Postaw na rozwój swojego <span className="violet">biznesu</span>.
          </StyledHeadline>
          <StyledText>
            Tworzymy zaawansowane strony www oraz aplikacje webowe, a także zajmujemy się Twoim wizerunkiem marki.
          </StyledText>
          <Button link="/#">Chcę zyskać</Button>
        </LeftWrapper>
        <RightWrapper>
          <AnimatedSVG />
        </RightWrapper>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
