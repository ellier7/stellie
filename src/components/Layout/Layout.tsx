import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { Waypoint } from "react-waypoint";
import Homepage from "../Homepage/Homepage";
import * as S from "./Layout.styled";

const Layout = ({ children }: any) => {
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    const url = window.location.href;

    if (url.split("#")[1]) setStickyNav(true);
  }, []);

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
      {children}
    </S.Layout>
  );
};

export default Layout;
