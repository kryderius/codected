import React from "react";
import styled from "styled-components";
import OfferBlock from "../../molecules/OfferBlock/OfferBlock";
import { graphql, useStaticQuery } from "gatsby";

const OfferSection = styled.section`
  margin: 100px 0;
`;

const OfferContainer = styled.div`
  margin: 0 15px;

  @media (min-width: 992px) {
    flex-direction: row;
    margin: 0 8%;
  }
`;

const Offer = () => {
  const data = useStaticQuery(query);
  return (
    <OfferSection>
      <OfferContainer>
        <OfferBlock
          image={data.wwwImg.childImageSharp.gatsbyImageData}
          subheadline="Pokaż się z najlepszej strony"
          headline="Strony www"
          text="Chcesz zatrudnić handlowca, który będzie do dyspozycji 24/7? Zainwestuj w stronę www i zyskaj więcej. Dedykowane rozwiązania webowe oparte o React, Gatsby, Vue, WordPress i wiele więcej."
        />
        <OfferBlock
          isRight
          image={data.shopImg.childImageSharp.gatsbyImageData}
          subheadline="Sprzedawaj online"
          headline="Sklepy www"
          text="Chcesz zatrudnić handlowca, który będzie do dyspozycji 24/7? Zainwestuj w stronę www i zyskaj więcej. Dedykowane rozwiązania webowe oparte o React, Gatsby, Vue, WordPress i wiele więcej."
        />
        <OfferBlock
          image={data.appImg.childImageSharp.gatsbyImageData}
          subheadline="Bądź wyjątkowy"
          headline="Aplikacje webowe i programowanie"
          text="Chcesz zatrudnić handlowca, który będzie do dyspozycji 24/7? Zainwestuj w stronę www i zyskaj więcej. Dedykowane rozwiązania webowe oparte o React, Gatsby, Vue, WordPress i wiele więcej."
        />
        <OfferBlock
          isRight
          image={data.graphicImg.childImageSharp.gatsbyImageData}
          subheadline="Wyróżnij się"
          headline="Grafika i branding"
          text="Chcesz zatrudnić handlowca, który będzie do dyspozycji 24/7? Zainwestuj w stronę www i zyskaj więcej. Dedykowane rozwiązania webowe oparte o React, Gatsby, Vue, WordPress i wiele więcej."
        />
      </OfferContainer>
    </OfferSection>
  );
};

const query = graphql`
  query MyQuery {
    wwwImg: file(name: { eq: "strony-www" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
    shopImg: file(name: { eq: "sklepy-www" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
    appImg: file(name: { eq: "web-apps" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
    graphicImg: file(name: { eq: "branding" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
  }
`;

export default Offer;
