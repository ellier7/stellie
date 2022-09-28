import React from "react";
import Church from "../../assets/images/church.svg";
import Champagne from "../../assets/images/champagne.svg";
import WeddingCake from "../../assets/images/wedding-cake.svg";
import * as S from "./Details.styled";

const Details = () => {
  return (
    <S.Details id="details">
      <S.DetailsHeader>Wedding Day Details</S.DetailsHeader>
      <S.DetailsContainer>
        <div>
          <img src={Church} height="100px" />
          <p>Ceremony</p>
          <span>2:00PM</span>
          <S.DetailInfo>TBD</S.DetailInfo>
        </div>
        <div>
          <img src={Champagne} height="100px" />
          <p>Cocktail Hour</p>
          <span>6:30PM - 7:30PM</span>
          <S.DetailInfo>Park Chateau Estate and Gardens</S.DetailInfo>
          <S.DetailAddress>
            678 Cranbury Rd <br />
            East Brunswick, NJ 08816
          </S.DetailAddress>
        </div>
        <div>
          <img src={WeddingCake} height="100px" />
          <p>Reception</p>
          <span>7:30PM - 12:00AM</span>
          <S.DetailInfo>Park Chateau Estate and Gardens</S.DetailInfo>
          <S.DetailAddress>
            678 Cranbury Rd
            <br />
            East Brunswick, NJ 08816
          </S.DetailAddress>
        </div>
      </S.DetailsContainer>
    </S.Details>
  );
};

export default Details;
