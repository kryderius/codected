import React, { useRef } from "react";
import styled from "styled-components";
import { useIntersection } from "react-use";
import { SplitText } from "@cyriacbr/react-split-text";
import { motion } from "framer-motion";

const MarketingText = styled.h2`
  font-size: ${({ theme }) => theme.headingL};
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  line-height: 110%;
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.black};
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 150px;

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

const WebsitesMarketingText = () => {
  const marketingTitleRef = useRef(null);
  const isMarketingTextInView = useIntersection(marketingTitleRef, { threshold: 0.8 });
  return (
    <MarketingText ref={marketingTitleRef}>
      <SplitText
        LetterWrapper={({ countIndex, children }) => (
          <motion.span
            className="wrapper"
            initial={{ opacity: 0, y: "-100%" }}
            animate={isMarketingTextInView?.isIntersecting && { y: 0, opacity: 1 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4, delay: countIndex * 0.02 }}
          >
            {children}
          </motion.span>
        )}
      >
        NIE SZUKAJ KLIENTÓW, NIECH TO ONI SZUKAJĄ CIEBIE!
      </SplitText>
    </MarketingText>
  );
};

export default WebsitesMarketingText;
