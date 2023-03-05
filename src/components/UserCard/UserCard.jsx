import {
  CardWrapper,
  Line,
  Logo,
  Image,
  ImageWrapper,
  Tweets,
  Followers,
  Button,
  WrapperTop,
  WrapperBottom,
} from "./UserCard.styled";
import logo from "../../images/Logo-min.png";
import useLocalStorage from "../../utils/useLocalStorage";

export const UserCard = ({ id, user, tweets, followers, avatar }) => {
  const [isFollow, setIsFollow] = useLocalStorage("following", {});

  const count = isFollow[id]
    ? (followers + 1).toLocaleString()
    : followers.toLocaleString();

  const toggleButton = (id) => () => {
    setIsFollow((following) => ({ ...following, [id]: !following[id] }));
  };

  return (
    <CardWrapper>
      <WrapperTop>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </WrapperTop>

      <Line />
      <ImageWrapper>
        <Image src={avatar} alt={user} />
      </ImageWrapper>

      <WrapperBottom>
        <Tweets> {tweets} Tweets </Tweets>
        <Followers>{count}Followers</Followers>
        <Button onClick={toggleButton(id)} colorType={isFollow[id]}>
          {isFollow[id] ? "Following" : "Follow"}
        </Button>
      </WrapperBottom>
    </CardWrapper>
  );
};
