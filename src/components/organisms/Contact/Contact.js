import React, { useState } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Headline from "../../atoms/Headline/Headline";
import Text from "../../atoms/Text/Text";
import ContactForm from "../../molecules/ContactForm/ContactForm";

const ContactSection = styled.section`
  margin: 200px 0;
`;

const ContactContainer = styled.div`
  margin: 0 15px;

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    margin: 0 8%;
  }
`;

const LeftWrapper = styled.div`
  @media (min-width: 992px) {
    width: 40%;
  }
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  border-radius: 20px;
`;

const RightWrapper = styled.div`
  margin-top: 100px;
  @media (min-width: 992px) {
    width: 50%;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledHeadline = styled(Headline)`
  margin-bottom: 30px;
  @media (min-width: 1200px) {
    font-size: 40px;
  }
`;

const StyledText = styled(Text)`
  @media (min-width: 992px) {
    max-width: 500px;
  }
`;

const SubmitSuccessfull = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 50%;
  width: 90%;
  max-width: 650px;
  height: 200px;
  background-color: ${({ theme }) => theme.violet};
  border-radius: 20px;
  z-index: 999;
  transform: translate(-50%, -10%);
`;

const SubmitText = styled(Text)`
  color: ${({ theme }) => theme.white};
`;

const SubmitButton = styled.button`
  margin-top: 30px;
  width: 180px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.white};
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.bodyS};
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  font-weight: ${({ theme }) => theme.regular};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.white};
  }
`;

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleCloseButton = () => {
    setFormSubmitted(false);
    setFormError(false);
  };

  const data = useStaticQuery(query);
  return (
    <ContactSection id="contact">
      {formSubmitted && (
        <SubmitSuccessfull>
          <SubmitText>Pomyślnie wysłano wiadomość</SubmitText>
          <SubmitButton onClick={handleCloseButton}>Zamknij</SubmitButton>
        </SubmitSuccessfull>
      )}
      <ContactContainer>
        <LeftWrapper data-aos="fade-right">
          <StyledGatsbyImage image={data.stayCodected.childImageSharp.gatsbyImageData} alt="Kontakt Codected" />
        </LeftWrapper>

        <RightWrapper>
          <StyledHeadline data-aos="fade-down">Kontakt</StyledHeadline>
          <StyledText>
            Teraz jest czas na Twoją kolej! Wyślij nam wiadomość - to nic nie kosztuje. Odezwiemy się do Ciebie jak
            najszybciej.
          </StyledText>
          <ContactForm setFormError={setFormError} setFormSubmitted={setFormSubmitted} />
        </RightWrapper>
      </ContactContainer>
    </ContactSection>
  );
};

const query = graphql`
  query ContactQuery {
    stayCodected: file(name: { eq: "staycodected" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
  }
`;

export default Contact;
