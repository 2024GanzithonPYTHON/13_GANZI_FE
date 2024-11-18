import PersonalProfile from "../components/PersonalProfile"
import { useState,useEffect } from "react";
import KeywordSort from "../components/KeywordSort";
import ProfileSort from "../components/ProfileSort";
import Modal from 'react-modal';
import './Main.css';

// 메인 검색 페이지
export default function Search({datas}){
   
    const [ selectData, setSelectData ] = useState("");
    const [ selectSort, setSelectSort ] = useState("latest");
    const [ searchData, setSearch ]=useState("");
    const [ sorting, setSorting ] = useState("최신순")
    

//selet때문에 쓰는거  
    const [isOpen2, setIsOpen2] = useState(false);

    const openModal2 = () => setIsOpen2(true);
    const closeModal2 = () => setIsOpen2(false);


      const onChangeSearch=(e)=>{
        setSearch(e.target.value);
    };

// 이거 안해도 되는데 그냥 모르고 해버렸어~
    const filterData = () => {
        let filteredData;
    
        // 검색 데이터 필터 
        if (searchData === "") {
            filteredData = datas;
        } else {
            filteredData = datas.filter((data) => data.add.includes(searchData));
        }
    
        // select데이터 필터
        if (selectSort === "highScore") {
            filteredData.sort((a, b) => b.stars - a.stars); // 별점 내림차순
        } else if (selectSort === "manyReview") {
            filteredData.sort((a, b) => b.reviews - a.reviews); // 리뷰 개수 내림차순
        } else if (selectSort === "latest") {
            filteredData.sort((a, b) => a.time - b.time); // 시간 오름차순
        }
    
        return filteredData;
    };

    
    return(
        <div>
            <div className="input" style={{height:125}}>
                {/* 검색창 */}
                <div className="inputdiv">
                    {/* 검색 아이콘 */}
                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                        <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                    </svg>
                    <input value={searchData} 
                        onChange={onChangeSearch}
                        className="inputsearch"/>
                </div>
                <hr style={{marginTop:27}}/>
                <div className="placecenter flex" >

                {/* select대신 최신순, 리뷰 많은 순.... */}
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
                </div>
                
            </div>
            
                <hr style={{borderColor: "white", margin: 50}}/>
                <div className="media">
                    {/* 개별 프로필 출력 */}
                    {filterData().length === 0 ? (
                        <div className="nonesearch">'{searchData}'와/과 관련된 검색 결과가 없어요.</div> 
                    ) : (
                        <div>
                        {filterData().map((datas) => (
                            <PersonalProfile key={datas.id} {...datas}/>
                        ))}
                        
                        </div>
                    )}
                </div>
            
        </div>
        
    )
}