import React from "react";
import "./Forum.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="search-container container">
        <h1>
          <span>Birish</span> foruma xoş gəldiniz
        </h1>
        <form>
          <div className="search-input">
            <input type="search" placeholder="Forumda  axtarın" />
          </div>
          <button type="submit">axtar</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
