import { HomeImg, WelcomeTitle } from "./pagesStyles/home.styled";
import img from "../images/chat-box.webp";

const Home = () => {
  return (
    <>
      <WelcomeTitle>Welcome to the amazing Tweets app!</WelcomeTitle>
      <HomeImg src={img} alt="chats" />;
    </>
  );
};

export default Home;
