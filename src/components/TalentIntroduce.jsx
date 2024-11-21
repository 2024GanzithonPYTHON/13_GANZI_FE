import React from "react"
import './TalentIntroduce.css'
// 성별, 선호 성별, 키워드.... css 수정 해야함
export default function TalentIntroduce({i}){
    return(
        <div className="TalentIntroduce">
            <div>
                <p className="flexintro">
                    <span>저는</span> 
                    <div className="highlightbox">{i.gKeyword}</div>
                    <span>,</span> 
                </p>
                <p className="flexintro">
                    <span>특히 </span>
                    <span className="highlightbox">{i.add} </span>
                    <span>에 자신있어요.</span>
                </p>
                <p className="flexintro">
                    <span>저는 </span>
                    <span className="highlightbox">{i.gender} </span>
                    <span>티티이고,</span>
                </p>
                <p className="flexintro">
                    <span className="highlightbox addmargin">{i.preferGender} </span>
                    <span>티티와 재능교환을 희망해요</span>
                </p>
            </div>
        </div>
    )
}