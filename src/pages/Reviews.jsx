import React from "react";
import { Link } from "react-router-dom";
import '../components/Introduce';
import './Reviews.css';
import Footer from "../layout/Footer";

import { useParams } from "react-router-dom";
import Introduce from "../components/Introduce";
import ReviewsList from "../components/ReivewsList";
//유저 상세페이지- 리뷰
const Reviews=()=>{
    const { ID } = useParams();

    return(
        <>
        {/* Introduce 상단 닉네임, 키워드, 지역 등 */}
        <Introduce/> 
        {/* 연동으로 받은 데이터 Introduce에 보내기 <Intorduce 데이터 이름={데이터 이름}/> */}
        <hr />
        <div className="clickdiv">
            <Link Link to={`/Profilepage/${ID}`} key={ID} style={{ textDecoration: "none"}}>
                <div className="text underline"> 재능 소개 </div>
            </Link>
                <div className="underline"> 후기 </div>
                <div className="starmap">
                <svg xmlns="http://www.w3.org/2000/svg"  fill='#7AB2D3'  viewBox="0 0 24 24" strokeWidth="2" stroke="" className="star">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    <p className="blueColor" style={{fontSize: 40, fontWeight:"bold" , margin:20}}>"별 개수"</p>
                    {/* "별 개수"에 데이터 넣어야 함 */}
                    </div>
        </div>
        <hr />
        {/* 해당하는 리뷰만 출력 */}
        {/* {fillterReview.map((reviewInfo) => (
                            <ReviewsList key={reviewInfo.id}{...reviewInfo}/>
                        ))}   fillterReview에 연동 받은 리뷰 데이터 넣기*/}
        <Link to={`/ReviewWrite/${ID}`} key={ID}>
            <button className="button">
                <img className="HeaderCenter" style={{width:24, height:24}}
                      id="Pencil"
                      src={`${process.env.PUBLIC_URL}/images/Pencil.svg`}
                      alt="Pencil"
                  /></button>
        </Link>
        <Footer/>
        </>
        
    )
}

export default Reviews;