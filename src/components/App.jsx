import { Section } from "./main.styled";
import allUsers from "../data/allUsers.json";
import { UserGallery } from "./UserGallery/UserGallery";

export const App = () => {
  return (
    <Section>
      <UserGallery users={allUsers} />
    </Section>
  );
};
