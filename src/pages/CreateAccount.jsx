import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as C from "../styles/StyledCreateAccount.jsx";

const CreateAccount = () => {
  const navigate = useNavigate();

  // 버튼 상태 관리
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prev) => !prev); // 상태를 반전시킴
  };

  // 성별 버튼 클릭 상태 관리
  const [imageSrcFemale, setImageSrcFemale] = useState(
    "/images/FemaleBefore.svg"
  ); // 초기 이미지 상태
  const [imageSrcMale, setImageSrcMale] = useState("/images/MaleBefore.svg");

  // 동의,비동의 버튼
  const [imageSrcAgree, setImageSrcAgree] = useState("/images/CheckCircle.svg");
  const [imageSrcNotAgree, setImageSrcNotAgree] = useState(
    "/images/CheckCircle.svg"
  );

  // 동의 여부 상태 관리
  const [isAgreed, setIsAgreed] = useState(false); // 동의 여부를 관리

  // 가입하기 버튼
  const [imageSrcRegister, setImageSrcRegister] = useState(
    "/images/RegisterBefore.svg"
  );

  // 에러 메시지
  const [errorMessage, setErrorMessage] = useState("");

  const handleFemale = () => {
    setImageSrcFemale("/images/FemaleAfter.svg"); // 클릭 시 이미지 변경
    setImageSrcMale("/images/MaleBefore.svg");
  };

  const handleMale = () => {
    setImageSrcMale("/images/MaleAfter.svg"); // 클릭 시 이미지 변경
    setImageSrcFemale("/images/FemaleBefore.svg"); // 다른 버튼은 초기 상태로
  };

  const handleAgree = () => {
    setImageSrcAgree("/images/CheckAfter.svg"); // 클릭 시 이미지 변경
    setImageSrcNotAgree("/images/CheckCircle.svg");
    setIsAgreed(true);
  };

  const handleNotAgree = () => {
    setImageSrcNotAgree("/images/CheckAfter.svg"); // 클릭 시 이미지 변경
    setImageSrcAgree("/images/CheckCircle.svg");
    setIsAgreed(false);
  };

  const handleRegister = () => {
    if (!isAgreed) {
      setErrorMessage("서비스 이용 약관에 동의해야 가입할 수 있습니다."); // 에러 메시지 표시
      return;
    }

    // 동의된 경우
    setImageSrcRegister("/images/RegisterAfter.svg"); // 클릭 시 이미지 변경
    setTimeout(() => {
      navigate("/welcome"); // 0.3초 후 메인 페이지로 이동
    }, 300); // 페이지 이동 지연 시간
  };

  return (
    /* 아이폰 헤더 */
    <C.Container>
      <C.Tt>
        <img id="Tt" src={`${process.env.PUBLIC_URL}/images/Tt.svg`} alt="Tt" />
      </C.Tt>
      <C.Email>
        <div id="email">이메일</div>
      </C.Email>
      <C.EmailInput
        type="text"
        placeholder="이메일을 입력하세요"
      ></C.EmailInput>
      <C.Passwd>
        <div id="passwd">비밀번호</div>
      </C.Passwd>
      <C.PasswdInput
        type="password"
        placeholder="비밀번호를 입력하세요"
      ></C.PasswdInput>
      <C.PasswdCheck>
        <div id="passwdcheck">비밀번호 확인</div>
      </C.PasswdCheck>
      <C.PasswdCheckInput
        type="password"
        placeholder="비밀번호를 입력하세요"
      ></C.PasswdCheckInput>
      <C.Name>
        <div id="name">이름</div>
      </C.Name>
      <C.NameInput type="input" placeholder="이름을 입력하세요"></C.NameInput>
      <C.NickName>
        <div id="nickname">닉네임</div>
      </C.NickName>
      <C.NickNameInput
        type="input"
        placeholder="닉네임을 입력하세요"
      ></C.NickNameInput>
      <C.FemaleButton id="female" onClick={handleFemale}>
        <img src={process.env.PUBLIC_URL + imageSrcFemale} alt="female" />
      </C.FemaleButton>
      <C.MaleButton id="male" onClick={handleMale}>
        <img src={process.env.PUBLIC_URL + imageSrcMale} alt="male" />
      </C.MaleButton>
      <C.Birth>
        <div id="birth">생년월일</div>
      </C.Birth>
      <C.BirthInput type="date" placeholder="년도-월-일"></C.BirthInput>
      <C.PhoneNumber>
        <div id="phone">전화번호</div>
      </C.PhoneNumber>
      <C.PhoneNumberInput
        type="tel"
        placeholder="전화번호를 입력하세요"
      ></C.PhoneNumberInput>
      <C.Agreement>
        <div id="text">
          본 서비스를 통해 재능 교환 성사 시 최초 5,000원의 이용 요금이
          발생합니다. 동의하십니까?
        </div>
      </C.Agreement>
      <C.AgreeButton id="agree" onClick={handleAgree}>
        <img src={process.env.PUBLIC_URL + imageSrcAgree} alt="agree" />
      </C.AgreeButton>
      <C.Agree>
        <div id="text">동의</div>
      </C.Agree>
      <C.NotAgreeButton id="notagree" onClick={handleNotAgree}>
        <img src={process.env.PUBLIC_URL + imageSrcNotAgree} alt="notagree" />
      </C.NotAgreeButton>
      <C.NotAgree>
        <div id="text">비동의</div>
      </C.NotAgree>
      {/* 에러 메시지 */}
      {errorMessage && <C.ErrorMessage>{errorMessage}</C.ErrorMessage>}
      <C.RegisterButton id="register" onClick={handleRegister}>
        <img src={process.env.PUBLIC_URL + imageSrcRegister} alt="register" />
      </C.RegisterButton>
    </C.Container>
  );
};

export default CreateAccount;
