import React from "react";
import styled from "styled-components";
import Main from "../../templates/Main";
import RealisationHeader from "../../components/organisms/RealisationHeader/RealisationHeader";
import RealisationGallery from "../../components/organisms/RealisationGallery/RealisationGallery";
import { graphql, useStaticQuery } from "gatsby";
import Portfolio from "../../components/organisms/Portfolio/Portfolio";
import Text from "../../components/atoms/Text/Text";
import IllustratorImg from "../../assets/images/logos/illustrator.png";
import FigmaImg from "../../assets/images/logos/logoOne.png";
import PhotoshopImg from "../../assets/images/logos/photoshop.png";

const Icon = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const Content = () => {
  return (
    <>
      <Text style={{ marginBottom: "10px" }}>
        Postanowiliśmy stworzyć koncepcyjny logotyp dla firmy Stinger, która zajmuje się sprzedażą nieruchomości.
      </Text>
      <Text>Litera "S" gra tutaj główną rolę, która została zaprojektowana na wygląd budynku mieszkalnego.</Text>
    </>
  );
};

const Technologies = () => {
  return (
    <>
      <img src={FigmaImg} alt="Figma" />
      <img src={IllustratorImg} alt="Adobe Illustrator" />
      <img src={PhotoshopImg} alt="Adobe Photoshop" />
    </>
  );
};

const Icons = () => {
  return (
    <>
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <g id="Warstwa_2" data-name="Warstwa 2">
            <g id="Warstwa_1-2" data-name="Warstwa 1">
              <polygon
                points="5.83 13.68 5.83 21.67 13.82 21.67 12.16 20 7.5 20 7.5 15.35 5.83 13.68"
                style={{ fill: "#530ceb" }}
              />
              <path
                d="M27.39,26.08,25,23.65v2.19H1.67V22.38H3.33V21.05H1.67V15.5H3.33V14.17H1.67V8.84H3.33V7.5H1.67V2.85L15,16.05V13.7L1.43.25A.84.84,0,0,0,0,.84V26.67a.83.83,0,0,0,.83.83h26a.82.82,0,0,0,.84-.82A.84.84,0,0,0,27.39,26.08Z"
                style={{ fill: "#530ceb" }}
              />
              <path
                d="M18.33,24.17h3.34a1.66,1.66,0,0,0,1.66-1.67V6.42L21.42,2.9A1.67,1.67,0,0,0,20,2.06h0a1.68,1.68,0,0,0-1.47.9L16.67,6.44V22.5A1.66,1.66,0,0,0,18.33,24.17Zm0-17.33L20,3.7l1.72,3.15V19.17H18.33Zm0,13.69h3.34v2H18.33Z"
                style={{ fill: "#530ceb" }}
              />
            </g>
          </g>
        </svg>

        <Text>Logotyp</Text>
      </Icon>
    </>
  );
};

const StingerPage = () => {
  const gallery = useStaticQuery(query);
  return (
    <Main
      title="Case Study - Logo Stinger Real Estate"
      metaDescription="Case study z realizacji koncept logotypu dla firmy Stinger zajmującej się sprzedażą nieruchomości."
    >
      <RealisationHeader
        content={<Content />}
        headline="Stinger logo"
        technologies={<Technologies />}
        icons={<Icons />}
        image={gallery}
      />
      <RealisationGallery images={gallery.allFile} />
      <Portfolio />
    </Main>
  );
};

const query = graphql`
  query StingerGallery {
    allFile(filter: { relativeDirectory: { eq: "stinger" } }, sort: { order: ASC, fields: name }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(quality: 100, formats: WEBP, placeholder: NONE)
          }
        }
      }
    }
    file(name: { eq: "stinger-logo" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
  }
`;

export default StingerPage;
