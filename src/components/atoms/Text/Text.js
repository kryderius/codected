import styled from "styled-components";

export default styled.p`
  font-size: ${({ theme }) => theme.bodyAlt};
  font-family: ${({ theme }) => theme.fontFamilyText};
  line-height: 140%;
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.grey};
  .violet {
    color: ${({ theme }) => theme.violet};
  }

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.bodyS};
  }
`;
