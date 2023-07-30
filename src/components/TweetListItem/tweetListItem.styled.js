import styled from "styled-components";

export const ListItem = styled.li`
  position: relative;
  height: 460px;
  width: 380px;
  border-radius: 20px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.tweet};
  background: ${({ theme }) => theme.colors.background};
`;

export const LogoGoIT = styled.svg`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Rectangle = styled.span`
  display: block;
  width: 380px;
  height: 8px;
  margin-bottom: 62px;
  background-color: ${({ theme }) => theme.colors.mainTextColor};
  box-shadow: ${({ theme }) => theme.shadows.rectangle};
`;

export const BgImage = styled.img`
  padding: 28px 36px 18px;
`;

export const Ellipse = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.mainTextColor};
  box-shadow: ${({ theme }) => theme.shadows.ellipse};
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const TextTweets = styled.p`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

export const TextFollowers = styled(TextTweets)`
  margin-bottom: 26px;
`;

export const BtnFollow = styled.button`
  width: 196px;
  border-radius: 10.311px;
  background: ${({ theme }) => theme.colors.mainTextColor};
  box-shadow: ${({ theme }) => theme.shadows.button};
  padding: 14px 28px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  font-family: Montserrat;
  font-size: ${({ theme }) => theme.fontSizes.regular};
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  border: none;
`;
