import styled from "styled-components";

export const Details = styled.div`
  background: #f8f8f8;
  width: 100%;
  padding: 50px;
  text-align: center;
`;

export const DetailsContainer = styled.div`
  margin: 30px auto;
  max-width: calc(100% - 4em);
  width: 90vw;
  display: flex;
  justify-content: space-between;

  div {
    flex: 0 0 auto;
    width: 33.333%;
    display: flex;
    flex-direction: column;
    font-size: 30px;

    &:not(:last-child) {
      border-right: 1px solid grey;
    }

    & p:first-child {
      margin: 20px 0 0;
    }
  }
`;

export const DetailsHeader = styled.span`
  font-family: "Alex Brush", cursive;
  color: var(--primary);
  font-size: 50px;
`;

export const DetailInfo = styled.p`
  margin: 30px 0 0;
  font-size: 20px;
`;

export const DetailAddress = styled.p`
  margin-top: 10px;
  font-size: 16px;
`;
