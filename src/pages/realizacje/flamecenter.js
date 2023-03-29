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
import FigmaImg from "../../assets/images/logos/logoOne.png";
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
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (min-width: 992px) {
    padding-bottom: 150px;
  }
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
    width: 50%;
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
        Firma FlameCenter powstała w celu świadczenia usług z zakresu ochrony przeciwpożarowej oraz szkoleń BHP. Klient
        zgłosił się do nas o prostą stronę internetową wraz z zaprojektowaniem logotypu.
      </Text>
      <Text>
        Strona www miała być prosta i lekka, a całość spójna z logotypem. Wymogiem było także podpięcie systemu CMS do
        zarządzania stroną. Wybór padł na DatoCMS, który daje wiele możliwości, a sama strona wykonana została w React i
        GatsbyJS.
      </Text>
    </>
  );
};

const Technologies = () => {
  return (
    <>
      <img src={ReactImg} alt="ReactJS" />
      <img src={GatsbyImg} alt="GatsbyJS" />
      <img src={FigmaImg} alt="Figma" />
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
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_474_125)">
            <path
              d="M19.6704 26.6539C23.64 26.6539 26.8579 23.436 26.8579 19.4664C26.8579 15.4969 23.64 12.2789 19.6704 12.2789C15.7009 12.2789 12.4829 15.4969 12.4829 19.4664C12.4829 23.436 15.7009 26.6539 19.6704 26.6539Z"
              stroke="#530CEB"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M24.623 24.7314L29.8352 29.9436"
              stroke="#530CEB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.8779 26.8018C11.3439 26.8018 8.8667 26.0503 6.75969 24.6425C4.65269 23.2346 3.01048 21.2336 2.04073 18.8924C1.07098 16.5512 0.817251 13.9751 1.31162 11.4897C1.806 9.00429 3.02627 6.72132 4.81813 4.92946C6.60999 3.1376 8.89296 1.91733 11.3783 1.42295C13.8637 0.928579 16.4399 1.18231 18.7811 2.15206C21.1222 3.1218 23.1233 4.76402 24.5311 6.87102C25.939 8.97803 26.6904 11.4552 26.6904 13.9893"
              stroke="#530CEB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.8779 1.17676V12.0361"
              stroke="#530CEB"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M10.9027 20.5001C8.48024 20.6235 6.08702 21.0859 3.79297 21.8739"
              stroke="#530CEB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.79297 6.10464C6.13822 7.00329 9.77881 7.583 13.8781 7.583C17.9774 7.583 21.618 7.00329 23.9633 6.10464"
              stroke="#530CEB"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M21.2602 10.4029C20.3295 5.07227 17.3767 1.17676 13.8779 1.17676C9.63224 1.17676 6.19043 6.91311 6.19043 13.9893C6.19043 21.0654 9.63224 26.8018 13.8779 26.8018"
              stroke="#530CEB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.162 13.9893H0.953125"
              stroke="#530CEB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_474_125">
              <rect width="30" height="30" fill="white" transform="translate(0.443359 0.551758)" />
            </clipPath>
          </defs>
        </svg>

        <Text>Pozycjonowanie</Text>
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

const FlamecenterPage = () => {
  const gallery = useStaticQuery(query);
  return (
    <Main
      title="Case Study - Flamecenter.pl"
      metaDescription="Case study - logo i strona internetowa z systemem CMS flamecenter.pl. Najnowsza technologia tworzenia stron www - React + Gatsby + DatoCMS"
    >
      <RealisationHeader
        content={<Content />}
        headline="FlameCenter"
        technologies={<Technologies />}
        icons={<Icons />}
        image={gallery}
      />
      <LogoSection>
        <LogoContainer>
          <LogoLeftWrapper>
            <GatsbyImage image={gallery.flameCenterLogo.childImageSharp.gatsbyImageData} alt="Logotyp FlameCenter" />
          </LogoLeftWrapper>
          <LogoRightWrapper>
            <LogoStyledHeadline>Logotyp</LogoStyledHeadline>
            <Text style={{ marginBottom: "10px" }}>
              Założenie było proste - ogień i kolor czerwony. Zaproponowaliśmy klientowi 3 wersje logotypu, z których
              wybór padł na najprostszy i najbardziej elegancki.
            </Text>
            <Text>
              Ponieważ firma zajmuje się ochroną przeciwpożarową musieliśmy jakoś przedstawić efekt gaszenia ognia. Stąd
              też w centrum logo znajduje się linia przecinająca płomień symbolizująca "przerwanie" pożaru.
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
  query FlamecenterGallery {
    allFile(filter: { relativeDirectory: { eq: "flamecenter" } }, sort: { order: ASC, fields: name }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(quality: 100, formats: WEBP, placeholder: NONE)
          }
        }
      }
    }
    file(name: { eq: "FlameCenter2" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
    flameCenterLogo: file(name: { eq: "flame-center" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
  }
`;

export default FlamecenterPage;
