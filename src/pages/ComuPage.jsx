import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SentInput from "../components/SentInput";
import Comment from "../components/Comment";
import './ComuPage.css';


// 커뮤니티 상세
export default function ComuPage({comuInfo, commentInfo}){
    const [ comment, setComment ] = useState("")
    const { ID } = useParams();

    const i = comuInfo.filter((comuInfor)=>
        comuInfor.id==ID
    
    );
    
    const onChangeComment = (e) => (
        setComment(e.target.value)
    )

    const onClickCommentSend = () => (
        console.log({comment})
    )
  

    const fillterComment = commentInfo.filter((commentInfo)=>
        commentInfo.ComuPage==ID
    ); 


    return(
        <div >
            <div className="marginbox">
                <div className="glgl">
                    <img style={{width:45, height:45, marginRight:10}}src = {i[0].img} alt="사진"/>
                    <div className="jljl">
                        <p className="boldsize" style={{marginBottom:0}}>{i[0].userName}</p>
                        <div className="glgl">
                            <p style={{marginTop:0}}>{i[0].userKeyword}</p>
                            <p style={{marginTop:0, marginRight:5, marginLeft:5}}> | </p>
                            <p style={{marginTop:0}}>{i[0].userAdd}</p>
                        </div>
                    </div >
                </div >
                <p style={{fontWeight:"bold"}}>{i[0].title}</p>
                <p style={{fontSize:13}}>{i[0].content}</p>
                <div className="glgl">
                    <p style={{fontSize:13, color:"lightgray"}}>{i[0].time} </p>
                    <p style={{fontSize:13, color:"lightgray"}}> · </p>
                    <p style={{fontSize:13, color:"lightgray"}}> 조회</p>
                </div>
            </div>
                
            <hr />
            {/* 댓글 */}
            <div>
                {fillterComment.map((commentInfo) => (
                    <Comment key={commentInfo.id} {...commentInfo}/>
            
                ))}
            </div>

            <SentInput value={comment} onChange={onChangeComment} onClick={onClickCommentSend}/>
            
        </div>
    )
}