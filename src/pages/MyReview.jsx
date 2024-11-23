import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/Introduce";
import "./Reviews.css";
import MyPageFooter from "../layout/MyPageFooter";

import { useParams, useNavigate } from "react-router-dom";
import Introduce from "../components/Introduce";
import ReviewsList from "../components/ReivewsList";
import AlarmHeader from "../layout/AlarmHeader";
import MyPage from "./MyPage";
import axios from 'axios';
//마이페이지 - 리뷰
const MyReview = () => {

  const [reviewInfos, setReviewInfos] = useState([]);
  const domain = "https://api.talent-trade.site";
  const accessToken = localStorage.getItem("accessToken");
  const [member, setMember] = useState(); //화면에 뿌려주는 멤버 관리

  useEffect(() => {
    const fetchDatas = async () => {
    try {
      const response = await axios.get(`${domain}/profile/mine`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, 
        },

      });

      console.log("fetchData API Response:", response.data);
      setMember(response.data); 
  
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  // ddddd

  fetchDatas();
  }, []);

  const memberId = 2;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/review/get/${memberId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log("리뷰 받아오기:", response.data.data);

        // 데이터가 배열인지 확인 후 설정
        const reviews = response.data.data.reviews;
        if (Array.isArray(reviews)) {
          setReviewInfos(reviews);
        } else {
          setReviewInfos([]); // 기본값
        }
      } catch (error) {
        console.error("API Error:", error);
        setReviewInfos([]); // 오류 시 기본값
      }
    };

    fetchData();
  }, [memberId, accessToken]);
  return (
    <>
      <AlarmHeader />
      {/* Introduce 상단 닉네임, 키워드, 지역 등 */}
      <div className="pageSetting">
      <Introduce memberInfo={member}/>
      {/* 마이페이지 데이터 넘기기 ex)<Introduce myData={myData}>*/}
      <hr
        
      />
      <Link to="/MyComu" style={{ textDecoration: "none" }}>
        <div
         
        >
          <p style={{ color: "black" }}>내가 쓴 게시물</p>
        </div>
      </Link>
      <hr
        
      />
      <div
        
      >
        <Link to="/MyPage">
          <div className="text underline"> 재능 소개 </div>
        </Link>
        <div className="underline"> 후기 </div>
        <div className="starmap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#7AB2D3"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke=""
            className="star"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <p
            className="blueColor"
            style={{ fontSize: 40, fontWeight: "bold", margin: 20 }}
          >
            "별점"
          </p>
          <p style={{ fontSize: 10, fontWeight: 700 }}>총 {reviewInfos?.reviewCnt || 0}건</p>
          {/* 별점, 리뷰 수""로 묶은 부분 변수로 바꾸고 ""를 {}바꿔주면 사용 가능 */}
        </div>
      </div>
      <hr
      />
      {/* 해당하는 리뷰만 출력 */}
      <div>
       {/* 리뷰 목록 출력, reviewInfos.reviews가 배열일 경우 */}
       {Array.isArray(reviewInfos.reviews) && reviewInfos.reviews.length > 0 ? (
          reviewInfos.reviews.map((review, index) => (
            <ReviewsList
              key={index}
              nickname={review.nickname}
              gender={review.gender}
              talent={review.talent}
              createdAt={review.createdAt}
              content={review.content}
            />
          ))
        ) : (
          <p>리뷰가 없습니다.</p> // 리뷰가 없는 경우 메시지 출력
        )}
        </div>
        </div>
      <MyPageFooter />
     {/* 연동 받은 데이터 reviewInfos 자리에 */}
    </>
)};

export default MyReview;
