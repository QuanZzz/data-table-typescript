import PropTypes from "prop-types";
import cx from "classnames";

const SearchBar = ({className, searchContent, setSearchContent}) => {
  return (
    <div className={cx("flex items-center py-1", className)}>
      <label className="pr-1" htmlFor="searchBar">Search: </label>
      <input 
        className="border w-60 pl-1 bg-transparent" 
        type="search" 
        placeholder="Search for..." 
        value={searchContent} 
        onChange={(e) => setSearchContent(e.target.value)} />
    </div>
  );
}

SearchBar.propTypes = {
  className: PropTypes.string,
  searchContent: PropTypes.string,
  setSearchContent: PropTypes.func
}

SearchBar.defaultProps = {
  className: "",
  searchContent: "",
  setSearchContent: () => {}
}

export default SearchBar;
