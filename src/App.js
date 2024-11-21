import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Welcome from "./pages/Welcome";
import Introduce from "./pages/Introduce";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Splash" element={<Splash />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Introduce" element={<Introduce />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
