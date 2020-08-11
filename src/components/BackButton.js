import styled from "styled-components";

/** BackButton component used as a Back button */
export const BackButton = styled.button`
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(245, 245, 245, 0.075);
  padding: 8px 16px;
  text-decoration: none;
  display: inline-block;
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
