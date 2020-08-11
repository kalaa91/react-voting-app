import styled from "styled-components";

/** Floating component used as a Floating Button Bottom Right Button */
export const FloatingButtonContainer = styled.div`
  right: 5%;
  bottom: 5%;
  position: fixed;
`;

export const FloatingBottomRightButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(245, 245, 245, 0.075);
  text-align: center;
  padding: 0px;
  font-size: 24px;
  background-color: #c53e55;
  color: #dadada;
  &:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    cursor: pointer;
  }
  &:focus {
    outline: transparent;
  }
`;
