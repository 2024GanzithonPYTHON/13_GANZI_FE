import "./Comu";
import { Link } from "react-router-dom";
import "./NewComu.css";
import { useState } from "react";
import ComunityHeader from "../layout/ComunityHeader";
import { useNavigate } from "react-router-dom";

export default function NewComu() {
  const [comuTitle, setComuTitle] = useState("");
  const [comuText, setComuText] = useState("");

  let navigate = useNavigate();

  const onChageComuTitle = (e) => {
    setComuTitle(e.target.value);
  };

  const onChageComuText = (e) => {
    setComuText(e.target.value);
  };

  const onClickSave = (e) => {
    console.log(comuTitle);
    console.log(comuText);
    navigate(-1);
  };

  return (
    <>
      <ComunityHeader />
      <div className="center">
        <input
          value={comuTitle}
          onChange={onChageComuTitle}
          className="custominput"
          placeholder="제목을 입력해 주세요."
        ></input>
      </div>
      <hr
        style={{
          width: "337px",
          height: "1px",
          marginLeft: "580px",
        }}
      />
      <div className="center">
        <textarea
          value={comuText}
          onChange={onChageComuText}
          className="customtextarea"
          placeholder="내용을 입력해 주세요."
        />
      </div>
      <hr
        style={{
          width: "337px",
          height: "1px",
          marginLeft: "580px",
        }}
      />
      <button
        onClick={onClickSave}
        style={{ width: 60, border: "none", borderRadius: 10, margin: 10 }}
      >
        저장
      </button>
    </>
  );
}
