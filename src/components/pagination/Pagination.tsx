import { FC } from "react";
import cx from "classnames";
import { usePagination } from "../../utils/hooks/usePagination";
import { DOTS } from "../../utils/constants/constants";
import "./pagination.scss";

interface PaginationProps {
  className?: string;
  isDark?: boolean;
  onPageChange?: (pageNumber: number) => void;
  totalCount?: number | null;
  siblingCount?: number;
  currentPage?: number | null;
  pageSize?: number | null;
}

const Pagination: FC<PaginationProps> = ({
  className = "",
  isDark = false,
  onPageChange = () => undefined,
  totalCount = 0,
  siblingCount = 1,
  currentPage = 1,
  pageSize = 0,
}) => {
  const paginationRange = usePagination({
    currentPage: currentPage || 1,
    totalCount: totalCount || 0,
    siblingCount,
    pageSize: pageSize || 10,
  });

  const lastPage = (paginationRange || [])?.[paginationRange.length - 1] || 1;

  const onNext = () => {
    if (typeof currentPage === 'number' && typeof lastPage === 'number' && currentPage < lastPage && !!onPageChange) {
      onPageChange(currentPage + 1);
    }
  };
  

  const onPrevious = () => {
    if (currentPage !== null && currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  if (currentPage === null || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul className={cx("pagination-container", className)}>
      <li
        className={cx("pagination-item", {
          disabled: currentPage === 1,
          "bg-white": isDark,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={pageNumber + index as string} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={pageNumber}
            className={cx("pagination-item", {
              selected: pageNumber === currentPage,
              "text-white": isDark,
            })}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className={cx("pagination-item", {
          disabled: currentPage === lastPage,
          "bg-white hover:bg-white": isDark,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
