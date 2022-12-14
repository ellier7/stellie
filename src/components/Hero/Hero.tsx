import React from "react";
import * as S from "./Hero.styled";

const Hero = () => {
  return (
    <>
      <S.Hero id="home">
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
            Park Chateau <br />
          </S.Location>
          <S.LocationState>New Jersey</S.LocationState>
        </S.HeroText>
      </S.Hero>
    </>
  );
};

export default Hero;
