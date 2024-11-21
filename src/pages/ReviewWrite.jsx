import DefaultIntroduce from "../components/DefaultIntroduce"
import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import './ReviewWrite.css'
import ReviewHeader from "../layout/ReviewHeader";

export default function ReviewWrite({datas ,reviewCreate }){
    const { ID } = useParams();

    const textareaRef=useRef();

    const i = datas.filter((data)=>
        data.id==ID
    
    ); 



    const [reviewText, setReviewText] = useState("");

    const onChangeReviewText = (e) =>{
        setReviewText(e.target.value);
    }
    const onClickReviewStoring = () =>{
        if(reviewText===""){
            textareaRef.current.focus();
            return;
        }
        reviewCreate(reviewText, ID, selectedRating);
        setReviewText("");
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
            <DefaultIntroduce i={i[0]} />
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
                <textarea onChange={onChangeReviewText}  ref={textareaRef} className="customtextarea" placeholder={`${i[0].user}님에 대해 남기고 싶은 후기를 작성해주세요.`}></textarea>
            </div>
        </>
    )
}