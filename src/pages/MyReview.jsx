import React from "react";
import { Link } from "react-router-dom";
import '../components/Introduce';
import './Reviews.css';


import Introduce from "../components/Introduce";
import ReviewsList from "../components/ReivewsList";
//마이페이지 - 리뷰
const MyReview=({myData, reviewInfo})=>{

    

    const fillterReview = reviewInfo.filter((review)=>
        review.reviewId==myData.id
    ); 

    
    
    
    return(
        <>
        {/* Introduce 상단 닉네임, 키워드, 지역 등 */}
            <Introduce i={myData}/>
            <hr />
            <Link to='/MyComu'>
            <div className="clickdiv">
                <p style={{color:"black"}}>내가 쓴 게시물</p>
            </div>
            </Link>
            <hr />
            <div className="clickdiv">
                <Link to="/MyPage">
                    <div className="text underline"> 재능 소개 </div>
                </Link>
                <div className="underline"> 후기 </div>
                <div className="starmap">
                <svg xmlns="http://www.w3.org/2000/svg"  fill='#7AB2D3'  viewBox="0 0 24 24" strokeWidth="2" stroke="" className="star">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    <p style={{fontSize: 40, fontWeight:"bold" , margin:20}}>{myData.stars}</p>
                    </div>
            </div>
            <hr />
            {/* 해당하는 리뷰만 출력 */}
            {fillterReview.map((reviewInfo) => (
                <ReviewsList key={reviewInfo.id}{...reviewInfo}/>
            ))}
        </>
        
    )
}

export default MyReview;