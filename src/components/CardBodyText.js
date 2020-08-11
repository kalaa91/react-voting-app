import styled from "styled-components";

/** CardBodyText component used as a wrapper for Card body Text */
export const CardBodyText = styled.h2`
  color: ${(props) => props.inputColor || "#dadada"};
  font-size: 1.1rem;
`;
