import React from "react";
import Hotel from "../../assets/images/hotel.jpeg";
import * as S from "./Travel.styled";

const Travel = () => {
  return (
    <S.Travel id="travel">
      <S.TravelContainer id="travel">
        <S.TravelHeader>Accomodations</S.TravelHeader>
        <S.TravelDetails>
          <img src={Hotel} width="700" />
          <S.AccomodationsLink
            href="https://be.synxis.com/?action=get_synxis_url&adult=1&arrive=2023-10-28&chain=27644&child=0&currency=USD&depart=2023-10-29&group=ROUANA&hotel=32973&level=hotel&locale=en-US&rooms=1&submit=CHECK%20AVAILABILITY"
            target="_blank"
          >
            The Chateau Grande Hotel
          </S.AccomodationsLink>
          <S.AccomodationsAddress>
            670 Cranbury Rd
            <br />
            East Brunswick, NJ 08816
          </S.AccomodationsAddress>
          <S.AccomodationsCode>
            GROUP CODE: ROUANA <br />
            <div>
              *When booking a room, select SPECIAL RATES and then select GROUP
              CODE from the drop down menu. Input code ROUANA.
            </div>
          </S.AccomodationsCode>

          <S.TravelTypeSmall
            href="https://be.synxis.com/?action=get_synxis_url&adult=1&arrive=2023-10-28&chain=27644&child=0&currency=USD&depart=2023-10-29&group=ROUANA&hotel=32973&level=hotel&locale=en-US&rooms=1&submit=CHECK%20AVAILABILITY"
            target="_blank"
          >
            Book a room now!
          </S.TravelTypeSmall>
        </S.TravelDetails>
        <S.Spacer></S.Spacer>
        <S.TravelHeader>Shuttle Services</S.TravelHeader>
        <S.ShuttleName>
          October 28, 2023 <br />
          1:00 pm - 6:00 pm
        </S.ShuttleName>
        <S.ShuttleInfo>
          Shuttles will be provided to and from The Chateau Grande Hotel and St.
          George Church. <br />
          The shuttles will be leaving the hotel promptly at{" "}
          <S.Time>1:00</S.Time>pm.
        </S.ShuttleInfo>
        <S.Spacer></S.Spacer>
        <S.TravelHeader>Hair & Makeup</S.TravelHeader>
        <S.HairLink
          href="http://www.liquidhairsalon.com/prices"
          target="_blank"
        >
          Liquid Hair Salon
        </S.HairLink>
        <S.Prices>
          Updo: $120+
          <br />
          Makeup: $126+
        </S.Prices>

        <br />
        <S.HairLink href="https://www.blisshair.net/" target="_blank">
          Bliss Salon
        </S.HairLink>
        <S.SmallText>
          *Preferred Vendor of the Park Chateatu <br />
          Appointments must be made at The Chateau Grande Hotel
          <S.Prices>
            Updo $200+
            <br />
            Makeup: $175
          </S.Prices>
        </S.SmallText>
      </S.TravelContainer>
    </S.Travel>
  );
};

export default Travel;
