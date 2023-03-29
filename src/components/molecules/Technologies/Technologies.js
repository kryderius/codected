import React, { useRef } from "react";
import styled from "styled-components";
import Headline from "../../atoms/Headline/Headline";
import Text from "../../atoms/Text/Text";
import logoOne from "../../../assets/images/logos/logoOne.png";
import logoTwo from "../../../assets/images/logos/logoTwo.png";
import logoThree from "../../../assets/images/logos/logoThree.png";
import logoFour from "../../../assets/images/logos/logoFour.png";
import logoFive from "../../../assets/images/logos/logoFive.png";
import logoSix from "../../../assets/images/logos/logoSix.png";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";

const Section = styled.section`
  padding-bottom: 100px;
`;

const Container = styled.div`
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
  position: relative;
  min-height: 400px;
  width: 100%;
  max-width: 400px;

  img {
    position: absolute;

    &:nth-child(1) {
      top: 0;
      left: 50%;
      width: 12%;
    }
    &:nth-child(2) {
      top: 20%;
      left: 10%;
      width: 15%;
    }
    &:nth-child(3) {
      top: 35%;
      left: 70%;
      width: 15%;
    }
    &:nth-child(4) {
      top: 50%;
      left: 0;
      width: 20%;
    }
    &:nth-child(5) {
      top: 70%;
      left: 60%;
      width: 15%;
    }
    &:nth-child(6) {
      top: 85%;
      left: 30%;
      width: 15%;
    }
  }

  @media (min-width: 992px) {
    width: 50%;
    text-align: left;
    max-width: 640px;
    margin-bottom: 0;
    min-height: 650px;
  }
`;

const StyledHeadline = styled(Headline)`
  font-size: ${({ theme }) => theme.headingL};
  margin-bottom: 40px;
`;

const RightWrapper = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    width: 50%;
  }
`;

const Technologies = () => {
  const logos = [logoOne, logoTwo, logoThree, logoFour, logoFive, logoSix];

  const ref = useRef(null);
  const inView = useIntersection(ref, { threshold: 0.8 });

  return (
    <Section>
      <Container>
        <LeftWrapper ref={ref}>
          {[...logos].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              initial={{ opacity: 0, y: "-100%" }}
              animate={inView?.isIntersecting && { y: 0, opacity: 1 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1, delay: index * 0.1 }}
            />
          ))}
        </LeftWrapper>
        <RightWrapper data-aos="section-fadeup">
          <StyledHeadline>
            <span className="violet">Niezawodne</span> technologie
          </StyledHeadline>
          <Text style={{ marginBottom: "20px" }}>
            Nasze prace opieramy jedynie o <strong>najnowsze</strong> i <strong>sprawdzone</strong> technologie, które
            zapewniają niezawodność i potrafią sprostać nawet najcięższym zadaniom.
          </Text>
          <Text>
            <strong>Szybki czas ładowania</strong> to najważniejszy aspekt każdej strony internetowej, dlatego wyciskamy
            z naszych stron ostatnie soki, aby ładowały się w mgnieniu oka.
          </Text>
        </RightWrapper>
      </Container>
    </Section>
  );
};

export default Technologies;
