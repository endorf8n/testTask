import styled from "styled-components";

export const ListItem = styled.li`
  position: relative;
  height: 460px;
  width: 380px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.tweet};
  background: ${({ theme }) => theme.colors.background};
`;
