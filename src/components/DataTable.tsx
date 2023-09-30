import { FC, useState, useEffect, useMemo } from "react";
import cx from "classnames";
import Pagination from "./pagination/Pagination";
import MobileTableBaseComponent from "./MobileTableBaseComponent";
import DataTableBaseComponent from "./DataTableBaseComponent";
import TableHeader from "./TableHeader";
import RowSizeDropdown from "./RowSizeDropdown";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";

interface DataTableProps {
  className?: string;
  header?: string;
  initialData?: any[];
  columns?: any[];
  rows?: number;
  rowsSizes?: any[];
}

const DataTable: FC<DataTableProps> = ({
  className = "",
  header = "",
  initialData = [],
  columns = [],
  rows = 10,
  rowsSizes = null,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(rows);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [alphaSort, setAlphaSort] = useState<boolean>(true); 
  const [searchContent, setSearchContent] = useState<string>("");
  const [displayedContent, setDisplayedContent] = useState<any[]>([]);
  const [isDark, setIsDark] = useState<boolean>(false);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return initialData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, initialData]);

  useEffect(() => {
    if (!sortBy) {
      return;
    }

    const currentPageUsers = [...displayedContent];
    if(alphaSort){
      currentPageUsers.sort((a, b) =>
        a[sortBy].localeCompare(b[sortBy])
      );
    }else {
      currentPageUsers.sort((a, b) =>
        b[sortBy].localeCompare(a[sortBy])
      );
    }
    

    setDisplayedContent(currentPageUsers);
  }, [sortBy, alphaSort]);

  useEffect(() => {
    if (!searchContent.length) {
      setDisplayedContent(currentTableData);
    }

    const lowercaseSearchContent = searchContent.toLowerCase();

    const filteredResults = [...currentTableData].filter((item) => {
      return Object.values(item).some((value) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(lowercaseSearchContent);
        }
        return false;
      });
    });

    setDisplayedContent(filteredResults);
  }, [currentTableData, searchContent]);

  return (
    <div
      className={cx(
        "h-full w-full flex flex-col items-center text-xxl p-4",
        {
          "bg-black text-white": isDark,
        },
        className
      )}
    >
      <TableHeader label={header} isDark={isDark} setIsDark={setIsDark} />
      <div className="pl-3 w-full flex flex-col items-left">
        {!!rowsSizes && (
          <RowSizeDropdown setPageSize={setPageSize} rowsSizes={rowsSizes} />
        )}
        <SortDropdown columns={columns} setSortBy={setSortBy} />
        <SearchBar
          searchContent={searchContent}
          setSearchContent={setSearchContent}
        />
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
        alphaSort={alphaSort}
        setAlphaSort={setAlphaSort}
        isDark={isDark}
      />

      <Pagination
        className="pagination-bar"
        isDark={isDark}
        currentPage={currentPage}
        totalCount={initialData.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default DataTable;
