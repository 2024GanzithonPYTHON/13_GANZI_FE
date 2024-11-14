import React from "react";
import { Link } from "react-router-dom";
import '../components/Introduce';
import './Reviews.css';

import { useParams } from "react-router-dom";
import Introduce from "../components/Introduce";

const Reviews=({datas})=>{
    const { ID } = useParams();

    const i = datas.filter((data)=>
        data.id==ID
    ); 
    
    return(
        <>
        <Introduce i={i[0]}/>
        <hr />
        <div>
            <Link Link to={`/Profilepage/${i[0].id}`} key={i[0].id} style={{ textDecoration: "none"}}>
                <div className="text underline"> 재능 소개 </div>
            </Link>
                <div className="underline"> 후기 </div>
                <p>☆</p>
        </div>
        <hr />
        <p>후기~~~</p>
        <button className="button">후기 작성</button>
        </>
        
    )
}

export default Reviews;