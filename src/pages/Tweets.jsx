import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../redux/usersThunk";
import { TweetsList } from "../components/TweetsList/TweetsList";
import {
  BtnLoadMore,
  LinkGoBack,
  MainWrapper,
} from "./pagesStyles/tweets.styled";
import { selectUser } from "../redux/selectors";
import { scrollOnBtnClick } from "../services/scrollOnBtnClick";

const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUser);
  const [numberOfTweets, setNumberOfTweets] = useState(3);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  const handleBtnLoadMore = () => {
    setNumberOfTweets((prev) => prev + 3);
    scrollOnBtnClick();
  };

  const visibleTweets = users.slice(0, numberOfTweets);
  const isBtnLoadMoreShow = visibleTweets.length !== users.length;

  return (
    <MainWrapper>
      <LinkGoBack to="/">Back</LinkGoBack>
      <TweetsList users={visibleTweets} />
      {isBtnLoadMoreShow && (
        <BtnLoadMore type="button" onClick={handleBtnLoadMore}>
          Load More
        </BtnLoadMore>
      )}
    </MainWrapper>
  );
};

export default Tweets;
