import React from "react";

import { useParams } from "react-router-dom";

const Profiles=({datas})=>{
    const { ID } = useParams();

    const i = datas.filter((data)=>
        data.id==ID
    
    ); 
    console.log(i);
    
    return(
        <div>
            <p>안녕하세요</p>
            <p>ID : {ID}</p>
            <p>이름: {i[0].user}</p>
            <p>소개: {i[0].add}</p>
        </div>
    )
}

export default Profiles;