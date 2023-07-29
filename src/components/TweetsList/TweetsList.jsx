import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { TweetListItem } from "../TweetListItem/TweetListItem";

export const TweetsList = () => {
  const users = useSelector(selectUser);

  return (
    <ul>
      {users.map((user) => {
        return <TweetListItem {...user} key={user.id} />;
      })}
    </ul>
  );
};
