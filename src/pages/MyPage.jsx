import Introduce from "../components/Introduce"
import DetailIntroduce from "../components/DetailIntroduce"
import TalentIntroduce from "../components/TalentIntroduce"
import MyPageFooter from "../layout/MyPageFooter";
import AlarmHeader from "../layout/AlarmHeader";
import axios from 'axios';
import Header from "../layout/Header";

//
import './MyPage.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// 마이페이지
export default function MyPage({ myData }) {
    const [talents, setTalents] = useState([]);

  useEffect(() => {
    axios.get('https://api.talent-trade.site/profile/mine')
      .then(response => {
        setTalents(response.data);
      })
      .catch(error => {
        console.error('Error fetching talents:', error);
      });
  }, []);

        
        return(
        <div className='app'>
          <Header/>
            <div className='content'>
            <AlarmHeader/>
              {/* Introduce 상단 닉네임, 키워드, 지역 등 */}
                <Introduce i={myData}/>
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
                    <TalentIntroduce i={myData} />
                </div>
                <hr />
                 {/* 포폴 */}
                <DetailIntroduce i={myData}/>
                <button className="button">
                    <img className="HeaderCenter" style={{width:24, height:24}}
                      id="Pencil"
                      src={`${process.env.PUBLIC_URL}/images/Pencil.svg`}
                      alt="Pencil"
                  /></button>
                <MyPageFooter/>
            </div>
            </div>
            
        )
}