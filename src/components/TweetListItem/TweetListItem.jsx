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
import { useDispatch } from "react-redux";
import { getUsersThunk, updateUserThunk } from "../../redux/usersThunk";

export const TweetListItem = ({
  id,
  user,
  tweets,
  followers,
  avatar,
  isFollowed = false,
}) => {
  const dispatch = useDispatch();

  const handleBtnClick = (id, followers, isFollowed) => {
    if (isFollowed) {
      dispatch(
        updateUserThunk({
          id,
          user: {
            isFollowed: false,
            followers: followers - 1,
          },
        })
      ).then(() => dispatch(getUsersThunk()));
    } else {
      dispatch(
        updateUserThunk({
          id,
          user: {
            isFollowed: true,
            followers: followers + 1,
          },
        })
      ).then(() => dispatch(getUsersThunk()));
    }
  };

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
      <TextFollowers>
        {followers.toLocaleString("en-US")} Followers
      </TextFollowers>
      <BtnFollow
        type="button"
        onClick={() => {
          handleBtnClick(id, followers, isFollowed);
        }}
        style={{ backgroundColor: isFollowed ? "#5CD3A8" : "#EBD8FF" }}
      >
        {isFollowed ? "Following" : "Follow"}
      </BtnFollow>
    </ListItem>
  );
};

TweetListItem.propTypes = {
  isFollowed: PropTypes.bool,
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};
