import Introduce from "../components/Introduce"
import DetailIntroduce from "../components/DetailIntroduce"
import TalentIntroduce from "../components/TalentIntroduce"
import MyPageFooter from "../layout/MyPageFooter";
import AlarmHeader from "../layout/AlarmHeader";
import axios from 'axios';
import './MyPage.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// 마이페이지
export default function MyPage() {
    const [talents, setTalents] = useState([]);
    const domain = "https://api.talent-trade.site";
    const [member, setMember] = useState(); //화면에 뿌려주는 멤버 관리
 
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken"); 
    const fetchData = async () => {
    try {
      const response = await axios.get(`${domain}/profile/mine`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, 
        },
      });

      console.log("fetchData API Response:", response.data);
      setMember(response.data); 
  
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  fetchData();
  }, []);

        
        return(
            <>
            <AlarmHeader/>
              {/* Introduce 상단 닉네임, 키워드, 지역 등 */}
                <Introduce/>
                {/* 마이페이지 데이터 넘기기 ex)<Introduce myData={myData}>*/}
                <hr />
                <Link to='/MyComu' style={{ textDecoration: 'none' }}>
                <div className="clickdiv alink">
                    <p>내가 쓴 게시물</p>
                </div>
                </Link>
                <hr />
                <div className="clickdiv">
                    <div className="underline">재능 소개</div>
                    <Link to="/MyReview">
                        <div className="text underline alink">후기</div>
                    </Link>
                </div>
                <div>
                    {/* 원하는 성별, 성별, 자신있는거 */}
                    <TalentIntroduce  />
                    {/* Intorduce랑 동일하게 myData={myData} 넣기*/}
                </div>
                <hr />
                 {/* 포폴 */}
                <DetailIntroduce/>
                {/* Intorduce랑 동일하게 myData={myData} 넣기*/}
                <button className="button">
                    <img className="HeaderCenter" style={{width:24, height:24}}
                      id="Pencil"
                      src={`${process.env.PUBLIC_URL}/images/Pencil.svg`}
                      alt="Pencil"
                  /></button>
                <MyPageFooter/>
            </>
            
        )
}