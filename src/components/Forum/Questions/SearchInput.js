import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <div className="searchInput">
      <form>
        <div className="search-input">
          <input type="search" placeholder="Forumda  axtarın" />
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
