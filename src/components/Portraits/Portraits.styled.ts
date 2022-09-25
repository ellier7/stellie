import styled from "styled-components";
import Stelio from "../../assets/images/Ellie&Stelios_EngagementSession-43.jpg";
import Ellie from "../../assets/images/Ellie&Stelios_EngagementSession-119.jpg";

export const Border = styled.div`
  width: 100%;
  display: flex;
`;

export const Portraits = styled.div`
  display: flex;
  padding: 0 80px;
  justify-content: space-between;
  margin: 15px 0;
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  opacity: 0;
  transition: all 0.3s;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  color: rgba(0, 0, 0, 0.8);
`;

const PortraitContatiner = styled.div`
  box-shadow: inset 0 0 0 15px rgba(0, 0, 0, 0.2);
  height: 500px;
  width: inherit;
  background-size: cover;
  position: relative;
  background-position: top;
  background-color: rgba(232, 199, 200, 0.3);
  display: flex;
  transition: all 0.3s;

  &:hover {
    cursor: default;
    background-image: none;
    box-shadow: none;

    & ${Content} {
      opacity: 1;
    }
  }
`;

export const StelioPortrait = styled(PortraitContatiner)`
  background-image: url(${Stelio});
  margin-right: 20px;
`;

export const ElliePortrait = styled(PortraitContatiner)`
  background-image: url(${Ellie});
  margin-left: 20px;
`;

export const HeartsIcon = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 100;
  background-color: #fff;
  border-radius: 50%;
  padding: 10px;
`;

export const FirstName = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 30px;
  color: var(--primary);
`;

export const BrideGroom = styled.div`
  color: var(--primary);
  margin-bottom: 30px;
`;

export const Quote = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 60px;
`;
