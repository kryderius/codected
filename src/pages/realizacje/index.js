import React, { useState } from "react";
import Main from "../../templates/Main";
import styled from "styled-components";
import RealisationsHeadline from "../../components/atoms/RealisationsHeadline/RealisationsHeadline";
import { graphql, useStaticQuery } from "gatsby";
import PortfolioItem from "../../components/molecules/PortfolioItem/PortfolioItem";

const PortfolioContainer = styled.div`
  margin: 0 15px 100px 15px;

  @media (min-width: 992px) {
    flex-direction: row;
    margin: 0 8% 100px 8%;
  }

  @media (min-width: 2000px) {
    margin: 0 25% 100px 25%;
  }
`;

const PortfolioColumns = styled.div`
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ColumnLeft = styled.div`
  @media (min-width: 992px) {
    width: 45%;
    margin-top: 200px;
  }
`;

const ColumnRight = styled.div`
  @media (min-width: 992px) {
    width: 45%;
  }
`;

const RealisationsIndex = () => {
  const [isUnavailable, setIsUnavailable] = useState(false);
  const data = useStaticQuery(query);
  return (
    <Main
      title="Nasze realizacje"
      metaDescription="Sprawdź co robimy w codected. Zobacz jedne z naszych realizacji stron www, sklepów, aplikacji webowych oraz grafiki."
    >
      <RealisationsHeadline />
      <PortfolioContainer>
        <PortfolioColumns>
          <ColumnLeft>
            <PortfolioItem
              image={data.flameCenter.childImageSharp.gatsbyImageData}
              imgAlt="FlameCenter"
              hasLink={true}
              link="/realizacje/flamecenter"
              title="FlameCenter"
              text="Strona www, logotyp, wizytówki i ulotki"
              setIsUnavailable={setIsUnavailable}
              hasMargin
            />
            <PortfolioItem
              image={data.szkolkaLeszka.childImageSharp.gatsbyImageData}
              imgAlt="Drzewka Leszka"
              hasLink={true}
              link="/realizacje/szkolka-leszka"
              title="Drzewka Leszka"
              text="Zakodowanie strony z projektu"
              setIsUnavailable={setIsUnavailable}
              hasMargin
            />
            <PortfolioItem
              image={data.mstudio.childImageSharp.gatsbyImageData}
              imgAlt="Mstudio Kunert"
              hasLink={true}
              link="/realizacje/mstudio-kunert"
              title="Mstudio Kunert"
              text="Logotyp wraz ze stroną internetową"
              setIsUnavailable={setIsUnavailable}
            />
          </ColumnLeft>
          <ColumnRight>
            <PortfolioItem
              image={data.speedCopy.childImageSharp.gatsbyImageData}
              imgAlt="Speed Copy"
              hasLink={true}
              link="/realizacje/speedcopy"
              title="Speed Copy"
              text="Strona www"
              hasMargin
              setIsUnavailable={setIsUnavailable}
            />
            <PortfolioItem
              image={data.ekowkra.childImageSharp.gatsbyImageData}
              imgAlt="Ekowkra"
              hasLink={true}
              link="/realizacje/ekowkra"
              title="Ekowkra"
              text="Zakodowanie strony www dla firmy RendPro"
              hasMargin
              setIsUnavailable={setIsUnavailable}
            />
            <PortfolioItem
              image={data.stinger.childImageSharp.gatsbyImageData}
              imgAlt="Logo Stinger Real Estate"
              hasLink={true}
              link="/realizacje/stinger"
              title="Stinger"
              text="Zaprojektowanie logotypu"
              setIsUnavailable={setIsUnavailable}
            />
          </ColumnRight>
        </PortfolioColumns>
      </PortfolioContainer>
    </Main>
  );
};

const query = graphql`
  query PortfolioPageQuery {
    flameCenter: file(name: { eq: "FlameCenter2" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
    speedCopy: file(name: { eq: "speedcopy" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
    ekowkra: file(name: { eq: "ekowkra" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
    szkolkaLeszka: file(name: { eq: "szkolka-leszka" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
    stinger: file(name: { eq: "stinger-logo" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
    mstudio: file(name: { eq: "mstudio" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
  }
`;

export default RealisationsIndex;
