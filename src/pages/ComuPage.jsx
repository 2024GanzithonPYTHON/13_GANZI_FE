import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SentInput from "../components/SentInput";
import Comment from "../components/Comment";
import './ComuPage.css';
import ComunityHeader from "../layout/ComunityHeader";
import axios from "axios";


// 커뮤니티 상세
export default function ComuPage(){
    const [ comment, setComment ] = useState([])
    const [ newcomment, setNewComment ] = useState("")
    const [ post, setPost ] = useState("")
    const { ID } = useParams();
    const domain = "https://api.talent-trade.site";
    const accessToken = localStorage.getItem("accessToken"); 

    const onChangeComment = (e) => (
        setNewComment(e.target.value)
    )


    const onClickCommentSend = async () => {
        console.log({ newcomment });
    
        if (!newcomment) {
            alert("Please enter a comment.");
            return;  
        }
    
        try {
            const response = await axios.post(
                `${domain}/comments/create`, 
                {
                    postId: Number(ID),   
                    content: newcomment   
                }, 
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,  
                    }
                }
            );
    
            console.log("Comment posted:", response.data.data);
    
      
            setComment(prevComments => [...prevComments, response.data.data]); 
    

            setNewComment("");
        } catch (error) {
            console.error("API Error:", error);

            alert("An error occurred while posting the comment.");
        }
    };
    
    

    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await axios.get(`${domain}/post/detail/${ID}`, {
              headers: {
                Authorization: `Bearer ${accessToken}`, 
              },
            });
    
            console.log("게시글 상세 조회 응답 :", response.data);
            setPost(response.data.data.post); 
            setComment(response.data.data.comments);
    
          } catch (error) {
            console.error("API Error:", error);
          }
        }; 
        fetchData();
      
      }, []);

    return(
        <div className="pageSetting">
            <ComunityHeader/>
            {/* 유저 프로필 */}
            <div className="marginbox">
                <div className="glgl">
                    <img style={{width:45, height:45, marginRight:10}}src = '/man.png' alt="사진"/>
                    <div className="jljl">
                        <p className="boldsize" style={{marginBottom:0}}>{post.nickname}</p>
                        <div className="glgl">
                            <p className= "boldsize" style={{marginTop:0}}>{post.talent}</p>
                            <p className= "boldsize" style={{marginTop:0, marginRight:5, marginLeft:5}}> | </p>
                            <p className= "boldsize" style={{marginTop:0}}>{post.talentDetail}</p>
                        </div>
                    </div >
                </div >

                {/* 게시물 제목, 내용 */}
                <p style={{fontWeight:"bold"}}>{post.title}</p>
                <p style={{fontSize:13}}>{post.content}</p>
                <div className="glgl">
                    <p style={{fontSize:13, color:"lightgray"}}>{post.createdAt}</p>
                    <p style={{fontSize:13, color:"lightgray"}}>  조회수 : </p>
                    <p style={{fontSize:13, color:"lightgray"}}> {post.hitCount}</p>
                </div>
            </div>
                
            <hr />
             {/* 댓글 */}
             <div>
                {comment.length > 0 ? (
                    comment.map((commentInfo) => (
                        <Comment commentInfo={commentInfo} />
                    ))
                ) : (
                    <p>댓글이 없습니다.</p>
                )}
            </div>

            <SentInput value={newcomment} onChange={onChangeComment} onClick={onClickCommentSend}/>
            
        </div>
    )
}
