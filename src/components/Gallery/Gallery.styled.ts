import styled from "styled-components";

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px 100px;

  @media (max-width: 400px) {
    & img {
      max-width: calc(100vw - 40px);
      height: 100%;
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
  margin: 100px 0 0px;
  line-height: 1;
`;

export const GalleryInfo = styled.p`
  font-size: 18px;
  line-height: 1;
  margin: 0 0 20px;
`;

export const GalleryContainer = styled.div`
  display: flex;
  gap: 30px 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
`;
