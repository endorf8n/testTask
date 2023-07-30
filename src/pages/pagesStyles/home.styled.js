import styled from "styled-components";

export const WelcomeTitle = styled.h1`
  padding-top: 70px;
  padding-bottom: 50px;
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  color: ${({ theme }) => theme.colors.mainTextColor};
  text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
`;

export const WelcomePicture = styled.img`
  margin: 0 auto;
  width: 300px;
  height: 300px;
`;
