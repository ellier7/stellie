import React from "react";
import Hearts from "../../assets/images/two-hearts.svg";
import * as S from "./Portraits.styled";

const Portraits = () => {
  const countDownDate = new Date("Oct 28, 2023 14:00:00").getTime();

  return (
    <S.Portraits>
      <S.Border>
        <S.StelioPortrait>
          <S.Content>
            <S.FirstName>Stelio Anagnostopoulos</S.FirstName>
            <S.BrideGroom>THE GROOM</S.BrideGroom>
            <br />
            <S.Quote>
              I am so incredibly lucky and excited to spend everyday for the
              rest of my life with my best friend!
            </S.Quote>
          </S.Content>
        </S.StelioPortrait>
      </S.Border>
      <S.HeartsIcon>
        <img src={Hearts} />
      </S.HeartsIcon>
      <S.Border>
        <S.ElliePortrait>
          <S.Content>
            <S.FirstName>Ellie Roussopoulos</S.FirstName>
            <S.BrideGroom>THE BRIDE</S.BrideGroom>
            <br />
            <S.Quote>
              She's everything I've always dreamed of and I'm so excited to
              spend the rest of my life with her!
            </S.Quote>
          </S.Content>
        </S.ElliePortrait>
      </S.Border>
    </S.Portraits>
  );
};

export default Portraits;
