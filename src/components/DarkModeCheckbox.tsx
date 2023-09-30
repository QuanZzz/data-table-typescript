import { FC } from "react";
import cx from "classnames";

interface DarkModeCheckboxProps {
  className?: string;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const DarkModeCheckbox: FC<DarkModeCheckboxProps> = ({
  className = "",
  isDark = false,
  setIsDark = () => undefined,
}) => {
  return (
    <div className={cx("flex items-center", className)}>
      <input
        type="checkbox"
        id="darkMode"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      />
      <label className="pl-1" htmlFor="darkMode">Dark Mode</label>
    </div>
  );
};

export default DarkModeCheckbox;
