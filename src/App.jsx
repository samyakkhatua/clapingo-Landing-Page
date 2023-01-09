import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/" element={<Home />}>
        <Route exact path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>

    
  );
}

export default App;
