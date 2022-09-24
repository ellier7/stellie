import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Countdown = styled.div`
  // display: inline-block;
  // background: rgba(84, 133, 101, .65);
  // padding: 10px;
  // position: absolute;
  // left: 33%;
  // bottom: -34px;
  // border-top: 3px solid white;
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
    margin-bottom: 3px;
  }

  > span {
    font-size: 12px;
    color: white;
  }
`;
