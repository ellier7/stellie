import styled from "styled-components";

export const Timeline = styled.div`
  position: relative;

  :before {
    content: "";
    width: 1px;
    height: 500px;
    position: absolute;
    top: 75px;
    left: 50%;
    margin-left: -1px;
    background: #8eaeba;
    clear: both;
    transition: height 0.3s linear;
  }
`;

export const OurStory = styled.div`
  clear: both;
  padding: 7px 0;
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
  background-color: #fff;
  margin: 70px 0;

  :first-child {
    padding-top: 0;
  }
`;

export const LineContainer = styled.span`
  font-family: "Galada", serif;
  color: #8eaeba;
  font-size: 27pt;
  position: relative;
  padding: 4px 32px;
`;

export const HLine = styled.span`
  border-top-color: #8eaeba;
  border-bottom-color: #8eaeba;
  border-top: var(--border-size) solid #8eaeba;
  border-bottom: var(--border-size) solid #8eaeba;
  top: calc(var(--border-size) * -1);
  bottom: calc(var(--border-size) * -1);
  position: absolute;
  right: var(--vertical-offset, 0);
  left: var(--vertical-offset, 0);
  transition: transform 0.8s ease;
  will-change: transform;
  z-index: -1;

  :before {
    box-sizing: border-box;
    content: "";
    position: absolute;
    border: inherit;
    top: calc(var(--vertical-offset) - var(--border-size));
    bottom: calc(var(--vertical-offset) - var(--border-size));
    left: calc(var(--offset) - var(--border-size));
    right: calc(var(--offset) - var(--border-size));
  }
`;

export const VLine = styled.span`
  border-left-color: #8eaeba;
  border-right-color: #8eaeba;
  border-left: var(--border-size) solid #8eaeba;
  border-right: var(--border-size) solid #8eaeba;
  right: calc(var(--border-size) * -1);
  left: calc(var(--border-size) * -1);
  position: absolute;
  top: var(--horizontal-offset, 0);
  bottom: var(--horizontal-offset, 0);
  transition: transform 0.8s ease;
  will-change: transform;
  z-index: -1;

  :before {
    content: "";
    position: absolute;
    border: inherit;
    box-sizing: border-box;
    top: calc(var(--offset) - var(--border-size));
    bottom: calc(var(--offset) - var(--border-size));
    left: calc(var(--horizontal-offset) - var(--border-size));
    right: calc(var(--horizontal-offset) - var(--border-size));
  }
`;
