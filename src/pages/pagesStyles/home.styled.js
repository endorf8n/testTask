import styled from "styled-components";

export const WelcomeTitle = styled.h1`
  max-width: 320px;
  margin: 0 auto;
  padding-top: 70px;
  padding-bottom: 50px;
  font-size: ${({ theme }) => theme.fontSizes.big};
  text-align: center;
  color: ${({ theme }) => theme.colors.mainTextColor};
  text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
    max-width: 768px;
  }
`;

export const HomeImg = styled.img`
  margin: 0 auto;
  width: 200px;
  height: 200px;

  @media only screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
