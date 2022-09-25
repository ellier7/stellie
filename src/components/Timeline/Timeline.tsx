import React from "react";
import Handshake from "../../assets/images/handshake.svg";
import Timeline1 from "../../assets/images/Ellie&Stelios_EngagementSession-67.jpg";
import Timeline2 from "../../assets/images/Ellie&Stelios_EngagementSession-46.jpg";
import * as S from "./Timeline.styled";

const Timeline = () => {
  return (
    <S.TimelineWrapper>
      <S.OurStory>Our Story</S.OurStory>
      <S.Timeline>
        <S.TimelineTopBottom></S.TimelineTopBottom>
        <S.ContentWrapper>
          <S.TimelineItem float="left">
            <S.ContentIcon order="odd">
              <img src={Handshake} alt="handshake" height="35px" />
            </S.ContentIcon>
            <S.TimelineContent float="left">
              <S.TimelineImageWrapper>
                <S.TimelineSingleImage>
                  <div></div>
                  <S.TimelineFigure>
                    <img src={Timeline1} />
                  </S.TimelineFigure>
                </S.TimelineSingleImage>
              </S.TimelineImageWrapper>
              <S.TimelineText float="left">
                <span>Header</span>
                <span>Date</span>
                <span>Testing testing</span>
              </S.TimelineText>
            </S.TimelineContent>
          </S.TimelineItem>
          <S.TimelineItem float="right">
            <S.ContentIcon order="even">
              <img src={Handshake} alt="handshake" height="35px" />
            </S.ContentIcon>
            <S.TimelineContent float="right">
              <S.TimelineImageWrapper>
                <S.TimelineSingleImage>
                  <div></div>
                  <S.TimelineFigure>
                    <img src={Timeline2} />
                  </S.TimelineFigure>
                </S.TimelineSingleImage>
              </S.TimelineImageWrapper>
              <S.TimelineText float="right">
                <span>Header</span>
                <span>Date</span>
                <span>Testing testing</span>
              </S.TimelineText>
            </S.TimelineContent>
          </S.TimelineItem>
          <S.TimelineItem float="left">
            <S.ContentIcon order="odd">
              <img src={Handshake} alt="handshake" height="35px" />
            </S.ContentIcon>
            <S.TimelineContent float="left">
              <S.TimelineImageWrapper>
                <S.TimelineSingleImage>
                  <div></div>
                  <S.TimelineFigure>
                    <img src={Timeline1} />
                  </S.TimelineFigure>
                </S.TimelineSingleImage>
              </S.TimelineImageWrapper>
              <S.TimelineText float="left">
                <span>Header</span>
                <span>Date</span>
                <span>Testing testing</span>
              </S.TimelineText>
            </S.TimelineContent>
          </S.TimelineItem>
          <S.TimelineItem float="right">
            <S.ContentIcon order="even">
              <img src={Handshake} alt="handshake" height="35px" />
            </S.ContentIcon>
            <S.TimelineContent float="right">
              <S.TimelineImageWrapper>
                <S.TimelineSingleImage>
                  <div></div>
                  <S.TimelineFigure>
                    <img src={Timeline2} />
                  </S.TimelineFigure>
                </S.TimelineSingleImage>
              </S.TimelineImageWrapper>
              <S.TimelineText float="right">
                <span>Header</span>
                <span>Date</span>
                <span>Testing testing</span>
              </S.TimelineText>
            </S.TimelineContent>
          </S.TimelineItem>
        </S.ContentWrapper>
      </S.Timeline>
    </S.TimelineWrapper>
  );
};

export default Timeline;
