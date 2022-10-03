import React, { ReactNode } from "react";
import * as S from "./Scroll.styled";

type ScrollProps = {
  type: string;
  element: string;
  children: ReactNode;
};
const Scroll = ({ type, element, children }: ScrollProps) => {
  console.log("children", children);
  return <S.Scroll>{children}</S.Scroll>;
};

export default Scroll;
