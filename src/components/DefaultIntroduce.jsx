import "./DefaultIntroduce.css";
import { useState } from "react";

// 지역, 닉네임, 키워드 등
export default function DefaultIntroduce({memberInfo}) {
  // 괄호 안에{i}

  if (!memberInfo || !memberInfo.data) {
    return <div>Loading...</div>; // Or display a different fallback UI
  }

  const meetingTypeText = () => {
    switch (memberInfo.data.meetingType) {
      case "FACE":
        return "대면";
      case "UNTACT":
        return "비대면";
      case "ANY":
        return "상관없음";
      default:
        return "미정"; 
    }
  };
  return (
    <div
      className="firstIntro"
      style={{
        marginLeft: "620px",
      }}
    >
      <div className="profilephoto">
      {memberInfo.data.gender === "FEMALE" ? (
          <img
           className="introduceimg"
            src="/images/PersonWoman.svg"
            alt="Female Avatar"
            style={{ zIndex: 1 }}
          />
        ) : (
          <img
           className="introduceimg"
            src="/images/PersonMan.svg"
            alt="Male Avatar"
            style={{ zIndex: 1 }}
          />
        )}
      
      </div>
      <div
        className="inline"
        style={{
          marginTop: "-20px",
        }}
      >
        <p className="name">{memberInfo.data.nickname}</p>

        <p className="place">⚫ {memberInfo.data.region}</p>

        <div className="boxbox">
          <div className="box">{memberInfo.data.myTalent}</div>
          <div className="box">{memberInfo.data.myTalentDetail}</div>
        </div>

        <div>
          <div
            className="box"
            style={{
              marginTop: "-20px",
            }}
          >
           {meetingTypeText()}
          </div>
          <div
            className="box"
            style={{
              marginTop: "-20px",
            }}
          >
           {memberInfo.data.gender == "FEMALE" ? "여성" : "남성"}
          </div>
        </div>
      </div>
    </div>
  );
}
