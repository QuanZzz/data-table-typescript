import PropTypes from "prop-types";
import cx from "classnames";

const RowSizeDropdown = ({className, rowsSizes, setPageSize}) => {
  return(
    <div className={cx("flex py-1", className)}>
      <label htmlFor="rowSizesDropdown">
        Rows number:
      </label>
      <select
        name="rowsNumbers"
        id="rowSizesDropdown"
        className="bg-transparent"
        onChange={(e) => setPageSize(parseInt(e.target.value))}
      >
        <option value="">Please select row number</option>
        {rowsSizes?.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  )
}

RowSizeDropdown.propTypes = {
  className: PropTypes.string,
  rowsSizes: PropTypes.array,
  setPageSize: PropTypes.func
}

RowSizeDropdown.defaultProps = {
  className: "",
  rowsSizes: null,
  setPageSize: () => {}
}

export default RowSizeDropdown;
