import React from "react";
import Countdown from "../Countdown/Countdown";
import Hearts from "../../assets/images/two-hearts.svg";
import ParkChateau from "../../assets/images/park_chateau.png";
import * as S from "./Hero.styled";

const Hero = () => {
  const countDownDate = new Date("Oct 28, 2023 14:00:00").getTime();

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
      <Countdown targetDate={countDownDate} />
      <S.Portraits>
        <S.Border>
          <S.StelioPortrait>
            <S.Content>
              <S.FirstName>Stelio Anagnostopoulos</S.FirstName>
              <S.BrideGroom>THE GROOM</S.BrideGroom>
              <br />
              <S.Quote>
                I am so incredibly lucky and excited to spend everyday for the
                rest of my life with my best friend!
              </S.Quote>
            </S.Content>
          </S.StelioPortrait>
        </S.Border>
        <S.HeartsIcon>
          <img src={Hearts} />
        </S.HeartsIcon>
        <S.Border>
          <S.ElliePortrait>
            <S.Content>
              <S.FirstName>Ellie Roussopoulos</S.FirstName>
              <S.BrideGroom>THE BRIDE</S.BrideGroom>
              <br />
              <S.Quote>
                She's everything I've always dreamed of and I'm so excited to
                spend the rest of my life with her!
              </S.Quote>
            </S.Content>
          </S.ElliePortrait>
        </S.Border>
      </S.Portraits>
    </>
  );
};

export default Hero;
