import styled from "styled-components";

export const Registry = styled.div`
  width: 100%;
  padding: 50px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    padding: 75px 30px 20px;
  }
`;

export const RegistryContainer = styled.div`
  margin: 0px auto 30px;
  width: 70em;
  max-width: calc(100% - 4em);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const RegistryHeader = styled.span`
  font-family: "Alex Brush", cursive;
  color: var(--primary);
  font-size: 50px;
`;

export const RegistryDetails = styled.div`
  margin-top: 50px;
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
