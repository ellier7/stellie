import React from "react";
import EPic01 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-01.jpg";
import EPic02 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-02.jpg";
import EPic03 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-03.jpg";
import EPic05 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-05.jpg";
import EPic06 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-06.jpg";
import EPic07 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-07.jpg";
import EPic08 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-08.jpg";
import EPic09 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-09.jpg";
import EPic10 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-10.jpg";
import EPic11 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-11.jpg";
import EPic12 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-12.jpg";
import EPic13 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-13.jpg";
import EPic14 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-14.jpg";
import EPic15 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-15.jpg";
import EPic17 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-17.jpg";
import EPic18 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-18.jpg";
import EPic19 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-19.jpg";
import EPic21 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-21.jpg";
import EPic22 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-22.jpg";
import EPic23 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-23.jpg";
import EPic24 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-24.jpg";
import EPic25 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-25.jpg";
import EPic26 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-26.jpg";
import EPic27 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-27.jpg";
import EPic28 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-28.jpg";
import EPic29 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-29.jpg";
import EPic30 from "../../assets/images/gallery/engagement/Ellie&Stelios_EngagementSession-30.jpg";
import Camera from "../../assets/images/camera.svg";

import * as S from "./Gallery.styled";

const Engagement = () => {
  return (
    <S.Gallery>
      <S.GalleryHeader>Engagement Shoot</S.GalleryHeader>
      <S.GalleryInfo>Nemours Estate, Wilmington DE</S.GalleryInfo>
      <S.Photographer>
        <img src={Camera} height="18px" />
        <a
          href="https://www.instagram.com/julianatomlinsonphotography/"
          target="_blank"
        >
          @julianatomlinsonphotography
        </a>
      </S.Photographer>
      <S.GalleryContainer>
        <img src={EPic01} height="450" />
        <img src={EPic02} height="450" />
        <img src={EPic03} height="450" />
        <img src={EPic05} height="450" />
        <img src={EPic06} height="450" />
        <img src={EPic07} height="450" />
        <img src={EPic08} height="450" />
        <img src={EPic09} height="450" />
        <img src={EPic10} height="450" />
        <img src={EPic11} height="450" />
        <img src={EPic12} height="450" />
        <img src={EPic13} height="450" />
        <img src={EPic14} height="450" />
        <img src={EPic15} height="450" />
        <img src={EPic19} height="450" />
        <img src={EPic17} height="450" />
        <img src={EPic18} height="450" />
        <img src={EPic21} height="450" />
        <img src={EPic22} height="450" />
        <img src={EPic23} height="450" />
        <img src={EPic24} height="450" />
        <img src={EPic25} height="450" />
        <img src={EPic26} height="450" />
        <img src={EPic27} height="450" />
        <img src={EPic28} height="450" />
        <img src={EPic29} height="450" />
      </S.GalleryContainer>
      <S.Spacer_Small></S.Spacer_Small>
      <img src={EPic30} height="800" />
      <S.Spacer></S.Spacer>
    </S.Gallery>
  );
};

export default Engagement;
