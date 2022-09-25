import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { Waypoint } from "react-waypoint";
import Homepage from "../Homepage/Homepage";
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
      <Homepage />
    </S.Layout>
  );
};

export default Layout;
