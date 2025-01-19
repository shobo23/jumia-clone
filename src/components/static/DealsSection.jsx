import styled from "styled-components";
import Tv from "../../assets/deals/electronics.png";
import NewArrival from "../../assets/deals/new-arrival.gif";
import ClearanceSale from "../../assets/deals/clearance-sale.png";
import PhoneAndTab from "../../assets/deals/phones-and-tab.png";
import Appliances from "../../assets/deals/appliances.png"
import Beverages from "../../assets/deals/groceries.png"

const DealsContainer = () => {
  return (
    <Container>
      <Wrapper>
        <Deal>
          <img src={Tv} alt="Electronics" />
          <p>TV & Audio Deals</p>
        </Deal>
        <Deal>
          <img src={NewArrival} alt="New Arrival" />
          <p>New Arrival</p>
        </Deal>
        <Deal>
          <img src={ClearanceSale} alt="Clearance Sale" />
          <p>Clearance Sale</p>
        </Deal>
        <Deal>
          <img src={PhoneAndTab} alt="Phone And Tab" />
          <p>Phones & Tablets Deals</p>
        </Deal>
        <Deal>
          <img src={Appliances} alt="Appliances" />
          <p>Appliances Deals</p>
        </Deal>
        <Deal>
          <img src={Beverages} alt="Beverages" />
          <p>Beverages</p>
        </Deal>
      </Wrapper>
    </Container>
  );
};

export default DealsContainer;

const Container = styled.div`
  width: 100%;
  margin: 15px 0px;
  padding: 0px 90px;
`;
const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 7px 10px;
  border-radius: 6px;
  background-color: #fff;
  width: 100%;
  box-shadow: rgba(128, 128, 128, 0.144) 0px 2px 8px 0px;
`;
const Deal = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  img {
    border-radius: 6px;
    width: 180px;
  }
  p{
    font-size: 12px;
  }
`;
