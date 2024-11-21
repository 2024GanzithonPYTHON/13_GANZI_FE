import { styled } from "styled-components";

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
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: #fff;
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




