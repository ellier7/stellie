import React from "react";
import Bloomingdales from "../../assets/images/bloomingdales.png";
import BBB from "../../assets/images/bbb.png";
import Zola from "../../assets/images/zola.png";
import Santa from "../../assets/images/secret-santa.jpg";
import * as S from "./Registry.styled";

const Registry = () => {
  return (
    <S.Registry>
      <S.RegistryContainer>
        <S.RegistryHeader>Registry</S.RegistryHeader>
        <S.RegistryDetails>
          <a href="https://www.bedbathandbeyond.com/" target="_blank">
            <img src={BBB} width="100%" />
          </a>
          <a href="https://www.bloomingdales.com" target="_blank">
            <img src={Bloomingdales} width="100%" />
          </a>
          <a href="https://www.zola.com" target="_blank">
            <img src={Zola} width="100%" />
          </a>
        </S.RegistryDetails>
      </S.RegistryContainer>
    </S.Registry>
  );
};

export default Registry;
