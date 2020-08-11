import styled from "styled-components";

/** CardTitle component used as a wrapper for Card Title */
export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
  color: ${(props) => props.inputColor || "#dadada"};
`;
