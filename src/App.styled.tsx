import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)<{ special?: boolean }>`
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
  font-size: 50px;
  color: ${props => (props.special ? "hotpink" : "inherit")};
`;

export const StyledApp = styled.div`
  > header,
  main {
    padding: 1em;
  }
  ${StyledLink}.active {
    background: yellow;
  }
`;