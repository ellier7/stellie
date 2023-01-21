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
        <S.RegistrySubHeader>We are registered at:</S.RegistrySubHeader>
        <S.RegistryDetails>
          <a
            href="https://www.bloomingdales.com/registry/wedding/guest/ELLIE-ROUSSOPOULOS-STELIOS-ANAGNOSTOPOULOS/?registryId=7391959"
            target="_blank"
          >
            <img src={Bloomingdales} width="100%" />
          </a>
          <a href="https://www.zola.com/registry/stellie" target="_blank">
            <img src={Zola} width="100%" />
          </a>
        </S.RegistryDetails>
        <S.ZolaWarning>
          *If using Zola, please do not forget to go back to our registry & mark
          the item as purchased.
        </S.ZolaWarning>
      </S.RegistryContainer>
    </S.Registry>
  );
};

export default Registry;
