import DataTable from "../components/DataTable";
import { cryptosInfo, cryptosInfoColumns } from "../utils/constants/cryptosInfo";

export default function CryptosTable() {
  return (
    <div>
      <DataTable
        header="Crypto Prices"
        initialData={cryptosInfo}
        columns={cryptosInfoColumns}
        rows={5}
      />
    </div>
  )
}