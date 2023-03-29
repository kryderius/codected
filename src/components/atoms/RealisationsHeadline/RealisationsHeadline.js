import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SplitText } from "@cyriacbr/react-split-text";
import { MainContext } from "../../../context";
import Headline from "../Headline/Headline";
import BlurLeftSVG from "../../../assets/svg/realisation-hero-left.svg";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  position: relative;

  .blur-left {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    pointer-events: none;
  }
`;

const StyledHeadline = styled(Headline)`
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

const RealisationsHeadline = () => {
  const { loaderExit } = useContext(MainContext);
  return (
    <Wrapper>
      <img className="blur-left" src={BlurLeftSVG} alt="" />
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
          Nasze realizacje
        </SplitText>
      </StyledHeadline>
    </Wrapper>
  );
};

export default RealisationsHeadline;
