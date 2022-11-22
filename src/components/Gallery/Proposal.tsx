import React from "react";
import * as S from "./Gallery.styled";

import Pic01 from "../../assets/images/gallery/proposal/IMG_01.jpg";
import Pic02 from "../../assets/images/gallery/proposal/IMG_02.jpg";
import Pic03 from "../../assets/images/gallery/proposal/IMG_03.jpg";
import Pic04 from "../../assets/images/gallery/proposal/IMG_04.jpg";
import Pic05 from "../../assets/images/gallery/proposal/IMG_05.jpg";
import Pic06 from "../../assets/images/gallery/proposal/IMG_06.jpg";
import Pic07 from "../../assets/images/gallery/proposal/IMG_07.jpg";
import Pic08 from "../../assets/images/gallery/proposal/IMG_08.jpg";
import Pic09 from "../../assets/images/gallery/proposal/IMG_09.jpg";
import Pic10 from "../../assets/images/gallery/proposal/IMG_10.jpg";
import Pic11 from "../../assets/images/gallery/proposal/IMG_11.jpg";

const Proposal = () => {
  return (
    <S.Gallery>
      <S.GalleryHeader>Proposal</S.GalleryHeader>
      <S.GalleryInfo>Isabella Stewart Gardner Museum 3.19.22</S.GalleryInfo>
      <S.HeroImage>
        <img alt="alt" src={Pic01} width="400" loading="eager" />
      </S.HeroImage>
      <S.GalleryContainer>
        <img alt="alt" src={Pic08} loading="eager" height="400" />
        <img alt="alt" src={Pic02} loading="eager" height="400" />
        <img alt="alt" src={Pic03} loading="eager" height="400" width="300" />
        <img alt="alt" src={Pic04} loading="eager" height="400" width="300" />
        <img alt="alt" src={Pic06} loading="eager" height="400" width="300" />
        <img alt="alt" src={Pic07} loading="eager" height="400" width="300" />
        <img alt="alt" src={Pic05} loading="eager" height="400" width="300" />
        <img alt="alt" src={Pic09} loading="eager" height="400" width="300" />
        <img alt="alt" src={Pic10} loading="eager" height="400" width="300" />
        <img alt="alt" src={Pic11} loading="eager" height="400" />
      </S.GalleryContainer>
      <S.Spacer></S.Spacer>
    </S.Gallery>
  );
};

export default Proposal;
