import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import GlobalStyles from "../theme/GlobalStyles";
import Header from "../components/organisms/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import Footer from "../components/organisms/Footer/Footer";

const DevelopmentInfo = styled.div`
  position: fixed;
  bottom: 0;
  right: 50%;
  width: 80%;
  max-width: 300px;
  height: 90px;
  background-color: #530ceb;
  border-radius: 10px;
  transform: translate(50%, 0);
  opacity: 0;
  pointer-events: none;
  transition: all 1s cubic-bezier(0.33, 1, 0.68, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.active {
    opacity: 1;
    pointer-events: all;
    transform: translate(50%, -30%);

    @media (min-width: 992px) {
      transform: translate(0);
    }
  }

  @media (min-width: 992px) {
    bottom: 50px;
    right: 50px;
    transform: translate(0, 30%);
    max-width: 400px;
    height: 120px;
  }
`;

const DevelopmentInfoText = styled.p`
  font-size: ${({ theme }) => theme.bodyXS};
  font-family: ${({ theme }) => theme.fontFamilyText};
  line-height: 140%;
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.white};
`;

const DevelopmentInfoButton = styled.button`
  margin-top: 10px;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.white};
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.bodyXS};
  font-family: ${({ theme }) => theme.fontFamilyHeading};
  font-weight: ${({ theme }) => theme.regular};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.white};
  }
`;

const Main = ({ children, title, metaDescription, ogUrl, ogTitle, ogImage, ogImageAlt, ogDescription, ogSiteName }) => {
  const [isDevInfo, setIsDevInfo] = useState(true);
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1300,
      easing: [0.33, 1, 0.68, 1],
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const location = useLocation();
  console.log(location);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {title ? `${title} | Codected.eu` : `Agencja interaktywna - strony www, sklepy, programowanie | Codected.eu`}
        </title>
        <meta
          name="description"
          content={
            metaDescription
              ? metaDescription
              : "Tworzymy zaawansowane strony www oraz aplikacje webowe, a także zajmujemy się Twoim wizerunkiem marki."
          }
        />
        <meta property="og:url" content={ogUrl ? ogUrl : "https://codected.eu"} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={ogTitle ? ogTitle : "Agencja interaktywna - strony www, sklepy, programowanie"}
        />
        <meta property="og:image" content={ogImage ? ogImage : `https://codected.eu/ogimage.png`} />
        <meta property="og:image:alt" content={ogImageAlt ? ogImageAlt : "Agencja interaktywna codected.eu"} />
        <meta
          property="og:description"
          content={
            ogDescription
              ? ogDescription
              : "Tworzymy zaawansowane strony www oraz aplikacje webowe, a także zajmujemy się Twoim wizerunkiem marki."
          }
        />
        <meta property="og:site_name" content={ogSiteName ? ogSiteName : "Codected.eu"} />
        <meta property="og:locale" content="pl_PL" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <DevelopmentInfo className={isDevInfo && "active"}>
          <DevelopmentInfoText>Strona znajduje się jeszcze w fazie budowy.</DevelopmentInfoText>
          <DevelopmentInfoButton onClick={(e) => setIsDevInfo(false)}>Rozumiem</DevelopmentInfoButton>
        </DevelopmentInfo>
        {/* <Cookies
          canBeDisplayed={canBeDisplayedCookie}
          setCanBeDisplayed={setCanBeDisplayedCookie}
        /> */}
      </ThemeProvider>
    </>
  );
};

export default Main;
