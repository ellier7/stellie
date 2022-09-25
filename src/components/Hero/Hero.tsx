import React from "react";
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
            Park Chateau
            {/* <img src={ParkChateau} alt="Park Chateau" width="200px" /> */}
          </S.Location>
        </S.HeroText>
      </S.Hero>
    </>
  );
};

export default Hero;
