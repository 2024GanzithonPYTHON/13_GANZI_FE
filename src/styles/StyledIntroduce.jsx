import { styled } from "styled-components";

/* 여기부터 헤더까지 고정 */
export const Container = styled.div`
  width: 393px;
  height: 2327px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
`;

export const Text = styled.div`
  width: 205px;
  height: 44px;
  margin-left: 50px;
  margin-top: 54px;
  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: Display-Small-Line-Height, 44px; /* 137.5% */
    letter-spacing: Display-Medium-Tracking, 0px;
  }
`;

export const Save = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin-left: 260px;
  margin-top: -47px;
  position: absolute;

  #text {
    color: #fff;
    text-align: center;
    font-family: "Noto Sans KR";
    font-size: 13.25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Comment = styled.div`
  #text {
    width: 165px;
    height: 20px;
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 293.333% */
    margin-left: 117px;
    margin-top: 24px;
  }

  #text2 {
    width: 180px;
    height: 20px;
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 293.333% */
    margin-left: 110px;
    margin-top: 7px;
  }

  #text3 {
    width: 90px;
    height: 20px;
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 293.333% */
    margin-left: 152px;
    margin-top: 7px;
  }
`;

export const ProfileImg = styled.div`
  #profile {
    margin-top: 45px;
    margin-left: 136px;
  }
`;

export const NickName = styled.div`
  width: 50px;
  height: 44px;
  margin-left: 174px;

  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 293.333% */
  }
`;

export const Ment = styled.div`
  width: 140px;
  height: 44px;
  margin-left: 48px;
  margin-top: 40px;

  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 220% */
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  #background {
    margin-left: 48px;
  }
`;

export const Back = styled.div`
  cursor: pointer;
  display: flex;
  width: 78px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-left: -280px;
  margin-top: 17px;
  background-color: ${(props) => (props.isActive ? "#7ab2d3" : "#f1f1f1")};
`;

export const Back2 = styled.div`
  cursor: pointer;
  display: flex;
  width: 78px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-left: 38px;
  margin-top: 17px;
  background-color: ${(props) => (props.isActive ? "#7ab2d3" : "#f1f1f1")};
`;

export const Back3 = styled.div`
  cursor: pointer;
  display: flex;
  width: 78px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-left: 38px;
  margin-top: 17px;
  background-color: ${(props) => (props.isActive ? "#7ab2d3" : "#f1f1f1")};
`;

export const Back4 = styled.div`
  cursor: pointer;
  display: flex;
  width: 78px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-left: -253px;
  margin-top: 62px;
  background-color: ${(props) => (props.isActive ? "#7ab2d3" : "#f1f1f1")};
`;

export const Back5 = styled.div`
  cursor: pointer;
  display: flex;
  width: 78px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-left: 38px;
  margin-top: 62px;
  background-color: ${(props) => (props.isActive ? "#7ab2d3" : "#f1f1f1")};
`;

export const Back6 = styled.div`
  cursor: pointer;
  display: flex;
  width: 78px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-left: 38px;
  margin-top: 62px;
  background-color: ${(props) => (props.isActive ? "#7ab2d3" : "#f1f1f1")};
`;

export const Back7 = styled.div`
  cursor: pointer;
  display: flex;
  width: 78px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-left: -253px;
  margin-top: 106px;
  background-color: ${(props) => (props.isActive ? "#7ab2d3" : "#f1f1f1")};
`;

export const Back8 = styled.div`
  cursor: pointer;
  display: flex;
  width: 78px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-left: 38px;
  margin-top: 106px;
  background-color: ${(props) => (props.isActive ? "#7ab2d3" : "#f1f1f1")};
`;

export const Back9 = styled.div`
  cursor: pointer;
  display: flex;
  width: 78px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-left: 38px;
  margin-top: 106px;
  background-color: ${(props) => (props.isActive ? "#7ab2d3" : "#f1f1f1")};
`;

export const Text2 = styled.div`
  width: 260px;
  height: 44px;
  margin-left: 50px;
  margin-top: 26px;
  #major {
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 220% */
  }
`;

export const MajorInput = styled.input`
  width: 286px;
  height: 45.442px;
  flex-shrink: 0;
  border-radius: 4.734px;
  border: 0.947px solid #666;
  padding-left: 10px;
  margin-left: 45px;
`;

export const Ment2 = styled.div`
  width: 140px;
  height: 44px;
  margin-left: 48px;
  margin-top: 40px;
  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 220% */
  }
`;

export const Text3 = styled.div`
  width: 280px;
  height: 44px;
  margin-left: 50px;
  margin-top: 42px;
  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 220% */
  }
`;

export const Input = styled.input`
  width: 286px;
  height: 45.442px;
  flex-shrink: 0;
  border-radius: 4.734px;
  border: 0.947px solid #666;
  padding-left: 10px;
  margin-left: 45px;
`;

export const Text4 = styled.div`
  width: 330px;
  height: 44px;
  margin-left: 31px;
  margin-top: 42px;
  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 220% */
    text-align: center;
  }
`;

export const PhotoInput = styled.input`
  width: 296px;
  height: 152px;
  flex-shrink: 0;
  border-radius: 12px; /* 둥근 테두리 */
  border: 1px solid #d9d9d9; /* 테두리 색상 및 두께 */
  padding-left: 10px; /* 내부 여백 */
  margin-left: 42px; /* 왼쪽 외부 여백 */
  display: block; /* 줄 바꿈을 강제 */
  background-color: #d9d9d9; /* 배경색 추가 */
  font-size: 14px; /* 글씨 크기 */
  color: #333; /* 글씨 색상 */
  outline: none; /* 포커스 시 외곽선 제거 */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* 가벼운 그림자 */
  transition: border-color 0.3s ease; /* 부드러운 상태 전환 */

  &::placeholder {
    width: 160px;
    height: 40px;
    color: #aaaaaa; /* 플레이스홀더 색상 */
    white-space: normal;
    word-wrap: break-word;
    top: -50px;
    position: relative;
    color: #b5b5b5;
    font-family: Pretendard;
    font-size: 13.254px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.934px;
  }
`;

export const Button = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-left: 313px;
  margin-top: -145px;
`;

export const Text5 = styled.div`
  width: 330px;
  height: 44px;
  margin-left: 31px;
  margin-top: 160px;
  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 220% */
    text-align: center;
  }
`;

export const TextInput = styled.input`
  width: 296px;
  height: 152px;
  flex-shrink: 0;
  border-radius: 12px; /* 둥근 테두리 */
  border: 1px solid #d9d9d9; /* 테두리 색상 및 두께 */
  padding-left: 10px; /* 내부 여백 */
  margin-left: 42px; /* 왼쪽 외부 여백 */
  display: block; /* 줄 바꿈을 강제 */
  background-color: #d9d9d9; /* 배경색 추가 */
  font-size: 14px; /* 글씨 크기 */
  color: #333; /* 글씨 색상 */
  outline: none; /* 포커스 시 외곽선 제거 */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* 가벼운 그림자 */
  transition: border-color 0.3s ease; /* 부드러운 상태 전환 */

  &::placeholder {
    width: 240px;
    height: 60px;
    color: #aaaaaa; /* 플레이스홀더 색상 */
    white-space: normal;
    word-wrap: break-word;
    top: -50px;
    position: relative;
    color: #b5b5b5;
    font-family: Pretendard;
    font-size: 13.254px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.934px;
  }
`;

export const Text6 = styled.div`
  width: 330px;
  height: 44px;
  margin-left: 31px;
  margin-top: 42px;
  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 220% */
    text-align: center;
  }
`;

export const PileInput = styled.input`
  width: 296px;
  height: 67px;
  flex-shrink: 0;
  border-radius: 12px; /* 둥근 테두리 */
  border: 1px solid #d9d9d9; /* 테두리 색상 및 두께 */
  padding-left: 10px; /* 내부 여백 */
  margin-left: 42px; /* 왼쪽 외부 여백 */
  display: block; /* 줄 바꿈을 강제 */
  background-color: #d9d9d9; /* 배경색 추가 */
  font-size: 14px; /* 글씨 크기 */
  color: #333; /* 글씨 색상 */
  outline: none; /* 포커스 시 외곽선 제거 */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* 가벼운 그림자 */
  transition: border-color 0.3s ease; /* 부드러운 상태 전환 */

  &::placeholder {
    width: 196px;
    height: 20px;
    color: #aaaaaa; /* 플레이스홀더 색상 */
    white-space: normal;
    word-wrap: break-word;
    position: relative;
    color: #b5b5b5;
    font-family: Pretendard;
    font-size: 13.254px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.934px;
    top: -10px;
  }
`;

export const Text7 = styled.div`
  width: 330px;
  height: 44px;
  margin-left: 31px;
  margin-top: 42px;
  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 220% */
    text-align: center;
  }
`;

export const Text8 = styled.div`
  width: 330px;
  height: 44px;
  margin-left: -26px;
  margin-top: 42px;
  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 220% */
    text-align: center;
  }
`;

export const Back19 = styled.div`
  cursor: pointer;
  display: flex;
  width: 78px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  background-color: ${(props) => (props.isActive ? "#7ab2d3" : "#f1f1f1")};
`;

export const Back20 = styled.div`
  cursor: pointer;
  display: flex;
  width: 78px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-left: 160px;
  margin-top: -28px;
  background-color: ${(props) => (props.isActive ? "#7ab2d3" : "#f1f1f1")};
`;

export const Back21 = styled.div`
  cursor: pointer;
  display: flex;
  width: 78px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-left: 260px;
  margin-top: -28px;
  background-color: ${(props) => (props.isActive ? "#7ab2d3" : "#f1f1f1")};
`;

export const Text9 = styled.div`
  width: 330px;
  height: 44px;
  margin-left: -15px;
  margin-top: 42px;
  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 220% */
    text-align: center;
  }
`;

export const SaveButton = styled.div`
  cursor: pointer;
  margin-left: 57px;
  margin-top: 60px;
`;
