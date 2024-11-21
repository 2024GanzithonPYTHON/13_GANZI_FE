import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../styles/StyledSplash.jsx";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 4초 후 로그인 화면으로 이동
    const timer = setTimeout(() => {
      navigate("/Login");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    /* 아이폰 헤더 */
    <S.Container>
      <S.Header>
        <img
          id="time"
          src={`${process.env.PUBLIC_URL}/images/Time.svg`}
          alt="time"
        />
        <img
          id="group"
          src={`${process.env.PUBLIC_URL}/images/HeaderGroup.svg`}
          alt="group"
        />
      </S.Header>
      <S.Logo>
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
          alt="logo"
        />
      </S.Logo>
      <S.Comment>
        <div id="text">당신의 특별한 재능을 나누고,</div>
        <div id="text2">새로움으로 채워보세요!</div>
      </S.Comment>
      <S.Tt>
        <img id="Tt" src={`${process.env.PUBLIC_URL}/images/Tt.svg`} alt="Tt" />
      </S.Tt>
    </S.Container>
  );
};

export default Splash;
