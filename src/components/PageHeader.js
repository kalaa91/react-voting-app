import styled from "styled-components";

/** PageHeader component used as a title for Pages */
export const PageHeader = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: ${(props) => props.inputColor || "#c53e55"};
  text-align: left;
`;
