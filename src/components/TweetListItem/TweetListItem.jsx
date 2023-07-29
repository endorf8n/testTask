import PropTypes from "prop-types";
import logo from "../../images/sprite.svg";
import { ListItem } from "./tweetListItem.styled";

export const TweetListItem = ({ user, tweets, followers, avatar }) => {
  return (
    <ListItem>
      <svg width="76px" height="22px">
        <use href={logo + "#GoITLogo"}></use>
      </svg>
      <img src="" alt="" />
      <span></span>
      <img src={avatar} alt={user} />
      <p>{tweets} Tweets</p>
      <p>{followers} Followers</p>
      <button>Follow</button>
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
