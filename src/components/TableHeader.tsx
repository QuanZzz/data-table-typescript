import { FC } from "react";
import cx from "classnames";
import DarkModeCheckbox from "./DarkModeCheckbox";

interface TableHeaderProps {
  className?: string;
  label?: string;
  isDark?: boolean;
  setIsDark?: (isDark: boolean) => void;
}

const TableHeader: FC<TableHeaderProps> = ({
  className = "",
  label = "",
  isDark = false,
  setIsDark = () => undefined,
}) => {
  return (
    <div className={cx("px-3 flex w-full items-center justify-between", className)}>
      <div className="text-xxl font-brand font-bold">{label}</div>
      <DarkModeCheckbox isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default TableHeader;
