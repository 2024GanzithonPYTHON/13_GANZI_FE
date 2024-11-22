import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as I from "../styles/StyledIntroduce.jsx";
import axios from 'axios';
import Modal from "react-modal";
Modal.setAppElement("#root");

const Introduce = () => {

  const domain = "https://api.talent-trade.site";
    const [profileInfo, setProfileInfo] = useState(); //화면에 뿌려주는 멤버 관리
 
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken"); 
    //멤버조회

    
    //프로필 조회
    const fetchData = async () => {
    try {
      const response = await axios.get(`${domain}/profile/mine`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, 
        },
      });

      console.log("fetchData API Response:", response.data);
      setProfileInfo(response.data.data); 
  
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  fetchData();
  }, []);


  const navigate = useNavigate();

  // 버튼 상태 관리
  const [isActive, setIsActive] = useState(false);

  const [activeButton, setActiveButton] = useState(null); // 상태: 어떤 버튼이 활성화되었는지 저장

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleActive = (button) => {
    setActiveButton(button); // 상태를 반전시킴
  };

  // 임시저장 버튼
  const [imageSrc, setImageSrc] = useState("/images/Save.svg");

  // 저장하기 버튼
  const [imageSrcSave, setImageSrcSave] = useState("/images/SaveBefore.svg");

  const handleSave = () => {
    setImageSrc("/images/V.svg"); // 클릭 시 이미지 변경
    setTimeout(() => {
      setImageSrc("/images/Save.svg"); // 2초 후 다시 임시저장 버튼으로 돌아옴
    }, 2000);
  };

  const handleSaveComplete = () => {
    setImageSrcSave("/images/SaveAfter.svg"); // 클릭 시 이미지 변경
    setTimeout(() => {
      navigate("/main"); // 0.3초 후 메인 페이지로 이동
    }, 300); // 페이지 이동 지연 시간
  };

  //프론트
  return (
    /* 아이폰 헤더 */
    <I.Container>
      <I.Text>
        <div id="text">나를 소개해요</div>
      </I.Text>
      <I.Save id="save" onClick={handleSave}>
        <img src={process.env.PUBLIC_URL + imageSrc} alt="button" />
      </I.Save>
      <I.Comment>
        <div id="text">작성한 내용을 바탕으로</div>
        <div id="text2">최적의 재능교환 메이트를</div>
        <div id="text3">찾아드릴게요</div>
      </I.Comment>
      <I.ProfileImg>
          {profileInfo ? (
        profileInfo.gender === "FEMALE" ? (
          <img
            id="profile"
            src="/images/PersonWoman.svg"
            alt="Female Avatar"
            style={{ width: 50, height: 50 }}
          />
        ) : (
          <img
            id="profile"
            src="/images/PersonMan.svg"
            alt="Male Avatar"
            style={{ width: 50, height: 50 }}
          />
        )
      ) : (
        <div>Loading...</div>
      )}
      </I.ProfileImg>
       <I.NickName>
        <div id="text">{profileInfo ? profileInfo.nickname : "Loading..."}</div>
      </I.NickName>
      <I.Ment>
        <div id="text">나누고 싶어요!</div>
      </I.Ment>
      <I.Background>
        <img
          id="background"
          src={`${process.env.PUBLIC_URL}/images/Background.svg`}
          alt="background"
        />
        <I.Back
          isActive={activeButton === "back1"} // 버튼 상태 확인
          onClick={() => toggleActive("back1")} // 버튼 상태 설정
        />
        <div
          id="foreign"
          style={{
            cursor: "pointer",
            width: "30px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-54px",
            marginTop: "24px",
            color: activeButton === "back1" ? "white" : "black",
          }}
          onClick={() => toggleActive("back1")}
        >
          외국어
        </div>
        <I.Back2
          isActive={activeButton === "back2"} // 버튼 상태 확인
          onClick={() => toggleActive("back2")} // 버튼 상태 설정
        />
        <div
          id="it"
          style={{
            cursor: "pointer",
            width: "30px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-54px",
            marginTop: "24px",
            color: activeButton === "back2" ? "white" : "black",
          }}
          onClick={() => toggleActive("back2")}
        >
          IT
        </div>
        <I.Back3
          isActive={activeButton === "back3"} // 버튼 상태 확인
          onClick={() => toggleActive("back3")} // 버튼 상태 설정
        />
        <div
          id="business"
          style={{
            cursor: "pointer",
            width: "60px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-69px",
            marginTop: "24px",
            color: activeButton === "back3" ? "white" : "black",
          }}
          onClick={() => toggleActive("back3")}
        >
          경영/경제
        </div>
        <I.Back4
          isActive={activeButton === "back4"} // 버튼 상태 확인
          onClick={() => toggleActive("back4")} // 버튼 상태 설정
        />
        <div
          id="dance"
          style={{
            cursor: "pointer",
            width: "30px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-54px",
            marginTop: "69px",
            color: activeButton === "back4" ? "white" : "black",
          }}
          onClick={() => toggleActive("back4")}
        >
          댄스
        </div>
        <I.Back5
          isActive={activeButton === "back5"} // 버튼 상태 확인
          onClick={() => toggleActive("back5")} // 버튼 상태 설정
        />
        <div
          id="design"
          style={{
            cursor: "pointer",
            width: "30px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-54px",
            marginTop: "69px",
            color: activeButton === "back5" ? "white" : "black",
          }}
          onClick={() => toggleActive("back5")}
        >
          디자인
        </div>
        <I.Back6
          isActive={activeButton === "back6"} // 버튼 상태 확인
          onClick={() => toggleActive("back6")} // 버튼 상태 설정
        />
        <div
          id="fashion"
          style={{
            cursor: "pointer",
            width: "60px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-69px",
            marginTop: "69px",
            color: activeButton === "back6" ? "white" : "black",
          }}
          onClick={() => toggleActive("back6")}
        >
          패션
        </div>
        <I.Back7
          isActive={activeButton === "back7"} // 버튼 상태 확인
          onClick={() => toggleActive("back7")} // 버튼 상태 설정
        />
        <div
          id="game"
          style={{
            cursor: "pointer",
            width: "30px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-54px",
            marginTop: "113px",
            color: activeButton === "back7" ? "white" : "black",
          }}
          onClick={() => toggleActive("back7")}
        >
          게임
        </div>
        <I.Back8
          isActive={activeButton === "back8"} // 버튼 상태 확인
          onClick={() => toggleActive("back8")} // 버튼 상태 설정
        />
        <div
          id="music"
          style={{
            cursor: "pointer",
            width: "30px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-54px",
            marginTop: "113px",
            color: activeButton === "back8" ? "white" : "black",
          }}
          onClick={() => toggleActive("back8")}
        >
          음악
        </div>
        <I.Back9
          isActive={activeButton === "back9"} // 버튼 상태 확인
          onClick={() => toggleActive("back9")} // 버튼 상태 설정
        />
        <div
          id="etc"
          style={{
            cursor: "pointer",
            width: "60px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-69px",
            marginTop: "113px",
            color: activeButton === "back9" ? "white" : "black",
          }}
          onClick={() => toggleActive("back9")}
        >
          기타
        </div>
      </I.Background>
      <I.Text2>
        <div id="major">세부분야를 입력해주세요.</div>
      </I.Text2>
      <I.MajorInput
        type="text"
        placeholder="AI, UX/UI, 퍼포먼스 마케팅, 작곡 등"
      ></I.MajorInput>
      <I.Ment2>
        <div id="text">배우고 싶어요!</div>
      </I.Ment2>
      <I.Background>
        <img
          id="background"
          src={`${process.env.PUBLIC_URL}/images/Background.svg`}
          alt="background"
        />
        <I.Back
          isActive={activeButton === "back1"} // 버튼 상태 확인
          onClick={() => toggleActive("back1")} // 버튼 상태 설정
        />
        <div
          id="foreign"
          style={{
            cursor: "pointer",
            width: "30px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-54px",
            marginTop: "24px",
            color: activeButton === "back1" ? "white" : "black",
          }}
          onClick={() => toggleActive("back1")}
        >
          외국어
        </div>
        <I.Back2
          isActive={activeButton === "back2"} // 버튼 상태 확인
          onClick={() => toggleActive("back2")} // 버튼 상태 설정
        />
        <div
          id="it"
          style={{
            cursor: "pointer",
            width: "30px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-54px",
            marginTop: "24px",
            color: activeButton === "back2" ? "white" : "black",
          }}
          onClick={() => toggleActive("back2")}
        >
          IT
        </div>
        <I.Back3
          isActive={activeButton === "back3"} // 버튼 상태 확인
          onClick={() => toggleActive("back3")} // 버튼 상태 설정
        />
        <div
          id="business"
          style={{
            cursor: "pointer",
            width: "60px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-69px",
            marginTop: "24px",
            color: activeButton === "back3" ? "white" : "black",
          }}
          onClick={() => toggleActive("back3")}
        >
          경영/경제
        </div>
        <I.Back4
          isActive={activeButton === "back4"} // 버튼 상태 확인
          onClick={() => toggleActive("back4")} // 버튼 상태 설정
        />
        <div
          id="dance"
          style={{
            cursor: "pointer",
            width: "30px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-54px",
            marginTop: "69px",
            color: activeButton === "back4" ? "white" : "black",
          }}
          onClick={() => toggleActive("back4")}
        >
          댄스
        </div>
        <I.Back5
          isActive={activeButton === "back5"} // 버튼 상태 확인
          onClick={() => toggleActive("back5")} // 버튼 상태 설정
        />
        <div
          id="design"
          style={{
            cursor: "pointer",
            width: "30px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-54px",
            marginTop: "69px",
            color: activeButton === "back5" ? "white" : "black",
          }}
          onClick={() => toggleActive("back5")}
        >
          디자인
        </div>
        <I.Back6
          isActive={activeButton === "back6"} // 버튼 상태 확인
          onClick={() => toggleActive("back6")} // 버튼 상태 설정
        />
        <div
          id="fashion"
          style={{
            cursor: "pointer",
            width: "60px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-69px",
            marginTop: "69px",
            color: activeButton === "back6" ? "white" : "black",
          }}
          onClick={() => toggleActive("back6")}
        >
          패션
        </div>
        <I.Back7
          isActive={activeButton === "back7"} // 버튼 상태 확인
          onClick={() => toggleActive("back7")} // 버튼 상태 설정
        />
        <div
          id="game"
          style={{
            cursor: "pointer",
            width: "30px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-54px",
            marginTop: "113px",
            color: activeButton === "back7" ? "white" : "black",
          }}
          onClick={() => toggleActive("back7")}
        >
          게임
        </div>
        <I.Back8
          isActive={activeButton === "back8"} // 버튼 상태 확인
          onClick={() => toggleActive("back8")} // 버튼 상태 설정
        />
        <div
          id="music"
          style={{
            cursor: "pointer",
            width: "30px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-54px",
            marginTop: "113px",
            color: activeButton === "back8" ? "white" : "black",
          }}
          onClick={() => toggleActive("back8")}
        >
          음악
        </div>
        <I.Back9
          isActive={activeButton === "back9"} // 버튼 상태 확인
          onClick={() => toggleActive("back9")} // 버튼 상태 설정
        />
        <div
          id="etc"
          style={{
            cursor: "pointer",
            width: "60px",
            height: "20px",
            textAlign: "center",
            fontFamily: "Noto Sans KR",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "-69px",
            marginTop: "113px",
            color: activeButton === "back9" ? "white" : "black",
          }}
          onClick={() => toggleActive("back9")}
        >
          기타
        </div>
      </I.Background>
      <I.Text3>
        <div id="text">본인을 한 줄로 표현해주세요.</div>
      </I.Text3>
      <I.Input type="text" placeholder="70자까지 입력 가능해요."></I.Input>
      <I.Text4>
        <div id="text">본인만의 특별한 재능을 소개해주세요.</div>
      </I.Text4>
      <I.PhotoInput
        type="text"
        placeholder="사진 파일을 첨부해 더 멋지게 표현할 수 있어요."
      ></I.PhotoInput>
      <I.Button onClick={openModal}>
        <img
          id="button"
          src={`${process.env.PUBLIC_URL}/images/InsertButton.svg`}
          alt="button"
        />
      </I.Button>
      {/* 모달 */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="사진 업로드"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          },
          content: {
            width: "375px",
            height: "200px",
            margin: "0 auto",
            borderRadius: "15px",
            padding: "0",
            border: "none",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bottom: "0",
            marginTop: "450px",
          },
        }}
      >
        {/* 모달 내부 */}
        <h2 style={{ fontSize: "18px", marginBottom: "20px" }}>사진 업로드</h2>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            color: "#007BFF",
            fontSize: "18px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
          onClick={() => console.log("파일 버튼 클릭")}
        >
          파일
        </button>
        <hr
          style={{ width: "100%", borderColor: "#e0e0e0", margin: "10px 0" }}
        />
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            color: "#007BFF",
            fontSize: "18px",
            cursor: "pointer",
          }}
          onClick={closeModal}
        >
          취소
        </button>
      </Modal>
      <I.Text5>
        <div id="text">분야와 관련해 특별한 경험이 있나요?</div>
      </I.Text5>
      <I.TextInput
        type="text"
        placeholder="엄청난 경험이 아니어도 괜찮아요! 평소에 즐거워하던 순간을 떠올려보세요."
      ></I.TextInput>
      <I.Text6>
        <div id="text">포트폴리오 링크가 있다면 더 좋아요.</div>
      </I.Text6>
      <I.PileInput
        type="text"
        placeholder="링크를 붙여넣어주세요. (선택)"
      ></I.PileInput>
      <I.Text7>
        <div id="text">선호하는 지역 한 곳 을 입력해주세요.</div>
      </I.Text7>
      <I.Input type="text" placeholder="서울시 강남구"></I.Input>
      <I.Text8>
        <div id="text">어떤 방식이 편하세요?</div>
      </I.Text8>
      <I.Back19
        isActive={activeButton === "back19"} // 버튼 상태 확인
        onClick={() => toggleActive("back19")} // 버튼 상태 설정
      />
      <div
        id="offline"
        style={{
          cursor: "pointer",
          width: "30px",
          height: "20px",
          textAlign: "center",
          fontFamily: "Noto Sans KR",
          fontSize: "10px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          marginLeft: "84px",
          marginTop: "-21px",
          color: activeButton === "back19" ? "white" : "black",
        }}
        onClick={() => toggleActive("back19")}
      >
        대면
      </div>

      {/* 두 번째 버튼 */}
      <I.Back20
        isActive={activeButton === "back20"} // 버튼 상태 확인
        onClick={() => toggleActive("back20")} // 버튼 상태 설정
      />
      <div
        id="online"
        style={{
          cursor: "pointer",
          width: "30px",
          height: "20px",
          textAlign: "center",
          fontFamily: "Noto Sans KR",
          fontSize: "10px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          marginLeft: "185px",
          marginTop: "-21px",
          color: activeButton === "back20" ? "white" : "black",
        }}
        onClick={() => toggleActive("back20")}
      >
        비대면
      </div>
      <I.Back21
        isActive={activeButton === "back21"} // 버튼 상태 확인
        onClick={() => toggleActive("back21")} // 버튼 상태 설정
      />
      <div
        id="nomatter"
        style={{
          cursor: "pointer",
          width: "60px",
          height: "20px",
          textAlign: "center",
          fontFamily: "Noto Sans KR",
          fontSize: "10px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          marginLeft: "269px",
          marginTop: "-21px",
          color: activeButton === "back21" ? "white" : "black",
        }}
        onClick={() => toggleActive("back21")}
      >
        상관 없어요
      </div>
      <I.Text9>
        <div id="text">선호하는 성별이 있나요?</div>
      </I.Text9>
      <I.Back19
        isActive={activeButton === "back22"} // 버튼 상태 확인
        onClick={() => toggleActive("back22")} // 버튼 상태 설정
      />
      <div
        id="female"
        style={{
          cursor: "pointer",
          width: "30px",
          height: "20px",
          textAlign: "center",
          fontFamily: "Noto Sans KR",
          fontSize: "10px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          marginLeft: "84px",
          marginTop: "-21px",
          color: activeButton === "back22" ? "white" : "black",
        }}
        onClick={() => toggleActive("back22")}
      >
        여성
      </div>

      {/* 두 번째 버튼 */}
      <I.Back20
        isActive={activeButton === "back23"} // 버튼 상태 확인
        onClick={() => toggleActive("back23")} // 버튼 상태 설정
      />
      <div
        id="male"
        style={{
          cursor: "pointer",
          width: "30px",
          height: "20px",
          textAlign: "center",
          fontFamily: "Noto Sans KR",
          fontSize: "10px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          marginLeft: "185px",
          marginTop: "-21px",
          color: activeButton === "back23" ? "white" : "black",
        }}
        onClick={() => toggleActive("back23")}
      >
        남성
      </div>
      <I.Back21
        isActive={activeButton === "back24"} // 버튼 상태 확인
        onClick={() => toggleActive("back24")} // 버튼 상태 설정
      />
      <div
        id="nomatter"
        style={{
          cursor: "pointer",
          width: "60px",
          height: "20px",
          textAlign: "center",
          fontFamily: "Noto Sans KR",
          fontSize: "10px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          marginLeft: "269px",
          marginTop: "-21px",
          color: activeButton === "back24" ? "white" : "black",
        }}
        onClick={() => toggleActive("back24")}
      >
        상관 없어요
      </div>
      <I.SaveButton id="save" onClick={handleSaveComplete}>
        <img src={process.env.PUBLIC_URL + imageSrcSave} alt="save" />
      </I.SaveButton>
    </I.Container>
  );
};

export default Introduce;
