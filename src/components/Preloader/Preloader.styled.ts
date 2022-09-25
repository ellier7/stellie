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
  display: flex;
  flex-direction: column;
  font-size: 20pt;
  color: var(--primary);
  line-height: 1;
  position: absolute;
  top: 43px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Playfair Display", serif;

  small {
    color: var(--primary);
    line-height: 1;
    font-size: 13pt;
    margin: 8px 0;
  }
`;

export const LoadingHeart = styled.div`
  fill: transparent;
  stroke: var(--primary);
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
