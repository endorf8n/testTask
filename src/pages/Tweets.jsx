import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersThunk } from "../redux/usersThunk";
import { TweetsList } from "../components/TweetsList/TweetsList";
import {
  BtnLoadMore,
  LinkGoBack,
  MainWrapper,
} from "./pagesStyles/tweets.styled";

const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <MainWrapper>
      <LinkGoBack to="/">Back</LinkGoBack>
      <TweetsList />
      <BtnLoadMore type="button">Load More</BtnLoadMore>
    </MainWrapper>
  );
};

export default Tweets;
