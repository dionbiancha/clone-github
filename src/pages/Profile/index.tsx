import React from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"dionbiancha"}
            name={"Dionei Bianchati"}
            avatarUrl={"https://avatars.githubusercontent.com/u/47863625?v=4"}
            followers={965}
            following={34}
            company={"Freelancer"}
            location={"Missal, Brazil"}
            email={"contato@dionei.com"}
            blog={"dionei.com"}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random Repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"dionbiancha"}
                  reponame={"youtube-content"}
                  description={"Contains all of my YouTube lessons code"}
                  language={n % 3 === 0 ? "Javascript" : "TypeScript"}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
