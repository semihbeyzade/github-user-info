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
            <div className="user_info_container" >
                <img className="user_img" src={avatarUrl} alt={username} />
                <div>
                    <h1>{name}</h1>
                    <h2>{username}</h2>
                </div>
            </div>

            <ul className="user_follower_info">
                <li>
                    <RiGroupLine className="people_icon"/>
                    <b>{followers}</b>
                    <span>followers</span>
                    <span>·</span>
                </li>
                <li>
                    <b>{following}</b>
                    <span>following</span>
                </li>
            </ul>

            <ul className="user_info">
                {company && (
                    <li>
                        <RiBuilding4Line className="company_icon" />
                        <span>{company}</span>
                    </li>
                )}
                {location && (
                    <li>
                        <RiMapPin2Line className="location_icon" />
                        <span>{location}</span>
                    </li>
                )}
                {email && (
                    <li>
                        <RiMailLine className="email_icon" />
                        <span>{email}</span>
                    </li>
                )}
                {blog && (
                    <li>
                        <RiLinksLine className="blog_icon" />
                        <span>{blog}</span>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ProfileData;