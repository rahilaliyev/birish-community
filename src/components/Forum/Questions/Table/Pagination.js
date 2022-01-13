import React from "react";
import ReactPaginate from "react-paginate";
import "./Table.scss";

const Pagination = () => {
  return (
    <div className="pagination">
      <ReactPaginate
        pageCount={5}
        previousLabel={"Əvvəlki"}
        nextLabel={"Sonrakı"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"previous-item"}
        nextClassName={"next-item"}
        disabledClassName={"disable-pagination-button"}
      />
    </div>
  );
};

export default Pagination;
