import PropTypes from "prop-types";
import { TweetListItem } from "../TweetListItem/TweetListItem";
import { StyledList } from "./tweetList.styled";

export const TweetsList = ({ users }) => {
  return (
    <StyledList>
      {users.map((user) => {
        return <TweetListItem {...user} key={user.id} />;
      })}
    </StyledList>
  );
};

TweetsList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
