import React from "react";
import { Link } from "react-router-dom";
import '../pages/Reviews';
import './Profiles.css';
import '../components/Introduce';
import DetailIntroduce from "../components/DetailIntroduce";
import TalentIntroduce from "../components/TalentIntroduce";


import { useParams } from "react-router-dom";
import Introduce from "../components/Introduce";
import AlarmHeader from "../layout/AlarmHeader";
import Footer from "../layout/Footer";
// 유저 상세 페이지
const Profiles=({datas})=>{
    const { ID } = useParams();

    const i = datas.filter((data)=>
        data.id==ID
    
    ); 
    
    return(
        <>
        <AlarmHeader/>
        {/* Introduce 상단 닉네임, 키워드, 지역 등 */}
        <Introduce i={i[0]}/>
        <hr />
        <div className="clickdiv">
                <div className="underline">재능 소개</div>
            <Link to={`/Reviewpage/${i[0].id}`} key={i[0].id} style={{ textDecoration: "none"}}>
                <div className="text underline">후기</div>
            </Link>
            
        </div>
        {/* 원하는 성별, 성별, 자신있는거 */}
        <TalentIntroduce i={i[0]}  />
        <hr />
        {/* 포폴 */}
        <DetailIntroduce i={i[0]}/>
      
        <Link to={`/ChatPage/${i[0].id}`} key={i[0].id}>
        <button className="button">
            <img className="HeaderCenter" style={{width:24, height:24}}
                      id="ChaWhiteChatting"
                      src={`${process.env.PUBLIC_URL}/images/WhiteChat.svg`}
                      alt="WhiteChat"
                  /></button>
        </Link>
        <Footer/>
        </>
        
    )
}

export default Profiles;