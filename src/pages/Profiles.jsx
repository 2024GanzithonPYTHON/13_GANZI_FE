import React from "react";
import { Link } from "react-router-dom";
import '../pages/Reviews';
import './Profiles.css';
import '../components/Introduce';

import { useParams } from "react-router-dom";
import Introduce from "../components/Introduce";

const Profiles=({datas})=>{
    const { ID } = useParams();

    const i = datas.filter((data)=>
        data.id==ID
    
    ); 
    
    return(
        <>
        <Introduce i={i[0]}/>
        <hr />
        <div>
                <div className="underline">재능 소개</div>
            <Link to={`/Reviewpage/${i[0].id}`} key={i[0].id} style={{ textDecoration: "none"}}>
                <div className="text underline">후기</div>
            </Link>
        </div>
        <hr />
        <div>
            <p>한줄 소개</p>
            <p>{i[0].content}</p>
        </div>
        <hr />
        <div>
            <p>제가 자신있는 부분은요!</p>
        </div>
        <button className="button">채팅</button>
        </>
        
    )
}

export default Profiles;