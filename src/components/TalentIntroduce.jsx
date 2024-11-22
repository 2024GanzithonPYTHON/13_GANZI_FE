import React from "react";
import "./TalentIntroduce.css";
import { useState, useEffect } from "react";
// 성별, 선호 성별, 키워드.... css 수정 해야함
export default function TalentIntroduce({memberInfo}) {
  // "" 사이에 있는 내용이 들어가야할 변수
  //TalentIntroduce({여기에 가지고올 배열 이름})


  useEffect(() => {
    console.log("멤버: ", memberInfo);
  }, [memberInfo]); 

  if (!memberInfo || !memberInfo.data) {
    return <div>Loading...</div>; // Or display a different fallback UI
  }
  
  return (
    <div
      className="TalentIntroduce"
      style={{
        marginLeft: "590px",
      }}
    >
      <div>
        <p className="flexintro">
          <span>저는</span>
          <div className="highlightbox">{memberInfo.data.myTalent}</div>
          <span>,</span>
        </p>
        <p className="flexintro">
          <span>특히 </span>
          <span className="highlightbox">{memberInfo.data.myTalentDetail}</span>
          <span>에 자신있어요.</span>
        </p>
        <p className="flexintro">
          <span>저는 </span>
          <span className="highlightbox">{memberInfo.data.gender === 'FEMALE' ? '여성' : '남성'}</span>
          <span>티티이고,</span>
        </p>
        <p className="flexintro">
          <span className="highlightbox addmargin">{memberInfo.data.preferGender=== 'FEMALE' ? '여성' : '남성'}</span>
          <span>티티와 재능교환을 희망해요</span>
        </p>
      </div>
    </div>
  );
}
