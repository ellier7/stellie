import styled from "styled-components";

export const TimelineWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const OurStory = styled.div`
  font-family: "Alex Brush", cursive;
  color: var(--primary);
  font-size: 50px;
  display: flex;
  justify-content: center;
  margin: 60px 0 30px;
`;

export const Timeline = styled.div`
  position: relative;
  padding: 0 0 5em;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

const TimeLineDot = styled.div`
  &:before {
    border-color: #f7f7f7;
    background: var(--primary);
    content: " ";
    position: absolute;
    top: -10px;
    left: 50%;
    z-index: 20;
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 10px;
    border: 4px solid #eee;
  }
`;

export const TimelineTop = styled(TimeLineDot)`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 20;
  margin-left: -7px;
`;

export const TimelineBottom = styled(TimeLineDot)`
  position: absolute;
  bottom: 0;
  top: auto;
  left: 50%;
  z-index: 20;
  margin-left: -7px;
`;

export const ContentWrapper = styled.div`
  &:before {
    box-sizing: border-box;
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 4px;
    background: var(--primary);
    opacity: 0.3;
  }
`;

export const TimelineItem = styled.div<{ float: string }>`
  position: relative;
  clear: both;
  width: 50%;
  float: ${(props) => props.float};
  margin-top: 80px;
`;

export const TimelineContent = styled.div<{ float: string }>`
  position: relative;
  width: 80%;
  text-align: center;
  background: #fff;
  padding: 0;
  border: 0;
  margin-left: ${(props) => (props.float === "right" ? "20%" : 0)};
`;

export const TimelineImageWrapper = styled.div`
  position: relative;
  margin-bottom: 0;
`;

export const TimelineSingleImage = styled.div`
  text-align: center;
  position: relative;
  z-index: 3;

  > div {
    position: relative;
    padding: 0;
  }
`;

export const TimelineFigure = styled.figure`
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;

  & img {
    margin: 0;
    width: 100%;
    max-width: 100%;
    vertical-align: top;
    transition: all 0.4s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ContentIcon = styled.div<{ order: string }>`
  background-color: #f7f7f7;
  margin-top: -35px;
  position: absolute;
  top: 50%;
  width: 70px;
  height: 70px;
  margin-left: -33px;
  text-align: center;
  font-size: 18px;
  line-height: 74px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  right: ${(props) => (props.order === "even" ? "auto" : "-35px")};
  left: ${(props) => (props.order === "even" ? "0" : "null")};
`;

export const TimelineText = styled.div<{ float: string }>`
  position: absolute;
  top: 50%;

  transform: translateY(-50%);
  width: 100%;
  padding-left: 40px;
  text-align: left;
  display: flex;
  flex-direction: column;
  left: ${(props) => (props.float === "right" ? "-140%" : "140%")};
  text-align: ${(props) => (props.float === "right" ? "right" : "left")};
  padding-right: ${(props) => (props.float === "right" ? "40px" : "0")};
  padding-left: ${(props) => (props.float === "right" ? "0px" : "40px")};

  & span:nth-child(1) {
    font-family: "Alex Brush", cursive;
    font-size: 38px;
    line-height: 1;
  }

  & span:nth-child(2) {
    display: block;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1;
    color: var(--primary);
  }

  & span:nth-child(3) {
    font-size: 14px;
    opacity: 0.8;
  }
`;

export const GalleryLink = styled.a``;

export const Gallery = styled.button`
  width: auto;
  margin: 50px auto 0;
  background: #fff;
  font-size: 18px;
  color: var(--primary);
  border: 1px solid var(--primary);
  outline: none;
  padding: 9px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Playfair Display", serif;
  display: flex;
  align-items: center;

  img {
    margin-left: 5px;
  }

  :hover {
    background: var(--primary);
    color: #fff;
  }
`;
