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
            <div className="ppsize">
                <div>
                    <p className="pp">티티에서 재능 교환한 횟수</p>
                    <p className="pp rightright">22회</p>
                </div>
                <div>
                    <p className="pp">재능 교환 만족도</p>
                    <p className="pp rightright">★ 5.0</p>
                </div>
            </div>
        </div>
        </>
    );
};