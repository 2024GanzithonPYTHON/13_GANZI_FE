import { Link } from "react-router-dom"
import ChatFooter from "../layout/ChatFooter"
import AlarmHeader from "../layout/AlarmHeader"
import ChatHeader from "../layout/ChatHeader"
import Chating from "../components/Chating"
// 채팅 목록 수정 해야함
export default function Chats({chatInfo}){
    return(
        <>
        <ChatHeader/>
            
            {chatInfo.map((chatInfor)=>(
                        <Chating key={chatInfor.chatId}{...chatInfor}/>
                    ))
                    }
            
            <ChatFooter/>
        </>
    )
}