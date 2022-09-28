import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  animation: fadein 3s;
  position: relative;
  /* position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center; */
`;

export const Text = styled.div`
  color: #006167;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-family: "Galada";
  font-size: 30px;
  font-weight: 500;
`;
