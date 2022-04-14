import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import GlobalStyles from "../theme/GlobalStyles";
import Header from "../components/organisms/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = ({ children }) => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: [0.33, 1, 0.68, 1],
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>
          {title ? `${title} | Freelance Concept` : `Freelance Concept`}
        </title>
        <meta
          name="description"
          content={
            description ? description : seo.datoCmsMainSeo.metaDescription
          }
        />
        <meta
          property="og:image"
          content={ogImage ? ogImage : seo.datoCmsMainSeo.ogImage.url}
        />
        <html lang="pl" />
      </Helmet> */}
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>
          <Header />
          <main>{children}</main>
        </div>
        {/* <Cookies
          canBeDisplayed={canBeDisplayedCookie}
          setCanBeDisplayed={setCanBeDisplayedCookie}
        /> */}
      </ThemeProvider>
    </>
  );
};

export default Main;
