import React from "react";
import styled from "styled-components";
import FooterSVG from "../../../assets/svg/footer.svg";
import Headline from "../../atoms/Headline/Headline";
import { Link } from "gatsby";
import scrollToSection from "../../../hooks/sctollTo";
import Text from "../../atoms/Text/Text";
import { Icon } from "@iconify/react";
import emailIcon from "@iconify/icons-mdi/email";
import cellphoneIcon from "@iconify/icons-mdi/cellphone";

const FooterSection = styled.footer`
  background-color: #f2f2f2;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  padding: 100px 0;

  @media (min-width: 992px) {
    flex-direction: row;
    margin: 0 8%;
  }

  @media (min-width: 2000px) {
    margin: 0 25%;
  }
`;

const TextBoxLeft = styled.div`
  text-align: center;
  margin-bottom: 50px;

  @media (min-width: 992px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

const TextBoxRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 992px) {
    width: 50%;
  }
`;

const FooterHeadline = styled(Headline)`
  font-size: ${({ theme }) => theme.headingL};
  font-weight: ${({ theme }) => theme.medium};
  margin-bottom: 30px;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.headingL};
  }
  @media (min-width: 1400px) {
    font-size: ${({ theme }) => theme.headingL};
  }
`;

const FooterContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.violet};
  font-size: ${({ theme }) => theme.headingM};
  transition: all 0.3s cubic-bezier(0.33, 1, 0.68, 1);

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover {
    color: #6f37e6;
    transform: translateY(-5px);
  }

  svg {
    margin-right: 10px;
  }
`;

const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #d8d8d8;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 8%;
  }

  @media (min-width: 2000px) {
    margin: 0 25%;
  }
`;

const NavDesktopListItem = styled(Link)`
  color: #1e1e20;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    color: ${({ theme }) => theme.grey};
    transform: translateY(-5px);
  }
`;

const Copyrights = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  padding-bottom: 30px;
  padding-top: 30px;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 8%;
  }

  @media (min-width: 2000px) {
    margin: 0 25%;
  }
`;

const StyledText = styled(Text)`
  font-size: 16;
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  font-weight: ${({ theme }) => theme.regular};
`;

const FooterNew = () => {
  return (
    <FooterSection>
      <TextBox>
        <TextBoxLeft>
          <img src={FooterSVG} alt="" />
        </TextBoxLeft>
        <TextBoxRight>
          <FooterHeadline>
            {/* Tworzymy rozwiązania, <br /> dzięki którym zyskasz <br /> więcej. */}
            Tworzymy rozwiązania, dzięki którym zyskasz więcej.
          </FooterHeadline>
          <FooterContactLink href="mailto:kontakt@codected.eu">
            <Icon icon={emailIcon} color="#530ceb" width={30} />
            kontakt@codected.eu
          </FooterContactLink>
          <FooterContactLink href="tel:883777642">
            <Icon icon={cellphoneIcon} color="#530ceb" width={30} />
            +48 883 777 642
          </FooterContactLink>
        </TextBoxRight>
      </TextBox>
      <NavBox>
        <NavDesktopListItem to="/">Start</NavDesktopListItem>
        <NavDesktopListItem to="#offer" onClick={(e) => scrollToSection(e, "offer")}>
          Co robimy
        </NavDesktopListItem>
        <NavDesktopListItem to="/realizacje">Realizacje</NavDesktopListItem>
        <NavDesktopListItem to="#contact" onClick={(e) => scrollToSection(e, "contact")}>
          Darmowa wycena
        </NavDesktopListItem>
        <NavDesktopListItem to="/polityka-prywatnosci">Polityka prywatności</NavDesktopListItem>
      </NavBox>
      <Copyrights>
        <StyledText>2022 Codected.eu | Wszelkie prawa zastrzeżone</StyledText>
        <StyledText>
          Stworzone z <Icon icon="codicon:heart-filled" color="#e01c1c" inline={true} /> przez Codected.eu
        </StyledText>
      </Copyrights>
    </FooterSection>
  );
};

export default FooterNew;
