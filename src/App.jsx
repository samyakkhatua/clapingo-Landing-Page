import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import LoggedIn from "./pages/LoggedIn";
import Login from "./pages/Login";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="user" element={<LoggedIn />} />
      </Routes>
  );
}

export default App;
