import React from "react";
import Hotel from "../../assets/images/hotel.jpeg";
import * as S from "./Accomodations.styled";

const Accomodations = () => {
  return (
    <S.Accomodations id="accomodations">
      <S.AccomodationsContainer id="accomodations">
        <S.AccomodationsHeader>Accomodations</S.AccomodationsHeader>
        <S.AccomodationsDetails>
          <img src={Hotel} width="700" />
          <S.AccomodationsType
            href="https://be.synxis.com/?action=get_synxis_url&adult=1&arrive=2023-10-28&chain=27644&child=0&currency=USD&depart=2023-10-29&group=ROUANA&hotel=32973&level=hotel&locale=en-US&rooms=1&submit=CHECK%20AVAILABILITY"
            target="_blank"
          >
            The Chateau Grande Hotel
          </S.AccomodationsType>
          <S.AccomodationsAddress>
            670 Cranbury Rd
            <br />
            East Brunswick, NJ 08816
          </S.AccomodationsAddress>
          <S.AccomodationCode>
            GROUP CODE: ROUANA <br />
            <div>
              *When booking a room, select SPECIAL RATES and then select GROUP
              CODE from the drop down menu. Input code ROUANA.
            </div>
          </S.AccomodationCode>

          <S.AccomodationsTypeSmall
            href="https://be.synxis.com/?action=get_synxis_url&adult=1&arrive=2023-10-28&chain=27644&child=0&currency=USD&depart=2023-10-29&group=ROUANA&hotel=32973&level=hotel&locale=en-US&rooms=1&submit=CHECK%20AVAILABILITY"
            target="_blank"
          >
            Book a room now!
          </S.AccomodationsTypeSmall>
          <S.RecoveryBreakfast>
            <span>
              {" "}
              Join us on Sunday 10/29/2023 <br />
              for a Recovery Breakfast!
            </span>
            <span>9:30AM - 11:30AM</span>
            <span>
              Chateau Grande Events by David Burke
              <br />
              The Chateau Grande Hotel
            </span>
          </S.RecoveryBreakfast>
        </S.AccomodationsDetails>
      </S.AccomodationsContainer>
    </S.Accomodations>
  );
};

export default Accomodations;
