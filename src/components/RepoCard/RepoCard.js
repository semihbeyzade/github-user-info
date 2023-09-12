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
        <div className="repocard-container">
            <div className="repocard-topside">
                <header>
                    <RiBookMarkLine className="repocard-repo-icon" />
                    <Link to={`/${username}/${reponame}`}>{reponame}</Link>
                </header>
                <p>{description}</p>
            </div>
            <div className="repocard-botside">
                <ul>
                    <li>
                        <div className={`language ${languageClass}`} />
                        <span>{language}</span>
                    </li>
                    <li>
                        <RiStarLine className="repocard-star-icon" />
                        <span>{stars}</span>
                    </li>
                    <li>
                        <AiOutlineFork className="repocard-fork-icon" />
                        <span>{forks}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RepoCard;