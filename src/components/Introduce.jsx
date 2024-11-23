import React from "react";
import "./Introduce.css";
import DefaultIntroduce from "./DefaultIntroduce";
import { useState, useEffect } from "react";
// 교환 횟수 만족도
export default function Introduce({memberInfo}) {
  // 괄호 안에 {i}

  useEffect(() => {
    console.log("멤버: ", memberInfo);
  }, [memberInfo]); 

  if (!memberInfo || !memberInfo.data) {
    return <div>Loading...</div>; // Or display a different fallback UI
  }

  return (
    <>
      <DefaultIntroduce  memberInfo={memberInfo} />
      {/* 연동하고 이렇게 바꾸기<DefaultIntroduce i={i}/> */}
      <hr
        
      />
      <div
        className="ab"
       
      >
        <div
          className="ppsize"
        
        >
          <div>
            <p className="pp">티티에서 재능 교환한 횟수</p>
            <p className="pp rightright">{memberInfo.data.tradeCnt}회</p>
          </div>
          <div
          
          >
            <p className="pp">재능 교환 만족도</p>
            <p className="pp rightright">★ {memberInfo.data.scoreAvg}</p>
          </div>
        </div>
      </div>
    </>
  );
}
