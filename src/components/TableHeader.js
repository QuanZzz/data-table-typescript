import PropTypes from "prop-types";
import cx from "classnames";
import DarkModeCheckbox from "./DarkModeCheckbox";

const TableHeader = ({className, label, isDark, setIsDark}) => {
  return (
    <div className={cx("px-3 flex w-full items-center justify-between",className)}>
      <div className="text-xxl font-brand font-bold">{label}</div>
      <DarkModeCheckbox isDark={isDark} setIsDark={setIsDark} />
    </div>
  )
}

TableHeader.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func
}

TableHeader.defaultProps = {
  className: "",
  label: "",
  isDark: false,
  setIsDark: () => {}
}

export default TableHeader;
