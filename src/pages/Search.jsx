import PersonalProfile from "../components/PersonalProfile"
import { useState,useEffect } from "react";
import KeywordSort from "../components/KeywordSort";
import ProfileSort from "../components/ProfileSort";
import Modal from 'react-modal';
import './Main.css';
import NavBar from "../components/NavBar";
import SearchHeader from "../layout/SearchHeader";
import Footer from "../layout/Footer";

// 메인 검색 페이지
export default function Search(){
   
    const [ selectData, setSelectData ] = useState("");
    const [ selectSort, setSelectSort ] = useState("latest");
    const [ searchData, setSearch ]=useState("");
    const [ sorting, setSorting ] = useState("최신순")

    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    

//selet때문에 쓰는거  
    const [isOpen2, setIsOpen2] = useState(false);

    const openModal2 = () => setIsOpen2(true);
    const closeModal2 = () => setIsOpen2(false);


      const onChangeSearch=(e)=>{
        setSearch(e.target.value);
    };
    const activeEnter = (e) => {
        if(e.key === "Enter") {
          activeButton();
        }
    };
    const activeButton = () => {
        console.log(searchData);
    }



    
    return(
        <div>
            <SearchHeader/>
            <div className="input" style={{height:138, width:375, paddingTop:30}}>
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
                        onKeyDown={activeEnter}
                        className="inputsearch"/>
                </div>
                <hr style={{marginTop:27}}/>
                <div className="placecenter flex" >

                {/* select대신 최신순, 리뷰 많은 순.... */}
                <div className="selectbox" onClick={openModal2}><p>{sorting}</p><img style={{width:10, height:10, marginTop:14, marginLeft:10}}src="./underarrow.png" alt="아래 화살표"/></div>
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
                <div className="media" style={{marginTop:80}}>
                    {/* 개별 프로필 출력 */}
                    
                        <div>
                        {/* {datas.slice(offset, offset + limit).map((datas) => (
                            <PersonalProfile className="item" key={datas.id} {...datas}/>
                        ))} 연동한 데이터 datas 대신 입력*/}
                        
                        </div>
                </div>
                <NavBar/>
                <Footer/>
            
        </div>
        
    )
}