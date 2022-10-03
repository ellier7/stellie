import React, { useState } from "react";
import Scroll from "../Scroll/Scroll";
import * as S from "./Navigation.styled";

type NavigationProps = {
  sticky: boolean;
};

type menuLinkProps = {
  active: boolean;
  href: string;
  name: string;
  onClick: () => void;
  type?: string;
};

const Navigation = ({ sticky }: NavigationProps) => {
  const [active, setActive] = useState("home");

  const menuLinks = [
    {
      active: active === "home",
      href: "/",
      name: "Home",
      onClick: () => setActive("home"),
      type: "anchorLink",
    },
    {
      active: active === "details",
      href: "/#details",
      name: "Details",
      onClick: () => setActive("details"),
      type: "anchorLink",
    },
    {
      active: active === "accomodations",
      href: "/#accomodations",
      name: "Accomodations",
      onClick: () => setActive("accomodations"),
      type: "anchorLink",
    },
    {
      active: active === "gallery",
      href: "/gallery",
      name: "Gallery",
      onClick: () => setActive("gallery"),
      type: "link",
    },
    {
      active: active === "registry",
      href: "/#home",
      name: "Registry",
      onClick: () => setActive("registry"),
      type: "link",
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
          if (menu.type === "anchorLink") {
            return (
              <AnchorLink
                active={menu.active}
                href={menu.href}
                key={menu.name}
                name={menu.name}
                onClick={menu.onClick}
                type={menu.type}
              />
            );
          }
          return (
            <Link
              active={menu.active}
              href={menu.href}
              key={menu.name}
              name={menu.name}
              onClick={menu.onClick}
              type={menu.type}
            />
          );
        })}
      </S.NavigationContainer>
    </S.Navigation>
  );
};

const AnchorLink = ({ href, name, active, onClick }: menuLinkProps) => {
  return (
    <S.CustomAnchorLink
      to={href}
      title={name}
      key={name}
      active={active.toString()}
      onAnchorLinkClick={onClick}
    >
      <S.List>{name}</S.List>
    </S.CustomAnchorLink>
  );
};

const Link = ({ href, name, active, onClick }: menuLinkProps) => {
  return (
    <S.NavLink
      to={href}
      title={name}
      key={name}
      active={active.toString()}
      onClick={onClick}
    >
      <S.List>{name}</S.List>
    </S.NavLink>
  );
};

export default Navigation;
