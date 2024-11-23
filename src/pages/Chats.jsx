import ChatFooter from "../layout/ChatFooter"
import ChatHeader from "../layout/ChatHeader"
import Chating from "../components/Chating"
import { useState, useEffect } from 'react';
import axios from "axios";
// 채팅 목록 수정 해야함
export default function Chats(){


    const domain = "https://api.talent-trade.site";
    const [chatInfo, setChatInfo] = useState([]);
    const accessToken = localStorage.getItem("accessToken"); 
 
    useEffect(() => {
      
        const fetchData = async () => {
          try {
            const response = await axios.get(`${domain}/chatrooms/get`, {
                headers: {
                  Authorization: `Bearer ${accessToken}`, 
                },
        
              });
            console.log("채팅방 리스트 조회:", response.data.data);
            setChatInfo(response.data.data); 
        
    
          } catch (error) {
            console.error("API Error:", error);
          }
        };
        fetchData();
    
      }, []);

    return(
        <>
        <ChatHeader/>
        {/* 채팅 목록 볼 수 있는 페이지라서 map 써서 연동 받은 데이터 하나씩 뿌려주시면 됩니당. key에 id 값 넣고 뒤에 {...받아온 데이터 이름} */}
            
           {/* chatInfo가 있을 때만 채팅 목록을 출력 */}
        {chatInfo && chatInfo.length > 0 ? (
            chatInfo.map((chatInfor) => (
                <Chating key={chatInfor.roomId} chatInfor={chatInfor} />
            ))
        ) : (
            <p>채팅방이 없습니다.</p> // chatInfo가 없을 때 출력할 메시지
        )}

            <ChatFooter/>
        </>
    )
}