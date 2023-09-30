import { FC } from "react";
import cx from "classnames";

interface SearchBarProps {
  className?: string;
  searchContent: string;
  setSearchContent: (content: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ 
  className = "", 
  searchContent = "", 
  setSearchContent =  () => undefined
}) => {
  return (
    <div className={cx("flex items-center py-1", className)}>
      <label className="pr-1" htmlFor="searchBar">
        Search:
      </label>
      <input
        id="searchBar"
        className="border w-60 pl-1 bg-transparent"
        type="search"
        placeholder="Search for..."
        value={searchContent}
        onChange={(e) => setSearchContent(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
