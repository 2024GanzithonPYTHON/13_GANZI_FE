import { useParams } from "react-router-dom";
import { useState } from "react";
import ViewMessage from "../components/Message/ViewMessage";
import SentInput from "../components/SentInput";
import Modal from 'react-modal';
import ChatingHeader from "../layout/ChatingHeader";


//채팅
export default function ChatPage(){
    const [ChatText, setChatText] = useState('')
    const { ID } = useParams();

    const onChageChatText = (e) => (
        setChatText(e.target.value)
    )

    const onClickSend = ()  => {
        console.log(ChatText);
    }



    return(
        <div>
            <ChatingHeader />
            {/* chatInfo={chatInfo} 이걸 ChatingHeader에 넣어야해요 <ChatingHeader 연동으로 받아온 데이터={연동으로 받아온 데이터}*/}
            {/* 메세지 출력 */}
            <div>
                {/* 메세지 개별 출력 */}
                {/* {fillterChat.map((chat) => (
                    <ViewMessage myData={myData} i={i[0]} key={chat.chatId} {...chat}/>
                ))} */}
            </div>
            <SentInput value={ChatText} onChange={onChageChatText} onClick={onClickSend}/>
            
        </div>
    )
}