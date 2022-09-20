import React, { ReactNode } from "react";
import smoothscroll from "smoothscroll-polyfill";
import * as S from "./Scroll.styled";

type ScrollProps = {
  type: string;
  element: string;
  children: ReactNode;
};
const Scroll = ({ type, element, children }: ScrollProps) => {
  return <S.Scroll>{children}</S.Scroll>;
};

export default Scroll;
