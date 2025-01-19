import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.bg || "#FF9300"};
  border: ${(props) => props.border || "none"};
  padding: ${(props) => props.padding || "10px 25px"};
  border-radius: ${(props) => props.br || "8px"};
  color: ${(props) => props.color || "white"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: ${(props) => props.gap || "0px"};
  font-weight: ${(props) => props.fontWeigth || "600"};
  font-size: ${(props) => props.fontSize || "15px"};
  transition: all 0.3s ease;
  &:hover{
    background-color: ${(props) => props.bc || "#db8f42"};
  }
`;
export default Button;