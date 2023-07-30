import { WelcomePicture, WelcomeTitle } from "./pagesStyles/home.styled";
import img from "../images/chat-box.webp";

const Home = () => {
  return (
    <>
      <WelcomeTitle>Welcome to the amazing Tweets app!</WelcomeTitle>
      <WelcomePicture src={img} alt="chats" />;
    </>
  );
};

export default Home;
