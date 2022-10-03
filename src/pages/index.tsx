import React, { useEffect, useState } from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout/Layout";
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

  return <>{showPreloader && !loaded ? <Preloader /> : <Layout />}</>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Stellie 10.28.23</title>;
