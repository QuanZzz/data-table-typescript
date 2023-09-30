import { FC } from "react";
import cx from "classnames";

interface Column {
  key: string;
  header: string;
  columnClassname?: string;
}

interface DataTableBaseComponentProps {
  className?: string;
  data?: any[];
  columns?: Column[];
  setSortBy?: (key: string) => void;
  alphaSort?: boolean,
  setAlphaSort?: (key: boolean) => void
  isDark?: boolean;
}

const DataTableBaseComponent: FC<DataTableBaseComponentProps> = ({
  className = "",
  data = [],
  columns = [],
  setSortBy = () => undefined,
  alphaSort = true,
  setAlphaSort = () => undefined,
  isDark = false,
}) => {
  if (!data) {
    return null;
  }

  return (
    <table className={cx("w-full hidden sm:table w-full my-4", className)}>
      <thead className="text-left">
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className={cx("p-3 font-bold text-base", column.columnClassname)}
            >
              <span className="inline-flex items-center flex-nowrap">
                <button 
                  onClick={() => {
                    setSortBy(column.key); 
                    setAlphaSort(!alphaSort)
                  }}>
                  <span className="break-all line-clamp-1">{column.header}</span>
                </button>
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={cx("border-b bg-transparent text-left text-gray-900", {
              "text-white": isDark,
            })}
          >
            {columns.map((column) => (
              <td
                key={column.key}
                className={cx("sm:w-3/12 pr-8 pl-3 py-3", column.columnClassname)}
              >
                <div className="font-medium my-1 font-brand text-base">
                  {row[column.key]}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTableBaseComponent;
