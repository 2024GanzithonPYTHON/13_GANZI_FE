import React from "react";
import './Introduce.css';
import DefaultIntroduce from "./DefaultIntroduce";
// 교환 횟수 만족도 
export default function Introduce ({i}){
    return(
        <>
        <DefaultIntroduce i={i}/>
        <hr />
        <div className="ab">
            <p className="pp">티티에서 재능 교환한 횟수</p>
            <p className="pp">재능 교환 만족도</p>
        </div>
        </>
    );
};