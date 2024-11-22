import "./Comu";
import { Link } from "react-router-dom";
import "./NewComu.css";
import { useState } from "react";
import ComunityHeader from "../layout/ComunityHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewComu() {
  const [comuTitle, setComuTitle] = useState("");
  const [comuText, setComuText] = useState("");
  const domain = "https://api.talent-trade.site";

  let navigate = useNavigate();

  const onChageComuTitle = (e) => {
    setComuTitle(e.target.value);
  };

  const onChageComuText = (e) => {
    setComuText(e.target.value);
  };

  const onClickSave = async (e) => {
    // Prepare the post data
    const postData = {
      title: comuTitle,
      content: comuText,
      hitCount: 0,
    };

    try {

      const accessToken = localStorage.getItem("accessToken");

      const response = await axios.post(
        `${domain}/post/create`,  
        postData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,  
          }
        }
      );

      console.log(response.data); 
      navigate(-1); 
    } catch (error) {
      console.error("Error creating post: ", error);
    }
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
