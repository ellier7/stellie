import styled from "styled-components";

export const Accomodations = styled.div`
  width: 100%;
  padding: 50px;
  text-align: center;
`;

export const AccomodationsContainer = styled.div`
  margin: 0px auto 30px;
  width: 70em;
  max-width: calc(100% - 4em);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 920px) {
  }
`;

export const AccomodationsHeader = styled.span`
  font-family: "Alex Brush", cursive;
  color: var(--primary);
  font-size: 50px;
  margin-bottom: 35px;
`;

export const AccomodationsType = styled.a`
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

export const AccomodationsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AccomodationsAddress = styled.p`
  margin: 0;
  text-align: center;
  font-size: 22px;
`;

export const AccomodationCode = styled.p`
  margin: 35px 0 0;
  font-style: italic;
  font-size: 25px;
  font-weight: 700;

  & div {
    font-size: 14px;
    line-height: 1.2;
    max-width: 335px;
    margin-top: 10px;
  }
`;

export const RecoveryBreakfast = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--primary);
  text-align: center;

  span:nth-child(1) {
    font-size: 27px;
    font-weight: bold;
  }

  span:nth-child(2) {
    font-size: 24px;
    line-height: 2.5;
    font-weight: bold;
  }

  span:nth-child(3) {
    font-size: 16px;
    opacity: 0.75;
  }
`;
