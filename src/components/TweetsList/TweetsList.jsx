import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { TweetListItem } from "../TweetListItem/TweetListItem";
import { StyledList } from "./tweetList.styled";

export const TweetsList = () => {
  const users = useSelector(selectUser);

  return (
    <StyledList>
      {users.map((user) => {
        return <TweetListItem {...user} key={user.id} />;
      })}
    </StyledList>
  );
};
