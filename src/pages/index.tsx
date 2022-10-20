import React, { useEffect, useState } from "react";
import type { HeadFC } from "gatsby";
import Homepage from "../components/Homepage/Homepage";
import Preloader from "../components/Preloader/Preloader";
import scrollTo from "gatsby-plugin-smoothscroll";

const IndexPage = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const loaded =
    typeof window !== "undefined" ? localStorage.getItem("preloader") : null;

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
      localStorage.setItem("preloader", "true");
    }, 2700);

    scrollTo("#home");
  }, []);

  return <>{showPreloader && !loaded ? <Preloader /> : <Homepage />}</>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Stellie 10.28.23</title>;
