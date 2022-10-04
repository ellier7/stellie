import styled from "styled-components";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const Navigation = styled.nav<{ sticky: boolean }>`
  position: absolute;
  transition: background-color 0.2s ease, border-top-left-radius 0.2s ease,
    border-top-right-radius 0.2s ease, padding 0.2s ease;
  background-color: var(--primary);
  color: #ffffff;
  width: inherit;
  padding: 1em;
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
  cursor: default;
  text-align: center;
  font-family: "Playfair Display", serif;
  z-index: 1000;

  ${(props) => {
    switch (props.sticky) {
      case true:
        return `
          position: fixed;
          top: 0;
          padding: 0.5em 1em;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          padding: 0.5em 1em;
          
          a{
            font-size: .9em;
          }
         `;
    }
  }}
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 70%;
  margin: auto;
`;

export const NavLink = styled(Link)<{ active: string }>`
  text-decoration: none;
  transition: font-size 0.2s ease;
  display: inline-block;
  height: 2.25em;
  line-height: 2.25em;
  padding: 0 1.25em;
  border: 0;
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px transparent;
  background: transparent;
  color: #fff;
  font-weight: ${(props) => (props.active === "true" ? "bold" : "normal")};
  transition: font-size 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const CustomAnchorLink = styled(AnchorLink)<{ active: string }>`
  text-decoration: none;
  transition: font-size 0.2s ease;
  display: inline-block;
  height: 2.25em;
  line-height: 2.25em;
  padding: 0 1.25em;
  border: 0;
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px transparent;
  background: transparent;
  color: #fff;
  font-weight: ${(props) => (props.active === "true" ? "bold" : "normal")};
  transition: font-size 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const List = styled.div`
  display: flex;
`;
