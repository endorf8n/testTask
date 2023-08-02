import styled from "styled-components";
import { BtnFollow } from "../../components/TweetListItem/tweetListItem.styled";
import { Link } from "react-router-dom";

export const MainWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
  text-align: center;

  @media only screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const MiniWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
    flex-direction: row;
    gap: 20px;
  }

  @media only screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const BtnLoadMore = styled(BtnFollow)`
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: none;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentColor};
    box-shadow: ${({ theme }) => theme.shadows.button};
  }
`;

export const LinkGoBack = styled(Link)`
  display: block;
  width: 160px;
  margin-top: 24px;
  margin-bottom: 24px;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.mainTextColor};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentColor};
    box-shadow: ${({ theme }) => theme.shadows.button};
  }
`;
