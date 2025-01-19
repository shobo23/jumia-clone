import React from "react";
import style from "style-component";
import styled from "styled-components";

const Card = ({ text, bgColor, txtColor, icon }) => {
  return (
    <Cards>
      <Top color={txtColor} bg={bgColor}>


      </Top>
    </Cards>
  );
};

export default Card;

const Cards = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 280px;
  position: relative;
`;
const Top = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.bg || "yellow"};
  color: ${(props) => props.color || "black"};
`;
