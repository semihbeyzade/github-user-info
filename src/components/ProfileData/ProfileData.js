import React from "react";
import {
    RiGroupLine,
    RiMapPin2Line,
    RiBuilding4Line,
    RiMailLine,
    RiLinksLine,
} from "react-icons/ri";
import "./ProfileData.scss"

const ProfileData = ({
    username,
    name,
    avatarUrl,
    followers,
    following,
    company,
    location,
    email,
    blog,
}) => {
    return (
        <div>
            <div className="profiledata-container" >
                <img className="profiledata-user-img" src={avatarUrl} alt={username} />
                <div>
                    <h1>{name}</h1>
                    <h2>{username}</h2>
                </div>
            </div>

            <ul className="profiledata-user-follower-info">
                <li>
                    <RiGroupLine className="profiledata-people-icon"/>
                    <b>{followers}</b>
                    <span>followers</span>
                    <span>·</span>
                </li>
                <li>
                    <b>{following}</b>
                    <span>following</span>
                </li>
            </ul>

            <ul className="profiledata-user-info-list">
                {company && (
                    <li>
                        <RiBuilding4Line className="profiledata-company-icon" />
                        <span>{company}</span>
                    </li>
                )}
                {location && (
                    <li>
                        <RiMapPin2Line className="profiledata-location-icon" />
                        <span>{location}</span>
                    </li>
                )}
                {email && (
                    <li>
                        <RiMailLine className="profiledata-email-icon" />
                        <span>{email}</span>
                    </li>
                )}
                {blog && (
                    <li>
                        <RiLinksLine className="profiledata-blog-icon" />
                        <span>{blog}</span>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ProfileData;