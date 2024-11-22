import React from "react";
import "./DetailIntroduce.css";
//포폴
export default function DetailIntroduce() {
  // 괄호 안에 {i}
  return (
    <>
      <div
        className="divdiv"
        style={{
          marginLeft: "590px",
        }}
      >
        <p>한줄 소개</p>
        <p>"i.myComment"</p>
      </div>
      <hr
        style={{
          width: "337px",
          height: "1px",
          marginLeft: "580px",
        }}
      />
      <div
        className="divdiv"
        style={{
          marginLeft: "590px",
        }}
      >
        <p>제가 자신있는 부분은요!</p>
        <p>"i.talentIntro"</p>
      </div>
    </>
  );
}
