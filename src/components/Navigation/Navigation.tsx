import React from "react";
// import { Scrollspy } from "@makotot/ghostui";
import Scroll from "../Scroll/Scroll";
import * as S from "./Navigation.styled";

type NavigationProps = {
  sticky: boolean;
};
const Navigation = ({ sticky }: NavigationProps) => {
  return (
    <S.Navigation id="nav" sticky={sticky}>
      {/* <Scrollspy
        items={['intro', 'first', 'second', 'cta']}
        currentClassName="is-active"
        offset={-300}
      > */}
      <S.List>
        <Scroll type="id" element="home">
          <a href="#">Home</a>
        </Scroll>
      </S.List>
      <S.List>
        <Scroll type="id" element="details">
          <a href="#">Details</a>
        </Scroll>
      </S.List>
      <S.List>
        <Scroll type="id" element="accomodations">
          <a href="#">Accomodations</a>
        </Scroll>
      </S.List>
      <S.List>
        <Scroll type="id" element="registry">
          <a href="#">Registry</a>
        </Scroll>
      </S.List>
    </S.Navigation>
  );
};

export default Navigation;
