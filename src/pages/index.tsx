import React, { useEffect, useState } from "react";
import type { HeadFC } from "gatsby";
import Homepage from "../components/Homepage/Homepage";
import Preloader from "../components/Preloader/Preloader";
import * as S from "../styles/main.styled";

const IndexPage = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const loaded = localStorage.getItem("preloader");

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
      localStorage.setItem("preloader", "true");
    }, 2700);
  }, []);

  return <>{showPreloader && !loaded ? <Preloader /> : <Homepage />}</>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Stellie 10.28.23</title>;
