import styled from "styled-components";
import { LuCookingPot } from "react-icons/lu";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { GiHealthPotion } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { HiOutlineTv } from "react-icons/hi2";
import { LiaTshirtSolid } from "react-icons/lia";
import { CiApple } from "react-icons/ci";
import { PiRadioLight } from "react-icons/pi";
import { PiBaby } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import CarouselImg from "../../assets/Jumia_Hero_Carousel1.jpg";
import { IoIosCall } from "react-icons/io";
import { FcShop } from "react-icons/fc";
import { GrDropbox } from "react-icons/gr";
import JumiaGif from "../../assets/jumia_gif.gif";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Categories>
          <Item>
            <LuCookingPot />
            <p>Appliances</p>
          </Item>
          <Item>
            <IoPhonePortraitOutline />
            <p>Phones & Tablets</p>
          </Item>
          <Item>
            <GiHealthPotion />
            <p>Health & Beauty</p>
          </Item>
          <Item>
            <GoHome />
            <p>Home & Office</p>
          </Item>
          <Item>
            <PiRadioLight />
            <p>Electronics</p>
          </Item>
          <Item>
            <LiaTshirtSolid />
            <p>Fashion</p>
          </Item>
          <Item>
            <CiApple />
            <p>Supermarket</p>
          </Item>
          <Item>
            <HiOutlineTv />
            <p>Computing</p>
          </Item>
          <Item>
            <PiBaby />
            <p>Baby Products</p>
          </Item>
          <Item>
            <IoGameControllerOutline />
            <p>Gamming</p>
          </Item>
          <Item>
            <p>Musical Instruments</p>
          </Item>
          <Item>
            <CiCircleMore />
            <p>Other Categories</p>
          </Item>
        </Categories>
        <CarouselContainer>
          <img src={CarouselImg} alt="Carousel Image" height="100%" />
          <DotContainer>
            <Dots></Dots>
            <Dots></Dots>
            <Dots></Dots>
            <Dots></Dots>
            <Dots></Dots>
            <Dots></Dots>
            <Dots></Dots>
          </DotContainer>
        </CarouselContainer>
        <RightContent>
          <Top>
            <Info>
              <IconContainer>
                <IoIosCall color="#808080b9" size={25} />
              </IconContainer>
              <Text>
                <h4>CALL TO ORDER</h4>
                <p>0700-600-0000, 0201888...</p>
              </Text>
            </Info>
            <Info>
              <IconContainer>
                <FcShop color="#808080b9" size={25} />
              </IconContainer>
              <Text>
                <h4>Sell on Jumia</h4>
              </Text>
            </Info>
            <Info>
              <IconContainer>
                <GrDropbox color="#808080b9" size={22} />
              </IconContainer>
              <Text>
                <h4>Best Deals</h4>
              </Text>
            </Info>
          </Top>
          <Bottom>
            <img src={JumiaGif} alt="Jumia gif" />
          </Bottom>
        </RightContent>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  /* margin: 85px 0px 15px 0px; */
  margin: 15px 0px;
  padding: 0px 90px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const Categories = styled.ul`
  width: 20%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  box-shadow: rgba(128, 128, 128, 0.144) 0px 2px 8px 0px;
  border-radius: 6px;
  :last-child {
    padding-bottom: 0px;
  }
`;
const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 17px;
  gap: 5px;
  :hover {
    color: #e07e1b;
  }
  p {
    font-size: 12px;
    cursor: pointer;
  }
`;
const CarouselContainer = styled.div`
  width: 61%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    border-radius: 6px;
  }
`;
const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  padding-bottom: 10px;
  height: 100%;
  align-items: flex-end;
  width: 100%;
  gap: 7px;
  :nth-child(4) {
    background-color: #e07e1b;
  }
`;
const Dots = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #a3a3a6;
  cursor: pointer;
  &:hover {
    background-color: #e07e1b;
  }
`;
const RightContent = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  /* box-shadow: rgba(128, 128, 128, 0.144) 0px 2px 8px 0px; */
`;
const Top = styled.ul`
width: 100%;
  background-color: #fff;
  border-radius: 6px;
  padding: 15px;
  box-shadow: rgba(128, 128, 128, 0.144) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;
const Info = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
`;
const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #e07e1b;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  h4 {
    font-size: 14px;
    font-weight: 500;
  }
  p {
    font-size: 11px;
  }
`;
const Bottom = styled.div`
width: 100%;

  img {
    border-radius: 6px;
    width: 100%;
  }
`;
