import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import Headline from "../../atoms/Headline/Headline";
import Text from "../../atoms/Text/Text";

const Section = styled.section`
  margin: 100px 0;
  position: relative;
  background-color: #f3f3f3;

  @media (min-width: 992px) {
    margin: 100px 0 200px 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15%;
    background-color: #fff;
  }
`;

const Container = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 8%;
  }

  @media (min-width: 2000px) {
    padding: 0 25%;
  }
`;

const LeftWrapper = styled.div`
  margin-bottom: 30px;

  @media (min-width: 992px) {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
  }
`;

const RightWrapper = styled.div`
  width: 100%;
  z-index: 10;
  padding-bottom: 50px;
  @media (min-width: 992px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5%;
    padding-bottom: 0;
  }
`;

const StyledHeadline = styled(Headline)`
  font-size: ${({ theme }) => theme.headingL};
  margin-bottom: 40px;
`;

const CmsEditingSection = () => {
  const data = useStaticQuery(query);
  return (
    <Section>
      <Container>
        <LeftWrapper>
          <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="Możliwość edycji w CMS" />
        </LeftWrapper>
        <RightWrapper data-aos="section-fadeup">
          <StyledHeadline>
            Możliwość <span className="violet">edycji</span>
          </StyledHeadline>
          <Text>
            Każda nasza strona internetowa oparta jest o zaawansowany <strong>system CMS</strong> czyli system
            umożliwiający edycję treści na stronie. Nieważne gdzie aktualnie się znajdujesz -{" "}
            <strong>możesz edytować stronę</strong> z poziomu smartfona lub laptopa.
          </Text>
        </RightWrapper>
      </Container>
    </Section>
  );
};

const query = graphql`
  query CmEditingImg {
    file(name: { eq: "cms-editing" }) {
      childImageSharp {
        gatsbyImageData(formats: WEBP, placeholder: NONE, quality: 100)
      }
    }
  }
`;

export default CmsEditingSection;
