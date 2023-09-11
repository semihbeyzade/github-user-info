import React from "react";
import { Link } from "react-router-dom";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";
import "./RepoCard.scss"

const RepoCard = ({
    username,
    reponame,
    description,
    language,
    stars,
    forks,
}) => {
    const languageClass = language ? language.toLowerCase() : "other";

    return (
        <div className="container_repocard">
            <div className="topside">
                <header>
                    <RiBookMarkLine className="repo_icon" />
                    <Link to={`/${username}/${reponame}`}>{reponame}</Link>
                </header>
                <p>{description}</p>
            </div>
            <div className="botside">
                <ul>
                    <li>
                        <div className={`language ${languageClass}`} />
                        <span>{language}</span>
                    </li>
                    <li>
                        <RiStarLine className="star_icon" />
                        <span>{stars}</span>
                    </li>
                    <li>
                        <AiOutlineFork className="fork_icon" />
                        <span>{forks}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RepoCard;