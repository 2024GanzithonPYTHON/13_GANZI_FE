import Introduce from "../components/Introduce"
import DetailIntroduce from "../components/DetailIntroduce"
import TalentIntroduce from "../components/TalentIntroduce"
import './MyPage.css';
import { Link } from "react-router-dom";
// 마이페이지
export default function MyPage({ myData }) {
        
        return(
            <>
              {/* Introduce 상단 닉네임, 키워드, 지역 등 */}
                <Introduce i={myData}/>
                <hr />
                <Link to='/MyComu'>
                <div className="clickdiv">
                    <p>내가 쓴 게시물</p>
                </div>
                </Link>
                <hr />
                <div className="clickdiv">
                    <div className="underline">재능 소개</div>
                    <Link to="/MyReview">
                        <div className="text underline">후기</div>
                    </Link>
                </div>
                <div>
                    {/* 원하는 성별, 성별, 자신있는거 */}
                    <TalentIntroduce i={myData} />
                </div>
                <hr />
                 {/* 포폴 */}
                <DetailIntroduce i={myData}/>
                <button className="button">수정</button>
            </>
            
        )
}