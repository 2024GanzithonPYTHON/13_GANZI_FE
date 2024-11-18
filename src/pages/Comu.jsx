import './NewComu';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Comu.css';
import KeywordSort from "../components/KeywordSort";
import ProfileSort from "../components/ProfileSort";
import Modal from 'react-modal';
import Comunity from '../components/Comunity';

// 커뮤니티 메인
export default function Comu({datas, comuInfo}){
    const [ selectData, setSelectData ] = useState("");
    const [ selectSort, setSelectSort ] = useState("최신순");
    const [ searchData, setSearch ]=useState("");
    const [ keyword, setKeyword ] = useState("전체")
    const [ sorting, setSorting ] = useState("최신순")


    const onChangeSearch=(e)=>{
        setSearch(e.target.value);
    };

    const onSelectChange=(e)=>{
        setSelectData( e.target.value);
    }; 
    
    useEffect(() => {
        console.log(selectData)
    },[selectData])
    



    const [isOpen1, setIsOpen1] = useState(false);

    const openModal1 = () => setIsOpen1(true);
    const closeModal1 = () => setIsOpen1(false);

    const [isOpen2, setIsOpen2] = useState(false);

    const openModal2 = () => setIsOpen2(true);
    const closeModal2 = () => setIsOpen2(false);

    return(
        <>
        {/* 검색 */}
            <div className="input" style={{height:125}}>
                <div className="inputdiv">
                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                        <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                    </svg>
                    <input value={searchData} 
                        onChange={onChangeSearch}

                        className="inputsearch"/>
                </div>



                <hr style={{marginTop:10, borderColor:"white"}}/>
                {/* select 대신 정렬 */}
                <div className="placecenter flex" >
                    <div className="selectbox"onClick={openModal1}>{keyword}</div>
                    <Modal isOpen={isOpen1} onRequestClose={closeModal1} contentLabel="Example Modal" overlayClassName="overlay" className="modal">
                        <div id="modal-scrollable" className="modal-scrollable">
                        <KeywordSort closeModal={closeModal1} setSelectData={setSelectData} setKeyword={setKeyword}/>
                        </div>
                    </Modal>
            
                    <div className="selectbox" onClick={openModal2}>{sorting}</div>
                    <Modal isOpen={isOpen2} onRequestClose={closeModal2} contentLabel="Example Modal" overlayClassName="overlay" className="modal">
                        <div id="modal-scrollable" className="modal-scrollable">
                        <ProfileSort closeModal={closeModal2} setSelectSort={setSelectSort} setSorting={setSorting}/>
                        </div>
                    </Modal>
                </div>
                <hr style={{marginTop:10}}/>
                
            </div>
            {/* 커뮤니티 게시물 */}
            <div className='comuarray'>
                {comuInfo.map((comuInfo)=>(
                    <Comunity key={comuInfo.id} {...comuInfo}/>
                ))}
            </div>
            <Link to="/NewComu"><button className='button'>새 글 작성</button></Link>
            
        </>
    )
}