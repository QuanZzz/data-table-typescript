import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { usePagination } from "../../utils/hooks/usePagination";
import { DOTS } from "../../utils/constants/constants";
import "./pagination.scss";

const Pagination = ({
  className,
  isDark,
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  let lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  if (currentPage === 0 || paginationRange.length < 2) {
    return;
  }
  
  return (
    <ul
      className={cx("pagination-container", className)}
    >
      <li
        className={cx("pagination-item", {
          disabled: currentPage === 1,
          "bg-white": isDark
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>

      {paginationRange.map((pageNumber, index) => {
         
        if (pageNumber === DOTS) {
          return <li key={pageNumber + index} className="pagination-item dots">&#8230;</li>;
        }
		
        return (
          <li
            key={pageNumber}
            className={cx("pagination-item", {
              selected: pageNumber === currentPage,
              "text-white": isDark
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className={cx("pagination-item", {
          disabled: currentPage === lastPage,
          "bg-white hover:bg-white": isDark
        })}
        onClick={onNext}
      >
        <div className={cx("arrow right", {
        })} />
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  isDark: PropTypes.bool,
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
}

Pagination.defaultProps = {
  className: "",
  isDark: false,
  onPageChange: () => {},
  totalCount: null,
  siblingCount: 1,
  currentPage: null,
  pageSize: null
}

export default Pagination;