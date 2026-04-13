import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeholder = "Search workshops..." }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          aria-label="Search"
        />
        <button type="submit" className="btn btn-primary search-button" aria-label="Search">
          <span className="search-icon">search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
