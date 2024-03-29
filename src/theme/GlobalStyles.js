import { createGlobalStyle } from "styled-components";
import "./typography.css";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
  }


  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }

  [data-aos="hero-headline"] {
  transform: rotate(45deg) translateY(130%);
  transform-origin: top left;
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    transform: rotate(0) translateY(0);
    opacity: 1;
  }
}

[data-aos="headline-fadeup"] {
  transform: translateY(20px);
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    transform: translateY(0);
    opacity: 1;
  }
}

[data-aos="headline-fadedown"] {
  transform: translateY(-20px);
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    transform: translateY(0);
    opacity: 1;
  }
}

[data-aos="section-fadeup"] {
  transform: translateY(50%);
  opacity: 0;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-property: transform, opacity;

  &.aos-animate {
    transform: translateY(0);
    opacity: 1;
  }
}

[data-aos="section-fadedown"] {
  transform: translateY(-50%);
  opacity: 0;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-property: transform, opacity;

  &.aos-animate {
    transform: translateY(0);
    opacity: 1;
  }
}
`;

export default GlobalStyles;
