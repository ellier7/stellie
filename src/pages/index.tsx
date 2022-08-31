import React, { useEffect, useState } from "react";
import type { HeadFC } from "gatsby";
import * as S from "../styles/main.styled";
import Preloader from "../components/Preloader/Preloader";

const IndexPage = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 2700);
  }, []);

  return (
    <>
      {showPreloader ? (
        <Preloader />
      ) : (
        <S.Container>
          <S.Text>10.28.23</S.Text>
        </S.Container>
      )}
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Stellie 10.28.23</title>;
