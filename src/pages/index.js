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
    <Main
      title="Agencja interaktywna - strony www, sklepy i programowanie"
      metaDescription="Zdobądź nowych klientów i zwiększ widoczność w sieci. Projektujemy sklepy e-commerce, strony internetowe, aplikacje i materiały reklamowe."
    >
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
