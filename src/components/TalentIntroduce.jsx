import React from "react";
import "./TalentIntroduce.css";
// 성별, 선호 성별, 키워드.... css 수정 해야함
export default function TalentIntroduce() {
  // "" 사이에 있는 내용이 들어가야할 변수
  //TalentIntroduce({여기에 가지고올 배열 이름})
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
          <div className="highlightbox">"myTalent"</div>
          <span>,</span>
        </p>
        <p className="flexintro">
          <span>특히 </span>
          <span className="highlightbox">"myTalentDetail" </span>
          <span>에 자신있어요.</span>
        </p>
        <p className="flexintro">
          <span>저는 </span>
          <span className="highlightbox">"gender" </span>
          <span>티티이고,</span>
        </p>
        <p className="flexintro">
          <span className="highlightbox addmargin">"preferGender"</span>
          <span>티티와 재능교환을 희망해요</span>
        </p>
      </div>
    </div>
  );
}
