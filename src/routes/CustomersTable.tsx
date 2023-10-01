import DataTable from "../components/DataTable";
import { usersInfo, usersInfoColumns } from "../utils/constants/usersInfo";
import { CUSTOMERS_TABLE_ROWS_NUMBERS } from "../utils/constants/constants";

interface UserInfo {
  id: number;
  name: string;
  phone: string;
  email: string;
  created_at: string;
}

export default function CustomersTable() {
  const formattedUsersInfo: UserInfo[] = usersInfo.map((user) => {
    const createdAt = new Date(user.created_at);
    const year = createdAt.getFullYear();
    const month = String(createdAt.getMonth() + 1).padStart(2, "0");
    const day = String(createdAt.getDate()).padStart(2, "0");
    const hours = String(createdAt.getHours()).padStart(2, "0");
    const minutes = String(createdAt.getMinutes()).padStart(2, "0");
    const seconds = String(createdAt.getSeconds()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return { ...user, created_at: formattedDate };
  });

  return(
    <div>
      <DataTable
        header="Customers Information"
        initialData={formattedUsersInfo}
        columns={usersInfoColumns}
        rowsSizes={CUSTOMERS_TABLE_ROWS_NUMBERS}
      />
    </div>
  )
}