import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import DashBoard from "./Dashboard";
import User from "./User";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
