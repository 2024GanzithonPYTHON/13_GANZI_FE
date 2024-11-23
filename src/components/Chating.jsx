import { Link } from "react-router-dom"
import './Chating.css'
import React, { useState, useEffect } from "react";
//채팅방 리스트
export default function Chating({chatInfor}){

    console.log("ccccc>>>>"+chatInfor);
    console.log("ccccc>>>>"+chatInfor.toMemberId);
    console.log("ccccc>>>>"+chatInfor.fromMemberId);

    const [fromMemberId, setFromMemberId] = useState();
    const [toMemberId, setToMemberId] = useState();

    useEffect(() => {
        setFromMemberId(chatInfor.fromMemberId);
        setToMemberId(chatInfor.toMemberId);
        console.log("ddd"+toMemberId);
        console.log("dddd"+fromMemberId);
    }, [chatInfor]);
    return(
        <>
         {/* <Link
                to={{
                    pathname: `/ChatPage/${chatInfor.roomId}`, // Path to the ChatPage
                    state: { 
                        oppId: toMemberId,
                        fromId:fromMemberId,  
                    }, // Pass the chatInfor object as state
                }}
                key={chatInfor.roomId}
                style={{ textDecoration: 'none' }}
            >  */}
            <Link
    to={`/ChatPage/${chatInfor.roomId}?oppId=${toMemberId}&fromId=${fromMemberId}`}
    key={chatInfor.roomId}
    style={{ textDecoration: "none" }}
>
            {console.log("state 전달:", toMemberId, fromMemberId)} 
       
        <div className="glgl Comun alink">
            
            <div className="chatdivblock" style={{width:50, height:50}}>
                <img style={{width:31, height:31}} src="/female.png" alt="사진"/>
            </div>
            <div  style={{marginLeft:10}} className="jljl ppsize">
                <div className="glgl">
                    <p style={{fontSize:13, fontWeight:700, margin:2}}>{chatInfor.opponentNickname}</p>
                    <p style={{fontSize:13, fontWeight:700, margin:2}}>{chatInfor.talent}</p>
                    <p style={{fontSize:13, fontWeight:700, margin:2}}>|</p>
                    <p style={{fontSize:13, fontWeight:700, margin:2}}>{chatInfor.detailTalent}</p>
                    <p className="rightright" style={{fontSize:10, fontWeight:700}}>{chatInfor.lastMessageAt}</p>
                </div>
                <div style={{fontSize:13, fontWeight:400, margin:2}}> 
                    {chatInfor.lastMessage}
                </div>
            </div>
        </div>
        </Link>
        <hr/>
        </>
    )
}