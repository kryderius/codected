import React from "react";
import Main from "../templates/Main";
import styled from "styled-components";
import Text from "../components/atoms/Text/Text";
import Button from "../components/atoms/Button/Button";
import { navigate } from "gatsby";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
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

const StyledHeadline = styled(Text)`
  text-align: center;
  margin-bottom: 50px;
`;

const StyledButton = styled(Button)`
  width: 250px;
`;

const FormSent = () => {
  return (
    <Main>
      <Wrapper>
        <StyledHeadline>Pomyślnie przesłano wiadomość. Postaramy się odpowiedzieć jak najszybciej.</StyledHeadline>
        <StyledButton onClick={() => navigate("/")}>Strona główna</StyledButton>
      </Wrapper>
    </Main>
  );
};

export default FormSent;
