import React, { useEffect, useState } from "react";
import Menu from "../../assets/images/menu-icon.svg";
import * as S from "./Navigation.styled";

type NavigationProps = {
  sticky: boolean;
};

type menuLinkProps = {
  active: boolean;
  href: string;
  mobileMenu: boolean;
  name: string;
  onClick: () => void;
  type?: string;
};

const Navigation = ({ sticky }: NavigationProps) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <S.Navigation id="nav" sticky={sticky} $mobileMenu={mobileMenu}>
        <S.Menubar src={Menu} height="20" onClick={toggleMobileMenu} />
        <S.NavigationContainer $mobileMenu={mobileMenu}>
          <MenuLinks toggle={mobileMenu} />
        </S.NavigationContainer>
      </S.Navigation>
      <NavigationMobile toggle={mobileMenu} />
    </>
  );
};
const NavigationMobile = (toggle: { toggle: boolean }) => {
  useEffect(() => {}, [toggle]);
  return (
    <S.NavigationMobile $mobileMenu={toggle.toggle}>
      <MenuLinks toggle={toggle.toggle} />
    </S.NavigationMobile>
  );
};
const MenuLinks = (toggle: { toggle: boolean }) => {
  const location = typeof window !== "undefined" ? window.location : null;
  const [active, setActive] = useState("");

  useEffect(() => {
    let activeRoute = "";
    if (location?.hash) {
      activeRoute = location?.hash.split("#")[1];
    } else if (location?.pathname != "/") {
      activeRoute = location?.pathname.split("/")[1] || "";
    } else activeRoute = "home";

    setActive(activeRoute);
  }, []);

  const menuLinks = [
    {
      active: active === "home",
      href: "/",
      name: "Home",
      onClick: () => setActive("home"),
      type: "link",
    },
    {
      active: active === "details",
      href: "/#details",
      name: "Details",
      onClick: () => setActive("details"),
      type: "anchorLink",
    },
    {
      active: active === "travel",
      href: "/travel",
      name: "Travel",
      onClick: () => setActive("travel"),
      type: "link",
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
      href: "/registry",
      name: "Registry",
      onClick: () => setActive("registry"),
      type: "link",
    },
  ];

  return (
    <>
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
              mobileMenu={toggle.toggle}
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
            mobileMenu={toggle.toggle}
          />
        );
      })}
    </>
  );
};
const AnchorLink = ({
  href,
  name,
  active,
  onClick,
  mobileMenu,
}: menuLinkProps) => {
  return (
    <S.CustomAnchorLink
      to={href}
      title={name}
      key={name}
      $active={active.toString()}
      onAnchorLinkClick={onClick}
      $mobileMenu={mobileMenu}
    >
      <S.List>{name}</S.List>
    </S.CustomAnchorLink>
  );
};

const Link = ({ href, name, active, onClick, mobileMenu }: menuLinkProps) => {
  return (
    <S.NavLink
      to={href}
      title={name}
      key={name}
      active={active.toString()}
      onClick={onClick}
      $mobileMenu={mobileMenu}
    >
      <S.List>{name}</S.List>
    </S.NavLink>
  );
};

export default Navigation;
