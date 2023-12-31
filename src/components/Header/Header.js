import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "./Header.scss";

const Header = ( ) => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formattedSearchTerm = search.toLowerCase().trim();
        navigate(`/${formattedSearchTerm}`);
    
        setSearch("");
    };
    return (
        <div className="header-container">
            <FaGithub className="header-github-logo" />
            <form className="header-search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Username or Repo ..."
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                />
            </form>
        </div>
    );
};

export default Header;






