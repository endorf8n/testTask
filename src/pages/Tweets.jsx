import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersThunk } from "../redux/usersThunk";
import { TweetsList } from "../components/TweetsList/TweetsList";

const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <div>
      <button>Back</button>
      <TweetsList />
      <button>Load More</button>
    </div>
  );
};

export default Tweets;
