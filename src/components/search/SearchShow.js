const SearchShow = () => {
  return (
    <>
      <div className="search">
        <h2>Search area:</h2>
        <form className="search-form">
          <input
            className="search-form-input"
            type="text"
            placeholder="Search any show"
          />
          <button className="search-form-btn"> Search</button>
        </form>
      </div>
      <div className="favorites"></div>
    </>
  );
};

export default SearchShow;
