import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as L from "../styles/StyledLogin.jsx";

const Login = () => {
  const navigate = useNavigate();

  // 버튼 상태 관리
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prev) => !prev); // 상태를 반전시킴
  };

  // 로그인 버튼 클릭 상태 관리
  const [imageSrc, setImageSrc] = useState("/images/LoginBefore.svg"); // 초기 이미지 상태
  const [imageSrcCircle, setImageSrcCircle] = useState(
    "/images/CheckCircle.svg"
  );

  const handleLoginClick = () => {
    setImageSrc("/images/LoginAfter.svg"); // 클릭 시 이미지 변경
    setTimeout(() => {
      navigate("/main"); // 0.3초 후 메인 페이지로 이동
    }, 300); // 페이지 이동 지연 시간
  };

  const handleCheck = () => {
    setImageSrcCircle("/images/CheckAfter.svg"); // 클릭 시 이미지 변경
  };

  const goCreateAccount = () => {
    navigate(`/createaccount`);
  };

  return (
    /* 아이폰 헤더 */
    <L.Container>
      <L.Logo>
        <img
          id="logo"
          src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
          alt="logo"
        />
      </L.Logo>
      <L.EmailInput
        type="text"
        placeholder="이메일을 입력하세요"
      ></L.EmailInput>

      <L.PasswdInput
        type="password"
        placeholder="비밀번호를 입력하세요"
      ></L.PasswdInput>
      <L.Circle id="circle" onClick={handleCheck}>
        <img src={process.env.PUBLIC_URL + imageSrcCircle} alt="circle" />
      </L.Circle>
      <L.Check>
        <div id="text">로그인 유지</div>
      </L.Check>
      <L.LoginButton id="login" onClick={handleLoginClick}>
        <img src={process.env.PUBLIC_URL + imageSrc} alt="login" />
      </L.LoginButton>
      <L.Create onClick={goCreateAccount}>
        <div id="create">회원가입</div>
      </L.Create>
    </L.Container>
  );
};

export default Login;
