import styled from "styled-components";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const Navigation = styled.nav<{ sticky: boolean; $mobileMenu: boolean }>`
  position: absolute;
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
  }};

  @media only screen and (max-width: 600px) {
    padding: 20px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

export const NavigationMobile = styled.div<{ $mobileMenu: boolean }>`
  width: 220px;
  height: 100%;
  top: 0;
  right: -220px;
  background-color: var(--primary);
  color: #ffffff;
  cursor: default;
  text-align: center;
  font-family: "Playfair Display", serif;
  padding: 1em;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  box-shadow: 5px 5px 10px grey;
  z-index: 11;
  opacity: 0;
  transition: all 0.25s;
  -webkit-transition: all 0.25s;

  @media only screen and (max-width: 600px) {
    ${(props) => {
      switch (props.$mobileMenu) {
        case true:
          return `
          opacity: 1;
          right: 0;
         `;
      }
    }};
  }
`;

export const NavigationContainer = styled.div<{ $mobileMenu: boolean }>`
  display: flex;
  justify-content: space-evenly;
  max-width: 70%;
  margin: auto;

  @media only screen and (max-width: 600px) {
    ${(props) => {
      switch (props.$mobileMenu) {
        case true:
          return `
          display: none;
          // flex-direction: column;
          // margin-top: 35px;
          // max-width: 100%;
         `;
        case false:
          return `
          // width: 0;`;
      }
    }};
  }
`;

export const NavLink = styled(Link)<{ active: string; $mobileMenu: boolean }>`
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
  ${(props) =>
    props.active === "true" ? "background: rgba(255, 255, 255, 0.3);" : "null"};
  font-weight: ${(props) => (props.active === "true" ? "bold" : "normal")};
  transition: font-size 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  @media only screen and (max-width: 600px) {
    ${(props) => {
      switch (props.$mobileMenu) {
        case true:
          return `
          margin: 20px 0 0;
         `;
        case false:
          return `
          display: none`;
      }
    }};
  }
`;

export const CustomAnchorLink = styled(AnchorLink)<{
  $active: string;
  $mobileMenu: boolean;
}>`
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
  ${(props) =>
    props.$active === "true"
      ? "background: rgba(255, 255, 255, 0.3);"
      : "null"};
  font-weight: ${(props) => (props.$active === "true" ? "bold" : "normal")};
  transition: font-size 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  @media only screen and (max-width: 600px) {
    ${(props) => {
      switch (props.$mobileMenu) {
        case true:
          return `
          margin: 15px 0 0;
         `;
        case false:
          return `
          display: none; `;
      }
    }};
  }
`;

export const List = styled.div`
  display: flex;
`;

export const Menubar = styled.img`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    position: absolute;
    top: 8px;
    right: 25px;
    cursor: pointer;
  }
`;
