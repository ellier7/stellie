import styled from "styled-components";

export const RegistryHeader = styled.span`
  font-family: "Alex Brush", cursive;
  color: var(--primary);
  font-size: 50px;
`;

export const Registry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  max-width: 1400px;
`;

export const RegistryContainer = styled.div`
  margin: 100px auto 30px;
  width: 70em;
  max-width: calc(100% - 6em);
  display: flex;
  justify-content: space-between;

  a {
    flex: 0 0 auto;
    margin: 0 15px;
    padding: 20px 0;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    margin: 30px auto;

    a {
      width: 100%;
      max-width: 300px;
    }

    /* a:not(:last-child) {
      border-right: none;
      border-bottom: 1px solid grey;
      margin: 0px 0 30px;
      padding-bottom: 30px;
    } */
  }
`;

export const Hide = styled.div`
  display: none;
`;
