import styled from "styled-components";

export const Navigation = styled.nav<{ sticky: boolean }>`
  display: block;
  transition: background-color 0.2s ease, border-top-left-radius 0.2s ease,
    border-top-right-radius 0.2s ease, padding 0.2s ease;
  background-color: rgba(84, 133, 101, 0.95);
  color: #ffffff;
  position: absolute;
  width: 64em;
  max-width: calc(100% - 4em);
  padding: 1em;
  background-color: #548565;
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
  cursor: default;
  text-align: center;

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & li {
    transition: margin 0.2s ease;
    display: inline-block;
    margin: 0 0.35em;
    padding: 0;
    vertical-align: middle;

    a {
      text-decoration: none;
      color: inherit;
      transition: font-size 0.2s ease;
      display: inline-block;
      height: 2.25em;
      line-height: 2.25em;
      padding: 0 1.25em;
      border: 0;
      border-radius: 8px;
      box-shadow: inset 0 0 0 1px transparent;
    }
  }

  ${(sticky) => {
    switch (sticky) {
      case sticky:
        return `
          position: fixed;
          top: 0;
          padding: 0.5em 1em;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          z-index: 10000;
        
                ul {
                    li {
                        margin: 0 0.175em;
        
                        a {
                            font-size: 0.9em;
                        }
                    }
                }
                `;
    }
  }}
`;

export const List = styled.li``;
