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
                <p>☆</p>
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