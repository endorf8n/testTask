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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../../redux/usersThunk";

export const TweetListItem = ({ id, user, tweets, followers, avatar }) => {
  const dispatch = useDispatch();

  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(followers);

  const handleBtnClick = () => {
    if (isFollowing) {
      setFollowersCount((prev) => prev - 1);
      setIsFollowing(false);
    } else {
      setFollowersCount((prev) => prev + 1);
      setIsFollowing(true);
    }

    const updateFollowersCount = isFollowing
      ? followersCount - 1
      : followersCount + 1;
    dispatch(updateUserThunk({ id, followers: updateFollowersCount }));
    console.log(updateFollowersCount);
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
        {followersCount.toLocaleString("en-US")} Followers
      </TextFollowers>
      <BtnFollow
        onClick={handleBtnClick}
        style={{ backgroundColor: isFollowing ? "#5CD3A8" : "#EBD8FF" }}
      >
        {isFollowing ? "Following" : "Follow"}
      </BtnFollow>
    </ListItem>
  );
};

TweetListItem.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};
