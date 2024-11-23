import MyComunity from "../components/MyComunity"
import MyComuHeader from "../layout/MyComuHeader"
import { useState, useEffect } from 'react';
import axios from "axios";

export default function MyComu(){

    const [comuInfo, setComuInfo] = useState([]);
    const domain = "https://api.talent-trade.site";

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken"); 
        const fetchData = async () => {
          try {
            const response = await axios.get(`${domain}/post/mine`, {
              headers: {
                Authorization: `Bearer ${accessToken}`, 
              },
            });
    
            console.log("fetchData API Response:", response.data);
            setComuInfo(response.data.data); 
        
    
          } catch (error) {
            console.error("API Error:", error);
          }
        };fetchData();
       
      }, []);
    
    
    return(
        // 내 게시글
        //연동한 데이터 comuInfo에 넣고 map으로 하나씩 출력
        <div> 
            <MyComuHeader/>
            <div className="pageSetting">
            {comuInfo.map((comuInfor) => (
               <MyComunity key={comuInfor.id} {...comuInfor}/> 
            ))} 
            </div>
        </div>
    )
}