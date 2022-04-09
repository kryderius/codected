import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import GlobalStyles from "../theme/GlobalStyles";
import Header from "../components/organisms/Header/Header";

const Main = ({ children }) => {
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
        <Header />
        <main>{children}</main>
        {/* <Cookies
          canBeDisplayed={canBeDisplayedCookie}
          setCanBeDisplayed={setCanBeDisplayedCookie}
        /> */}
      </ThemeProvider>
    </>
  );
};

export default Main;
