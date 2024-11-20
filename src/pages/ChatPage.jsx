import { useParams } from "react-router-dom";
import { useState } from "react";
import ViewMessage from "../components/Message/ViewMessage";
import SentInput from "../components/SentInput";
import Modal from 'react-modal';


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


    const [isOpen3, setIsOpen3] = useState(false);

    const openModal3 = () => setIsOpen3(true);
    const closeModal3 = () => setIsOpen3(false);


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
            <button onClick={openModal3}>재능 교환</button>
            <Modal
                    isOpen={isOpen3}
                    onRequestClose={closeModal3}
                    contentLabel="Example Modal"
                    overlayClassName="talentoverlay"
                    className="talentmodal">
                    <div id="modal-scrollable" className="modal-scrollable">
                        <p style={{fontSize:20}}>재능 교환 성사 완료!</p>
                        <p style={{fontSize:13, fontWeight:300}}>재능 교환 성사 시 최초 이용 요금 5,000원이 발생해요.</p>
                        <p style={{fontSize:13, fontWeight:300}}>영업일 기준 1일 이내 카카오톡으로 안내사항을 전달드릴 예정이에요.</p>
                        <p style={{fontSize:13, fontWeight:300}}>앞으로 나아가는 당신의 열정을 </p>
                        <p style={{fontSize:13, margin:0, fontWeight:300}}>응원할게요!</p>
                    </div>
            </Modal>
            
        </div>
    )
}