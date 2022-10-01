import React from "react";
import Accodomations from "../Accodomations/Accodomations";
import Countdown from "../Countdown/Countdown";
import Details from "../Details/Details";
import Hero from "../Hero/Hero";
import Portraits from "../Portraits/Portraits";
import Timeline from "../Timeline/Timeline";
import * as S from "./Homepage.styled";

const Homepage = () => {
  const countDownDate = new Date("Oct 28, 2023 14:00:00").getTime();

  return (
    <>
      <Hero />
      <Countdown targetDate={countDownDate} />
      <S.MaxWidth>
        <Portraits />
        <Timeline />
      </S.MaxWidth>
      <Details />
      <Accodomations />
    </>
  );
};

export default Homepage;
