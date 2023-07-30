import PropTypes from "prop-types";
import logo from "../../images/sprite.svg";
import bgImage from "../../images/bgImage.webp";
import {
  Avatar,
  BgImage,
  BtnFollow,
  Ellipse,
  ListItem,
  LogoGoIT,
  Rectangle,
  TextFollowers,
  TextTweets,
} from "./tweetListItem.styled";

export const TweetListItem = ({ user, tweets, followers, avatar }) => {
  return (
    <ListItem>
      <LogoGoIT width="76px" height="22px">
        <use href={logo + "#GoITLogo"}></use>
      </LogoGoIT>
      <BgImage src={bgImage} alt="chats" />
      <Rectangle></Rectangle>
      <Ellipse>
        <Avatar src={avatar} alt={user} />
      </Ellipse>
      <TextTweets>{tweets} Tweets</TextTweets>
      <TextFollowers>{followers} Followers</TextFollowers>
      <BtnFollow>Follow</BtnFollow>
    </ListItem>
  );
};

TweetListItem.propTypes = {
  // id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};
