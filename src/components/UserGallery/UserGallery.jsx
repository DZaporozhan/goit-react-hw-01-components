import { UserList, UserItem } from "./UserGallery.styled";
import { UserCard } from "../UserCard/UserCard";

export const UserGallery = ({ users }) => {
  return (
    <UserList>
      {users.map(({ id, user, tweets, followers, avatar }) => (
        <UserItem key={id}>
          <UserCard
            id={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          ></UserCard>
        </UserItem>
      ))}
    </UserList>
  );
};
