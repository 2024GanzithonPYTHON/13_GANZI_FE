import './DefaultIntroduce.css'
import { useState,useEffect } from 'react';
// 지역, 닉네임, 키워드 등 
export default function DefaultIntroduce(){
    // 괄호 안에{i}
    const [genderImg, setGenderImg] = useState("/man.png");

    // const genderImage = () => {
    //   if (i.gender === "MALE") {
    //     setGenderImg("/man.png");
    //   } else {
    //     setGenderImg("/female.png");
    //   }
    // };
  
    // useEffect(() => {
    //   genderImage();
    // }, [i.gender]);

    return(
        <div className="firstIntro">
            <div className="profilephoto">
                <img style={{zIndex:1}}src={genderImg} alt="man" className="introduceimg"/>
            </div>
            <div className="inline">
                <p className="name">"i.nickname"</p>
                
                <p className="place">⚫  "i.region"</p>

                <div className="boxbox">
                    <div className="box">"i.myTalent"</div>
                    <div className="box">"i.myTalentDetail"</div>
                </div>

                <div>
                    <div className="box">"i.meetingType"</div>
                    <div className="box">"i.gender"</div>
                </div>
            </div>
        </div>
    )
}