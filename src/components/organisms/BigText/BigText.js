import React from "react";
import styled from "styled-components";
import { SplitText } from "@cyriacbr/react-split-text";

const BigTextSection = styled.section`
  margin: 200px 0;
  position: relative;
`;

const BigTextContainer = styled.div`
  margin: 0 15px;
  display: flex;
  justify-content: center;

  @media (min-width: 992px) {
    margin: 0 8%;
  }
`;

const StyledHeadline = styled.h3`
  font-size: ${({ theme }) => theme.headingL};
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  line-height: 110%;
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.black};
  text-align: center;
  max-width: 900px;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingXL};
  }

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

const BigText = () => {
  return (
    <BigTextSection>
      <BigTextContainer>
        <StyledHeadline>
          <SplitText
            LetterWrapper={({ countIndex, children }) => (
              <span
                className="wrapper"
                data-aos="hero-headline"
                data-aos-duration="100"
                data-aos-delay={`${countIndex}0` * 5}
              >
                {children}
              </span>
            )}
          >
            Tworzymy nowe i dedykowane rozwiązania dla Twojego biznesu
          </SplitText>
        </StyledHeadline>
      </BigTextContainer>
    </BigTextSection>
  );
};

export default BigText;
