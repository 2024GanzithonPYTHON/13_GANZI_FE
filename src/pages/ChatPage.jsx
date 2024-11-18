import { useParams } from "react-router-dom";
import { useState } from "react";
import ViewMessage from "../components/Message/ViewMessage";
import SentInput from "../components/SentInput";



//채팅
export default function ChatPage({datas, myData, chatInfo}){
    const [ChatList, setChatList] = useState(chatInfo)
    const [ChatText, setChatText] = useState('')
    const { ID } = useParams();

    
    

    const i = datas.filter((data)=>
        data.id==ID
    ); 
 

    const fillterChat = chatInfo.filter((chat)=>
        chat.chatId==ID
    ); 

    const onChageChatText = (e) => (
        setChatText(e.target.value)
    )

    const onClickSend = ()  => {
        console.log(ChatText);
    }

    return(
        <div>
            {/* 메세지 출력 */}
            <div>
                {fillterChat.map((chat) => (
                    <ViewMessage myData={myData} i={i[0]} key={chat.chatId} {...chat}/>
                ))}
            </div>
            {/* input 수정해야함 */}
            <SentInput value={ChatText} onChange={onChageChatText} onClick={onClickSend}/>
        </div>
    )
}