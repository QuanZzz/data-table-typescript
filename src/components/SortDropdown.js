import PropTypes from "prop-types";
import cx from "classnames";

const SortDropdown = ({className, setSortBy, columns}) => {
  return(
    <div className={cx("flex sm:hidden py-1", className)}>
      <label htmlFor="sortByDropdown">
        Sort by:
      </label>
      <select
        name="sortBy"
        id="sortByDropdown"
        className="bg-transparent"
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">Please select an option</option>
        {columns?.map((column) => (
          <option key={column.key} value={column.key}>
            {column.header}
          </option>
        ))}
      </select>
    </div>
  )
}

SortDropdown.propTypes = {
  className: PropTypes.string,
  setSortBy: PropTypes.func,
  columns: PropTypes.array
}

SortDropdown.defaultProps = {
  className: "",
  setSortBy: () => {},
  columns: null
}

export default SortDropdown;
