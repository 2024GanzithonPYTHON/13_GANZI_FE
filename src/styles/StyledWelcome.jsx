import { styled } from "styled-components";
import { keyframes } from "styled-components";

// 아래에서 위로 올라오는 애니메이션 정의
const slideUp = keyframes`
  0% {
    transform: translateY(100px); /* 아래에서 시작 */
    opacity: 0;
  }
  100% {
    transform: translateY(0); /* 제자리 */
    opacity: 1;
  }
`;

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

export const Text = styled.div`
  width: 280px;
  height: 44px;
  margin-left: 57px;
  margin-top: 255px;

  #text {
    color: #7ab2d3;
    font-family: Pretendard;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: Display-Small-Line-Height, 44px; /* 122.222% */
    letter-spacing: Display-Medium-Tracking, 0px;
  }
`;

export const Logo = styled.div`
  #logo {
    margin-top: 35px;
    margin-left: 125px;

    /* 애니메이션 적용 */
    animation: ${slideUp} 1s ease-out;
  }
`;

export const Button = styled.div`
  cursor: pointer;
  margin-left: 55px;
  margin-top: 35px;
`;
