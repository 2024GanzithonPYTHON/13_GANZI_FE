import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as C from "../styles/StyledCreateAccount.jsx";
import axios from "axios";

const CreateAccount = () => {
  const navigate = useNavigate();
  const domain = "https://api.talent-trade.site";

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
    setFormData({ ...formData, gender: "FEMALE" });
  };

  const handleMale = () => {
    setImageSrcMale("/images/MaleAfter.svg"); // 클릭 시 이미지 변경
    setImageSrcFemale("/images/FemaleBefore.svg"); // 다른 버튼은 초기 상태로
    setFormData({ ...formData, gender: "MALE" });
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

     // Form 데이터 상태 관리
     const [formData, setFormData] = useState({
      email: "",
      password: "",
      name: "",
      nickname: "",
      birth: "",
      phone: "",
      gender: "",
    });

  const handleRegister = async () => {
    if (!isAgreed) {
      setErrorMessage("서비스 이용 약관에 동의해야 가입할 수 있습니다."); // 에러 메시지 표시
      return;
    }

    try {
      const response = await axios.post(`${domain}/member/signup`, formData);
      console.log("가입 성공:", response.data);
      // 동의된 경우
      setImageSrcRegister("/images/RegisterAfter.svg"); // 클릭 시 이미지 변경
      setTimeout(() => {
        navigate("/welcome"); // 0.3초 후 메인 페이지로 이동
      }, 300); // 페이지 이동 지연 시간
    } catch (error) {
      console.error("가입 실패:", error.response.data);
      setErrorMessage(error.response?.data?.message || "가입에 실패했습니다.");
    }
  };



    // Form 입력 처리
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      console.log(`Field: ${name}, Value: ${value}`);
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
        name="email"
        placeholder="이메일을 입력하세요"
        value={formData.email} 
        onChange={handleInputChange}
      ></C.EmailInput>
      <C.Passwd>
        <div id="passwd">비밀번호</div>
      </C.Passwd>
      <C.PasswdInput
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          value={formData.password} // Bind the input value to formData.password
          onChange={handleInputChange} // Handle input change
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
      <C.NameInput
        type="input"
        name="name"
        placeholder="이름을 입력하세요"
        value={formData.name} // Bind the input value to formData.name
        onChange={handleInputChange} // Handle input change
      ></C.NameInput>

      <C.NickName>
        <div id="nickname">닉네임</div>
      </C.NickName>
      <C.NickNameInput
          type="input"
          name="nickname"
          placeholder="닉네임을 입력하세요"
          value={formData.nickname} // Bind the input value to formData.nickname
          onChange={handleInputChange} // Handle input change
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
      <C.BirthInput
          type="date"
          name="birth"
          value={formData.birth} // Bind the input value to formData.birth
          onChange={handleInputChange} // Handle input change
        ></C.BirthInput>

      <C.PhoneNumber>
        <div id="phone">전화번호</div>
      </C.PhoneNumber>
      <C.PhoneNumberInput
        type="tel"
        name="phone"
        placeholder="전화번호를 입력하세요"
        value={formData.phone} // Bind the input value to formData.phone
        onChange={handleInputChange} // Handle input change
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