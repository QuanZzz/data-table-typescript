import PropTypes from "prop-types";
import cx from "classnames";
import { useEffect, useMemo, useState } from "react";
import Pagination from "../components/pagination/Pagination";
import MobileTableBaseComponent from "../components/MobileTableBaseComponent";
import DataTableBaseComponent from "../components/DataTableBaseComponent";
import TableHeader from "../components/TableHeader";
import RowSizeDropdown from "../components/RowSizeDropdown";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";

const DataTable = ({
  className, 
  header, 
  initialData, 
  columns, 
  rows, 
  rowsSizes,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(rows);
  const [sortBy, setSortBy] = useState(null);
  const [searchContent, setSearchContent] = useState("");
  const [displayedContent, setDisplayedContent] = useState([]);
  const [isDark, setIsDark] = useState(false);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return initialData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize]);

  useEffect(() => {
    if(!sortBy) {
      return;
    }

    let currentPageUsers = [...displayedContent];
    currentPageUsers.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    setDisplayedContent(currentPageUsers);
  }, [currentTableData, sortBy]);

  useEffect(() => {
    if(!searchContent.length) {
      setDisplayedContent(currentTableData);  
    }

    const lowercaseSearchContent = searchContent.toLowerCase();

    const filteredResults = [...currentTableData].filter((item) => {
      return Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(lowercaseSearchContent)
      );
    });

    setDisplayedContent(filteredResults);
  }, [currentTableData, searchContent]);

  return(
    <div className={cx("h-full w-full flex flex-col items-center text-xxl p-4", {
      "bg-black text-white": isDark,
      className
    })}>
      <TableHeader 
        label={header}
        isDark={isDark} 
        setIsDark={setIsDark} 
      />
      <div className="pl-3 w-full flex flex-col items-left">
        {!!rowsSizes && <RowSizeDropdown setPageSize={setPageSize} rowsSizes={rowsSizes}/>}
        <SortDropdown columns={columns} setSortBy={setSortBy} />
        <SearchBar searchContent={searchContent} setSearchContent={setSearchContent} />
      </div>

      <MobileTableBaseComponent 
        data={displayedContent} 
        columns={columns} 
        isDark={isDark}
      />

      <DataTableBaseComponent 
        data={displayedContent}
        columns={columns}
        setSortBy={setSortBy}
        isDark={isDark}
      />
      
      <Pagination 
        className="pagination-bar"
        isDark={isDark}
        currentPage={currentPage}
        totalCount={initialData.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  )
}

DataTable.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  initialData: PropTypes.array,
  columns: PropTypes.array,
  rows: PropTypes.number,
  rowsSizes: PropTypes.array,
}

DataTable.defaultProps = {
  className: "",
  header: "",
  initialData: null,
  columns: null,
  rows: 10,
  rowsSizes: null
}

export default DataTable;
