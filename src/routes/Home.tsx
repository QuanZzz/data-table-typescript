import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div className="py-20 px-5 flex flex-col items-start">
      <Link 
        className="font-bold font-brand underline hover:text-blue-600" 
        to="/customer-table"
      >
        Customized Columns Table Example
      </Link>
      <Link 
        className="font-bold font-brand underline pt-5 hover:text-blue-600" 
        to="/crypto-table"
      >
        Set 5 Rows Per Page Table
      </Link>
    </div>
  )
}