import React from "react";
import * as S from "./Timeline.styled";

const Timeline = () => {
  return (
    <S.Timeline>
      <S.OurStory>
        <S.LineContainer>
          <S.HLine></S.HLine>
          <S.VLine></S.VLine>
          Our Story
        </S.LineContainer>
      </S.OurStory>
    </S.Timeline>
  );
};

export default Timeline;
