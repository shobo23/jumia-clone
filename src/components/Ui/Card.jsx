import React from "react";
import styled from "styled-components";


const Cards = ({ textColor, backGround, icon, bigText, smallText }) => {
  return (
    <CardsDiv>
      <Top color={textColor} bg={backGround}>
        <IconHolder>{icon}</IconHolder>
      </Top>

      <TxtHolder>
        <BigText>{bigText}</BigText>
        <SmallText>{smallText}</SmallText>
      </TxtHolder>
    </CardsDiv>
  );
};

export default Cards;

const CardsDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  position: relative;
`;

const Top = styled.div`
  height: 70px;
  width: 100%;
  background-color: ${(props) => props.bg || "white"};
  color: ${(props) => props.color || "green"};
  border-radius: 8px 8px 0px 0px;
`;

const IconHolder = styled.div`
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: white;
  position: absolute;
  top: 45px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
const TxtHolder = styled.div`
  padding: 50px 20px 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  border-radius: 0px 0px 8px 8px;
`;

const BigText = styled.h1`
  font-size: 22px;
`;
const SmallText = styled.p`
width: 290px;
  
`
