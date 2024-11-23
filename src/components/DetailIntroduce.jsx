import React from "react";
import "./DetailIntroduce.css";
import { useState, useEffect } from "react";
//포폴
export default function DetailIntroduce({memberInfo}) {

  useEffect(() => {
    console.log("멤버: ", memberInfo);
  }, [memberInfo]); 

  if (!memberInfo || !memberInfo.data) {
    return <div>Loading...</div>; // Or display a different fallback UI
  }
  // 괄호 안에 {i}
  return (
    <>
      <div
        className="divdiv"
      
      >
        <p>한줄 소개</p>
        <p>{memberInfo.data.myComment}</p> 
      </div>
      <hr
       
      />
      <div
        className="divdiv"
        
      >
        <p>제가 자신있는 부분은요!</p>
        <p>{memberInfo.data.talentIntro}</p>
     {/* Conditionally render images if they exist */}
     {memberInfo.data.images.length > 0 && (
          <div className="image-gallery">
            {memberInfo.data.images.slice(0, 3).map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`Profile Image ${i + 1}`}
                className="profile-image"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}