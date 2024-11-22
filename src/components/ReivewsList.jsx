import './ReviewsList.css'
import { useState,useEffect } from 'react';
// 리뷰 각각 출력
export default function ReviewsList({
    //   memberId,
    //   nickname,
    //   gender,
    //   talent,
    //   createdAt,
    //   content,
    
}){

    // const [genderImg, setGenderImg] = useState("/man.png");

    // const genderImage = () => {
    //   if (gender === "MALE") {
    //     setGenderImg("/man.png");
    //   } else {
    //     setGenderImg("/female.png");
    //   }
    // };
  
    // useEffect(() => {
    //   genderImage();
    // }, [gender]);

    return(
        <>
        <div className="reviewa">
            <div className='glgl'>
            <img className="reviewimg" src = "genderImg" alt='사진'/>
            <p className='span fontsize'>"nickname" </p><p className='span fontsize'> | </p><p className='span fontsize'> "talent"</p>
            
                <div className='rightright'>
                    <p>"createdAt"</p>
                </div>
            </div>
            
            <p style={{fontSize:15}}>"content"</p>
        </div>
        <hr/>
        </>
    )
}