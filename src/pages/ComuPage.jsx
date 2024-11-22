import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SentInput from "../components/SentInput";
import Comment from "../components/Comment";
import './ComuPage.css';
import ComunityHeader from "../layout/ComunityHeader";


// 커뮤니티 상세
export default function ComuPage(){
    const [ comment, setComment ] = useState("")
    // const { ID } = useParams();
    
    const onChangeComment = (e) => (
        setComment(e.target.value)
    )

    const onClickCommentSend = () => (
        console.log({comment})
    )


    return(
        <div >
            <ComunityHeader/>
            {/* 유저 프로필 */}
            <div className="marginbox">
                <div className="glgl">
                    <img style={{width:45, height:45, marginRight:10}}src = '/man.png' alt="사진"/>
                    <div className="jljl">
                        <p className="boldsize" style={{marginBottom:0}}>유저이름</p>
                        <div className="glgl">
                            <p className= "boldsize" style={{marginTop:0}}>유저키워드</p>
                            <p className= "boldsize" style={{marginTop:0, marginRight:5, marginLeft:5}}> | </p>
                            <p className= "boldsize" style={{marginTop:0}}>유저 추가 키워드</p>
                        </div>
                    </div >
                </div >

                {/* 게시물 제목, 내용 */}
                <p style={{fontWeight:"bold"}}>제목</p>
                <p style={{fontSize:13}}>내용</p>
                <div className="glgl">
                    <p style={{fontSize:13, color:"lightgray"}}>시간 </p>
                    <p style={{fontSize:13, color:"lightgray"}}> · </p>
                    <p style={{fontSize:13, color:"lightgray"}}> 조회</p>
                </div>
            </div>
                
            <hr />
            {/* 댓글 */}
            <div>
                {/* {fillterComment.map((commentInfo) => (
                    <Comment key={commentInfo.id} {...commentInfo}/>
                ))} */}
            </div>

            <SentInput value={comment} onChange={onChangeComment} onClick={onClickCommentSend}/>
            
        </div>
    )
}
