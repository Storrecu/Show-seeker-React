import { useState } from 'react';

const SearchShow = ({ onSearchResults }) => {
  let [searchTerm, setSearchTerm] = useState([]);

  const handleSearch = (ev) => {
    ev.preventDefault();
    onSearchResults(searchTerm);
  };

  const handleInputChange = (ev) => {
    setSearchTerm(ev.target.value);
  };

  return (
    <>
      <div className="search">
        <h2>Search area:</h2>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            className="search-form-input"
            type="text"
            placeholder="Search any show"
            name="search_name"
            id="search_name"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button className="search-form-btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="favorites"></div>
    </>
  );
};

export default SearchShow;
