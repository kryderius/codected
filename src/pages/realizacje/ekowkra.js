import React from "react";
import styled from "styled-components";
import Main from "../../templates/Main";
import RealisationHeader from "../../components/organisms/RealisationHeader/RealisationHeader";
import RealisationGallery from "../../components/organisms/RealisationGallery/RealisationGallery";
import { graphql, useStaticQuery } from "gatsby";
import Portfolio from "../../components/organisms/Portfolio/Portfolio";
import Text from "../../components/atoms/Text/Text";
import ReactImg from "../../assets/images/logos/logoTwo.png";
import GatsbyImg from "../../assets/images/logos/logoThree.png";
import DatoCmsImg from "../../assets/images/logos/datocms.png";

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
        Dostaliśmy zadanie od firmy <strong>Rend.Pro</strong>, które polegało na <strong>zakodowaniu strony www</strong>{" "}
        z przygotowanego projektu graficznego. Firma Rend.Pro zajmuje się w głównej mierze tworzeniem wizualizacji dla
        inwestycji mieszkaniowych.
      </Text>
      <Text>
        Głównym zadaniem było stworzenie interaktywnej wizualizacji (zdjęcie poniżej), dzięki której użytkownik będzie
        mógł zaznajomić się z ofertą danego lokalu poruszając się po wizualizacji z lotu ptaka.
      </Text>
    </>
  );
};

const Technologies = () => {
  return (
    <>
      <img src={ReactImg} alt="ReactJS" />
      <img src={GatsbyImg} alt="GatsbyJS" />
      <img src={DatoCmsImg} alt="DatoCMS" />
    </>
  );
};

const Icons = () => {
  return (
    <>
      <Icon>
        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_474_120)">
            <path
              d="M15 30.083C23.0156 30.083 29.5312 23.5674 29.5312 15.5518C29.5312 7.53613 23.0156 1.02051 15 1.02051C6.98437 1.02051 0.46875 7.53613 0.46875 15.5518C0.46875 23.5674 6.98437 30.083 15 30.083ZM3.75 21.3408L9.65625 21.2939C10.3125 23.6611 11.4141 25.958 12.9141 28.0205C8.90625 27.3643 5.55469 24.8096 3.75 21.3408ZM11.1562 11.5674H18.5156C19.0547 14.1455 19.0547 16.7939 18.5625 19.3721L11.1562 19.4189C10.6172 16.8174 10.6172 14.1455 11.1562 11.5674ZM14.8359 27.4814C13.3594 25.583 12.2812 23.4971 11.625 21.2939L18.0703 21.2471C17.3906 23.4502 16.3125 25.5596 14.8359 27.4814ZM16.7109 28.0908C18.2578 25.9814 19.3594 23.6611 20.0156 21.2236L26.3203 21.1768C24.4922 24.8564 20.9297 27.5049 16.7109 28.0908ZM27.6562 15.5518C27.6562 16.8643 27.4453 18.1299 27.0937 19.3018L20.4609 19.3486C20.9297 16.7705 20.9062 14.1455 20.4141 11.5674H27C27.4219 12.8096 27.6562 14.1689 27.6562 15.5518ZM26.2031 9.69238H19.9687C19.2891 7.34863 18.2109 5.0752 16.7109 3.0127C20.8594 3.5752 24.3516 6.12988 26.2031 9.69238ZM18.0234 9.69238H11.6484C12.3281 7.53613 13.3828 5.49707 14.8359 3.62207C16.2891 5.49707 17.3438 7.53613 18.0234 9.69238ZM12.9141 3.08301C11.4375 5.12207 10.3594 7.34863 9.70313 9.69238H3.79688C5.60156 6.24707 8.92969 3.73926 12.9141 3.08301ZM9.25781 11.5674C8.76563 14.1689 8.76563 16.8174 9.23438 19.4189L2.97656 19.4658C2.55469 18.2236 2.34375 16.9111 2.34375 15.5518C2.34375 14.1689 2.57813 12.8096 3 11.5674H9.25781Z"
              fill="#530CEB"
            />
          </g>
          <defs>
            <clipPath id="clip0_474_120">
              <rect width="30" height="30" fill="white" transform="translate(0 0.551758)" />
            </clipPath>
          </defs>
        </svg>

        <Text>Strona internetowa</Text>
      </Icon>
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36.22" viewBox="0 0 24.84 30">
          <g id="Warstwa_2" data-name="Warstwa 2">
            <g id="Warstwa_1-2" data-name="Warstwa 1">
              <path
                d="M1.25,9.31l10-7.55,10,7.55a.74.74,0,0,0,.47.16.79.79,0,0,0,.47-1.41L11.74.16a.8.8,0,0,0-1,0L.31,8.06a.79.79,0,0,0-.15,1.1.78.78,0,0,0,1.09.15Z"
                style={{ fill: "#530ceb" }}
              />
              <path
                d="M24.61,27.12,22.53,25V12a.77.77,0,0,0-.31-.62L11.74,3.49a.8.8,0,0,0-1,0L.31,11.4A.8.8,0,0,0,0,12V25.33a.78.78,0,0,0,.78.78H18.31L22,29.77a.82.82,0,0,0,.56.23.78.78,0,0,0,.55-.23l1.54-1.54a.78.78,0,0,0,0-1.11Zm-23-14.71,9.7-7.31L21,12.41V23.47l-3.32-3.31a6.43,6.43,0,0,0-1.13-7.54A6.41,6.41,0,1,0,15,22.81l1.74,1.74H1.57V12.41ZM12,22a4.8,4.8,0,0,1-3.42-1.42A4.84,4.84,0,0,1,12,12.31,4.84,4.84,0,0,1,12,22Zm4.31-.1.22-.21a2.13,2.13,0,0,0,.21-.22L23,27.67l-.43.44L16.3,21.89Z"
                style={{ fill: "#530ceb" }}
              />
              <path
                d="M15,19a.8.8,0,0,0-1.11,0,2.68,2.68,0,0,1-3.78,0A.78.78,0,0,0,9,20.15a4.24,4.24,0,0,0,6,0A.78.78,0,0,0,15,19Z"
                style={{ fill: "#530ceb" }}
              />
            </g>
          </g>
        </svg>

        <Text>Interaktywna wizualizacja</Text>
      </Icon>
    </>
  );
};

const EkowkraPage = () => {
  const gallery = useStaticQuery(query);
  return (
    <Main
      title="Case Study - Ekowkra.pl"
      metaDescription="Realizacja strony internetowej ekowkra.pl. Prosta i elegancka strona internetowa dla inwestycji mieszkaniowej."
    >
      <RealisationHeader
        headline="Ekowkra"
        content={<Content />}
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
  query EkowkraGallery {
    allFile(filter: { relativeDirectory: { eq: "ekowkra" } }, sort: { order: ASC, fields: name }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(quality: 100, formats: WEBP, placeholder: NONE)
          }
        }
      }
    }
    file(name: { eq: "ekowkra" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
  }
`;

export default EkowkraPage;
