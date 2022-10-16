import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 265px) {
    display: none;
  }
`;

export const Countdown = styled.div`
  border-top: 4px solid #fff;
  background: rgba(84, 133, 101, 0.65);
  padding: 10px;
  text-align: center;
  width: 100%;

  > div {
    display: inline-block;
    text-align: center;
    color: white;
    line-height: 1;
    padding: 0 22px;
    border-right: 1px solid white;
  }

  > div:last-child {
    border-right: none;
  }

  .value {
    color: white;
    font-size: 35px;
    margin-bottom: 5px;
  }

  & span {
    font-size: 15px;
    color: white;
  }

  @media only screen and (max-width: 500px) {
    .value {
      font-size: 20px;
    }

    > div {
      padding: 0 10px;
    }
  }
`;
