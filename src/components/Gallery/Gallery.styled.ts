import styled from "styled-components";

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1400px;

  @media (max-width: 600px) {
    padding-top: 25px;

    & img {
      max-width: calc(100vw - 40px);
      height: auto !important;
    }
  }
`;

export const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

export const GalleryHeader = styled.div`
  font-family: "Alex Brush", cursive;
  color: var(--primary);
  font-size: 50px;
  margin-top: 100px;
  line-height: 1;

  @media only screen and (max-width: 600px) {
    margin-top: 50px;
  }
`;

export const GalleryInfo = styled.p`
  font-size: 18px;
  line-height: 1;
  margin: 0 0 15px;
`;

export const Photographer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  & a,
  a:visited {
    font-size: 14px;
    color: #000;
    margin-left: 7px;
  }

  @media (max-width: 600px) {
    & img {
      max-width: 18px;
      height: 18px;
    }
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  gap: 30px 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Spacer = styled.div`
  padding-top: 50px;
`;

export const Spacer_Small = styled.div`
  padding-top: 30px;
`;
