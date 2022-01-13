import React from "react";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";
import "./Table.scss";
import TableContext from "./TableContext";

const Table = () => {
  return (
    <div className="table">
      <div className="pagination-filter">
        <Pagination />
        <Dropdown />
      </div>
      <TableContext />
      <div className="pagination-bottom">
        <Pagination />
      </div>
    </div>
  );
};

export default Table;
