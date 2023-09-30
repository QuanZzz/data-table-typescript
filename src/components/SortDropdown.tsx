import { FC } from "react";
import cx from "classnames";

interface Column {
  key: string;
  header: string;
}

interface SortDropdownProps {
  className?: string;
  setSortBy: (sortBy: string) => void;
  columns: Column[];
}

const SortDropdown: FC<SortDropdownProps> = ({ 
  className = "", 
  setSortBy = () => undefined, 
  columns = []
}) => {
  return (
    <div className={cx("flex sm:hidden py-1", className)}>
      <label htmlFor="sortByDropdown">Sort by:</label>
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
  );
};

export default SortDropdown;
