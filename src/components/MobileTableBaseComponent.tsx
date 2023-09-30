import { FC } from "react";
import cx from "classnames";

interface Column {
  key: string;
  columnClassname?: string;
}

interface MobileTableBaseComponentProps {
  className?: string;
  data?: any[];
  columns?: Column[];
  isDark?: boolean;
}

const MobileTableBaseComponent: FC<MobileTableBaseComponentProps> = ({
  className = "",
  data = [],
  columns = [],
  isDark = false,
}) => {
  if (!data) {
    return null;
  }

  return (
    <div className={cx("max-w-md w-full sm:hidden bg-transparent my-4", className)}>
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={cx("w-full flex flex-col border-b p-3 text-gray-900", {
            "text-white": isDark,
          })}
        >
          {columns.map((column) => (
            <div
              key={column.key}
              className={cx(
                "font-medium my-1 font-bold font-brand text-base",
                column.columnClassname
              )}
            >
              {row[column.key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MobileTableBaseComponent;
