import React from "react";
import './DetailIntroduce.css';
//포폴
export default function DetailIntroduce(){
    // 괄호 안에 {i}
    return(
        <>
            <div className="divdiv">
                <p>한줄 소개</p>
                <p>"i.myComment"</p>
            </div>
            <hr />
            <div className="divdiv">
                <p>제가 자신있는 부분은요!</p>
                <p>"i.talentIntro"</p>
            </div>
        </>
    )
}