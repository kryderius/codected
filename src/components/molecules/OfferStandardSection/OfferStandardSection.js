import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import Headline from "../../atoms/Headline/Headline";
import Text from "../../atoms/Text/Text";

const Section = styled.section`
  margin: 100px 0;
  position: relative;
`;

const Container = styled.div`
  margin: 0 15px;

  @media (min-width: 992px) {
    flex-direction: row;
    margin: 0 8%;
  }

  @media (min-width: 2000px) {
    margin: 0 25%;
  }
`;

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;

    &.isRight {
      flex-direction: row-reverse;
    }
  }
`;

const LeftWrapper = styled.div`
  margin-bottom: 30px;

  @media (min-width: 992px) {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;

    &.isRight {
      width: 50%;
    }
  }
`;

const RightWrapper = styled.div`
  @media (min-width: 992px) {
    width: 50%;
    display: flex;
    justify-content: flex-end;

    &.isRight {
      justify-content: flex-start;
    }
  }
`;

const StyledHeadline = styled(Headline)`
  font-size: ${({ theme }) => theme.headingL};
  margin-bottom: 30px;
`;

const StyledText = styled(Text)`
  max-width: 600px;
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  border-radius: 20px;
  box-shadow: 0px 26px 51px rgba(0, 0, 0, 0.25);

  &.no-shadow {
    border-radius: none;
    box-shadow: none;
  }

  @media (min-width: 992px) {
    width: 80%;
  }
`;

const OfferStandardSection = ({ image, altImage, isRight, headline, text, noShadow }) => {
  return (
    <Section>
      <Container>
        <BlockWrapper className={isRight && "isRight"} data-aos="section-fadeup">
          <LeftWrapper className={isRight && "isRight"}>
            <StyledHeadline dangerouslySetInnerHTML={{ __html: headline }} />
            <StyledText dangerouslySetInnerHTML={{ __html: text }} />
          </LeftWrapper>
          <RightWrapper className={isRight && "isRight"} data-aos="headline-fadedown">
            <StyledGatsbyImage image={image} alt={altImage} className={noShadow && "no-shadow"} />
          </RightWrapper>
        </BlockWrapper>
      </Container>
    </Section>
  );
};

export default OfferStandardSection;
