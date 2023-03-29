import React from "react";
import Main from "../../templates/Main";
import styled from "styled-components";
import Text from "../../components/atoms/Text/Text";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import WebsitesMarketingText from "../../components/molecules/WebsitesMarketingText/WebsitesMarketingText";
import Technologies from "../../components/molecules/Technologies/Technologies";
import OfferStandardSection from "../../components/molecules/OfferStandardSection/OfferStandardSection";
import CmsEditingSection from "../../components/molecules/CmsEditingSection/CmsEditingSection";
import Portfolio from "../../components/organisms/Portfolio/Portfolio";
import Contact from "../../components/organisms/Contact/Contact";
import WebsitesHero from "../../components/organisms/WebsitesHero/WebsitesHero";

const FirstSection = styled.section`
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const FirstSectionLeft = styled.div`
  img {
    width: 100%;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
`;

const FirstSectionRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;

  @media (min-width: 992px) {
    width: 50%;
    max-width: unset;
    padding: 0 8% 0 0;
  }

  @media (min-width: 2000px) {
    padding: 0 25% 0 0;
  }
`;

const TopHeadline = styled(Text)`
  color: ${({ theme }) => theme.violet};
  font-weight: ${({ theme }) => theme.bold};
  margin-bottom: 25px;
  padding-left: 40px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 28px;
    height: 1px;
    background-color: ${({ theme }) => theme.violet};
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

const WebsitesPage = () => {
  const data = useStaticQuery(query);
  return (
    <Main
      title="Strony www"
      metaDescription="Skuteczne i niezawodne strony internetowe, które pomogą Ci więcej sprzedawać. Stworzymy dla Ciebie stronę www, która pozwoli Ci zyskać więcej."
    >
      <WebsitesHero />
      <FirstSection>
        <FirstSectionLeft>
          <GatsbyImage image={data.websitesBrowser.childImageSharp.gatsbyImageData} alt="Nasze cechy" />
        </FirstSectionLeft>
        <FirstSectionRight data-aos="section-fadeup">
          <TopHeadline>CODECTED</TopHeadline>
          <Text style={{ marginBottom: "20px" }}>
            Skoro tu jesteś to nie musimy Ci tłumaczyć jak ważna w dzisiejszych czasach{" "}
            <strong>jest własna strona internetowa.</strong> To podstawowy element strategii marketingowej każdej
            cenionej się firmy. <strong>Większość</strong> firm ma stronę www, ale{" "}
            <strong>nie jest ona dobrze przygotowana</strong> do przyciągania większej ilości nowych klientów!
          </Text>
          <Text>
            Postaw na <strong>dedykowane i przemyślane</strong> rozwiązania. Postaw na nas. Postaw na{" "}
            <strong>codected!</strong>
          </Text>
        </FirstSectionRight>
      </FirstSection>
      <WebsitesMarketingText />
      <Technologies />
      <OfferStandardSection
        headline="Pełna <span class='violet'>responsywność</span>"
        text="Aż 60% osób przeglądających internet to <strong>użytkownicy smartfonów</strong> dlatego ważne jest to, aby zapewnić im komfortowe i intuicyjne poruszanie się po Twojej stronie internetowej. <br/><br/> Nasze strony internetowe są w <strong>100% responsywne</strong> i dostosowane do wszelkiego rodzaju urządzeń."
        image={data.responsivenessImg.childImageSharp.gatsbyImageData}
        altImage="Pełna responsywność"
        noShadow
      />
      <CmsEditingSection />
      <OfferStandardSection
        headline="Pomoc <span class='violet'>techniczna</span>"
        text="Pomimo gwarancji niezawodności mogą wystąpić nieoczekiwane problemy, na które nie mam wpływu. Do jednego z nich należy np. błąd na serwerze (spowodowany przez hostingodawcę). Dlatego będąc naszym klientem możesz liczyć na naszą pomoc. Nie zostawiamy swoich klientów na lodzie, możesz poprosić o pomoc, modyfikację lub podpowiedzi w kwestii np. obsługi systemu CMS."
        image={data.technicalSupportImg.childImageSharp.gatsbyImageData}
        altImage="Pomoc techniczna"
      />
      <OfferStandardSection
        headline="Szablonom mówimy <span class='violet'>NIE!</span>"
        text="Tworzymy tylko <strong>dedykowane rozwiązania</strong> dlatego nie dostaniesz od nas strony opartej o płatny lub darmowy szablon dostępny w Internecie. <br/><br/> Najpierw zbieramy niezbędne informacje od klienta, a następnie zabieramy się do przygotowania <strong>projektu pod indywidualne potrzeby.</strong>"
        image={data.noTemplatesImg.childImageSharp.gatsbyImageData}
        altImage="Szablonom mówimy NIE!"
        isRight
      />
      <Portfolio />
      <Contact />
    </Main>
  );
};

const query = graphql`
  query WebsitesQuery {
    websitesHero: file(name: { eq: "websites-hero" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
    websitesBrowser: file(name: { eq: "websites-browser" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
    responsivenessImg: file(name: { eq: "responsiveness" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
    technicalSupportImg: file(name: { eq: "technical-support" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
    noTemplatesImg: file(name: { eq: "no-templates" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
    cmsEditing: file(name: { eq: "cms-editing" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
  }
`;

export default WebsitesPage;
