import styled from "styled-components";

export const Travel = styled.div`
  width: 100%;
  padding: 50px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    padding: 30px;
  }
`;

export const TravelContainer = styled.div`
  margin: 0px auto 30px;
  width: 70em;
  max-width: calc(100% - 4em);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const TravelHeader = styled.span`
  font-family: "Alex Brush", cursive;
  color: var(--primary);
  font-size: 50px;
  margin-bottom: 35px;
`;

export const AccomodationsLink = styled.a`
  font-size: 35px;
  margin: 30px 0 20px;
  color: #000;
  text-decoration: none;
  cursor: pointer !important;

  &:hover {
    text-decoration: underline;
    color: var(--primary);
  }
`;

export const TravelTypeSmall = styled.a`
  font-weight: bold;
  margin-top: 18px;
  font-size: 22px;
  color: #000;
  text-decoration: underline !important;
  cursor: pointer !important;

  &:hover {
    color: var(--primary);
  }
`;

export const TravelDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 700px) {
    img {
      max-width: 100%;
    }
  }
`;

export const AccomodationsAddress = styled.p`
  margin: 0;
  text-align: center;
  font-size: 22px;
`;

export const AccomodationsCode = styled.div`
  margin: 35px 0 0;
  font-style: italic;
  font-size: 25px;
  font-weight: 700;

  & div {
    font-size: 16px;
    line-height: 1.2;
    max-width: 385px;
    margin-top: 10px;
  }
`;

export const Spacer = styled.div`
  margin-top: 50px;
  border-top: 1px solid lightgray;
  height: 50px;
  width: 80%;
`;

export const ShuttleName = styled.div`
  font-size: 28px;
  margin: 0px 0 30px;
  color: #000;
  line-height: 1;
`;

export const Time = styled.span`
  font-family: Helvetica, sans-serif;
`;

export const ShuttleInfo = styled.div`
  font-size: 18px;
`;

export const HairLink = styled.a`
  font-weight: bold;
  margin-top: 0px;
  font-size: 22px;
  color: #000;
  text-decoration: underline !important;
  cursor: pointer !important;

  &:hover {
    color: var(--primary);
  }
`;

export const Prices = styled.p`
  font-size: 18px;
`;

export const SmallText = styled.p`
  margin-top: 0;
  font-size: 14px;
`;
