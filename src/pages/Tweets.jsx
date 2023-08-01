import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../redux/usersThunk";
import { TweetsList } from "../components/TweetsList/TweetsList";
import {
  BtnLoadMore,
  LinkGoBack,
  MainWrapper,
  MiniWrapper,
} from "./pagesStyles/tweets.styled";
import { selectFilteredUsers } from "../redux/selectors";
import { scrollOnBtnClick } from "../services/scrollOnBtnClick";
import { Filter } from "../components/Filter/Filter";

const Tweets = () => {
  const dispatch = useDispatch();
  const filteredUsers = useSelector(selectFilteredUsers);
  const [numberOfTweets, setNumberOfTweets] = useState(3);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  const handleBtnLoadMore = () => {
    setNumberOfTweets((prev) => prev + 3);
    scrollOnBtnClick();
  };

  const visibleTweets = filteredUsers.slice(0, numberOfTweets);
  const isBtnLoadMoreShow = visibleTweets.length !== filteredUsers.length;

  return (
    <MainWrapper>
      <MiniWrapper>
        <LinkGoBack to="/">Back</LinkGoBack>
        <Filter />
      </MiniWrapper>
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
