import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomeFooter from "./layout/HomeFooter";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [Datas, setDatas] = useState(PersonalDatas);
  const [myData, setMyData] = useState(PersonalDatas[1]);
  const [commentInfo, setCommentInfo] = useState(mockCommentData);
  const [chatInfo, setChatInfo] = useState(mockChatData);
  const [reviewInfo, setReviewInfo] = useState(mockReviewData);
  const idRef = useRef(4);

  const reviewCreate = (reviewText, ID, selectedRating) => {
    const newReviewInfo = {
      id: idRef.current++,
      reviewId: ID,
      userName: Datas[1].user,
      keyword: Datas[1].gKeyword,
      time: new Date().getTime(),
      review: reviewText,
      starts: selectedRating,
    };
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Splash" element={<Splash />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Introduce" element={<Introduce />} />
        <Route path="/Main" element={<Main datas={Datas} />} />
        <Route path="/Chats" element={<Chats chatInfo={chatInfo} />} />
        <Route path="/MyPage" element={<MyPage myData={myData} />} />
        <Route
          path="/MyReview"
          element={<MyReview myData={myData} reviewInfo={reviewInfo} />}
        />
        <Route
          path="/Comu"
          element={<Comu datas={Datas} comuInfo={comuInfo} />}
        />
        <Route
          path="/NewComu"
          element={<NewComu datas={Datas} myData={myData} />}
        />
        <Route path="/Search" element={<Search datas={Datas} />} />
        <Route path="/Profilepage/:ID" element={<Profiles datas={Datas} />} />
        <Route
          path="/Reviewpage/:ID"
          element={<Reviews datas={Datas} reviewInfo={reviewInfo} />}
        />
        <Route
          path="/ReviewWrite/:ID"
          element={<ReviewWrite datas={Datas} reviewCreate={reviewCreate} />}
        />
        <Route
          path="/ChatPage/:ID"
          element={
            <ChatPage datas={Datas} myData={myData} chatInfo={chatInfo} />
          }
        />
        <Route
          path="/ComuPage/:ID"
          element={<ComuPage comuInfo={comuInfo} commentInfo={commentInfo} />}
        />
        <Route
          path="/MyComu"
          element={<MyComu myData={myData} comuInfo={comuInfo} />}
        />
        <Route path="/Alarm" element={<Alarm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
