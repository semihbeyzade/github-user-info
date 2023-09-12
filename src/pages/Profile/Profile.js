import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import ProfileData from "../../components/ProfileData/ProfileData";
import RepoCard from "../../components/RepoCard/RepoCard";
import RandomCalendar from "../../components/RandomCalendar/RandomCalendar";
import { RiBookMarkLine } from "react-icons/ri";
import "./Profile.scss";

const Profile = () => {
  // Get the username from the route parameters or use a default value
  const { username = "semihbeyzade" } = useParams();

  // State to hold user data, repositories, and error
  const [userData, setUserData] = useState({});

  // State to manage the current page for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; // Number of repositories to display per page

  useEffect(() => {
    // Fetch user data and repositories when the component mounts
    const fetchUserData = async () => {
      try {
        const [userResponse, reposResponse] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/repos?per_page=1000`),
        ]);
        if (userResponse.status === 404) {
          setUserData({ error: "User not found!" });
          return;
        }

        const user = userResponse.data;
        const repos = reposResponse.data;

        setUserData({
          user,
          repos: repos,
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

  // Render an error message if there's an error
  if (userData.error) {
    return <h1>{userData.error}</h1>;
  }

  // Render a loading message while data is being fetched
  if (!userData.user || !userData.repos) {
    return <h1>Loading...</h1>;
  }

  // Calculate the total number of pages for pagination
  const pageCount = Math.ceil(userData.repos.length / itemsPerPage);

  // Calculate the start and end indices of the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get data for the current page
  const currentPageData = userData.repos.slice(startIndex, endIndex);

  // Handle page change when a new page is selected
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Define the content for the "Repositories" tab
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
            <div className="profile-repos-pagination">
              {currentPageData.map((item) => (
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
            <ReactPaginate
              nextLabel=">"
              breakLabel={'...'}
              onPageChange={handlePageChange}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeLinkClassName="active"
            />
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