import styled from "styled-components";

export const Preloader = styled.div`
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1002;
  text-align: center;
`;

export const PreloaderTitle = styled.div`
  font-size: 20pt;
  color: #8eaeba;
  line-height: 0.9;
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Playfair Display", serif;

  small {
    color: #8eaeba;
    line-height: 0.9;
    font-size: 12pt;
  }
`;

export const LoadingHeart = styled.div`
  fill: transparent;
  stroke: #8eaeba;
  stroke-width: 11;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: inline-block;

  svg {
    overflow: visible;
    width: 11rem;
    path {
      stroke-dashoffset: 0;
      stroke-dasharray: 1550;
      transform-origin: center;
      animation: stroke-animation 3.5s ease-in-out infinite forwards;
    }
  }
`;
