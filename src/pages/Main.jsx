import "./Main.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";
import KeywordSort from "../components/KeywordSort";
import ProfileSort from "../components/ProfileSort";
import NavBar from "../components/NavBar";
import HomeFooter from "../layout/HomeFooter";
import HomeHeader from "../layout/HomeHeader";

// 메인페이지

export default function Main({ datas }) {
  const [selectData, setSelectData] = useState("");
  const [selectSort, setSelectSort] = useState("latest");
  const [searchData, setSearch] = useState("");
  const [keyword, setKeyword] = useState("전체");
  const [sorting, setSorting] = useState("최신순");

  const [limit] = useState(6);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const openModal1 = () => setIsOpen1(true);
  const closeModal1 = () => setIsOpen1(false);
  const openModal2 = () => setIsOpen2(true);
  const closeModal2 = () => setIsOpen2(false);

  return (
    <div
      className="main"
      style={{
        marginLeft: "0px",
      }}
    >
      <HomeHeader />
      <div className="input" style={{ width: 375, paddingTop: 30 }}>
        <div
          className="inputdiv"
          style={{
            marginLeft: "43px",
          }}
        >
          <Link to="/Search">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              value={searchData}
              onChange={onChangeSearch}
              className="inputsearch"
            />
          </Link>
        </div>
        <hr style={{ marginTop: 20, marginLeft: 26 }} />
      </div>

      <div className="profilesarray">
        <div
          className="placecenter"
          style={{
            width: "320px",
            marginLeft: "590px",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 700 }}>실시간 추천</h2>
          <p style={{ fontSize: 15, fontWeight: 700 }}>
            "닉네임"님의 관심사를 잘 알고 있는 분이에요.
          </p>
          <div className="recocenter">{/* 추천 데이터 연동 */}</div>
        </div>
        <hr style={{ marginLeft: "584px", width: "338px", height: "1px" }} />

        <div
          className="placecenter flex"
          style={{
            marginLeft: "630px",
          }}
        >
          <div className="selectbox" onClick={openModal2}>
            <p>{sorting}</p>
            <img
              style={{ width: 10, height: 10, marginTop: 14, marginLeft: 10 }}
              src="./underarrow.png"
              alt="아래 화살표"
            />
          </div>
          <Modal
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)", // 배경 투명도 조정
              },
              content: {
                width: "375px", // 너비
                height: "333px", // 높이
                margin: "auto", // 화면 중앙에 위치
                borderRadius: "10px", // 모서리 둥글게
                padding: "20px", // 내부 여백
              },
            }}
            isOpen={isOpen2}
            onRequestClose={closeModal2}
            contentLabel="Profile Sort Modal"
            overlayClassName="overlay"
            className="modal"
          >
            <div id="modal-scrollable" className="modal-scrollable">
              <ProfileSort
                closeModal={closeModal2}
                setSelectSort={setSelectSort}
                setSorting={setSorting}
              />
            </div>
          </Modal>

          <div className="selectbox" onClick={openModal1}>
            <p>{keyword}</p>
            <img
              style={{ width: 10, height: 10, marginTop: 14, marginLeft: 10 }}
              src="./underarrow.png"
              alt="아래 화살표"
            />
          </div>
          <Modal
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)", // 배경 투명도 조정
              },
              content: {
                width: "375px", // 너비
                height: "333px", // 높이
                margin: "auto", // 화면 중앙에 위치
                borderRadius: "10px", // 모서리 둥글게
                padding: "20px", // 내부 여백
              },
            }}
            isOpen={isOpen1}
            onRequestClose={closeModal1}
            contentLabel="Keyword Sort Modal"
            overlayClassName="overlay"
            className="modal"
          >
            <div id="modal-scrollable" className="modal-scrollable">
              <KeywordSort
                closeModal={closeModal1}
                setSelectData={setSelectData}
                setKeyword={setKeyword}
              />
            </div>
          </Modal>
        </div>

        <hr style={{ borderColor: "white" }} />
        <div className="media">
          {/* 데이터 출력 */}
          {datas &&
            datas.slice(offset, offset + limit).map((data) => (
              <div className="item" key={data.id}>
                {/* 개인 프로필 데이터 */}
              </div>
            ))}
        </div>

        <NavBar />
      </div>
      <HomeFooter />
    </div>
  );
}
