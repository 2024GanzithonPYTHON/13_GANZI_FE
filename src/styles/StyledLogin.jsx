import { styled } from "styled-components";

/* 여기부터 헤더까지 고정 */
export const Container = styled.div`
  width: 393px;
  height: 852px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
  margin-left: 550px;
  margin-top: -180px;
`;

export const Logo = styled.div`
  #logo {
    margin-top: 198px;
    margin-left: 130px;
  }
`;

export const EmailInput = styled.input`
  display: flex;
  width: 271.845px;
  height: 45.442px;
  border-radius: 4.734px;
  border: 0.947px solid #000;
  align-items: center;
  flex-shrink: 0;
  color: #cbcbcb;
  font-family: Pretendard;
  font-size: 13.254px;
  font-style: normal;
  font-weight: 500;
  line-height: 18.934px; /* 142.857% */
  margin-left: 55px;
  margin-top: 25px;
  padding-left: 10px;
`;

export const PasswdInput = styled.input`
  display: flex;
  width: 271.845px;
  height: 45.442px;
  border-radius: 4.734px;
  border: 0.947px solid #000;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #cbcbcb;
  font-family: Pretendard;
  font-size: 13.254px;
  font-style: normal;
  font-weight: 500;
  line-height: 18.934px; /* 142.857% */
  margin-left: 55px;
  margin-top: 36px;
  padding-left: 10px;
`;

export const Circle = styled.div`
  width: 15.19px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  margin-left: 66px; /* 위치 조정 */
  margin-top: 29px;
`;

export const Check = styled.div`
  width: 75px;
  height: 15px;
  margin-left: 95px;
  margin-top: -16px;
  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 13.25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const LoginButton = styled.div`
  cursor: pointer;
  margin-left: 56px;
  margin-top: 30px;
`;

export const Create = styled.div`
  cursor: pointer;
  color: #000;
  font-family: Pretendard;
  font-size: 13.25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 169px;
  margin-top: 20px;
`;
