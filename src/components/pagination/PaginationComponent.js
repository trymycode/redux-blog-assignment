import React from "react";

const PaginationComponent = ({ blogsPerPage, totalBlogs , paginate }) => {
  let pageNumbers = [];
  // console.log("blogsPerPage",blogsPerPage,"totalBlogs",totalBlogs);
  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }
  // console.log("page no", pageNumbers)
  return (
    <nav className="d-flex justify-content-center">
      
      <ul className="pagination" style={{}}>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a href="" className="page-link" onClick={(e)=>{
              e.preventDefault();
              paginate(number);
              }}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationComponent;
