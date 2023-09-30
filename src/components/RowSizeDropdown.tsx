import { FC } from "react";
import cx from "classnames";

interface RowSizeDropdownProps {
  className?: string;
  rowsSizes?: number[];
  setPageSize?: (size: number) => void;
}

const RowSizeDropdown: FC<RowSizeDropdownProps> = ({
  className = "",
  rowsSizes = null,
  setPageSize = () => undefined,
}) => {
  return (
    <div className={cx("flex py-1", className)}>
      <label htmlFor="rowSizesDropdown">Rows number:</label>
      <select
        name="rowsNumbers"
        id="rowSizesDropdown"
        className="bg-transparent"
        onChange={(e) => setPageSize?.(parseInt(e.target.value))}
      >
        <option value="">Please select row number</option>
        {rowsSizes?.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RowSizeDropdown;
