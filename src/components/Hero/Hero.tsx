import React from "react";
import ParkChateau from "../../assets/images/park_chateau.png";
import Hearts from "../../assets/images/two-hearts.svg";

import * as S from "./Hero.styled";

const Hero = () => {
  return (
    <>
      <S.Hero>
        <S.HeroText>
          <S.Names>Stelio & Ellie</S.Names>
          <S.HeroDate>
            <S.Month>Oct</S.Month>
            <S.Day>28</S.Day>
            <S.Year>2023</S.Year>
          </S.HeroDate>
          <S.Location
            href="https://www.parkchateau.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ParkChateau} alt="Park Chateau" />
          </S.Location>
        </S.HeroText>
      </S.Hero>
      <S.Portraits>
        <S.Border>
          <S.StelioPortrait />
        </S.Border>
        <S.HeartsIcon>
          <img src={Hearts} />
        </S.HeartsIcon>
        <S.Border>
          <S.ElliePortrait />
        </S.Border>
      </S.Portraits>
    </>
  );
};

export default Hero;
