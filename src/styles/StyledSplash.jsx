import { styled } from "styled-components";

export const Container = styled.div`
  width: 393px;
  height: 852px;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
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

export const Logo = styled.div`
  #logo {
    margin-top: 300px;
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
