import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useRef } from "react";

import "./App.css";
import Header from "./layout/Header";

// 페이지 컴포넌트
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Welcome from "./pages/Welcome";
import Introduce from "./pages/Introduce";
import Main from "./pages/Main";
import Chats from "./pages/Chats";
import Comu from "./pages/Comu";
import MyPage from "./pages/MyPage";
import NewComu from "./pages/NewComu";
import Search from "./pages/Search";
import Profiles from "./pages/Profiles";
import Reviews from "./pages/Reviews";
import ReviewWrite from "./pages/ReviewWrite";
import MyReview from "./pages/MyReview";
import ChatPage from "./pages/ChatPage";
import ComuPage from "./pages/ComuPage";
import MyComu from "./pages/MyComu";
import Alarm from "./pages/Alarm";

function App() {
  return (
    <BrowserRouter>
    
        <Header />

          <Routes>
            <Route path="/Splash" element={<Splash />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/Welcome" element={<Welcome />} />
            <Route path="/Introduce" element={<Introduce />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Chats" element={<Chats />} />
            <Route path="/MyPage" element={<MyPage />} />
            <Route path="/MyReview" element={<MyReview />} />
            <Route path="/Comu" element={<Comu />} />
            <Route path="/NewComu" element={<NewComu />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Profilepage/:ID" element={<Profiles />} />
            <Route path="/Reviewpage/:ID" element={<Reviews />} />
            <Route path="/ReviewWrite/:ID" element={<ReviewWrite />} />
            <Route path="/ChatPage/:ID" element={<ChatPage />} />
            <Route path="/ComuPage/:ID" element={<ComuPage />} />
            <Route path="/MyComu" element={<MyComu />} />
            <Route path="/Alarm" element={<Alarm />} />
          </Routes>

    </BrowserRouter>
  );
}

export default App;
