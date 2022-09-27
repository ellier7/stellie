import React from "react";
import TimelineIcon1 from "../../assets/images/timeline-icon1.svg";
import TimelineIcon2 from "../../assets/images/timeline-icon2.svg";
import TimelineIcon3 from "../../assets/images/timeline-icon3.svg";
import TimelineIcon4 from "../../assets/images/timeline-icon4.svg";
import Timeline1 from "../../assets/images/Ellie&Stelios_EngagementSession-67.jpg";
import Timeline2 from "../../assets/images/Ellie&Stelios_EngagementSession-46.jpg";
import Timeline3 from "../../assets/images/Ellie&Stelios_EngagementSession-136.jpg";
import Timeline4 from "../../assets/images/Ellie&Stelios_EngagementSession-89.jpg";
import * as S from "./Timeline.styled";

const Timeline = () => {
  const timelineItems = [
    {
      id: "timeline1",
      float: "left",
      icon: TimelineIcon1,
      iconHeight: "48px",
      image: Timeline1,
      header: "it's a match!",
      date: "03/25/20",
      text: '"Stelio lost his independence on the day Greece gain it."',
      order: "odd",
    },
    {
      id: "timeline2",
      float: "right",
      icon: TimelineIcon2,
      iconHeight: "35px",
      image: Timeline2,
      header: "our first date",
      date: "05/09/20",
      text: "At the height of the Covid lockdown, we went for a walk at the Staten Island boardwalk. Stelio packed a bag with wine and snacks and we talked for hours!",
      order: "even",
    },
    {
      id: "timeline3",
      float: "left",
      icon: TimelineIcon3,
      iconHeight: "44px",
      image: Timeline3,
      header: "he asked, she said yes!",
      date: "03/19/22",
      text: "Isabella Stewart Gardner Museum. Ellie was so shocked (and hysterically crying) and couldn't respond until Stelio said 'this is when you say yes!!'",
      order: "odd",
    },
    {
      id: "timeline4",
      float: "right",
      icon: TimelineIcon4,
      iconHeight: "44px",
      image: Timeline4,
      header: "our wedding day",
      date: "10/28/23",
      text: "#sayingYesOnOxiDay",
      order: "even",
    },
  ];
  return (
    <S.TimelineWrapper>
      <S.OurStory id="ourstory">Our Story</S.OurStory>
      <S.Timeline>
        <S.TimelineTop></S.TimelineTop>
        <S.ContentWrapper>
          {timelineItems.map((item) => {
            return (
              <S.TimelineItem float={item.float} key={item.id}>
                <S.ContentIcon order={item.order}>
                  <img src={item.icon} alt={item.id} height={item.iconHeight} />
                </S.ContentIcon>
                <S.TimelineContent float={item.float}>
                  <S.TimelineImageWrapper>
                    <S.TimelineSingleImage>
                      <div></div>
                      <S.TimelineFigure>
                        <img src={item.image} alt={item.id} />
                      </S.TimelineFigure>
                    </S.TimelineSingleImage>
                  </S.TimelineImageWrapper>
                  <S.TimelineText float={item.float}>
                    <span>{item.header}</span>
                    <span>{item.date}</span>
                    <span>{item.text}</span>
                  </S.TimelineText>
                </S.TimelineContent>
              </S.TimelineItem>
            );
          })}
        </S.ContentWrapper>
        <S.TimelineBottom></S.TimelineBottom>
      </S.Timeline>
    </S.TimelineWrapper>
  );
};

export default Timeline;
