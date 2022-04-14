import React from "react";
import styled from "styled-components";
import Headline from "../../atoms/Headline/Headline";
import Text from "../../atoms/Text/Text";
import { GatsbyImage } from "gatsby-plugin-image";

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

const StyledSubheadline = styled.p`
  font-size: ${({ theme }) => theme.headingM};
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.violet};
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

  @media (min-width: 992px) {
    width: 80%;
  }
`;

const OfferBlock = ({ image, altImage, isRight, subheadline, headline, text }) => {
  return (
    <BlockWrapper className={isRight && "isRight"}>
      <LeftWrapper className={isRight && "isRight"} data-aos="fade-down">
        <StyledSubheadline>{subheadline}</StyledSubheadline>
        <StyledHeadline>{headline}</StyledHeadline>
        <StyledText>{text}</StyledText>
      </LeftWrapper>
      <RightWrapper className={isRight && "isRight"} data-aos="fade-up">
        <StyledGatsbyImage image={image} alt={altImage} />
      </RightWrapper>
    </BlockWrapper>
  );
};

export default OfferBlock;
