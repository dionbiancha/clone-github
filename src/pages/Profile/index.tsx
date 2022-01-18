import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";
import { APIUser, APIRepo } from "../../@types";

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = "dionbiancha" } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: "User not found" });
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      setData({
        user,
        repos,
      });
    });
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }
  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>;
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositórios</span>
      <span className="number">{data.user.public_repos}</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>
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
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
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
