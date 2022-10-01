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
          <img src={Church} height="70px" />
          <S.DetailType>Ceremony</S.DetailType>
          <S.DetailTime>2:00PM</S.DetailTime>
          <S.DetailInfo>
            Holy Trinity St. Nicholas Greek Orthodox Church
          </S.DetailInfo>
          <S.DetailAddress>
            1641 Richmond Ave
            <br />
            Staten Island, NY 10314
          </S.DetailAddress>
        </div>
        <div>
          <img src={Champagne} height="70px" />
          <S.DetailType>Cocktail Hour</S.DetailType>
          <S.DetailTime>6:30PM - 7:30PM</S.DetailTime>
          <S.DetailInfo>
            Park Chateau
            <br />
            Estate and Gardens
          </S.DetailInfo>
          <S.DetailAddress>
            678 Cranbury Rd <br />
            East Brunswick, NJ 08816
          </S.DetailAddress>
        </div>
        <div>
          <img src={WeddingCake} height="70px" />
          <S.DetailType>Reception</S.DetailType>
          <S.DetailTime>7:30PM - 12:00AM</S.DetailTime>
          <S.DetailInfo>
            Park Chateau
            <br />
            Estate and Gardens
          </S.DetailInfo>
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
