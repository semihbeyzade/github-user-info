import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import "./Repo.scss";

const Repo = () => {
  const { username, reponame } = useParams();
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${username}/${reponame}`
        );
        setRepoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repo data:", error);
        setRepoData(null);
        setLoading(false);
      }
    };

    fetchRepoData();
  }, [reponame, username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!repoData) {
    return <div>Repository not found!</div>;
  }

  return (
    <div className="repo-container">
      <div className="repo-breadcrumb">
        <RiBookMarkLine className="repo-icon" />

        <Link className="repo-username-link" to={`/${username}`}>
          {username}
        </Link>

        <span>/</span>

        <Link className="repo-reponame-link" to={`/${username}/${reponame}`}>
          {reponame}
        </Link>
      </div>

      <p>{repoData.description}</p>

      <div className="repo-stats">
        <li>
          <RiStarLine className="repo-star-icon" />
          <b>{repoData.stargazers_count}</b>
          <span>stars</span>
        </li>
        <li>
          <AiOutlineFork className="repo-fork-icon" />
          <b>{repoData.forks}</b>
          <span>forks</span>
        </li>
      </div>

      <a className="repo-link-button" href={repoData.html_url}>
        <FaGithub className="repo-github-icon" />
        <span>View on GitHub</span>
      </a>
    </div>
  );
};

export default Repo;