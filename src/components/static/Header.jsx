import styled from "styled-components";
import Button from "../Ui/GlobalButton";
import JumiaLogo from "../../assets/Jumia-Logo.png";
import JumiaStar from "../../assets/jumia-star.png";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <TopHeader>
          <Left>
            <img src={JumiaStar} alt="Star" width="14px" />
            <Sell>Sell on Jumia</Sell>
          </Left>
          <Center>
            <img src={JumiaLogo} alt="Jumia logo" width="60px" />
          </Center>
        </TopHeader>
      </Wrapper>

      <MainHeader>
        <img src={JumiaLogo} alt="Jumia logo" width={130} />
        <Others>
          <Search>
          <Input>
            <IoSearch />
            <input
              type="text"
              placeholder="Search products, brands and categories" 
              />
          </Input>
          <Button padding = "13px 15px" br = "6px">Search</Button>
          </Search>
          <Account>
          <FaRegUser size={20}/>
          <p>Account</p>
          <RiArrowDropDownLine size={30}/>
          </Account>
          <Help>
          <IoMdHelpCircleOutline size={25}/>
          <p>Help</p>
          <RiArrowDropDownLine size={30}/>
          </Help>
          <Cart>
          <IoCartOutline size={25}/>
          <p>Cart</p>
          </Cart>
        </Others>
      </MainHeader>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const TopHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 90px;
`;
const Left = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  font-size: 14px;
  align-items: center;
  cursor: pointer;
`;
const Sell = styled.p`
  color: #e07e1b;
  &:hover {
    text-decoration: underline;
  }
`;
const Center = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: -50px;
  & img{
    cursor: pointer;
  }
`;
const MainHeader = styled.header`
  width: 100%;
  /* position: fixed;
  z-index: 100;
  top: 30px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0px 90px;
  & img{
    cursor: pointer;
  }
`;
const Others = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
const Input = styled.div`
display: flex;
align-items: center;
gap: 5px;
padding: 3px 10px;
border: 1px solid #808080b9;
color: #808080b9;
border-radius: 6px;
font-size: 20px;
  & input {
    border: none;
    width: 460px;
    padding: 10px;
    outline: none;
  }
`;
const Account = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover{
    color: #e07e1b;
  }
`
const Help = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover{
    color: #e07e1b;
  }
`
const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover{
    color: #e07e1b;
  }
`