import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import UsersList from "./UsersList";

function App() {
  return (
    <Router>
      <nav style={{ padding: 10 }}>
        <Link to="/" style={{ marginRight: 10 }}>REGISTER</Link>
        <Link to="/users">USERS LIST</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
