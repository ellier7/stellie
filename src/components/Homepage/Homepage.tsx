import React from "react";
import Countdown from "../Countdown/Countdown";
import Details from "../Details/Details";
import Hero from "../Hero/Hero";
import Layout from "../Layout/Layout";
import Portraits from "../Portraits/Portraits";
import Timeline from "../Timeline/Timeline";
import * as S from "./Homepage.styled";

const Homepage = () => {
  const countDownDate = new Date("Oct 28, 2023 14:00:00").getTime();

  return (
    <Layout>
      <Hero />
      <Countdown targetDate={countDownDate} />
      <S.MaxWidth>
        <Portraits />
        <Timeline />
      </S.MaxWidth>
    </Layout>
  );
};

export default Homepage;
