import React from "react";
import './Introduce.css';

export default function Introduce ({i}){
    return(
        <>
        <div>
            <p className="name">{i.user}</p>
            <p className="box">{i.add}</p>
            <p className="place">⚫   지역   서울시 서초구</p>
            <div className="box other">{i.gKeyword}</div>
            <div className="box other">{i.wKeyword}</div>
            <div className="box other">여성</div>
        </div>
        <hr />
        <div className="ab">
            <p>티티에서 재능 교환한 횟수</p>
            <p>재능 교환 만족도</p>
        </div>
        </>
    );
};