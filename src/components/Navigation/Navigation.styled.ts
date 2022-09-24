import styled from "styled-components";

export const Navigation = styled.nav<{ sticky: boolean }>`
  position: absolute;
  transition: background-color 0.2s ease, border-top-left-radius 0.2s ease,
    border-top-right-radius 0.2s ease, padding 0.2s ease;
  background-color: #548565;
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

export const Link = styled.a<{ active: boolean }>`
  text-decoration: none;
  transition: font-size 0.2s ease;
  display: inline-block;
  height: 2.25em;
  line-height: 2.25em;
  padding: 0 1.25em;
  border: 0;
  border-radius: 8px;
  box-shadow: ${(props) =>
    props.active ? "none" : "inset 0 0 0 1px transparent"};
  background: ${(props) => (props.active ? "#ffffff" : "transparent")};
  color: ${(props) => (props.active ? "#548565" : "inherit")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  transition: font-size 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.active ? "#ffffff" : "rgba(255, 255, 255, 0.3)"};
  }
`;

export const List = styled.div`
  display: flex;
`;
