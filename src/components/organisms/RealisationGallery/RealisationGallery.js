import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .hero-left-svg {
    position: absolute;
    z-index: -1;
    top: 10%;
    left: 0;
  }

  .hero-right-svg {
    position: absolute;
    z-index: -1;
    top: 7%;
    right: 0;
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;

  .gatsby-image-wrapper {
    box-shadow: 0 48px 100px rgba(17, 12, 46, 0.15);
    width: 100%;
    margin-bottom: 50px;

    @media (min-width: 992px) {
      width: calc(50% - 40px);
      margin-bottom: 80px;
      margin-right: 40px;

      &:nth-child(even) {
        margin-right: 0;
        margin-left: 40px;
      }
    }
  }

  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 8%;
  }

  @media (min-width: 2000px) {
    margin: 0 25%;
  }
`;

const RealisationGallery = ({ images }) => {
  return (
    <Wrapper>
      <Container>
        {images.edges.map((item, i) => (
          <GatsbyImage image={item.node.childImageSharp.gatsbyImageData} alt="" />
        ))}
      </Container>
    </Wrapper>
  );
};

export default RealisationGallery;
