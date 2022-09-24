import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { Waypoint } from "react-waypoint";
import Hero from "../Hero/Hero";
import * as S from "./Layout.styled";

const Layout = () => {
  const [stickyNav, setStickyNav] = useState(false);

  function _handleWaypointEnter() {
    setStickyNav(false);
  }

  function _handleWaypointLeave() {
    setStickyNav(true);
  }

  return (
    <S.Layout>
      <Waypoint
        onEnter={_handleWaypointEnter}
        onLeave={_handleWaypointLeave}
      ></Waypoint>
      <Navigation sticky={stickyNav} />
      <Hero />
    </S.Layout>
  );
};

export default Layout;
