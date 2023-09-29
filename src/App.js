import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomersTable from "./routes/CustomersTable";
import CryptosTable from "./routes/CryptosTable";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App h-screen">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/customer-table" element={<CustomersTable />} />
          <Route exact path="/crypto-table" element={<CryptosTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;