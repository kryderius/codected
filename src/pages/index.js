import React from "react";
import Main from "../templates/Main";
import Hero from "../components/organisms/Hero/Hero";
import Offer from "../components/organisms/Offer/Offer";

const IndexPage = () => {
  return (
    <Main>
      <title>Home Page</title>
      <Hero />
      <Offer />
    </Main>
  );
};

export default IndexPage;
