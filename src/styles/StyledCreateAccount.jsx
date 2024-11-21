import { styled } from "styled-components";

/* 여기부터 헤더까지 고정 */
export const Container = styled.div`
  width: 393px;
  height: 1200px;
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

export const Tt = styled.div`
  #Tt {
    margin-left: 170px;
    margin-top: 80px;
  }
`;

export const Email = styled.div`
  width: 150px;
  height: 19px;
  margin-left: 72px;
  margin-top: 30px;

  #email {
    color: #000;
    font-family: Pretendard;
    font-size: 13.254px;
    font-style: normal;
    font-weight: 500;
    line-height: 18.934px; /* 142.857% */
  }
`;

export const EmailInput = styled.input`
  width: 254px;
  height: 45.442px;
  flex-shrink: 0;
  border-radius: 4.734px;
  border: 0.947px solid grayscale-grayscale_66, #666;
  margin-left: 61px;
  margin-top: 13px;
  padding-left: 10px;
`;

export const Passwd = styled.div`
  width: 150px;
  height: 19px;
  margin-left: 72px;
  margin-top: 15px;

  #passwd {
    color: #000;
    font-family: Pretendard;
    font-size: 13.254px;
    font-style: normal;
    font-weight: 500;
    line-height: 18.934px; /* 142.857% */
  }
`;

export const PasswdInput = styled.input`
  width: 254px;
  height: 45.442px;
  flex-shrink: 0;
  border-radius: 4.734px;
  border: 0.947px solid grayscale-grayscale_66, #666;
  margin-left: 61px;
  margin-top: 13px;
  padding-left: 10px;
`;

export const PasswdCheck = styled.div`
  width: 150px;
  height: 19px;
  margin-left: 72px;
  margin-top: 15px;

  #passwdcheck {
    color: #000;
    font-family: Pretendard;
    font-size: 13.254px;
    font-style: normal;
    font-weight: 500;
    line-height: 18.934px; /* 142.857% */
  }
`;

export const PasswdCheckInput = styled.input`
  width: 254px;
  height: 45.442px;
  flex-shrink: 0;
  border-radius: 4.734px;
  border: 0.947px solid grayscale-grayscale_66, #666;
  margin-left: 61px;
  margin-top: 13px;
  padding-left: 10px;
`;

export const Name = styled.div`
  width: 150px;
  height: 19px;
  margin-left: 72px;
  margin-top: 15px;

  #name {
    color: #000;
    font-family: Pretendard;
    font-size: 13.254px;
    font-style: normal;
    font-weight: 500;
    line-height: 18.934px; /* 142.857% */
  }
`;

export const NameInput = styled.input`
  width: 254px;
  height: 45.442px;
  flex-shrink: 0;
  border-radius: 4.734px;
  border: 0.947px solid grayscale-grayscale_66, #666;
  margin-left: 61px;
  margin-top: 13px;
  padding-left: 10px;
`;

export const NickName = styled.div`
  width: 150px;
  height: 19px;
  margin-left: 72px;
  margin-top: 15px;

  #nickname {
    color: #000;
    font-family: Pretendard;
    font-size: 13.254px;
    font-style: normal;
    font-weight: 500;
    line-height: 18.934px; /* 142.857% */
  }
`;

export const NickNameInput = styled.input`
  width: 254px;
  height: 45.442px;
  flex-shrink: 0;
  border-radius: 4.734px;
  border: 0.947px solid grayscale-grayscale_66, #666;
  margin-left: 61px;
  margin-top: 13px;
  padding-left: 10px;
`;

export const FemaleButton = styled.div`
  width: 120px;
  height: 45px;
  cursor: pointer;
  margin-left: 61px;
  margin-top: 24px;
`;

export const MaleButton = styled.div`
  width: 120px;
  height: 45px;
  cursor: pointer;
  margin-left: 210px;
  margin-top: -45px;
`;

export const Birth = styled.div`
  width: 150px;
  height: 19px;
  margin-left: 72px;
  margin-top: 40px;

  #birth {
    color: #000;
    font-family: Pretendard;
    font-size: 13.254px;
    font-style: normal;
    font-weight: 500;
    line-height: 18.934px; /* 142.857% */
  }
`;

export const BirthInput = styled.input`
  width: 254px;
  height: 45.442px;
  flex-shrink: 0;
  border-radius: 4.734px;
  border: 0.947px solid grayscale-grayscale_66, #666;
  margin-left: 61px;
  margin-top: 13px;
  padding-left: 10px;
`;

export const PhoneNumber = styled.div`
  width: 150px;
  height: 19px;
  margin-left: 72px;
  margin-top: 15px;

  #phone {
    color: #000;
    font-family: Pretendard;
    font-size: 13.254px;
    font-style: normal;
    font-weight: 500;
    line-height: 18.934px; /* 142.857% */
  }
`;

export const PhoneNumberInput = styled.input`
  width: 254px;
  height: 45.442px;
  flex-shrink: 0;
  border-radius: 4.734px;
  border: 0.947px solid grayscale-grayscale_66, #666;
  margin-left: 61px;
  margin-top: 13px;
  padding-left: 10px;
`;

export const Agreement = styled.div`
  width: 320px;
  height: 38px;
  margin-left: 40px;
  margin-top: 55px;

  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 13.254px;
    font-style: normal;
    font-weight: 500;
    line-height: 18.934px; /* 142.857% */
  }
`;

export const AgreeButton = styled.div`
  width: 15.19px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  margin-left: 41px;
  margin-top: 15px;
`;

export const Agree = styled.div`
  width: 30px;
  height: 19px;
  margin-left: 62px;
  margin-top: -16px;
  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 13.254px;
    font-style: normal;
    font-weight: 500;
    line-height: 18.934px; /* 142.857% */
  }
`;

export const NotAgreeButton = styled.div`
  width: 15.19px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  margin-left: 180px;
  margin-top: -18px;
`;

export const NotAgree = styled.div`
  width: 40px;
  height: 19px;
  margin-left: 201px;
  margin-top: -16px;

  #text {
    color: #000;
    font-family: Pretendard;
    font-size: 13.254px;
    font-style: normal;
    font-weight: 500;
    line-height: 18.934px; /* 142.857% */
  }
`;

export const RegisterButton = styled.div`
  cursor: pointer;
  margin-left: 55px;
  margin-top: 35px;
`;
