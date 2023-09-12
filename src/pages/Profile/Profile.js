import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileData from "../../components/ProfileData/ProfileData";
import RepoCard from "../../components/RepoCard/RepoCard";
import RandomCalendar from "../../components/RandomCalendar/RandomCalendar";
import { RiBookMarkLine } from "react-icons/ri";
import "./Profile.scss";

const Profile = () => {
  // Use the username from the route parameters
  const { username = "semihbeyzade" } = useParams();

  const [userData, setUserData] = useState({
    user: null,
    repos: null,
    error: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const [userResponse, reposResponse] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/repos`),
        ]);
        if (userResponse.status === 404) {
          setUserData({ error: "User not found!" });
          return;
        }

        const user = userResponse.data;
        const repos = reposResponse.data;

        // Shuffle the repositories and take the first 6
        const shuffledRepos = repos.sort(() => 0.5 - Math.random());
        const slicedRepos = shuffledRepos.slice(0, 6);

        setUserData({
          user,
          repos: slicedRepos,
          error: null,
        });
      } catch (error) {
        setUserData({
          user: null,
          repos: null,
          error: "An error occurred while fetching data.",
        });
      }
    };

    fetchUserData();
  }, [username]);

  // Handle the error state
  if (userData.error) {
    return <h1>{userData.error}</h1>;
  }

  // Show a loading message until user data and repositories are loaded
  if (!userData.user || !userData.repos) {
    return <h1>Loading...</h1>;
  }

  // Tab Content
  const ProfileTabContent = () => (
    <div className="profile-content">
      <RiBookMarkLine className="profile-repo-icon" />
      <span className="profile-label">Repositories</span>
      <span className="profile-number">{userData.user.public_repos}</span>
    </div>
  );

  return (
    <div className="profile-container">
      <div className="profile-desktop profile-tab">
        <div className="profile-wrapper">
          <span className="profile-offset" />
          <ProfileTabContent />
        </div>

        <span className="profile-line" />
      </div>
      <div className="profile-main">
        <div className="profile-left-side">
          <ProfileData
            username={userData.user.login}
            name={userData.user.name}
            avatarUrl={userData.user.avatar_url}
            followers={userData.user.followers}
            following={userData.user.following}
            company={userData.user.company}
            location={userData.user.location}
            email={userData.user.email}
            blog={userData.user.blog}
          />
        </div>
        <div className="profile-right-side">
          <div className="profile-mobile profile-tab">
            <ProfileTabContent />
            <span className="profile-line"></span>
          </div>
          <div className="profile-repos">
            <h2>Random Repositories</h2>

            <div>
              {userData.repos.map((item) => (
                <RepoCard
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language}
                  stars={item.stargazers_count}
                  forks={item.forks}
                />
              ))}
            </div>
          </div>
          <span className="profile-calendar-heading">
          </span>
          <RandomCalendar />
        </div>
      </div>
    </div>
  );
};

export default Profile;