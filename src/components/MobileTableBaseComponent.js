import cx from "classnames";
import PropTypes from "prop-types";

const MobileTableBaseComponent = ({className, data, columns, isDark}) => {
  if(!data) {
    return;
  }

  return (
    <div className={cx("max-w-md w-full sm:hidden bg-transparent my-4", className)}>
      {data.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className={cx("w-full flex flex-col border-b p-3 text-gray-900", {
              "text-white": isDark
            })}
          >
            {columns.map((column) => (
              <div 
                key={column.key} 
                className={cx("font-medium my-1 font-bold font-brand text-base", 
                column.columnClassname)}
              >
                {row[column.key]}
              </div>
            ))
            }
          </div>
        )
      )}
    </div>
  )
}

MobileTableBaseComponent.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  columns: PropTypes.array,
  isDark: PropTypes.bool
}

MobileTableBaseComponent.defaultProps = {
  className: "",
  data: null,
  columns: null,
  isDark: false
}
  
export default MobileTableBaseComponent;
