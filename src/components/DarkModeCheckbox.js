import PropTypes from "prop-types";
import cx from "classnames";

const DarkModeCheckbox = ({className, isDark, setIsDark}) => {
  return (
    <div className={cx("flex items-center", className)}>
      <input 
        type="checkbox" 
        id="darkMode" 
        checked={isDark} 
        onChange={() => setIsDark(!isDark)} 
      />
      <label className="pl-1">Dark Mode</label>
    </div>
  );
}

DarkModeCheckbox.propTypes = {
  className: PropTypes.string,
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func
}

DarkModeCheckbox.defaultProps = {
  className: "",
  isDark: false,
  setIsDark: () => {}
}

export default DarkModeCheckbox;