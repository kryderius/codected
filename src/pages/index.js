import React from "react";
import Main from "../templates/Main";
import Hero from "../components/organisms/Hero/Hero";
import Offer from "../components/organisms/Offer/Offer";
import Technologies from "../components/organisms/Technologies/Technologies";
import Portfolio from "../components/organisms/Portfolio/Portfolio";
import BigText from "../components/organisms/BigText/BigText";
import Contact from "../components/organisms/Contact/Contact";

const IndexPage = () => {
  return (
    <Main>
      <div data-scroll-section>
        <Hero />
        <Offer />
        <Technologies />
        <Portfolio />
        <BigText />
        <Contact />
      </div>
    </Main>
  );
};

export default IndexPage;
