import "./SentInput.css"
import axios from "axios";
import { useEffect, useState } from "react";

// input component css 수정 해야함
export default function SentInput({value, onChange, onClick}){
  
    return(
        <div className="inputbox">
            <div className="inputboxbox">
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="inputinput"
                    placeholder="댓글을 입력해주세요."/>
                <button className="sentbutton" onClick={onClick}>
                    <img
                        id="group"
                        src={`${process.env.PUBLIC_URL}/images/SentButton.svg`}
                        alt="group"
                        /> 
                </button>
            </div>
        </div>
    )
}