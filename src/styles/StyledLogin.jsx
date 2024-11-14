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
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 393px;
  height: 30px;
  align-items: center;
  padding: 10px;
  justify-content: center;

  #time {
    margin-left: -10px;
  }
  #group {
    margin-left: 200px;
  }
`;
/* 헤더 끝 */

export const Logo = styled.div`
  #logo {
    margin-top: 168px;
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

export const Check = styled.div`
  #checkcircle {
    margin-top: 20px;
    margin-left: 60px;
  }

  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 13.25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 85px;
    margin-top: -21px;
  }
`;
