import styled from "styled-components";

export default styled.h1`
  font-size: ${({ theme }) => theme.headingL};
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  line-height: 110%;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.black};

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingXL};
  }
  @media (min-width: 1400px) {
    font-size: ${({ theme }) => theme.headingXXL};
  }

  .violet {
    color: ${({ theme }) => theme.violet};
  }
`;
