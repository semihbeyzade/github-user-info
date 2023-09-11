import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import "./Header.scss";

function Header({ onSearch }) {
    // State for the search input
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    
    // Function to handle the form submission
    const handleSubmit = (event) => {
        event.preventDefault();
         // Format the search term, convert to lowercase, and trim
        const formattedSearchTerm = searchTerm.toLowerCase().trim();
        // Navigate to the search results page
        navigate(`/${formattedSearchTerm}`);
        // Trigger the search function provided as a prop
        onSearch(formattedSearchTerm);
         // Clear the search input after submission
         setSearchTerm("");
    };

    return (
        <div className="container">
            <FaGithub className="github_logo" />
            <form className="search_form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Username or Repo ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.currentTarget.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}


// PropTypes for type checking and documentation
Header.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default Header;







