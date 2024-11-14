import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as L from "../styles/StyledLogin.jsx";

const Login = () => {
  const navigate = useNavigate();

  return (
    /* 아이폰 헤더 */
    <L.Container>
      <L.Header>
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
      </L.Header>
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
      <L.Check>
        <img
          id="checkcircle"
          src={`${process.env.PUBLIC_URL}/images/CheckCircle.svg`}
          alt="checkcircle"
        />
        <div id="text">로그인 유지</div>
      </L.Check>
    </L.Container>
  );
};

export default Login;
