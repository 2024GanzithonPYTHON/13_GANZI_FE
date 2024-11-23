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
  margin-top: -250px;
`;

export const Logo = styled.div`
  #logo {
    margin-top: 330px;
    margin-left: 125px;
  }
`;

export const Comment = styled.div`
  width: 200px;
  height: 35px;
  margin-top: 21px;
  margin-left: 105px;

  #text {
    color: #374f76;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  #text2 {
    color: #374f76;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 6px;
  }
`;

export const Tt = styled.div`
  #Tt {
    margin-left: 175px;
    margin-top: 240px;
  }
`;
