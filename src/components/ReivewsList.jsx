import './ReviewsList.css'
// 리뷰 각각 출력
export default function ReviewsList({
    id,
    reviewId,
    userName, 
    keyword, 
    time, 
    review,
    img,
    

}){
    return(
        <>
        <div className="reviewa">
            <div className='glgl'>
            <img className="reviewimg" src = {img} alt='사진'/>
            <p className='span fontsize'>{userName} </p><p className='span fontsize'> | </p><p className='span fontsize'> {keyword}</p>
            
                <div className='rightright'>
                    <p>{time}</p>
                </div>
            </div>
            
            <p style={{fontSize:15}}>{review}</p>
        </div>
        <hr/>
        </>
    )
}