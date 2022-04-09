import React from "react";
import styled from "styled-components";
import BigBoxSVG from "../../../assets/images/svg/big-box.svg";
import HeroSVG from "../../../assets/images/svg/hero-svg-figma.svg";

const SVGWrapper = styled.div`
  position: relative;

  @media (min-width: 992px) {
    width: 70%;
  }
`;

const StyledHeroSVG = styled.img`
  width: 100%;
  /* animation: heroFadeUp 2s;
  animation-delay: 1s;

  @keyframes heroFadeUp {
    0% {
      transform: translateY(5%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  } */
`;

const StyledBigBox = styled.img`
  position: absolute;
  width: 26%;
  top: 10%;
  left: 25%;
  animation: bigBox 4s infinite;

  @keyframes bigBox {
    0% {
      transform: translateY(5%);
    }
    50% {
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(5%);
    }
  }
`;

const AnimatedSVG = () => {
  return (
    <SVGWrapper>
      <StyledHeroSVG src={HeroSVG} />
      <StyledBigBox src={BigBoxSVG} />
    </SVGWrapper>
  );
};

export default AnimatedSVG;
