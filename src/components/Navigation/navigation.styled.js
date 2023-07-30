import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavListStyle = styled.ul`
  display: flex;
  gap: 40px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${({ theme }) => theme.fontSizes.big};
  font-weight: 700;
  text-shadow: 1px 1px 2px black, 0 0 1em white, 0 0 0.2em white;
  &.active {
    color: ${({ theme }) => theme.colors.accentColor};
    text-shadow: 1px 1px 2px black, 0 0 1em white, 0 0 0.2em white;
  }
`;
