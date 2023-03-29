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
import ReactImg from "../../assets/images/logos/logoTwo.png";
import GatsbyImg from "../../assets/images/logos/logoThree.png";
import DatoCmsImg from "../../assets/images/logos/datocms.png";
import Headline from "../../components/atoms/Headline/Headline";
import { GatsbyImage } from "gatsby-plugin-image";

const Icon = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const LogoSection = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px 100px 15px;

  @media (min-width: 992px) {
    flex-direction: row;
    margin: 0 8% 100px 8%;
  }

  @media (min-width: 2000px) {
    margin: 0 25% 100px 25%;
  }
`;

const LogoLeftWrapper = styled.div`
  margin-bottom: 50px;
  text-align: center;

  .gatsby-image-wrapper {
    max-width: 522px;
    box-shadow: 0px 48px 100px rgba(17, 12, 46, 0.15);
    border-radius: 20px;
  }

  @media (min-width: 992px) {
    width: 45%;
    text-align: left;
    max-width: 640px;
    margin-bottom: 0;
  }
`;

const LogoStyledHeadline = styled(Headline)`
  font-size: ${({ theme }) => theme.headingL};
  margin-bottom: 30px;
`;

const LogoRightWrapper = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    width: 50%;
  }
`;

const Content = () => {
  return (
    <>
      <Text style={{ marginBottom: "10px" }}>
        Dostaliśmy zadanie wykonania logotypu oraz strony internetowej dla klienta z branży nieruchomości.
      </Text>
      <Text>
        Logotyp wraz ze stroną zostały przygotowane z wizji naszego klienta. Naszym zadaniem było przełożenie tego na
        gotowy produkt. Dzięki zastosowaniu technologii <strong>React + Gatsby</strong> strona internetowa ma bardzo{" "}
        <strong>szybki czas ładowania</strong> i jest <strong>bezawaryjna</strong>, a dołączony do tego specjalny{" "}
        <strong>system CMS</strong> od DatoCMS pozwala na łatwą edycję treści na stronie.
      </Text>
    </>
  );
};

const Technologies = () => {
  return (
    <>
      <img src={FigmaImg} alt="Figma" />
      <img src={IllustratorImg} alt="Adobe Illustrator" />
      <img src={PhotoshopImg} alt="Adobe Photoshop" />
      <img src={ReactImg} alt="ReacctJS" />
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

const MstudioPage = () => {
  const gallery = useStaticQuery(query);
  return (
    <Main
      title="Case Study - Mstudio-kunert.pl"
      metaDescription="Strona www oraz logotyp dla firmy z branży nieruchomości. Technologia React i Gatsby w połączeniu z systemem CMS DatoCMS. Sprawdź jak wygląda!"
    >
      <RealisationHeader
        content={<Content />}
        headline="Mstudio Kunert"
        technologies={<Technologies />}
        icons={<Icons />}
        image={gallery}
      />
      <LogoSection>
        <LogoContainer>
          <LogoLeftWrapper>
            <GatsbyImage image={gallery.mstudioLogo.childImageSharp.gatsbyImageData} alt="Logotyp FlameCenter" />
          </LogoLeftWrapper>
          <LogoRightWrapper>
            <LogoStyledHeadline>Logotyp</LogoStyledHeadline>
            <Text style={{ marginBottom: "10px" }}>
              Nasz klient chciał wkomponować w logotyp 3 główne elementy - litera M, dom oraz zobrazować w jakiś sposób
              zysk z inwestowania w nieruchomości.
            </Text>
            <Text>
              Finalnie logotyp zawiera wszystkie te elementy, które tworzą spójną całość i prezentują się elegancko i
              nowocześnie. Na tle litery "M" widać wykres ze strzałką symbolizujący zysk z inwestowania, a także okno,
              które nawiązuje do rynku nieruchomości.
            </Text>
          </LogoRightWrapper>
        </LogoContainer>
      </LogoSection>
      <RealisationGallery images={gallery.allFile} />
      <Portfolio />
    </Main>
  );
};

const query = graphql`
  query MstudioGallery {
    allFile(filter: { relativeDirectory: { eq: "mstudio-kunert" } }, sort: { order: ASC, fields: name }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(quality: 100, formats: WEBP, placeholder: NONE)
          }
        }
      }
    }
    file(name: { eq: "mstudio" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
    mstudioLogo: file(name: { eq: "mstudio-logo" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
  }
`;

export default MstudioPage;
