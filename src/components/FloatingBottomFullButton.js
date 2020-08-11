import styled from "styled-components";

/** Floating component used as a Floating Bottom Full Button */
export const FloatingBottomFullButtonContainer = styled.div`
  width: 90%;
  bottom: 0%;
  position: fixed;
  right: 0%;
`;

export const FloatingBottomFullButton = styled.button`
  width: 90%;
  height: 10%;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(245, 245, 245, 0.075);
  text-align: center;
  padding: 0px;
  font-size: 24px;
  background-color: #c53e55;
  color: #dadada;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: transparent;
  }
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;
