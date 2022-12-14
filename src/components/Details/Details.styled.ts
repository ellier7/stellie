import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Details = styled.div`
  background: #ffffff;
  width: 100%;
  padding: 100px 50px;
  text-align: center;
`;

export const DetailsContainer = styled.div`
  margin: 50px auto 30px;
  width: 70em;
  max-width: calc(100% - 4em);
  display: flex;
  justify-content: space-between;

  div {
    flex: 0 0 auto;
    padding: 0 15px;
    width: 33.333%;
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      border-right: 1px solid grey;
    }
  }

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    margin: 30px auto;

    div {
      width: 100%;
    }

    div:not(:last-child) {
      border-right: none;
      border-bottom: 1px solid grey;
      margin: 0px 0 30px;
      padding-bottom: 30px;
    }
  }
`;

export const DetailsHeader = styled.span`
  font-family: "Alex Brush", cursive;
  color: var(--primary);
  font-size: 50px;
  line-height: 1;
`;

export const DetailsSubHeader = styled.span`
  color: var(--primary);
  font-size: 40px;
  line-height: 1;
  margin-bottom: 20px;
`;

export const DetailType = styled.p`
  font-size: 30px;
`;

export const DetailTime = styled.span`
  font-family: "Open Sans";
  font-size: 25px;
`;

export const DetailInfo = styled.p`
  margin: 30px 0 0;
  font-size: 20px;
  line-height: 23px;
`;

export const DetailAddress = styled.p`
  margin-top: 10px;
  font-size: 16px;
`;

export const RecoveryBreakfast = styled.div`
  margin-top: 90px;
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
