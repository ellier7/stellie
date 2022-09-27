import React, { useEffect, useState } from "react";
// import { Scrollspy } from "@makotot/ghostui";
import Scroll from "../Scroll/Scroll";
import * as S from "./Navigation.styled";

type NavigationProps = {
  sticky: boolean;
};
const Navigation = ({ sticky }: NavigationProps) => {
  const [active, setActive] = useState("home");

  const menuLinks = [
    {
      active: active === "home",
      href: "#",
      name: "Home",
      onClick: () => setActive("home"),
    },
    {
      active: active === "ourstory",
      href: "#ourstory",
      name: "Our Story",
      onClick: () => setActive("ourstory"),
    },
    {
      active: active === "details",
      href: "#ourstory",
      name: "Details",
      onClick: () => setActive("details"),
    },
    {
      active: active === "accomodations",
      href: "#",
      name: "Accomodations",
      onClick: () => setActive("accomodations"),
    },
    {
      active: active === "registry",
      href: "#",
      name: "Registry",
      onClick: () => setActive("registry"),
    },
  ];

  return (
    <S.Navigation id="nav" sticky={sticky}>
      <S.NavigationContainer>
        {/* <Scrollspy
        items={['intro', 'first', 'second', 'cta']}
        currentClassName="is-active"
        offset={-300}
      > */}

        {menuLinks.map((menu) => {
          return (
            <S.List key={menu.name}>
              <Scroll type="id" element={menu.name}>
                <S.Link
                  active={menu.active}
                  href={menu.href}
                  onClick={menu.onClick}
                >
                  {menu.name}
                </S.Link>
              </Scroll>
            </S.List>
          );
        })}
      </S.NavigationContainer>
    </S.Navigation>
  );
};

export default Navigation;
