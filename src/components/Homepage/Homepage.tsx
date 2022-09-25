import React from "react";
import Countdown from "../Countdown/Countdown";
import Hero from "../Hero/Hero";
import Portraits from "../Portraits/Portraits";
import Timeline from "../Timeline/Timeline";

const Homepage = () => {
  const countDownDate = new Date("Oct 28, 2023 14:00:00").getTime();

  return (
    <>
      <Hero />
      <Countdown targetDate={countDownDate} />
      <Portraits />
      <Timeline />
    </>
  );
};

export default Homepage;
