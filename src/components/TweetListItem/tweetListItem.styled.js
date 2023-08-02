import styled from "styled-components";

export const ListItem = styled.li`
  position: relative;
  height: 440px;
  width: 300px;
  border-radius: 20px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.tweet};
  background: ${({ theme }) => theme.colors.background};

  @media only screen and (min-width: 768px) {
    width: 340px;
    height: 460px;
  }

  @media only screen and (min-width: 1280px) {
    width: 380px;
    height: 460px;
  }
`;

export const LogoGoIT = styled.svg`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Rectangle = styled.span`
  display: block;
  width: 300px;
  height: 8px;
  margin-bottom: 62px;
  background-color: ${({ theme }) => theme.colors.mainTextColor};
  box-shadow: ${({ theme }) => theme.shadows.rectangle};

  @media only screen and (min-width: 768px) {
    width: 340px;
  }

  @media only screen and (min-width: 1280px) {
    width: 380px;
  }
`;

export const BgImage = styled.img`
  padding: 40px 36px;
  max-width: 228px;

  @media only screen and (min-width: 768px) {
    padding: 36px;
    max-width: 268px;
  }

  @media only screen and (min-width: 1280px) {
    padding: 28px 36px 18px;
    max-width: 100%;
  }
`;

export const Ellipse = styled.div`
  position: absolute;
  top: 170px;
  left: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.mainTextColor};
  box-shadow: ${({ theme }) => theme.shadows.ellipse};

  @media only screen and (min-width: 768px) {
    top: 178px;
    left: 130px;
  }

  @media only screen and (min-width: 1280px) {
    top: 178px;
    left: 150px;
  }
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
