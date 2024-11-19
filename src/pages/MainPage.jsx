import PersonalProfile from "../components/PersonalProfile"
import RecomendData from "../components/RecomendData";
import './Main.css';
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import KeywordSort from "../components/KeywordSort";
import ProfileSort from "../components/ProfileSort";

// 메인페이지
export default function MainPage({datas}){
    const [ selectData, setSelectData ] = useState("");
    const [ selectSort, setSelectSort ] = useState("latest");
    const [ searchData, setSearch ]=useState("");
    const [ keyword, setKeyword ] = useState("전체")
    const [ sorting, setSorting ] = useState("최신순")
    
   

    const recommendation = [{
        id:1,
        user: "닉네임2",
        content: "bello",
        wKeyword: "design",
        gKeyword: "IT",
        add: "backend",
        gender: "남성",
        preferGender: "상관없어요",
        time: 2,
        reviews: 2,
        stars: 3,
        img: "/man.png",
      },
      {
        id:2,
        user: "닉네임3",
        content: "cello",
        wKeyword: "IT",
        gKeyword: "foreign",
        add: "English",
        gender: "여성",
        preferGender: "상관없어요",
        time: 3,
        reviews: 6,
        stars: 5,
        img: "/female.png",
      },
      {
        id:3,
        user: "닉네임4",
        content: "dello",
        wKeyword: "IT",
        gKeyword: "design",
        add: "UI/UX",
        gender: "남성",
        preferGender: "여성",
        time: 4,
        reviews: 5,
        stars: 4,
        img: "/man.png",
      },
    ]

    const [ recoData, setRecoData ] = useState(recommendation)
    
   
   
    const onChangeSearch=(e)=>{
        setSearch(e.target.value);
    };

    
    

    useEffect(() => {
        console.log(selectData)
    },[selectData])

    useEffect(() => {
        console.log(selectSort)
    },[selectSort])
    

    const filterData = () => {
        let filteredData;
    
        // 기존 필터링 조건 (gKeyword에 따라 필터링)
        if (selectData === "") {
            filteredData = datas;
        } else {
            filteredData = datas.filter((data) => data.gKeyword.includes(selectData));
        }
    
        // 추가된 정렬 조건 (selectSort 기준으로 정렬)
        if (selectSort === "stars") {
            filteredData.sort((a, b) => b.stars - a.stars); // 별점 내림차순
        } else if (selectSort === "manyReview") {
            filteredData.sort((a, b) => b.reviews - a.reviews); // 리뷰 개수 내림차순
        } else if (selectSort === "highScore") {
            filteredData.sort((a, b) => a.time - b.time); // 시간 오름차순
        }
    
        return filteredData;
    };



    const [isOpen1, setIsOpen1] = useState(false);

    const openModal1 = () => setIsOpen1(true);
    const closeModal1 = () => setIsOpen1(false);

    const [isOpen2, setIsOpen2] = useState(false);

    const openModal2 = () => setIsOpen2(true);
    const closeModal2 = () => setIsOpen2(false);

    
    return(
        <div className="main">
            <div className="input">
                <div className="inputdiv">
                <Link to='/Search'>
                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                        <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                    </svg>
                    <input value={searchData} 
                        onChange={onChangeSearch}

                        className="inputsearch"/>
                </Link>
                </div>
                <hr style={{marginTop:20}}/>
            </div>


            <div className="profilesarray">
            
                <div className="placecenter">
                    <h2>실시간 추천</h2>
                    <p>{datas[1].user}님의 관심사를 잘 알고 있는 분이에요.</p>
                    <div  > 
                    {recoData.map((recodata)=>(
                        <RecomendData  key={recodata.id} {...recodata}/>
                    ))
                    }
                    </div>
                </div>
                <hr />
                <div className="placecenter flex">
                    {/* select대신 키워드.... */}
                    <div className="selectbox" onClick={openModal2}>{sorting}</div>
                        <Modal
                            isOpen={isOpen2}
                            onRequestClose={closeModal2}
                            contentLabel="Example Modal"
                            overlayClassName="overlay"
                            className="modal">
                            <div id="modal-scrollable" className="modal-scrollable">
                            <ProfileSort closeModal={closeModal2} setSelectSort={setSelectSort} setSorting={setSorting}/>
                            </div>
                        </Modal>
                        {/* select대신 최신순, 리뷰 많은 순.... */}
                    <div className="selectbox"onClick={openModal1}>{keyword}</div>
                    <Modal
                        isOpen={isOpen1}
                        onRequestClose={closeModal1}
                        contentLabel="Example Modal"
                        overlayClassName="overlay"
                        className="modal">
                        <div id="modal-scrollable" className="modal-scrollable">
                        <KeywordSort closeModal={closeModal1} setSelectData={setSelectData} setKeyword={setKeyword}/>
                        </div>
                    </Modal>
            
                    
                </div>
                <hr style={{borderColor: "white"}}/>
                {/* 개인프로필 출력 */}
                <div className="media">
                    {filterData().map((datas) => (
                        <PersonalProfile className="item" key={datas.id} {...datas}/>
                    ))}
                </div>
            </div>
            
        </div>
        
    )
}