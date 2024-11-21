import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as W from "../styles/StyledWelcome.jsx";

const Welcome = () => {
  const navigate = useNavigate();

  // 버튼 상태 관리
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prev) => !prev); // 상태를 반전시킴
  };

  // 내 재능 소개하기 버튼
  const [imageSrc, setImageSrc] = useState("/images/IntroduceBefore.svg");

  const handleIntroduce = () => {
    setImageSrc("/images/IntroduceAfter.svg"); // 클릭 시 이미지 변경
    setTimeout(() => {
      navigate("/introduce"); // 0.3초 후 메인 페이지로 이동
    }, 300); // 페이지 이동 지연 시간
  };

  return (
    /* 아이폰 헤더 */
    <W.Container>
      <W.Text>
        <div id="text">가입을 환영해요!</div>
      </W.Text>
      <W.Logo>
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
          alt="logo"
        />
      </W.Logo>
      <W.Button id="button" onClick={handleIntroduce}>
        <img src={process.env.PUBLIC_URL + imageSrc} alt="button" />
      </W.Button>
    </W.Container>
  );
};

export default Welcome;
