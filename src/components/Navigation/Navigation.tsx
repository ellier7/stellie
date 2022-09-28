import React, { useState } from "react";
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
      href: "/#home",
      name: "Home",
      onClick: () => setActive("home"),
    },
    {
      active: active === "ourstory",
      href: "/#timeline",
      name: "Our Story",
      onClick: () => setActive("ourstory"),
    },
    {
      active: active === "details",
      href: "/#details",
      name: "Details",
      onClick: () => setActive("details"),
    },
    {
      active: active === "accomodations",
      href: "/#home",
      name: "Accomodations",
      onClick: () => setActive("accomodations"),
    },
    {
      active: active === "registry",
      href: "/#home",
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
            <S.Link
              to={menu.href}
              title={menu.name}
              key={menu.name}
              active={menu.active}
            >
              <S.List>
                <Scroll type="id" element={menu.name}>
                  {/* <S.Link active={menu.active} href="" onClick={menu.onClick}> */}
                  {menu.name}
                  {/* </S.Link> */}
                </Scroll>
              </S.List>
            </S.Link>
          );
        })}
      </S.NavigationContainer>
    </S.Navigation>
  );
};

export default Navigation;
