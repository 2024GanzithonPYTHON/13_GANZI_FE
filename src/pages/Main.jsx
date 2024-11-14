import PersonalProfile from "../components/PersonalProfile"
import './Main.css';
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function Main({datas }){
    const [ selectData, setSelectData ] = useState("");
    const [ searchData, setSearch ]=useState("");



    const onChangeSearch=(e)=>{
        setSearch(e.target.value);
    };

    const onSelectChange=(e)=>{
        setSelectData( e.target.value);
    }; 
    
    useEffect(() => {
        console.log(selectData)
    },[selectData])
    

    const filterData=()=>{
        if(selectData===""){
            if(searchData===""){
                return datas;
            }
            return datas.filter((data)=>
                data.add.includes(searchData)
            ); 
        }else{
            if(searchData===""){
                return datas.filter((data)=>
                    data.gKeyword.includes(selectData)
                );
            }
            return datas.filter((data)=>
                data.gKeyword.includes(selectData)&&data.add.includes(searchData)
            ); 
        }
    };

    
    return(
        <div className="main">
                
                <div className="input">
                    <Link to='/Search'>
                    <input
                        value={searchData} 
                        onChange={onChangeSearch}
                        placeholder="검색어를 입력하세요"/>
                    </Link>
                    <hr />
                </div>


                <div className="profilesarray">
                    <h2>실시간 추천</h2>
                    <p>{datas[1].user}님의 관심사를 잘 알고 있는 분이에요.</p>

                    <hr />
                    <select  onChange={onSelectChange}>
                        <option value={""}> 전체 </option>
                        <option value={"foreign"}>외국어</option>
                        <option value={"IT"}>IT</option>
                        <option value={"economy"}>경영/경제</option>
                        <option value={"dance"}>댄스</option>
                        <option value={"design"}>디자인</option>
                        <option value={"fashion"}>패션</option>
                        <option value={"game"}>게임</option>
                        <option value={"music"}>음악</option>
                        <option value={"others"}>기타</option>
                    </select>
                    <select >
                        <option>최신순</option>
                        <option>리뷰 개수순</option>
                        <option>평점순</option>
                    </select>
                    <hr />
                    {filterData().map((datas) => (
                        <PersonalProfile className="item" key={datas.id} {...datas}/>
                    ))}
                </div>
            
        </div>
        
    )
}