import React from "react";
import { CountdownProps, useCountdown } from "../../hooks/useCountdown";
import * as S from "./Countdown.styled";

const Countdown = ({ targetDate }: CountdownProps) => {
  const [days, hours, minutes, seconds] = useCountdown({
    targetDate: targetDate,
  });

  if (days + hours + minutes + seconds <= 0) {
    return <div>Expired</div>;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

type CounterProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ShowCounter = ({ days, hours, minutes, seconds }: CounterProps) => {
  return (
    <S.CountdownContainer>
      <S.Countdown>
        <DateTimeDisplay value={days} type={"Days"} />
        <DateTimeDisplay value={hours} type={"Hours"} />
        <DateTimeDisplay value={minutes} type={"Mins"} />
        <DateTimeDisplay value={seconds} type={"Seconds"} />
      </S.Countdown>
    </S.CountdownContainer>
  );
};

type DateTimeProps = {
  value: number;
  type: string;
};

const DateTimeDisplay = ({ value, type }: DateTimeProps) => {
  return (
    <div>
      <div className="value">{value}</div>
      <span>{type}</span>
    </div>
  );
};

export default Countdown;
