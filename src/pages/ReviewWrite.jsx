import DefaultIntroduce from "../components/DefaultIntroduce"
import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import './ReviewWrite.css'
import ReviewHeader from "../layout/ReviewHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ReviewWrite(){
    let navigate = useNavigate()
    const { ID } = useParams();

    const textareaRef=useRef();
    const domain = "https://api.talent-trade.site"; // API 도메인
    const accessToken = localStorage.getItem("accessToken");

    

    const [reviewText, setReviewText] = useState("");

    const onChangeReviewText = (e) =>{
        setReviewText(e.target.value);
    }
    
    const onClickReviewStoring = async  () =>{
        if(reviewText===""){
            textareaRef.current.focus();
            return;
        }
        try {
            const response = await axios.post(
                `${domain}/review/write/${ID}`,
                {
                    content: reviewText,
                    rating: selectedRating,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            console.log("리뷰작성 성공:", response.data);
            alert("후기가 작성되었습니다.");
            navigate(-1); // 이전 페이지로 이동
        } catch (error) {
            console.error("Failed to submit review:", error);
            alert("성사된 회원이 아닙니다.");
        }


        console.log(reviewText)
        console.log(selectedRating)
    }
    
 
    //   이건 별점 매기는거
    const [selectedRating, setSelectedRating] = useState(null);
      
    const handleStarClick = (rating) => {
        setSelectedRating(rating);
        console.log('Selected Rating:', rating);
    };
    
    return(
        <>
        <ReviewHeader onClickReviewStoring={onClickReviewStoring}/>
        {/* DefaultIntroduce 상단 닉네임, 지역, 키워드... 등등 */}
        <div className="pageSetting">
            <DefaultIntroduce/>
            {/* <DefaultIntroduce i={i[0]}/> 프로필 조회 연동한 정보 넣기 */}
            <hr />
            <div className="stars"> 
                {/* 별 아이콘 */}
                <div className='starmap'>
                    {[1, 2, 3, 4, 5].map((rating) => (
                    <svg xmlns="http://www.w3.org/2000/svg"  fill={(selectedRating && rating <= selectedRating) ? '#7AB2D3' : '#D9D9D9'} viewBox="0 0 24 24" strokeWidth="2" stroke="" className="star"
                        onClick={() => handleStarClick(rating)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    ))}
                </div>
            </div>
            <hr />
            <div className="textarea">
                <textarea onChange={onChangeReviewText}  ref={textareaRef} className="customtextarea" placeholder={`"닉네임"님에 대해 남기고 싶은 후기를 작성해주세요.`}></textarea>
                {/* ${i[0].user}를 "닉네임" 자리에 넣으면 됩니다 프로필 조회로 받아들인 정보 연동해서 닉네임*/}
            </div>
            </div>
        </>
    )
}