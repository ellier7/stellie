import styled from "styled-components";
import Pic from "../../assets/images/Ellie&Stelios_EngagementSession-58.jpg";
import Stelio from "../../assets/images/Ellie&Stelios_EngagementSession-43.jpg";
import Ellie from "../../assets/images/Ellie&Stelios_EngagementSession-118.jpg";

export const Hero = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Pic});
  height: calc(100vh - 30px);
  min-height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-color: transparent;
  overflow: visible;
  z-index: 0;
`;

export const HeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../images/Ellie_&_Stelios_Nemours_Estate_Engagement_Session-2.jpg");
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-color: transparent;
  overflow: visible;
  z-index: 0;

  &::before {
    content: "";
    width: 100%;
    height: 600px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #548565;
    z-index: 0;
    opacity: 0.15;
  }
`;

export const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroDate = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
  position: relative;
  line-height: 1;
  padding-top: 20px;

  &::before {
    content: "";
    height: 1px;
    width: 100px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background-color: #fff;
    top: 0;
  }
`;

export const Day = styled.div`
  font-size: 54px;
  margin: 0 14px;
  font-family: "Times New Roman", serif;
`;

export const Names = styled.div`
  font-size: 50px;
  padding-bottom: 20px;
`;

export const Location = styled.a`
  font-family: "Pinyon Script", cursive;
  letter-spacing: 1.5px;
  margin-top: 5px;
  font-size: 30px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    font-weight: 800;
  }
`;

export const Month = styled.div``;
export const Year = styled.div``;

export const Border = styled.div`
  width: 100%;
  display: flex;
`;

export const Portraits = styled.div`
  display: flex;
  padding: 0 80px;
  justify-content: space-between;
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
`;

export const StelioPortrait = styled.div`
  box-shadow: inset 0 0 0 15px rgba(0, 0, 0, 0.2);
  background-image: url(${Stelio});
  height: 500px;
  width: inherit;
  background-position: top -15px center;
  background-size: cover;
  position: relative;
  background-color: transparent;
  display: flex;
`;

export const ElliePortrait = styled.div`
  box-shadow: inset 0 0 0 15px rgba(0, 0, 0, 0.2);
  background-image: url(${Ellie});
  height: 500px;
  width: inherit;
  background-position: top -30px center;
  background-size: cover;
  position: relative;
  background-color: transparent;
  margin-left: 45px;
  display: flex;
`;

export const HeartsIcon = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  left: 47%;
  bottom: 0px;
  z-index: 100;
  background-color: #fff;
  border-radius: 50%;
  padding: 10px;
`;
