import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "./pages/Splash";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Splash" element={<Splash />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
